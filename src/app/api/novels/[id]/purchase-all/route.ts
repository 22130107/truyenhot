import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";
import { randomUUID } from "crypto";

// GET — lấy thông tin mua toàn bộ (tổng xu cần, số chương chưa mua)
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: novelId } = await params;
  const userId = req.nextUrl.searchParams.get("userId");

  // Lấy tất cả chương trả phí
  const [lockedChapters] = await pool.query<RowDataPacket[]>(
    `SELECT id, price FROM chapter WHERE novelId = ? AND isLocked = 1`,
    [novelId]
  );

  if (lockedChapters.length === 0) {
    return NextResponse.json({ totalPrice: 0, unpurchasedCount: 0, discount: 0 });
  }

  let unpurchasedChapters = lockedChapters;

  // Nếu có userId, loại bỏ các chương đã mua
  if (userId) {
    const chapterIds = lockedChapters.map((c) => c.id);
    const [purchased] = await pool.query<RowDataPacket[]>(
      `SELECT chapterId FROM purchase WHERE userId = ? AND chapterId IN (?)`,
      [userId, chapterIds]
    );
    const purchasedIds = new Set(purchased.map((p) => p.chapterId));
    unpurchasedChapters = lockedChapters.filter((c) => !purchasedIds.has(c.id));
  }

  const totalRetail = unpurchasedChapters.reduce((sum, c) => sum + c.price, 0);
  // Giảm 30% khi mua toàn bộ
  const discount = 30;
  const totalPrice = Math.ceil(totalRetail * (1 - discount / 100));

  return NextResponse.json({
    totalRetail,
    totalPrice,
    unpurchasedCount: unpurchasedChapters.length,
    discount,
  });
}

// POST — mua toàn bộ chương chưa mua
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: novelId } = await params;
  const { userId } = await req.json();

  if (!userId) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });

  // Lấy tất cả chương trả phí chưa mua
  const [lockedChapters] = await pool.query<RowDataPacket[]>(
    `SELECT id, price FROM chapter WHERE novelId = ? AND isLocked = 1`,
    [novelId]
  );

  if (lockedChapters.length === 0) {
    return NextResponse.json({ error: "Không có chương trả phí" }, { status: 400 });
  }

  const chapterIds = lockedChapters.map((c) => c.id);
  const [purchased] = await pool.query<RowDataPacket[]>(
    `SELECT chapterId FROM purchase WHERE userId = ? AND chapterId IN (?)`,
    [userId, chapterIds]
  );
  const purchasedIds = new Set(purchased.map((p) => p.chapterId));
  const unpurchased = lockedChapters.filter((c) => !purchasedIds.has(c.id));

  if (unpurchased.length === 0) {
    return NextResponse.json({ error: "Bạn đã mua tất cả chương rồi" }, { status: 400 });
  }

  const totalRetail = unpurchased.reduce((sum, c) => sum + c.price, 0);
  const discount = 30;
  const totalPrice = Math.ceil(totalRetail * (1 - discount / 100));

  // Kiểm tra xu
  const [users] = await pool.query<RowDataPacket[]>(
    `SELECT coins FROM user WHERE id = ? LIMIT 1`,
    [userId]
  );
  if (!users[0] || users[0].coins < totalPrice) {
    return NextResponse.json({
      error: "Không đủ xu",
      required: totalPrice,
      current: users[0]?.coins ?? 0,
    }, { status: 402 });
  }

  // Transaction: trừ xu + tạo purchase cho tất cả
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(
      `UPDATE user SET coins = coins - ?, updatedAt = NOW() WHERE id = ?`,
      [totalPrice, userId]
    );

    for (const chapter of unpurchased) {
      // pricePaid theo tỷ lệ thực tế (giá lẻ * tỷ lệ giảm), làm tròn lên
      const pricePaid = totalRetail > 0
        ? Math.ceil((chapter.price / totalRetail) * totalPrice)
        : 0;
      await conn.query(
        `INSERT INTO purchase (id, userId, chapterId, pricePaid, purchasedAt) VALUES (?, ?, ?, ?, NOW())`,
        [randomUUID(), userId, chapter.id, pricePaid]
      );
    }

    await conn.commit();
    conn.release();
  } catch (err) {
    await conn.rollback();
    conn.release();
    throw err;
  }

  const [updated] = await pool.query<RowDataPacket[]>(
    `SELECT coins FROM user WHERE id = ? LIMIT 1`,
    [userId]
  );

  return NextResponse.json({
    success: true,
    purchasedCount: unpurchased.length,
    coinsSpent: totalPrice,
    coinsRemaining: updated[0]?.coins ?? 0,
  });
}
