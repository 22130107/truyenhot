import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <section className="overflow-hidden relative w-full h-[650px]">
          {/* Background Images with Transition */}
          {HERO_ITEMS.map((item, index) => (
            <div 
              key={index}
              className={`absolute w-full h-[650px] left-0 top-0 right-0 bottom-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={item.imageUrl} 
                className="block size-full max-w-full object-cover overflow-clip absolute align-middle left-0 top-0 right-0 bottom-0" 
                alt={item.title}
              />
            </div>
          ))}

          <div className="pointer-events-none absolute left-0 top-0 right-0 bottom-0">
            <div className="pointer-events-none absolute w-[50%] left-0 top-0 bottom-0" style={{"backgroundImage":"linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))"}}></div>
            <div className="pointer-events-none absolute w-[50%] top-0 right-0 bottom-0" style={{"backgroundImage":"linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))"}}></div>
            <div className="pointer-events-none absolute h-[25%] left-0 right-0 bottom-0">
              <div className="pointer-events-none absolute left-0 top-0 right-0 bottom-0"></div>
            </div>
            <div className="pointer-events-none absolute h-[25%] left-0 top-0 right-0" style={{"backgroundImage":"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"}}></div>
          </div>

          <div className="items-end flex h-full justify-start relative pt-20 pr-16 pb-0 pl-16 z-[10]">
            <div className="text-left text-white max-w-xl pt-0 pr-0 pb-20 pl-0 transition-all duration-500">
              <h1 className="items-end flex font-bold text-left h-36 mb-[12px] drop-shadow-[rgba(0,0,0,0.1)] text-[48px] leading-[48px]">
                {currentItem.title}
              </h1>
              <div className="items-center flex flex-wrap justify-start text-left mb-[16px] text-[14px] gap-[8px] leading-[20px]">
                <span className="border flex items-center gap-1 text-left border-[rgb(250,_204,_21)] pt-1 pr-2 pb-1 pl-2 rounded-sm">
                  {currentItem.rating}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[rgb(250,_204,_21)]">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="block text-left bg-[rgba(31,_41,_55,_0.2)]/20 pt-1 pr-2 pb-1 pl-2 rounded-sm">{currentItem.date}</span>
              </div>
              <div className="text-left">
                <p className="flow-root overflow-hidden text-left mb-[24px] text-gray-200 line-clamp-3">
                  {currentItem.description}
                </p>
              </div>
              <div className="flex justify-start text-left gap-[12px]">
                <Link to={`/novel/${currentItem.href.split('/').pop()}`} className="block font-semibold text-center mb-[16px] border-[rgb(250,_204,_21)] border-[2px] pt-2 pr-6 pb-2 pl-6 rounded-[624.9375rem] hover:bg-[rgb(250,_204,_21)] hover:text-black transition-colors">
                  ĐỌC NGAY
                </Link>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-end absolute w-full bottom-4 pt-0 pr-16 pb-0 pl-16 z-[20]">
            <div className="flex overflow-auto gap-[8px] no-scrollbar py-2 px-2">
              {HERO_ITEMS.map((item, index) => (
                <img 
                  key={index}
                  src={item.imageUrl} 
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer block max-w-full object-cover align-middle w-20 h-12 transition-all duration-300 rounded-lg ${index === currentIndex ? 'ring-2 ring-[rgb(250,_204,_21)] scale-110 z-10' : 'opacity-[0.6] hover:opacity-100'}`} 
                  alt={`Thumbnail ${index}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute h-[200px] left-0 right-0 bottom-0 content-[&quot;&quot;] z-[3]" style={{"backgroundImage":"linear-gradient(0deg, rgb(17, 24, 39), rgba(17, 24, 39, 0))"}}></div>
        </section>
      </div>
    </section>
  );
}
