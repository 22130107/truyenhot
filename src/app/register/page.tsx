"use client";
import React, { useState } from 'react';
import Link from 'next/link';

import { Logo } from '@/components/home/Logo';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Đăng ký thành công! Đang tự động đăng nhập...');
        localStorage.setItem('isLoggedIn', 'true');
        // Optionally save user data
        // localStorage.setItem('user', JSON.stringify({ id: data.userId, username, email }));
        window.location.href = '/';
      } else {
        alert(`Lỗi: ${data.message}`);
      }
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
      alert('Đã xảy ra lỗi kết nối đến máy chủ.');
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(31, 38, 25)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[rgb(250,204,21)]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[rgb(59,130,246)]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <Logo size="xl" />
          </Link>
          <h2 className="text-3xl font-bold mt-6 text-white tracking-tight">Tạo tài khoản mới</h2>
          <p className="text-gray-400 mt-2 text-sm">Bắt đầu hành trình đọc truyện của bạn</p>
        </div>

        {/* Register Card */}
        <div className="bg-[rgb(42, 51, 34)]/90 backdrop-blur-xl border border-neutral-700/50 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tên đăng nhập</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ví dụ: truyenhot_user"
                required
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:ring-1 focus:ring-[rgb(250,204,21)] focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:ring-1 focus:ring-[rgb(250,204,21)] focus:outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Mật khẩu</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:ring-1 focus:ring-[rgb(250,204,21)] focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Xác nhận mật khẩu</label>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:ring-1 focus:ring-[rgb(250,204,21)] focus:outline-none transition-all"
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded border-gray-600 bg-[rgb(31, 38, 25)] text-[rgb(250,204,21)] focus:ring-[rgb(250,204,21)] focus:ring-offset-[rgb(42,51,34)]" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                Tôi đồng ý với <a href="#" className="text-[rgb(250,204,21)] hover:text-yellow-300 hover:underline transition-colors">Điều khoản dịch vụ</a> và <a href="#" className="text-[rgb(250,204,21)] hover:text-yellow-300 hover:underline transition-colors">Chính sách bảo mật</a>
              </label>
            </div>

            <button type="submit" className="w-full mt-2 bg-gradient-to-r from-[rgb(250,204,21)] to-[rgb(254,249,195)] text-neutral-900 font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              Đăng Ký Tài Khoản
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-gray-400 text-sm">
          Đã có tài khoản? <Link href="/login" className="text-[rgb(250,204,21)] font-bold hover:text-yellow-300 hover:underline transition-colors">Đăng nhập ngay</Link>
        </p>
      </div>
    </div>
  );
}
