import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function POST(req: Request) {
  try {
    const { identifier, password } = await req.json();

    if (!identifier || !password) {
      return NextResponse.json({ message: 'Vui lòng điền đầy đủ thông tin.' }, { status: 400 });
    }

    // Find user by email or username
    const [users] = await pool.query<RowDataPacket[]>(
      'SELECT id, username, email, passwordHash, role, coins, createdAt FROM user WHERE email = ? OR username = ? LIMIT 1',
      [identifier, identifier]
    );

    if (users.length === 0) {
      return NextResponse.json({ message: 'Tài khoản không tồn tại.' }, { status: 404 });
    }

    const user = users[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Mật khẩu không chính xác.' }, { status: 401 });
    }

    // In a real app, you would set an HTTP-only cookie with a JWT here.
    // For now, we return success and the frontend simulates login.
    return NextResponse.json({
      message: 'Đăng nhập thành công.',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        coins: user.coins,
        createdAt: user.createdAt
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ message: 'Đã xảy ra lỗi hệ thống.' }, { status: 500 });
  }
}
