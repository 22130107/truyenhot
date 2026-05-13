"use client";
import React from 'react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[rgb(31, 38, 25)] text-white">
      <Header />
      
      <main className="pt-32 pb-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(250,204,21)] to-[rgb(254,249,195)]">
              Hướng Dẫn Nạp Xu
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Để sử dụng đầy đủ các tính năng nâng cao trên website như mở khóa chương truyện VIP, 
              đọc sớm nội dung mới hoặc ủng hộ tác giả, người dùng cần thực hiện nạp <span className="text-[rgb(250,204,21)] font-bold">Rau</span> vào tài khoản cá nhân.
            </p>
          </div>

          {/* Steps Section */}
          <div className="bg-[rgb(31,41,55)] border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(250,204,21)]/5 blur-3xl -mr-20 -mt-20 rounded-full"></div>
            
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-8 bg-[rgb(250,204,21)] text-black rounded-lg flex items-center justify-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              </span>
              Quy trình nạp xu
            </h2>

            <div className="grid gap-8 relative">
              {[
                { step: 1, text: "Đăng nhập tài khoản.", highlight: "Đăng nhập" },
                { step: 2, text: "Nhấn vào biểu tượng User góc phải header.", highlight: "biểu tượng User" },
                { step: 3, text: "Chọn Nạp xu.", highlight: "Nạp xu" },
                { step: 4, text: "Chọn gói nạp phù hợp.", highlight: "gói nạp" },
                { step: 5, text: "Hệ thống hiển thị mã QR.", highlight: "mã QR" },
                { step: 6, text: "Quét QR và thanh toán.", highlight: "thanh toán" }
              ].map((item, index) => (
                <div key={item.step} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[rgb(250,204,21)] font-bold group-hover:bg-[rgb(250,204,21)] group-hover:text-black transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-300 text-lg">
                      {item.text.split(item.highlight).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="text-white font-bold border-b border-[rgb(250,204,21)]">{item.highlight}</span>}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Connecting line */}
              <div className="absolute left-5 top-10 bottom-10 w-px bg-gradient-to-b from-[rgb(250,204,21)]/50 via-[rgb(250,204,21)]/20 to-transparent -z-10"></div>
            </div>
          </div>


          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic italic">
              Vui lòng kiểm tra kỹ thông tin trước khi thanh toán.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
