import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";
import crypto from "crypto";

// GET — lấy bình luận của chương
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; chapterNumber: string }> }
) {
  const { id: novelId, chapterNumber } = await params;
  const num = parseInt(chapterNumber, 10);

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT c.id, c.content, c.createdAt,
            u.id AS userId, u.username, u.avatarUrl
     FROM comment c
     JOIN user u ON u.id = c.userId
     WHERE c.novelId = ? AND c.chapterNumber = ?
     ORDER BY c.createdAt DESC`,
    [novelId, num]
  );

  return NextResponse.json(rows.map((r) => ({
    id: r.id,
    content: r.content,
    createdAt: r.createdAt,
    user: {
      id: r.userId,
      username: r.username,
      avatarUrl: r.avatarUrl || null,
    },
  })));
}

// POST — đăng bình luận
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; chapterNumber: string }> }
) {
  const { id: novelId, chapterNumber } = await params;
  const num = parseInt(chapterNumber, 10);
  const { userId, content } = await req.json();

  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!content?.trim()) return NextResponse.json({ error: "Nội dung không được trống" }, { status: 400 });

  const id = crypto.randomUUID();
  await pool.query(
    `INSERT INTO comment (id, userId, novelId, chapterNumber, content, createdAt)
     VALUES (?, ?, ?, ?, ?, NOW(3))`,
    [id, userId, novelId, num, content.trim()]
  );

  // Lấy lại comment vừa tạo kèm user info
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT c.id, c.content, c.createdAt,
            u.id AS userId, u.username, u.avatarUrl
     FROM comment c
     JOIN user u ON u.id = c.userId
     WHERE c.id = ?`,
    [id]
  );
  const r = rows[0];
  return NextResponse.json({
    id: r.id,
    content: r.content,
    createdAt: r.createdAt,
    user: { id: r.userId, username: r.username, avatarUrl: r.avatarUrl || null },
  }, { status: 201 });
}

// DELETE — xóa bình luận (chỉ chủ sở hữu)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; chapterNumber: string }> }
) {
  const { id: novelId, chapterNumber } = await params;
  const { userId, commentId } = await req.json();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await pool.query(
    `DELETE FROM comment WHERE id = ? AND userId = ? AND novelId = ?`,
    [commentId, userId, novelId]
  );
  return NextResponse.json({ ok: true });
}
