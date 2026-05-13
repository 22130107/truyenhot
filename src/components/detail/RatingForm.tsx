"use client";
import React from 'react';

export function RatingForm() {
  return (
    <div className="ml-auto mr-auto mb-[48px] max-w-sm">
      <div className="items-center flex h-9 mb-[24px]">
        <h2 className="font-semibold text-[24px] leading-[32px]">Đánh giá của bạn</h2>
      </div>
      <div className="border bg-[rgb(10,10,10)] border-neutral-800 shadow-2xl p-6 rounded-lg">
        <label className="block font-medium mb-[4px] text-[14px] leading-[20px]">Đánh giá</label>
        <div className="flex mb-[16px] gap-[4px]">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-gray-500 hover:text-[rgb(250,_204,_21)] cursor-pointer transition-colors"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <label className="block font-medium mb-[4px] text-[14px] leading-[20px]">Nhận xét</label>
        <textarea rows={2} placeholder="Chia sẻ cảm nhận của bạn..." className="flex overflow-auto resize-none whitespace-pre-wrap w-full bg-[rgb(20,20,20)] text-gray-200 text-[14px] leading-[20px] min-h-20 pt-2 pr-3 pb-2 pl-3 rounded-md"></textarea>
      </div>
    </div>
  );
}
