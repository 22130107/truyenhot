"use client";

import { Save, ArrowLeft, Image as ImageIcon, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminAddNovelPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Tiên hiệp", "Kiếm hiệp", "Huyền huyễn", "Đô thị", "Ngôn tình", "Xuyên không", "Dị giới", "Võng du", "Khoa huyễn", "Lịch sử"];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/novels" className="p-2 hover:bg-neutral-800 rounded-xl transition-colors text-neutral-400 hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Thêm truyện mới</h1>
          <p className="text-neutral-400 mt-1">Nhập thông tin chi tiết để thêm một bộ truyện mới vào hệ thống.</p>
        </div>
      </div>

      <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6 md:p-8">
        <div className="space-y-8">
          
          {/* General Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white pb-2 border-b border-neutral-800">Thông tin chung</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-400">Tên truyện <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Nhập tên truyện..."
                  className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-400">Tác giả <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Nhập tên tác giả..."
                  className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                />
              </div>

              <div className="space-y-3 md:col-span-2">
                <label className="block text-sm font-medium text-neutral-400">Thể loại <span className="text-neutral-500 text-xs font-normal ml-1">(Chọn nhiều)</span></label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedCategories.includes(cat) 
                          ? 'bg-yellow-400 text-black shadow-md' 
                          : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-400">Trạng thái</label>
                <select className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all appearance-none">
                  <option value="ongoing">Đang ra</option>
                  <option value="completed">Hoàn thành</option>
                  <option value="paused">Tạm dừng</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-400">Tóm tắt / Giới thiệu</label>
              <textarea 
                rows={5}
                placeholder="Nhập tóm tắt nội dung truyện..."
                className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all custom-scrollbar"
              ></textarea>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white pb-2 border-b border-neutral-800">Hình ảnh (Thumbnail & Poster)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Thumbnail */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-400">Ảnh đại diện (Thumbnail - Dọc)</label>
                <div className="flex gap-4">
                  <div className="w-24 h-36 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 flex-shrink-0">
                    <ImageIcon className="w-6 h-6 text-neutral-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="border border-dashed border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center bg-[#0a0a0a] hover:bg-neutral-900/50 transition-colors cursor-pointer group">
                      <UploadCloud className="w-5 h-5 text-neutral-400 group-hover:text-white mb-2" />
                      <p className="text-neutral-400 text-xs text-center">Tải ảnh lên (Tối đa 2MB)</p>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Hoặc dán URL ảnh..."
                      className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Poster */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-400">Ảnh nền (Poster - Ngang)</label>
                <div className="flex flex-col gap-4">
                  <div className="w-full h-36 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                    <ImageIcon className="w-8 h-8 text-neutral-600" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 border border-dashed border-neutral-700 rounded-xl p-2.5 flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-neutral-900/50 transition-colors cursor-pointer group">
                      <UploadCloud className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                      <p className="text-neutral-400 text-xs">Tải lên</p>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Hoặc dán URL ảnh..."
                      className="flex-[2] bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Action Buttons */}
          <div className="pt-6 border-t border-neutral-800 flex justify-end gap-4">
            <Link href="/admin/novels" className="px-6 py-3 rounded-xl border border-neutral-800 text-white font-medium hover:bg-neutral-800 transition-colors">
              Hủy bỏ
            </Link>
            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium transition-colors">
              <Save className="w-5 h-5" />
              Lưu truyện
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
