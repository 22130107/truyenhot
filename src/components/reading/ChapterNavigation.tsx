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
    <div className="items-center border-t flex justify-between mt-[48px] border-neutral-800 pt-8 pr-0 pb-0 pl-0">
      {previousChapterUrl ? (
        <a href={previousChapterUrl} className="block">
          <button className="items-center inline-flex font-medium justify-center overflow-hidden relative text-center whitespace-nowrap h-10 bg-[rgb(208,_203,_203)] text-neutral-900 text-[14px] gap-[8px] leading-[20px] pt-2 pr-4 pb-2 pl-4 rounded-md" style={{"appearance":"button"}}>
            <span className="block overflow-hidden pointer-events-none absolute text-center left-0 top-0 right-0 bottom-0 rounded-md"></span>
            <div className="fill-none overflow-hidden pointer-events-none text-center align-middle w-4 h-4">
              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F899c7cdf28aa24491105e6e07bc26526c01eb65f.svg?generation=1778670420804548&amp;alt=media" className="block size-full" />
            </div>
            <span className="block text-center">Chương trước</span>
          </button>
        </a>
      ) : <div></div>}

      {showTitle ? (
        <a href={novelUrl} className="block">Trở về tiểu thuyết</a>
      ) : null}

      {nextChapterUrl ? (
        <a href={nextChapterUrl} className="block">
          <button className="items-center inline-flex font-medium justify-center overflow-hidden relative text-center whitespace-nowrap h-10 bg-[rgb(208,_203,_203)] text-neutral-900 text-[14px] gap-[8px] leading-[20px] pt-2 pr-4 pb-2 pl-4 rounded-md" style={{"appearance":"button"}}>
            <span className="block overflow-hidden pointer-events-none absolute text-center left-0 top-0 right-0 bottom-0 rounded-md"></span>
            <span className="block text-center">Chương sau</span>
            <div className="fill-none overflow-hidden pointer-events-none text-center align-middle w-4 h-4">
              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb93179f94a37f0a26aaf76b30cfbd1b884be4717.svg?generation=1778670420851390&amp;alt=media" className="block size-full" />
            </div>
          </button>
        </a>
      ) : <div></div>}
    </div>
  );
}
