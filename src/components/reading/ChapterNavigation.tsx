"use client";
import React from 'react';

interface ChapterNavigationProps {
  previousChapterUrl?: string;
  nextChapterUrl?: string;
  novelUrl: string;
  showTitle?: boolean;
}

export function ChapterNavigation({
  previousChapterUrl,
  nextChapterUrl,
  novelUrl,
  showTitle = false
}: ChapterNavigationProps) {
  return (
    <div className="items-center border-t flex justify-between mt-[24px] md:mt-[48px] border-neutral-800 pt-6 md:pt-8 pr-0 pb-0 pl-0 gap-2">
      {previousChapterUrl ? (
        <a href={previousChapterUrl} className="block flex-1 max-w-[160px]">
          <button className="w-full items-center inline-flex font-medium justify-center h-10 bg-[rgb(208,_203,_203)] text-neutral-900 text-[13px] md:text-[14px] gap-[4px] md:gap-[8px] px-2 md:px-4 rounded-md transition-colors hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="truncate">Chương trước</span>
          </button>
        </a>
      ) : <div className="flex-1 max-w-[160px]"></div>}

      {showTitle ? (
        <a href={novelUrl} className="hidden sm:block text-gray-400 hover:text-white transition-colors text-sm">Trở về tiểu thuyết</a>
      ) : null}

      {nextChapterUrl ? (
        <a href={nextChapterUrl} className="block flex-1 max-w-[160px]">
          <button className="w-full items-center inline-flex font-medium justify-center h-10 bg-[rgb(208,_203,_203)] text-neutral-900 text-[13px] md:text-[14px] gap-[4px] md:gap-[8px] px-2 md:px-4 rounded-md transition-colors hover:bg-white">
            <span className="truncate">Chương sau</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </a>
      ) : <div className="flex-1 max-w-[160px]"></div>}
    </div>
  );
}
