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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isGenresOpen, setIsGenresOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') === 'true');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <header className={`fixed left-0 top-0 right-0 transition-all duration-300 z-[999] py-4 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="w-full px-4 md:px-8">
          <div className="items-center flex justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90"
                aria-label="Open Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <Link to="/" className="items-center flex hover:opacity-80 transition-opacity">
                <img alt="Logo" src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbab93d48150f4568f77500303a1a96440e86ac39.png?generation=1778599311903591&amp;alt=media" className="block max-w-full object-cover overflow-clip align-middle w-10 h-10 md:w-12 md:h-12 rounded-full" />
                <span className="block font-bold ml-[8px] text-[rgb(255,_209,_220)] text-[24px] md:text-[30px] leading-tight md:leading-[36px]" style={{"fontFamily":"Itim"}}>Truyenhot</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center flex-wrap mr-auto ml-[16px] gap-[8px]">
              {/* Genres Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-center bg-transparent text-white pt-2 pr-4 pb-2 pl-4 rounded-md hover:bg-white/10 transition-colors font-medium">
                  Thể Loại
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 group-hover:rotate-180 transition-transform">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[60]">
                  <div className="bg-[rgb(38,38,38)] border border-neutral-700 rounded-xl shadow-2xl p-6 w-[700px]">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-3">
                      {GENRES.map((genre) => (
                        <Link 
                          key={genre} 
                          to={`/category/${genre}`} 
                          className="text-gray-300 hover:text-[rgb(250,204,21)] transition-colors text-sm py-1"
                        >
                          {genre}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/guide" className="items-center flex text-white pt-2 pr-4 pb-2 pl-4 rounded-md hover:bg-white/10 transition-colors font-medium">Hướng dẫn nạp</Link>
              <span className="items-center flex text-white pt-2 pr-4 pb-2 pl-4 rounded-md opacity-60 cursor-default font-medium">Fanpage</span>
            </div>

            <div className="items-center flex gap-2">
              <div className="hidden lg:block grow relative text-white">
                <div className="relative">
                  <input type="text" placeholder="Tìm kiếm ..." className="border flex overflow-clip w-48 xl:w-64 h-10 bg-[rgb(31,_31,_31)] border-[rgb(75,_85,_99)] text-[14px] leading-[20px] pt-2 pr-12 pb-2 pl-5 rounded-md focus:border-[rgb(250,204,21)] focus:outline-none transition-colors" />
                  <button className="items-center flex font-medium justify-center overflow-hidden absolute text-center whitespace-nowrap h-8 top-[50%] right-1 bg-[rgb(208,_203,_203)] hover:bg-white text-neutral-900 text-[14px] gap-[8px] leading-[20px] pt-0 pr-2 pb-0 pl-2 translate-y-[-50%] rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Mobile Search Icon */}
              <button className="lg:hidden text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              
              <Link to="/library" className="hidden md:block">
                <button className="items-center flex font-medium justify-center overflow-hidden relative text-center whitespace-nowrap h-10 bg-transparent text-white text-[14px] px-4 rounded-md hover:bg-white/10 transition-colors">
                  Thư viện
                </button>
              </Link>
              
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition-colors">
                    <img 
                      src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbab93d48150f4568f77500303a1a96440e86ac39.png?generation=1778599311903591&amp;alt=media" 
                      className="w-10 h-10 rounded-full border-2 border-[rgb(250,204,21)]" 
                      alt="User" 
                    />
                  </button>
                  <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                    <div className="bg-[rgb(18,18,18)] border border-neutral-800 rounded-lg shadow-2xl w-64 overflow-hidden">
                      {/* User Info Section */}
                      <div className="p-4 border-b border-neutral-800">
                        <div className="font-bold text-white text-lg">Trịnh Huỳnh</div>
                        <div className="text-gray-500 text-xs truncate">huynh080104@gmail.com</div>
                      </div>
                      
                      {/* Menu Links */}
                      <div className="p-2">
                        <Link to="/library" className="flex items-center gap-4 px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                          </svg>
                          <span className="text-sm">Thư viện của tôi</span>
                        </Link>
                        
                        <Link to="/profile" className="flex items-center gap-4 px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          <span className="text-sm">Trang cá nhân</span>
                        </Link>
                        
                        <Link to="/topup" className="flex items-center gap-4 px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">Nạp xu</span>
                        </Link>
                      </div>
                      
                      {/* Logout */}
                      <div className="p-2 border-t border-neutral-800">
                        <button onClick={handleLogout} className="flex items-center gap-4 w-full px-3 py-2.5 text-red-500 hover:bg-red-500/10 rounded-md transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                          </svg>
                          <span className="text-sm font-bold">Đăng xuất</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button className="items-center inline-flex font-bold justify-center h-10 bg-[rgb(208,203,203)] text-neutral-900 text-sm px-6 rounded-lg hover:bg-white transition-colors">
                    Đăng nhập
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-[10000] md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div 
          className={`absolute inset-y-0 left-0 w-80 bg-[#121212] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-neutral-800 flex justify-between items-center bg-[#121212]">
              <span className="font-bold text-[rgb(255,_209,_220)] text-2xl" style={{"fontFamily":"Itim"}}>Truyenhot</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#121212]">
              {isLoggedIn && (
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-2">
                  <div className="font-bold text-white">Trịnh Huỳnh</div>
                  <div className="text-gray-500 text-xs truncate">huynh080104@gmail.com</div>
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-gray-500 uppercase text-xs font-bold tracking-widest">Menu</h3>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 py-2">Trang chủ</Link>
                <Link to="/library" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 py-2">Thư viện</Link>
                {isLoggedIn && (
                  <>
                    <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 py-2">Trang cá nhân</Link>
                    <Link to="/topup" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 py-2">Nạp xu</Link>
                  </>
                )}
                <Link to="/guide" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 py-2">Hướng dẫn nạp</Link>
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="block text-lg font-bold text-red-500 py-2 text-left">Đăng xuất</button>
                ) : (
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-bold text-[rgb(250,204,21)] py-2">Đăng nhập / Đăng ký</Link>
                )}
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setIsGenresOpen(!isGenresOpen)}
                  className="flex items-center justify-between w-full text-gray-500 uppercase text-xs font-bold tracking-widest hover:text-gray-300 transition-colors"
                >
                  <span>Thể loại</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className={`w-4 h-4 transition-transform duration-300 ${isGenresOpen ? 'rotate-180' : ''}`}
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-300 ${isGenresOpen ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                  {GENRES.map((genre) => (
                    <Link 
                      key={genre} 
                      to={`/category/${genre}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-gray-400 hover:text-[rgb(250,204,21)] transition-colors py-2 px-2 rounded-md hover:bg-white/5"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
