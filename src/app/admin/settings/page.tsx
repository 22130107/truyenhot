"use client";

import { Save, Banknote, CreditCard, Building2, UserCircle2 } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Cài đặt Hệ thống</h1>
        <p className="text-neutral-400 mt-1">Cấu hình tỷ giá quy đổi tiền tệ và thông tin tài khoản nhận tiền nạp.</p>
      </div>

      <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-8">
        
        {/* Exchange Rate Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <Banknote className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl font-bold text-white">Tỷ giá Quy đổi (VNĐ sang Coin)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Tỷ giá mặc định</label>
              <div className="flex items-center gap-3">
                <input 
                  type="number" 
                  defaultValue="100"
                  className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                />
                <span className="text-neutral-400 whitespace-nowrap">VNĐ = 1 Coin</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Khuyến mãi nạp thêm (%)</label>
              <input 
                type="number" 
                defaultValue="10"
                className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Bank Account Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <CreditCard className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl font-bold text-white">Thông tin Nhận tiền (Chủ sở hữu)</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Ngân hàng thụ hưởng
                </label>
                <select className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all appearance-none">
                  <option value="vcb">Vietcombank</option>
                  <option value="mbb">MB Bank</option>
                  <option value="tcb">Techcombank</option>
                  <option value="bidv">BIDV</option>
                  <option value="vtb">VietinBank</option>
                  <option value="momo">Momo (Ví điện tử)</option>
                  <option value="zalo">ZaloPay (Ví điện tử)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Số tài khoản / Số điện thoại
                </label>
                <input 
                  type="text" 
                  defaultValue="19038472910"
                  className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2">
                <UserCircle2 className="w-4 h-4" />
                Tên chủ tài khoản
              </label>
              <input 
                type="text" 
                defaultValue="NGUYEN VAN A"
                className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all uppercase"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Nội dung chuyển khoản mặc định</label>
              <input 
                type="text" 
                defaultValue="NAPCOIN {USERNAME}"
                className="w-full bg-[#0a0a0a] border border-neutral-800 text-neutral-500 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
              <p className="text-xs text-neutral-500 mt-2">Ví dụ: Hệ thống sẽ tự thay {`{USERNAME}`} bằng tên tài khoản người dùng khi hiển thị cho user copy nạp tiền.</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800 flex justify-end">
          <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium transition-colors">
            <Save className="w-5 h-5" />
            Lưu cài đặt
          </button>
        </div>
      </div>
    </div>
  );
}
