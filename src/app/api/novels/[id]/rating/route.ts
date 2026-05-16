import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";
import crypto from "crypto";

// GET — lấy rating của user + danh sách tất cả reviews
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: novelId } = await params;
  const userId = req.nextUrl.searchParams.get("userId");

  // Rating của user hiện tại
  let userRating: { score: number | null; comment: string | null } = { score: null, comment: null };
  if (userId) {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT score, comment FROM rating WHERE userId = ? AND novelId = ? LIMIT 1`,
      [userId, novelId]
    );
    if (rows[0]) {
      userRating = { score: rows[0].score, comment: rows[0].comment ?? null };
    }
  }

  // Danh sách tất cả reviews có comment
  const [reviews] = await pool.query<RowDataPacket[]>(
    `SELECT r.score, r.comment, r.createdAt, u.username
     FROM rating r
     JOIN user u ON u.id = r.userId
     WHERE r.novelId = ? AND r.comment IS NOT NULL AND r.comment != ''
     ORDER BY r.createdAt DESC
     LIMIT 20`,
    [novelId]
  );

  return NextResponse.json({
    score: userRating.score,
    comment: userRating.comment,
    reviews: reviews.map((r) => ({
      username: r.username,
      score: r.score,
      comment: r.comment,
      createdAt: r.createdAt,
    })),
  });
}

// POST — upsert rating + comment
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: novelId } = await params;
  const { userId, score, comment } = await req.json();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!score || score < 1 || score > 5) return NextResponse.json({ error: "Score 1-5" }, { status: 400 });

  await pool.query(
    `INSERT INTO rating (id, userId, novelId, score, comment, createdAt)
     VALUES (?, ?, ?, ?, ?, NOW(3))
     ON DUPLICATE KEY UPDATE score = VALUES(score), comment = VALUES(comment)`,
    [crypto.randomUUID(), userId, novelId, score, comment?.trim() || null]
  );
  return NextResponse.json({ ok: true, score });
}
