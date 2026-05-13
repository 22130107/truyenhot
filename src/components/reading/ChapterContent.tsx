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
    <div className="border bg-[rgba(58,_59,_60,_0.6)]/60 border-neutral-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,_rgba(0,0,0,0)_0px_0px_0px_0px,_rgba(0,0,0,0.1)_0px_20px_25px_-5px,_rgba(0,0,0,0.1)_0px_8px_10px_-6px] p-6 rounded-xl">
      <div className="mb-[32px]">
        <h1 className="font-bold text-center mb-[16px] text-[30px] leading-[36px]">Chương  {chapterNumber}   : {chapterTitle}</h1>
        <div className="flex justify-center w-full"></div>
      </div>
      <div className="text-[20px] leading-[32.5px]" style={{"fontFamily":`"${fontFamily}", sans-serif`}}>
        {content.map((paragraph, index) => (
          <p key={index} className="text-justify whitespace-pre-wrap mb-[24px]">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
