import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[rgb(31, 38, 25)] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-[1920px] mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <h1 className="text-2xl font-bold">Trang cá nhân</h1>
          </div>
          <p className="text-gray-400 text-sm ml-9">Quản lý thông tin và ví xu của bạn</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Ví xu */}
          <div className="bg-[rgb(31,41,55)] border border-neutral-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-bold text-gray-300">Ví xu</h2>
            </div>
            <p className="text-xs text-gray-500 mb-4">Số xu hiện có trong tài khoản</p>
            <div className="text-3xl font-black text-yellow-600 mb-6 italic">0 xu</div>
            <Link to="/topup">
              <button className="w-full bg-[rgb(208,203,203)] hover:bg-white text-neutral-900 font-bold py-2.5 rounded-lg transition-colors text-sm">
                Nạp thêm xu
              </button>
            </Link>
          </div>

          {/* Thông tin tài khoản */}
          <div className="lg:col-span-2 bg-[rgb(31,41,55)] border border-neutral-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <h2 className="font-bold text-gray-300">Thông tin tài khoản</h2>
            </div>
            <p className="text-xs text-gray-500 mb-6">Thông tin cơ bản của người dùng</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-400">Tên người dùng:</span>
                  <span className="font-medium">User Test</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-400">Email:</span>
                  <span className="font-medium text-gray-200">huynh080104@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-400">Ngày tham gia:</span>
                  <span className="font-medium">12/5/2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm mt-6">
                <span className="text-gray-400">Vai trò:</span>
                <span className="bg-black/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300">user</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lịch sử giao dịch */}
        <div className="bg-[rgb(31,41,55)] border border-neutral-800 rounded-xl p-6 shadow-lg mb-8">
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="font-bold text-gray-300">Lịch sử giao dịch</h2>
          </div>
          <p className="text-xs text-gray-500 mb-6">Chưa có giao dịch nào</p>
          <div className="py-8 text-center text-gray-600 text-sm">
            Không tìm thấy dữ liệu
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center gap-4">
          <Link to="/topup">
            <button className="bg-white/5 border border-neutral-800 hover:bg-white/10 text-gray-300 px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
              Nạp xu 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium ml-4">
            Trang chủ
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
