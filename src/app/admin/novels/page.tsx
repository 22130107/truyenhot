"use client";

import { Plus, Search, Filter, Edit, Trash2, MoreVertical, Eye, List } from "lucide-react";
import Link from "next/link";

export default function AdminNovelsPage() {
  const novels = [
    { id: 1, name: "Thần Đạo Đan Tôn", author: "Cô Đơn Địa Phi", chapters: 1250, views: "2.4M", status: "Đang ra", price: "Miễn phí" },
    { id: 2, name: "Kiếm Đạo Độc Tôn", author: "Kiếm Du Thái Hư", chapters: 3215, views: "1.8M", status: "Hoàn thành", price: "Trả phí" },
    { id: 3, name: "Phàm Nhân Tu Tiên", author: "Vong Ngữ", chapters: 2446, views: "5.1M", status: "Hoàn thành", price: "Miễn phí" },
    { id: 4, name: "Đấu Phá Thương Khung", author: "Thiên Tàm Thổ Đậu", chapters: 1641, views: "4.2M", status: "Hoàn thành", price: "Trả phí" },
    { id: 5, name: "Vũ Động Càn Khôn", author: "Thiên Tàm Thổ Đậu", chapters: 1309, views: "3.1M", status: "Đang ra", price: "Miễn phí" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Quản lý Truyện</h1>
          <p className="text-neutral-400 mt-1">Quản lý toàn bộ danh sách truyện trên hệ thống.</p>
        </div>
        <Link href="/admin/novels/new" className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2.5 rounded-xl font-medium transition-colors w-full md:w-auto">
          <Plus className="w-5 h-5" />
          Thêm truyện mới
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Tìm kiếm tên truyện, tác giả..." 
            className="w-full bg-[#111] border border-neutral-800 text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl hover:bg-neutral-900 transition-colors">
          <Filter className="w-5 h-5" />
          Lọc danh sách
        </button>
      </div>

      {/* Novels Table */}
      <div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900/50">
                <th className="p-4 text-neutral-400 font-medium text-sm">Tên truyện</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Tác giả</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Số chương</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Lượt xem</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Trạng thái</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Loại</th>
                <th className="p-4 text-neutral-400 font-medium text-sm text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {novels.map((novel) => (
                <tr key={novel.id} className="hover:bg-neutral-900/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-14 bg-neutral-800 rounded-md flex-shrink-0"></div>
                      <span className="text-white font-medium line-clamp-2">{novel.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-400">{novel.author}</td>
                  <td className="p-4 text-neutral-300">{novel.chapters}</td>
                  <td className="p-4 text-neutral-300">{novel.views}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      novel.status === 'Đang ra' 
                        ? 'bg-blue-500/10 text-blue-500' 
                        : 'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      {novel.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      novel.price === 'Trả phí' 
                        ? 'bg-yellow-500/10 text-yellow-500' 
                        : 'bg-neutral-800 text-neutral-400'
                    }`}>
                      {novel.price}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <Link href={`/admin/novels/${novel.id}/chapters`} className="p-1.5 text-neutral-400 hover:text-blue-400 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg transition-colors" title="Quản lý chương">
                        <List className="w-4 h-4" />
                      </Link>
                      <button className="p-1.5 text-neutral-400 hover:text-yellow-400 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-neutral-400 hover:text-red-400 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-neutral-800 flex justify-between items-center text-sm text-neutral-400">
          <div>Hiển thị 1 - 5 trong số 120 truyện</div>
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
