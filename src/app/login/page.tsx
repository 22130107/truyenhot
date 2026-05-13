"use client";
import React from 'react';
import Link from 'next/link';

import { Logo } from '@/components/home/Logo';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[rgb(31, 38, 25)] flex items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[rgb(250,204,21)]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[rgb(192,132,252)]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo size="xl" />
          </Link>
          <h2 className="text-2xl font-bold mt-6 text-white">Chào mừng trở lại!</h2>
          <p className="text-gray-400 mt-2">Vui lòng đăng nhập để tiếp tục</p>
        </div>

        {/* Login Card */}
        <div className="bg-[rgb(42, 51, 34)] border border-neutral-800 rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email hoặc Tên đăng nhập</label>
              <input 
                type="text" 
                placeholder="example@gmail.com"
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Mật khẩu</label>
                <a href="#" className="text-sm text-[rgb(250,204,21)] hover:underline">Quên mật khẩu?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[rgb(31, 38, 25)] border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-[rgb(250,204,21)] focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-700 bg-[rgb(31, 38, 25)] text-[rgb(250,204,21)] focus:ring-0" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-400">Ghi nhớ đăng nhập</label>
            </div>

            <button 
              type="button"
              onClick={() => {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = '/';
              }}
              className="w-full bg-gradient-to-r from-[rgb(250,204,21)] to-[rgb(254,249,195)] text-neutral-900 font-bold py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[rgb(250,204,21)]/20 text-center"
            >
              Đăng Nhập
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-700"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-[rgb(31,41,55)] text-gray-500 uppercase tracking-widest">Hoặc đăng nhập với</span></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-neutral-700 hover:bg-white/10 text-white py-2.5 rounded-xl transition-colors">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-neutral-700 hover:bg-white/10 text-white py-2.5 rounded-xl transition-colors">
                <img src="https://www.facebook.com/favicon.ico" className="w-4 h-4" alt="Facebook" />
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-gray-400">
          Chưa có tài khoản? <Link href="/register" className="text-[rgb(250,204,21)] font-bold hover:underline">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}
