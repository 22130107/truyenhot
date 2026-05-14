"use client";

import { Save, ArrowLeft, Image as ImageIcon, UploadCloud, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function AdminEditNovelPage() {
  const params = useParams();
  const router = useRouter();
  const novelId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Tiên hiệp", "Kiếm hiệp", "Huyền huyễn", "Đô thị", "Ngôn tình", "Xuyên không", "Dị giới", "Võng du", "Khoa huyễn", "Lịch sử"];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const [coverUrl, setCoverUrl] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const [posterUrl, setPosterUrl] = useState("");
  const [uploadingPoster, setUploadingPoster] = useState(false);
  const posterInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("ONGOING");
  const [description, setDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchNovel = async () => {
      try {
        const res = await fetch(`/api/admin/novels/${novelId}`);
        const data = await res.json();
        if (res.ok) {
          setTitle(data.title || "");
          setAuthor(data.author || "");
          setStatus(data.status || "ONGOING");
          setDescription(data.description || "");
          setCoverUrl(data.coverUrl || "");
          setPosterUrl(data.posterUrl || "");
          setSelectedCategories(data.categories || []);
        } else {
          alert(data.message || "Không thể tải dữ liệu truyện");
          router.push('/admin/novels');
        }
      } catch (error) {
        console.error("Lỗi khi tải truyện:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNovel();
  }, [novelId, router]);

  const handleFileUpload = async (file: File, setUrl: (url: string) => void, setUploading: (state: boolean) => void) => {
    setUploading(true);
    try {
      const sigRes = await fetch('/api/cloudinary-signature');
      const sigData = await sigRes.json();
      
      if (!sigRes.ok) {
        throw new Error(sigData.error || 'Failed to get upload signature');
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", sigData.apiKey);
      formData.append("timestamp", sigData.timestamp);
      formData.append("signature", sigData.signature);

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${sigData.cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
      
      const data = await uploadRes.json();
      
      if (data.secure_url) {
        setUrl(data.secure_url);
      } else {
        alert("Tải ảnh thất bại: " + (data.error?.message || "Unknown error"));
      }
    } catch (error: any) {
      console.error("Lỗi khi tải ảnh lên Cloudinary:", error);
      alert("Đã xảy ra lỗi khi tải ảnh lên: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file, setCoverUrl, setUploadingCover);
  };

  const handlePosterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file, setPosterUrl, setUploadingPoster);
  };

  const handleSaveNovel = async () => {
    if (!title || !author) {
      alert("Vui lòng nhập Tên truyện và Tác giả!");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch(`/api/admin/novels/${novelId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          author,
          status,
          description,
          coverUrl,
          posterUrl,
          categories: selectedCategories
        })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Cập nhật truyện thành công!");
        router.push("/admin/novels");
      } else {
        alert(data.message || "Có lỗi xảy ra khi cập nhật truyện.");
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Đã xảy ra lỗi hệ thống.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 text-yellow-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/novels" className="p-2 hover:bg-neutral-800 rounded-xl transition-colors text-neutral-400 hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Sửa thông tin truyện</h1>
          <p className="text-neutral-400 mt-1">Cập nhật nội dung cho truyện {title || 'đang chọn'}.</p>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-400">Tác giả <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Nhập tên tác giả..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
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
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all appearance-none"
                >
                  <option value="ONGOING">Đang ra</option>
                  <option value="COMPLETED">Hoàn thành</option>
                  <option value="PAUSED">Tạm dừng</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-neutral-400">Tóm tắt / Giới thiệu</label>
                <div>
                  <input 
                    type="file" 
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                    className="hidden" 
                    id="word-import"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      
                      try {
                        const mammoth = (await import('mammoth')).default;
                        const arrayBuffer = await file.arrayBuffer();
                        const result = await mammoth.extractRawText({ arrayBuffer });
                        setDescription(result.value);
                      } catch (err) {
                        console.error('Lỗi đọc file Word:', err);
                        alert('Không thể đọc nội dung file Word này.');
                      }
                      
                      e.target.value = ''; // Reset input
                    }}
                  />
                  <label 
                    htmlFor="word-import"
                    className="text-xs flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg cursor-pointer transition-colors"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    Nhập từ file Word
                  </label>
                </div>
              </div>
              <textarea 
                rows={5}
                placeholder="Nhập tóm tắt nội dung truyện..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                  <div className="w-24 h-36 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 flex-shrink-0 overflow-hidden relative">
                    {coverUrl ? (
                      <img src={coverUrl} alt="Cover" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-neutral-600" />
                    )}
                    {uploadingCover && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-3">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={coverInputRef}
                      onChange={handleImageUpload}
                    />
                    <div 
                      onClick={() => !uploadingCover && coverInputRef.current?.click()}
                      className={`border border-dashed border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center bg-[#0a0a0a] transition-colors cursor-pointer group ${uploadingCover ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-900/50'}`}
                    >
                      <UploadCloud className={`w-5 h-5 mb-2 ${uploadingCover ? 'text-neutral-500' : 'text-neutral-400 group-hover:text-white'}`} />
                      <p className="text-neutral-400 text-xs text-center">{uploadingCover ? 'Đang tải lên...' : 'Tải ảnh lên Cloudinary (Tối đa 5MB)'}</p>
                    </div>
                    <input 
                      type="text" 
                      value={coverUrl}
                      onChange={(e) => setCoverUrl(e.target.value)}
                      placeholder="Hoặc dán URL ảnh trực tiếp..."
                      className="w-full bg-[#0a0a0a] border border-neutral-800 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Poster */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-400">Ảnh nền (Poster - Ngang)</label>
                <div className="flex flex-col gap-4">
                  <div className="w-full h-36 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 overflow-hidden relative">
                    {posterUrl ? (
                      <img src={posterUrl} alt="Poster" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-neutral-600" />
                    )}
                    {uploadingPoster && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={posterInputRef}
                      onChange={handlePosterUpload}
                    />
                    <div 
                      onClick={() => !uploadingPoster && posterInputRef.current?.click()}
                      className={`flex-1 border border-dashed border-neutral-700 rounded-xl p-2.5 flex items-center justify-center gap-2 bg-[#0a0a0a] transition-colors cursor-pointer group ${uploadingPoster ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-900/50'}`}
                    >
                      <UploadCloud className={`w-4 h-4 ${uploadingPoster ? 'text-neutral-500' : 'text-neutral-400 group-hover:text-white'}`} />
                      <p className="text-neutral-400 text-xs">{uploadingPoster ? 'Đang tải lên...' : 'Tải lên'}</p>
                    </div>
                    <input 
                      type="text" 
                      value={posterUrl}
                      onChange={(e) => setPosterUrl(e.target.value)}
                      placeholder="Hoặc dán URL ảnh trực tiếp..."
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
            <button 
              onClick={handleSaveNovel}
              disabled={isSaving}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              {isSaving ? "Đang lưu..." : "Cập nhật truyện"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
