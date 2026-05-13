import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const TOPUP_PACKAGES = [
  { id: 1, name: "Gói nhỏ", coins: 20, price: "20,000đ", bonus: 0, popular: false },
  { id: 2, name: "Gói vừa", coins: 55, price: "50,000đ", bonus: 5, popular: true },
  { id: 3, name: "Gói lớn", coins: 112, price: "100,000đ", bonus: 12, popular: false },
  { id: 4, name: "Gói siêu lớn", coins: 230, price: "200,000đ", bonus: 30, popular: false },
];

export default function TopupPage() {
  return (
    <div className="min-h-screen bg-[rgb(17,24,39)] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-[1920px] mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-2xl font-bold">Nạp xu</h1>
            </div>
            <p className="text-gray-400 text-sm ml-9">Dùng xu để mở khóa chương và ủng hộ tác giả</p>
          </div>
          
          <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
            <span className="text-gray-300 text-sm">Số xu hiện có: <span className="text-yellow-500 font-bold">0 xu</span></span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TOPUP_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-[rgb(31,41,55)] border rounded-2xl p-6 transition-all hover:translate-y-[-4px] shadow-xl ${
                pkg.popular ? 'border-yellow-500 ring-1 ring-yellow-500' : 'border-neutral-800'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  Phổ biến
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-gray-300">{pkg.name}</h3>
              </div>

              <div className="mb-6">
                <p className="text-gray-400 text-xs mb-1">Nhận <span className="text-yellow-500 font-bold">{pkg.coins} xu</span></p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">{pkg.price}</span>
                </div>
                {pkg.bonus > 0 && (
                  <div className="mt-3 inline-block bg-green-500/10 text-green-400 text-[11px] font-bold px-3 py-1 rounded-full border border-green-500/20">
                    +{pkg.bonus} xu khuyến mãi
                  </div>
                )}
                {pkg.bonus === 0 && <div className="mt-3 text-3xl opacity-0">0</div>}
              </div>

              <button className="w-full bg-[rgb(208,203,203)] hover:bg-white text-neutral-900 font-bold py-3 rounded-xl transition-all shadow-lg active:scale-[0.98]">
                Nạp ngay
              </button>
            </div>
          ))}
        </div>

        {/* Missions Section */}
        <div className="bg-[rgb(31,41,55)] border border-neutral-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold mb-6">Nhiệm vụ nhận xu</h2>
          <p className="text-gray-400 text-sm mb-8 italic">Bạn sẽ nhận được xu khi thực hiện các nhiệm vụ sau</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold border border-white/10">1</div>
              <p className="text-gray-300 text-sm leading-relaxed pt-1.5">
                Theo dõi Fanpage Facebook và Tiktok (@khicuocdoichobantongtai)
              </p>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold border border-white/10">2</div>
              <p className="text-gray-300 text-sm leading-relaxed pt-1.5">
                Chụp màn hình đã follow
              </p>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold border border-white/10">3</div>
              <p className="text-gray-300 text-sm leading-relaxed pt-1.5">
                Gửi ảnh kèm theo gmail (đăng ký tài khoản tại web) về Fanpage Facebook
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-700/50 space-y-4">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Lưu ý:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  Hoàn thành nhiệm vụ, mỗi lượt follow bạn sẽ nhận được <span className="text-yellow-500 font-bold ml-1 flex items-center gap-1">5 <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg></span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  Mỗi email chỉ nhận được tối đa <span className="text-yellow-500 font-bold mx-1 flex items-center gap-1">10 <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg></span> cho nhiệm vụ này
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  Vì số lượng người đọc đang quá tải, mà admin phải duyệt thủ công, bạn vui lòng đợi trong vòng 24h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
