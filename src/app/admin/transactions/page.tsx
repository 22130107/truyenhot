"use client";

import { Search, Filter, ArrowUpRight, CheckCircle2, XCircle, CreditCard, Wallet, Activity } from "lucide-react";

export default function AdminTransactionsPage() {
  const transactions = [
    { id: "TRX-82914", user: "Nguyễn Văn A", amount: "500,000 VNĐ", coins: "+5,000", method: "Momo", date: "12/05/2026 14:30", status: "Completed" },
    { id: "TRX-82913", user: "Lê C", amount: "100,000 VNĐ", coins: "+1,000", method: "Bank Transfer", date: "12/05/2026 10:15", status: "Completed" },
    { id: "TRX-82912", user: "Trần Thị B", amount: "200,000 VNĐ", coins: "+2,000", method: "ZaloPay", date: "11/05/2026 22:45", status: "Completed" },
    { id: "TRX-82911", user: "Phạm D", amount: "50,000 VNĐ", coins: "+500", method: "Card", date: "11/05/2026 16:20", status: "Failed" },
    { id: "TRX-82910", user: "Nguyễn Văn A", amount: "1,000,000 VNĐ", coins: "+12,000", method: "Bank Transfer", date: "10/05/2026 09:10", status: "Completed" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Lịch sử Nạp Coin</h1>
        <p className="text-neutral-400 mt-1">Lịch sử giao dịch nạp Coin từ cổng thanh toán tự động.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-neutral-400 text-sm font-medium">Doanh thu hôm nay</p>
              <h3 className="text-2xl font-bold text-white mt-2">1,500,000 <span className="text-sm text-neutral-500 font-normal">VNĐ</span></h3>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-neutral-400 text-sm font-medium">Giao dịch thành công</p>
              <h3 className="text-2xl font-bold text-yellow-400 mt-2">142 <span className="text-sm text-neutral-500 font-normal">Giao dịch</span></h3>
            </div>
            <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-neutral-400 text-sm font-medium">Tổng Coin đã nạp (Tháng)</p>
              <h3 className="text-2xl font-bold text-white mt-2">145,000 <span className="text-sm text-neutral-500 font-normal">Coin</span></h3>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Mã giao dịch, tên người dùng..." 
            className="w-full bg-[#111] border border-neutral-800 text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
          />
        </div>
        <select className="bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400 appearance-none min-w-[150px]">
          <option value="all">Tất cả cổng thanh toán</option>
          <option value="bank">Chuyển khoản</option>
          <option value="momo">Momo</option>
          <option value="zalopay">ZaloPay</option>
        </select>
        <select className="bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400 appearance-none min-w-[150px]">
          <option value="all">Tất cả trạng thái</option>
          <option value="completed">Thành công</option>
          <option value="failed">Thất bại</option>
        </select>
        <button className="flex items-center gap-2 bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl hover:bg-neutral-900 transition-colors">
          <Filter className="w-5 h-5" />
          Lọc
        </button>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900/50">
                <th className="p-4 text-neutral-400 font-medium text-sm">Mã GD</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Người dùng</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Số tiền nạp</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Nhận (Coin)</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Cổng thanh toán</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Thời gian</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-neutral-900/50 transition-colors">
                  <td className="p-4 font-mono text-sm text-neutral-300">{trx.id}</td>
                  <td className="p-4 font-medium text-white">{trx.user}</td>
                  <td className="p-4 font-medium text-white">{trx.amount}</td>
                  <td className="p-4 font-bold text-yellow-400">{trx.coins}</td>
                  <td className="p-4">
                    <span className="flex items-center gap-1.5 text-sm text-neutral-300">
                      <CreditCard className="w-4 h-4 text-neutral-500" />
                      {trx.method}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-neutral-400">{trx.date}</td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-max ${
                      trx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {trx.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {trx.status === 'Completed' ? 'Thành công' : 'Thất bại'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-neutral-800 flex justify-between items-center text-sm text-neutral-400">
          <div>Hiển thị 1 - 5 trong số 1,204 giao dịch</div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors disabled:opacity-50">Trước</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-800 text-white transition-colors">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors">2</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors">Tiếp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
