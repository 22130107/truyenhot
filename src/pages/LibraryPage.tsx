import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const TABS = [
  "Đang đọc", "Hoàn thành", "Đánh dấu", "Đã mua", 
  "Mua lẻ", "Đã lưu", "Yêu thích", "Tất cả"
];

const LIBRARY_BOOKS = [
  {
    id: "hop-hoan-tong",
    title: "Hợp Hoan Tông Cấm Tiêu Thụ Cùng Tông",
    author: "Quan Sơn Miên",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F886e2673d315d9e33c767740dacc629f7c8e9924.jpg?generation=1778599312007900&alt=media",
    currentChapter: 1,
    totalChapters: 127,
    rating: 4.0,
    lastRead: "5/13/2026"
  },
  {
    id: "khi-mat-dat-gam-thet",
    title: "Khi Mặt Đất Gầm Thét",
    author: "Thanh Miễn",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F41c7102430e5723d32de88a635a3a49177bd208b.jpg?generation=1778599312171355&alt=media",
    currentChapter: 8,
    totalChapters: 175,
    rating: 4.0,
    lastRead: "5/13/2026"
  },
  {
    id: "van-nghe-chi-thuong",
    title: "Vân Nghê Chi Thượng",
    author: "Thịnh Vãn Phong",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&alt=media",
    currentChapter: 3,
    totalChapters: 88,
    rating: 5.0,
    lastRead: "5/13/2026"
  }
];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = React.useState("Đang đọc");

  return (
    <div className="min-h-screen bg-[rgb(31,38,25)] text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Thư viện của tôi</h1>
          <p className="text-gray-400 text-lg">Quản lý bộ sưu tập của bạn và theo dõi tiến trình đọc</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-neutral-800/50 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[15px] font-medium transition-all relative py-2 ${
                activeTab === tab 
                  ? "text-[rgb(250,204,21)]" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-[rgb(250,204,21)] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIBRARY_BOOKS.map((book) => {
            const progress = (book.currentChapter / book.totalChapters) * 100;
            
            return (
              <Link key={book.id} to={`/novel/${book.id}`} className="group">
                <div className="bg-white border-white rounded-xl overflow-hidden hover:scale-[1.02] transition-all shadow-xl">
                  {/* Image Container with Progress */}
                  <div className="relative aspect-video">
                    <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Progress Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                          Chương {book.currentChapter} của {book.totalChapters}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[rgb(250,204,21)] shadow-[0_0_8px_rgba(250,204,21,0.6)]" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1 line-clamp-1 text-[rgb(31,38,25)] transition-colors">{book.title}</h3>
                    <p className="text-sm text-[rgb(31,38,25)]/70 mb-6 font-medium">Tác giả: {book.author}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1.5 text-[rgb(31,38,25)] font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                        {book.rating.toFixed(1)}
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(31,38,25)]/60 text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {book.lastRead}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
