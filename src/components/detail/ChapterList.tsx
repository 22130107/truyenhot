"use client";
import React from 'react';
import { ChapterListItem } from './ChapterListItem';

interface Chapter {
  number: number;
  url: string;
  date: string;
}

interface ChapterListProps {
  chapters: Chapter[];
}

export function ChapterList({ chapters }: ChapterListProps) {
  return (
    <div className="mb-[48px]">
      <div className="items-center flex justify-between mb-[24px]">
        <h2 className="font-semibold text-[24px] leading-[32px]">Danh sách chương</h2>
        <button className="items-center flex font-medium justify-center overflow-hidden relative text-center whitespace-nowrap h-9 bg-black/0 text-[14px] gap-[8px] leading-[20px] pt-0 pr-3 pb-0 pl-3 rounded-md" style={{"appearance":"button"}}>
          <span className="block overflow-hidden pointer-events-none absolute text-center left-0 top-0 right-0 bottom-0 rounded-md"></span>
          Sắp xếp:  Cũ nhất
        </button>
      </div>
      <div className="overflow-auto max-h-[598.5px]">
        <div className="border bg-[rgb(10,10,10)] border-neutral-800 shadow-xl rounded-lg">
          {chapters.map((chapter, index) => (
            <ChapterListItem
              key={chapter.number}
              number={chapter.number}
              url={chapter.url}
              date={chapter.date}
              showDivider={index < chapters.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
