"use client";
import React from 'react';

interface ChapterContentProps {
  chapterNumber: number;
  chapterTitle: string;
  content: string[];
  fontSize?: number;
  fontFamily?: string;
}

export function ChapterContent({
  chapterNumber,
  chapterTitle,
  content,
  fontSize = 20,
  fontFamily = "Google Sans"
}: ChapterContentProps) {
  return (
    <div className="border bg-[rgba(58,_59,_60,_0.6)]/60 border-neutral-800 shadow-2xl p-4 md:p-6 rounded-xl">
      <div className="mb-[24px] md:mb-[32px]">
        <h1 className="font-bold text-center mb-[16px] text-[24px] md:text-[30px] leading-tight md:leading-[36px]">Chương {chapterNumber}: {chapterTitle}</h1>
        <div className="flex justify-center w-full"></div>
      </div>
      <div style={{ fontSize: `${fontSize}px`, lineHeight: 1.8, fontFamily: `"Google Sans", sans-serif` }}>
        {content.map((paragraph, index) => (
          <p key={index} className="text-justify whitespace-pre-wrap mb-[20px] md:mb-[24px]">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
