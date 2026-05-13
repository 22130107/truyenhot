import React from 'react';
import { Link } from 'react-router-dom';

interface ReadingHeaderProps {
  chapterNumber: number;
  chapterTitle: string;
  onToggleSettings: () => void;
}

export function ReadingHeader({ chapterNumber, chapterTitle, onToggleSettings }: ReadingHeaderProps) {
  return (
    <header className="fixed left-0 top-0 right-0 bg-black/90 backdrop-blur-md border-b border-neutral-800 z-[50] py-3">
      <div className="w-full px-8">
        <div className="items-center flex justify-between">
          <div className="items-center flex">
            <Link to="/" className="items-center flex hover:opacity-80 transition-opacity">
              <img alt="Logo" src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbab93d48150f4568f77500303a1a96440e86ac39.png?generation=1778599311903591&amp;alt=media" className="block max-w-full object-cover overflow-clip align-middle w-10 h-10 rounded-full" />
              <span className="block font-bold ml-[8px] text-[rgb(255,_209,_220)] text-[24px] leading-[32px]" style={{"fontFamily":"Itim"}}>Truyenhot</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center text-white text-[15px] font-medium bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            <span className="text-[rgb(250,204,21)]">Chương {chapterNumber}</span>
            <span className="mx-3 text-gray-600">|</span>
            <span className="text-gray-300 truncate max-w-[300px]">{chapterTitle}</span>
          </div>

          <div className="items-center flex gap-4">
            <button 
              onClick={onToggleSettings}
              title="Cài đặt giao diện" 
              className="p-2 text-gray-300 hover:text-[rgb(250,204,21)] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21L15.75 9.75M4.5 19.5L10.5 6L14.25 15M18.75 18L15 9.75L11.25 18M21 19.5H3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15h7.5" />
              </svg>
            </button>
            <button title="Yêu thích" className="p-2 text-gray-300 hover:text-red-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <button title="Đánh giá" className="p-2 text-gray-300 hover:text-yellow-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </button>
            <button title="Đánh dấu" className="p-2 text-gray-300 hover:text-blue-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
