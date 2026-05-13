import React from 'react';
import { Link } from 'react-router-dom';

const GENRES = [
  "Ngôn tình", "Truy thê hỏa táng tràng", "Ngược", "Ngọt sủng",
  "HE", "BE", "SE", "OE",
  "Thanh mai trúc mã", "1v1", "NP", "Chữa lành",
  "Thanh xuân vườn trường", "Hiện đại", "Cổ đại", "Tương lai",
  "Trọng sinh", "Xuyên nhanh", "Linh dị", "Cường thủ đoạt hào",
  "Hắc ám", "Giam cầm", "Cung đình hầu tước", "Hào môn thế gia",
  "Cẩu huyết", "Song trọng sinh", "Trùng sinh", "Xuyên sách"
];

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 right-0 transition-all duration-300 z-[50] py-4 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-8">
        <div className="items-center flex justify-between">
          <Link to="/" className="items-center flex hover:opacity-80 transition-opacity">
            <img alt="Logo" src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbab93d48150f4568f77500303a1a96440e86ac39.png?generation=1778599311903591&amp;alt=media" className="block max-w-full object-cover overflow-clip align-middle w-12 h-12 rounded-[624.9375rem]" />
            <span className="block font-bold ml-[8px] text-[rgb(255,_209,_220)] text-[30px] leading-[36px]" style={{"fontFamily":"Itim"}}>Truyenhot</span>
          </Link>
          
          <div className="items-center flex flex-wrap mr-auto ml-[16px] gap-[8px]">
            {/* Genres Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-center bg-transparent text-white pt-2 pr-4 pb-2 pl-4 rounded-md hover:bg-white/10 transition-colors">
                Thể Loại
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 group-hover:rotate-180 transition-transform">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[60]">
                <div className="bg-[rgb(38,38,38)] border border-neutral-700 rounded-xl shadow-2xl p-6 w-[700px]">
                  <div className="grid grid-cols-4 gap-x-8 gap-y-3">
                    {GENRES.map((genre) => (
                      <a 
                        key={genre} 
                        href={`/category/${genre}`} 
                        className="text-gray-300 hover:text-[rgb(250,204,21)] transition-colors text-sm py-1"
                      >
                        {genre}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/guide" className="items-center flex text-white pt-2 pr-4 pb-2 pl-4 rounded-md hover:bg-white/10 transition-colors">Hướng dẫn nạp</Link>
            <a href="https://www.facebook.com/share/14PCFwe5mjN/" className="items-center flex text-white pt-2 pr-4 pb-2 pl-4 rounded-md hover:bg-white/10 transition-colors">Fanpage</a>
          </div>

          <div className="items-center flex">
            <div className="grow relative text-white">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm theo tên, tác giả, ..." className="border flex overflow-clip w-64 h-10 bg-[rgb(31,_31,_31)] border-[rgb(75,_85,_99)] text-[14px] leading-[20px] pt-2 pr-12 pb-2 pl-5 rounded-md focus:border-[rgb(250,204,21)] focus:outline-none transition-colors" />
                <button className="items-center flex font-medium justify-center overflow-hidden absolute text-center whitespace-nowrap h-8 top-[50%] right-1 bg-[rgb(208,_203,_203)] hover:bg-white text-neutral-900 text-[14px] gap-[8px] leading-[20px] pt-0 pr-2 pb-0 pl-2 translate-y-[-50%] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <Link to="/library" className="block ml-[12px]">
              <button className="items-center inline-flex font-medium justify-center relative text-center h-10 bg-transparent text-white text-[14px] pt-2 pr-4 pb-2 pl-4 rounded-md hover:bg-white/10 transition-colors">
                Thư viện của tôi
              </button>
            </Link>
            
            {isLoggedIn ? (
              /* User Profile Dropdown */
              <div className="relative group ml-[12px]">
                <button className="items-center flex justify-center w-8 h-8 rounded-full border-2 border-neutral-700 group-hover:border-[rgb(250,204,21)] transition-colors overflow-hidden">
                  <img alt="User" src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd7dfe0eb5ac58f3829f03bbe8e5d49cc4e2b1115?generation=1778599311922502&amp;alt=media" className="aspect-square block size-full object-cover" />
                </button>
                
                {/* Dropdown Content */}
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[60]">
                  <div className="bg-[rgb(18,18,18)] border border-neutral-800 rounded-xl shadow-2xl w-64 overflow-hidden">
                    {/* User Info */}
                    <div className="p-4 border-b border-neutral-800 bg-white/5">
                      <p className="font-bold text-white">Trịnh Huynh</p>
                      <p className="text-sm text-gray-400">huynh080104@gmail.com</p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="p-2">
                      <Link to="/library" className="flex items-center gap-3 p-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.25c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        Thư viện của tôi
                      </Link>
                      <Link to="/profile" className="flex items-center gap-3 p-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.105a8.25 8.25 0 0115.898 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
                        </svg>
                        Trang cá nhân
                      </Link>
                      <Link to="/guide" className="flex items-center gap-3 p-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Nạp xu
                      </Link>
                    </div>
                    
                    {/* Logout */}
                    <div className="p-2 border-t border-neutral-800">
                      <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="flex items-center gap-3 w-full p-3 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Login Button */
              <Link to="/login" className="ml-[12px]">
                <button className="items-center inline-flex font-bold justify-center h-10 bg-[rgb(208,203,203)] text-neutral-900 text-sm px-6 rounded-lg hover:bg-white transition-colors">
                  Đăng nhập
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
