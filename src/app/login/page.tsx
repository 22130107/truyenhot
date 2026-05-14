"use client";
import React, { useState } from 'react';
import Link from 'next/link';

import { Logo } from '@/components/home/Logo';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });

      const data = await res.json();

      if (res.ok) {
        if (remember) {
          localStorage.setItem('rememberedUser', identifier);
        } else {
          localStorage.removeItem('rememberedUser');
        }
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/';
      } else {
        alert(`Lỗi: ${data.message}`);
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      alert('Đã xảy ra lỗi kết nối đến máy chủ.');
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(31, 38, 25)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[rgb(250,204,21)]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[rgb(192,132,252)]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <Logo size="xl" />
          </Link>
          <h2 className="text-3xl font-bold mt-6 text-white tracking-tight">Chào mừng trở lại!</h2>
          <p className="text-gray-400 mt-2 text-sm">Vui lòng đăng nhập để tiếp tục</p>
        </div>

        {/* Login Card */}
        <div className="bg-[rgb(42, 51, 34)]/90 backdrop-blur-xl border border-neutral-700/50 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email hoặc Tên đăng nhập</label>
              <input 
                type="text" 
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Ví dụ: nguyenvana hoặc email@gmail.com"
                required
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:ring-1 focus:ring-[rgb(250,204,21)] focus:outline-none transition-all"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Mật khẩu</label>
                <a href="#" className="text-sm text-[rgb(250,204,21)] hover:text-yellow-300 hover:underline transition-colors">Quên mật khẩu?</a>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:ring-1 focus:ring-[rgb(250,204,21)] focus:outline-none transition-all"
              />
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 bg-[rgb(31, 38, 25)] text-[rgb(250,204,21)] focus:ring-[rgb(250,204,21)] focus:ring-offset-[rgb(42,51,34)]" 
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-400">Ghi nhớ đăng nhập</label>
            </div>

            <button 
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-[rgb(250,204,21)] to-[rgb(254,249,195)] text-neutral-900 font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              Đăng Nhập
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-gray-400 text-sm">
          Chưa có tài khoản? <Link href="/register" className="text-[rgb(250,204,21)] font-bold hover:text-yellow-300 hover:underline transition-colors">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}
