import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string, chapterId: string }> }) {
  try {
    const resolvedParams = await params;
    const { novelId, chapterId } = resolvedParams as any; // Actually the route is [id]/chapters/[chapterId] so params are id and chapterId
    const cId = resolvedParams.chapterId;
    
    if (!cId) return NextResponse.json({ message: 'Missing Chapter ID' }, { status: 400 });

    const body = await req.json();
    const { isLocked, price } = body;

    const connection = await pool.getConnection();
    try {
      await connection.query(
        `UPDATE chapter SET isLocked = ?, price = ?, updatedAt = NOW() WHERE id = ?`,
        [isLocked ? 1 : 0, price || 0, cId]
      );

      connection.release();
      return NextResponse.json({ message: 'Cập nhật thành công.' }, { status: 200 });
    } catch (err: any) {
      connection.release();
      throw err;
    }
  } catch (error: any) {
    console.error('Update Chapter Error:', error);
    return NextResponse.json({ message: 'Đã xảy ra lỗi hệ thống: ' + error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string, chapterId: string }> }) {
  try {
    const resolvedParams = await params;
    const cId = resolvedParams.chapterId;
    
    if (!cId) return NextResponse.json({ message: 'Missing Chapter ID' }, { status: 400 });

    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      
      await connection.query('DELETE FROM purchase WHERE chapterId = ?', [cId]);
      await connection.query('DELETE FROM chapter WHERE id = ?', [cId]);

      await connection.commit();
      connection.release();
      return NextResponse.json({ message: 'Xóa chương thành công.' }, { status: 200 });
    } catch (err: any) {
      await connection.rollback();
      connection.release();
      throw err;
    }
  } catch (error: any) {
    console.error('Delete Chapter Error:', error);
    return NextResponse.json({ message: 'Đã xảy ra lỗi hệ thống: ' + error.message }, { status: 500 });
  }
}
