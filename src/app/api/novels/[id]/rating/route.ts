import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";
import crypto from "crypto";

// GET — lấy rating của user cho novel này
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: novelId } = await params;
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) return NextResponse.json({ score: null });

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT score FROM rating WHERE userId = ? AND novelId = ? LIMIT 1`,
    [userId, novelId]
  );
  return NextResponse.json({ score: rows[0]?.score ?? null });
}

// POST — upsert rating (score 1-5)
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: novelId } = await params;
  const { userId, score } = await req.json();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!score || score < 1 || score > 5) return NextResponse.json({ error: "Score 1-5" }, { status: 400 });

  await pool.query(
    `INSERT INTO rating (id, userId, novelId, score, createdAt)
     VALUES (?, ?, ?, ?, NOW(3))
     ON DUPLICATE KEY UPDATE score = VALUES(score)`,
    [crypto.randomUUID(), userId, novelId, score]
  );
  return NextResponse.json({ ok: true, score });
}
