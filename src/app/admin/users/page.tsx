"use client";

import { Search, Filter, Ban, CheckCircle2, MoreVertical, ShieldAlert } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", coins: 5000, role: "User", status: "Active", joined: "12/05/2026" },
    { id: 2, name: "Trần Thị B", email: "tranthib@gmail.com", coins: 15000, role: "User", status: "Active", joined: "11/05/2026" },
    { id: 3, name: "Admin System", email: "admin@truyenhot.com", coins: 999999, role: "Admin", status: "Active", joined: "01/01/2026" },
    { id: 4, name: "Lê C", email: "lec123@yahoo.com", coins: 0, role: "User", status: "Banned", joined: "10/05/2026" },
    { id: 5, name: "Phạm D", email: "phamd@gmail.com", coins: 2500, role: "User", status: "Active", joined: "09/05/2026" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Quản lý Người dùng</h1>
        <p className="text-neutral-400 mt-1">Danh sách thành viên, số dư Coin và phân quyền trên hệ thống.</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Tìm kiếm theo tên, email..." 
            className="w-full bg-[#111] border border-neutral-800 text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
          />
        </div>
        <select className="bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400 appearance-none min-w-[150px]">
          <option value="all">Tất cả quyền</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button className="flex items-center gap-2 bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl hover:bg-neutral-900 transition-colors">
          <Filter className="w-5 h-5" />
          Lọc trạng thái
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900/50">
                <th className="p-4 text-neutral-400 font-medium text-sm">Người dùng</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Email</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Số dư Coin</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Quyền</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Trạng thái</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Ngày tham gia</th>
                <th className="p-4 text-neutral-400 font-medium text-sm text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-neutral-900/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-black font-bold text-sm ${
                        user.role === 'Admin' ? 'bg-gradient-to-tr from-red-500 to-pink-500 text-white' : 'bg-gradient-to-tr from-yellow-400 to-orange-500'
                      }`}>
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-400">{user.email}</td>
                  <td className="p-4 font-medium text-yellow-400">
                    {user.coins.toLocaleString()} <span className="text-xs text-neutral-500 ml-1">Coin</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Admin' 
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                        : 'bg-neutral-800 text-neutral-400'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-max ${
                      user.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      {user.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-neutral-400 text-sm">{user.joined}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <button 
                        className={`p-1.5 rounded-lg transition-colors ${
                          user.status === 'Active' ? 'text-neutral-400 hover:text-red-400 hover:bg-red-500/10' : 'text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10'
                        }`}
                        title={user.status === 'Active' ? 'Khóa tài khoản' : 'Mở khóa tài khoản'}
                      >
                        {user.status === 'Active' ? <Ban className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      </button>
                      {user.role !== 'Admin' && (
                        <button className="p-1.5 text-neutral-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors" title="Chỉ định làm Admin">
                          <ShieldAlert className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-neutral-800 flex justify-between items-center text-sm text-neutral-400">
          <div>Hiển thị 1 - 5 trong số 345 người dùng</div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors disabled:opacity-50">Trước</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-800 text-white transition-colors">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors">2</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors">3</button>
            <button className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors">Tiếp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
