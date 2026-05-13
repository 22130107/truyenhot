"use client";
import Link from 'next/link';


interface ChapterListItemProps {
  number: number;
  url: string;
  date: string;
  showDivider?: boolean;
}

export function ChapterListItem({ number, url, date, showDivider = true }: ChapterListItemProps) {
  return (
    <div>
      <Link href={url}>
        <div className="items-center flex justify-between p-4 group hover:bg-white/5 transition-colors cursor-pointer">
          <div>
            <h6 className="font-medium group-hover:text-[rgb(250,204,21)] transition-colors">Chương  {number}</h6>
            <p className="mt-[4px] text-[rgb(163,_163,_163)] text-[12px] leading-[16px]">{date}</p>
          </div>
          <div className="items-center flex justify-center ml-[16px] gap-[8px] min-w-[74px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[rgb(250,204,21)]">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </Link>
      {showDivider && <div role="none" className="h-px w-full bg-neutral-800"></div>}
    </div>
  );
}
