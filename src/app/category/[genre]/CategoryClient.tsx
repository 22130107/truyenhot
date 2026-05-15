"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Link from "next/link";

interface Novel {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  views: number;
  chapterCount: number;
  status: string;
  rating: number;
}

const SORT_OPTIONS = [
  { value: "default",  label: "Mặc định" },
  { value: "views",    label: "Xem nhiều nhất" },
  { value: "newest",   label: "Mới nhất" },
  { value: "chapters", label: "Nhiều chương nhất" },
];

const STATUS_OPTIONS = [
  { value: "all",       label: "Tất cả" },
  { value: "ONGOING",   label: "Đang ra" },
  { value: "COMPLETED", label: "Hoàn thành" },
  { value: "PAUSED",    label: "Tạm dừng" },
];

export default function CategoryClient() {
  const params  = useParams();
  const router  = useRouter();
  const genre   = decodeURIComponent(params?.genre as string);

  const [novels,  setNovels]  = useState<Novel[]>([]);
  const [total,   setTotal]   = useState(0);
  const [loading, setLoading] = useState(true);
  const [sort,    setSort]    = useState("default");
  const [status,  setStatus]  = useState("all");

  const fetchNovels = useCallback(async (s: string, st: string) => {
    setLoading(true);
    try {
      const p = new URLSearchParams({ genre });
      if (s !== "default") p.set("sort", s);
      if (st !== "all")    p.set("status", st);
      const res  = await fetch(`/api/novels/search?${p.toString()}`);
      const data = await res.json();
      setNovels(data.novels || []);
      setTotal(data.total   || 0);
    } catch {
      setNovels([]);
    } finally {
      setLoading(false);
    }
  }, [genre]);

  useEffect(() => { fetchNovels(sort, status); }, [fetchNovels]);

  const statusLabel = (s: string) =>
    s === "COMPLETED" ? "Hoàn thành" : s === "PAUSED" ? "Tạm dừng" : "Đang ra";

  return (
    <div className="min-h-screen bg-[rgb(31,38,25)] text-white flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 flex-1 w-full">
        {/* Header */}
        <div className="flex items-baseline gap-4 mb-8">
          <h1 className="text-3xl font-bold">Thể loại: <span className="text-yellow-400">{genre}</span></h1>
          {!loading && <span className="text-gray-500 text-sm">{total} truyện</span>}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-1 bg-black border border-neutral-800 rounded-lg p-1">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setStatus(opt.value); fetchNovels(sort, opt.value); }}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  status === opt.value ? "bg-yellow-400 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Sắp xếp:</span>
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); fetchNovels(e.target.value, status); }}
              className="bg-black border border-neutral-800 text-white text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-neutral-800 animate-pulse rounded-xl aspect-video" />
            ))}
          </div>
        ) : novels.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">Chưa có truyện nào trong thể loại này</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {novels.map((novel) => (
              <Link key={novel.id} href={`/novel/${novel.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden hover:scale-[1.02] transition-all shadow-lg">
                  <div className="relative aspect-video">
                    <img
                      src={novel.coverUrl || "/logo.png"}
                      alt={`Ảnh bìa truyện ${novel.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[rgb(122,213,195)] border border-white/10 uppercase tracking-wider">
                      {statusLabel(novel.status)}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1 line-clamp-1 text-[rgb(31,38,25)]">{novel.title}</h3>
                    <p className="text-[rgb(31,38,25)]/60 text-sm mb-3">{novel.author}</p>
                    <div className="flex justify-between text-sm text-[rgb(31,38,25)]/70 font-medium">
                      <span>Lượt xem: <span className="font-bold text-[rgb(31,38,25)]">{novel.views.toLocaleString()}</span></span>
                      <span>Chương <span className="font-bold text-[rgb(31,38,25)]">{novel.chapterCount}</span></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
