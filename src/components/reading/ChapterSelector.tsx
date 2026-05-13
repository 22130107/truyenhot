import { Link, useParams } from 'react-router-dom';

interface ChapterSelectorProps {
  currentChapter: number;
  totalChapters?: number;
}

export function ChapterSelector({ currentChapter }: ChapterSelectorProps) {
  const { id } = useParams();
  const prevChapter = currentChapter > 1 ? currentChapter - 1 : null;
  const nextChapter = currentChapter + 1; // Assuming next exists for mock

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex justify-center">
        <Link 
          to={`/novel/${id}`} 
          className="text-gray-400 hover:text-[rgb(250,204,21)] transition-colors flex items-center gap-2 text-xs md:text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.25-4a.75.75 0 010-1.08l4.25-4a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
          Trở về trang chi tiết truyện
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2">
          {prevChapter ? (
            <Link to={`/novel/${id}/${prevChapter}`} className="flex-1 sm:flex-none">
              <button className="w-full sm:w-auto items-center inline-flex font-medium justify-center h-10 bg-[rgb(208,203,203)] text-neutral-900 text-[13px] md:text-[14px] gap-2 px-3 md:px-4 rounded-md hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.25-4a.75.75 0 010-1.08l4.25-4a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
                Chương trước
              </button>
            </Link>
          ) : <div className="hidden sm:block w-[120px]"></div>}

          <div className="relative flex-1 sm:flex-none">
            <button className="items-center border flex justify-between text-center w-full sm:w-40 md:w-48 h-10 bg-[rgb(36,_37,_38)] border-neutral-800 text-[13px] md:text-[14px] px-3 md:px-4 rounded-md hover:border-[rgb(250,204,21)] transition-colors">
              <span className="font-medium text-gray-200">Chương {currentChapter}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <Link to={`/novel/${id}/${nextChapter}`} className="flex-1 sm:flex-none">
            <button className="w-full sm:w-auto items-center inline-flex font-medium justify-center h-10 bg-[rgb(208,203,203)] text-neutral-900 text-[13px] md:text-[14px] gap-2 px-3 md:px-4 rounded-md hover:bg-white transition-colors">
              Chương sau
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
