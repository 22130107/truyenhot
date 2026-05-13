import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useParams } from 'react-router-dom';

const SEARCH_RESULTS = [
  {
    id: "van-nghe-chi-thuong",
    title: "Vân Nghê Chi Thượng",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&alt=media",
    views: 5058,
    chapters: 88,
    status: "Đã Hoàn Thành"
  },
  {
    id: "ga-kim-thoa",
    title: "Gả Kim Thoa",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc41722039088c9f4bcbddb836b6331ab7a2d4eb4.jpg?generation=1778599312067620&alt=media",
    views: 4823,
    chapters: 163,
    status: "Đã Hoàn Thành"
  },
  {
    id: "hop-hoan-tong",
    title: "Hợp Hoan Tông Cấm Tiêu Thụ Cùng Tông",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F886e2673d315d9e33c767740dacc629f7c8e9924.jpg?generation=1778599312007900&alt=media",
    views: 1183,
    chapters: 127,
    status: "Đã Hoàn Thành"
  },
  {
    id: "khi-mat-dat-gam-thet",
    title: "Khi Mặt Đất Gầm Thét",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F886e2673d315d9e33c767740dacc629f7c8e9924.jpg?generation=1778599312007900&alt=media",
    views: 941,
    chapters: 175,
    status: "Đã Hoàn Thành"
  },
  {
    id: "he-thong-mo-phong-tu-tien",
    title: "Hệ Thống Mô Phỏng Gia Tộc Tu Tiên: Bắt Đầu T...",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cfcd56161ba38d291993f73110eed0db3f1c476.jpg?generation=1778599312176347&alt=media",
    views: 214,
    chapters: 221,
    status: "Đã Hoàn Thành"
  }
];

export default function BrowsePage() {
  const { genre } = useParams();

  return (
    <div className="min-h-screen bg-[rgb(31,38,25)] text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* Header Section */}
        <div className="flex items-baseline gap-4 mb-8">
          <h1 className="text-3xl font-bold">Kết quả tìm kiếm</h1>
          <span className="text-gray-500 text-sm">{SEARCH_RESULTS.length} kết quả</span>
        </div>

        {/* Search Bar Area */}
        <div className="space-y-6 mb-10">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tên truyện, tác giả, ..." 
              className="w-full bg-black border border-neutral-800 p-4 pl-12 rounded-xl focus:outline-none focus:border-[rgb(250,204,21)] transition-all"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[rgb(250,204,21)] transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <span className="font-medium">Bộ lọc</span>
              </button>
              <button className="text-gray-500 hover:text-red-500 text-sm transition-colors">Xóa tất cả bộ lọc</button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sắp xếp theo:</span>
              <button className="flex items-center gap-8 bg-black border border-neutral-800 px-4 py-2 rounded-lg text-sm font-medium hover:border-neutral-700 transition-colors">
                <span>Mặc định</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEARCH_RESULTS.map((story) => (
            <Link key={story.id} to={`/novel/${story.id}`} className="group">
              <div className="bg-white border-white rounded-xl overflow-hidden hover:scale-[1.02] transition-all shadow-lg">
                <div className="relative aspect-video">
                  <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[rgb(122,213,195)] border border-white/10 uppercase tracking-wider">
                    {story.status}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-4 line-clamp-1 text-[rgb(31,38,25)] transition-colors">{story.title}</h3>
                  <div className="flex justify-between items-center text-sm text-[rgb(31,38,25)]/70 font-medium">
                    <span className="flex items-center gap-1.5">
                      Lượt xem: <span className="text-[rgb(31,38,25)] font-bold">{story.views}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      Chương <span className="text-[rgb(31,38,25)] font-bold">{story.chapters}</span>: <span className="text-xs italic">đã cập nhật</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
