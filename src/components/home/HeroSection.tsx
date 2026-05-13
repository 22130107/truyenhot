"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const HERO_ITEMS = [
  {
    title: "Hệ Thống Mô Phỏng Gia Tộc Tu Tiên: Bắt Đầu Từ Con Số Không",
    rating: "4.0",
    date: "12/5/2026",
    description: "Giới thiệu nội dung Bạn chơi một tựa game xây dựng gia tộc, khởi đầu là một người phàm, ngay cả cái bóng của một người tu tiên cũng không thấy đâu, thế nhưng mục tiêu của trò chơi lại là xây dựng đệ nhất thế gia tu tiên trong giới tu …",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F4638f52784d87d86ec44d2f47e390df2e87d62e8.jpg?generation=1778599311975943&alt=media",
    href: "https://tiemanvat.com/novel/he-thong-mo-phong-gia-toc-tu-tien-bat-djau-tu-con-so-khong"
  },
  {
    title: "Gả Kim Thoa",
    rating: "5.0",
    date: "12/5/2026",
    description: "Câu chuyện về nàng tiểu thư gả vào hào môn, những ân oán tình thù và cuộc sống sau cánh cửa quyền quý. Một tác phẩm ngôn tình đặc sắc của Tiếu Giai Nhân.",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Faf587ffdbc95f1db0d5efc889c3b006cb2dcdfb1.jpg?generation=1778599311978562&alt=media",
    href: "https://tiemanvat.com/novel/ga-kim-thoa"
  },
  {
    title: "Vân Nghê Chi Thượng",
    rating: "5.0",
    date: "12/5/2026",
    description: "Vân Nghê Chi Thượng kể về hành trình tu tiên đầy gian nan nhưng cũng không kém phần lãng mạn. Thịnh Vãn Phong đã vẽ nên một thế giới tiên hiệp kỳ ảo.",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F886e2673d315d9e33c767740dacc629f7c8e9924.jpg?generation=1778599312007900&alt=media",
    href: "https://tiemanvat.com/novel/van-ngheneknpwenwe"
  },
  {
    title: "Khi Mặt Đất Gầm Thét",
    rating: "4.0",
    date: "12/5/2026",
    description: "Khi mặt đất gầm thét, mọi thứ đảo lộn. Cuộc chiến sinh tồn và tình yêu giữa những biến cố kinh hoàng. Một tác phẩm đầy kịch tính của Thanh Miễn.",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F6cbedad5774a3565dd3e5e3b98618769d48224b8.jpg?generation=1778599311972987&alt=media",
    href: "https://tiemanvat.com/novel/khi-mat-djat-gam-thet"
  },
  {
    title: "Hợp Hoan Tông Cấm Tiêu Thụ Cùng Tông",
    rating: "4.0",
    date: "12/5/2026",
    description: "Khám phá bí mật của Hợp Hoan Tông qua góc nhìn của Quan Sơn Miên. Những quy tắc ngầm và cuộc đối đầu đỉnh cao trong giới tu chân.",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F6b147eb6f503bb54101f6cd7e4836abab7d3a6d6.jpg?generation=1778599311952693&alt=media",
    href: "https://tiemanvat.com/novel/hop-hoan-tong-cam-tieu-thu-cung-tong"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = HERO_ITEMS[currentIndex];

  return (
    <section className="items-center justify-center">
      <div className="ml-auto mr-auto">
        <section className="overflow-hidden relative w-full h-[450px] md:h-[650px]">
          {/* Background Images with Transition */}
          {HERO_ITEMS.map((item, index) => (
            <div 
              key={index}
              className={`absolute w-full h-full left-0 top-0 right-0 bottom-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={item.imageUrl} 
                className="block size-full max-w-full object-cover overflow-clip absolute align-middle left-0 top-0 right-0 bottom-0" 
                alt={item.title}
              />
            </div>
          ))}

          <div className="pointer-events-none absolute left-0 top-0 right-0 bottom-0">
            <div className="pointer-events-none absolute w-full md:w-[50%] left-0 top-0 bottom-0" style={{"backgroundImage":"linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))"}}></div>
            <div className="hidden md:block pointer-events-none absolute w-[50%] top-0 right-0 bottom-0" style={{"backgroundImage":"linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))"}}></div>
            <div className="pointer-events-none absolute h-[50%] md:h-[25%] left-0 right-0 bottom-0" style={{"backgroundImage":"linear-gradient(to top, rgba(31, 38, 25, 1), rgba(31, 38, 25, 0))"}}></div>
          </div>

          <div className="items-end flex h-full justify-start relative pt-20 px-4 md:px-16 pb-12 md:pb-0 z-[10]">
            <div className="text-left text-white max-w-xl transition-all duration-500">
              <h1 className="items-end flex font-bold text-left mb-[12px] drop-shadow-[rgba(0,0,0,0.3)] text-[28px] md:text-[48px] leading-tight md:leading-[48px] line-clamp-2 md:h-36">
                {currentItem.title}
              </h1>
              <div className="items-center flex flex-wrap justify-start text-left mb-[16px] text-[12px] md:text-[14px] gap-[8px] leading-[20px]">
                <span className="border flex items-center gap-1 text-left border-[rgb(250,_204,_21)] pt-0.5 md:pt-1 px-2 rounded-sm">
                  {currentItem.rating}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-[rgb(250,_204,_21)]">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="block text-left bg-white/10 px-2 py-0.5 md:py-1 rounded-sm">{currentItem.date}</span>
              </div>
              <div className="text-left hidden md:block">
                <p className="flow-root overflow-hidden text-left mb-[24px] text-gray-200 line-clamp-3">
                  {currentItem.description}
                </p>
              </div>
              <div className="flex justify-start text-left gap-[12px]">
                <Link href={`/novel/${currentItem.href.split('/').pop()}`} className="block font-semibold text-center mb-4 md:mb-16 border-[rgb(250,_204,_21)] border-[2px] py-2 px-6 rounded-full hover:bg-[rgb(250,_204,21)] hover:text-black transition-colors text-sm md:text-base">
                  ĐỌC NGAY
                </Link>
              </div>
            </div>
          </div>

          {/* Thumbnails - Hidden on small mobile, visible on tablet and up */}
          <div className="hidden sm:flex justify-end absolute w-full bottom-4 px-16 z-[20]">
            <div className="flex overflow-auto gap-[8px] no-scrollbar py-2 px-2">
              {HERO_ITEMS.map((item, index) => (
                <img 
                  key={index}
                  src={item.imageUrl} 
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer block max-w-full object-cover align-middle w-16 h-10 md:w-20 md:h-12 transition-all duration-300 rounded-lg ${index === currentIndex ? 'ring-2 ring-[rgb(250,_204,_21)] scale-110 z-10' : 'opacity-[0.6] hover:opacity-100'}`} 
                  alt={`Thumbnail ${index}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute h-[150px] md:h-[200px] left-0 right-0 bottom-0 z-[3]" style={{"backgroundImage":"linear-gradient(0deg, rgb(31, 38, 25), rgba(31, 38, 25, 0))"}}></div>
        </section>
      </div>
    </section>
  );
}
