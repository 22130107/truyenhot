"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ReadingHeader } from "@/components/reading/ReadingHeader";
import { SettingsPopup, ReadingSettings } from "@/components/reading/SettingsPopup";
import { ChapterContent } from "@/components/reading/ChapterContent";
import { ChapterSelector } from "@/components/reading/ChapterSelector";
import { CommentSection } from "@/components/reading/CommentSection";

interface ChapterData {
  id: string;
  novelId: string;
  novelTitle: string;
  chapterNumber: number;
  title: string;
  isLocked: boolean;
  isPurchased: boolean;
  price: number;
  content: string | null;
  prevChapter: number | null;
  nextChapter: number | null;
}

export default function ReadingPage() {
  const params = useParams();
  const router = useRouter();
  const novelId = params?.id as string;
  const chapterNum = params?.chapterId as string;
  const fallbackChapterNumber = Number.isNaN(Number(chapterNum)) ? 0 : parseInt(chapterNum, 10);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<ReadingSettings>({ fontSize: 20, fontFamily: "Google Sans" });
  const [chapter, setChapter] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Mua chương
  const [purchasing, setPurchasing] = useState(false);
  const [purchaseError, setPurchaseError] = useState("");

  // Lấy userId từ localStorage
  const getUserId = () => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw).id : null;
    } catch { return null; }
  };

  const getUserCoins = () => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? (JSON.parse(raw).coins ?? 0) : 0;
    } catch { return 0; }
  };

  const fetchChapter = () => {
    const userId = getUserId();
    const url = `/api/novels/${novelId}/chapters/${chapterNum}${userId ? `?userId=${userId}` : ""}`;
    setLoading(true);
    setError("");
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setChapter(data);
      })
      .catch(() => setError("Không thể tải chương"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (novelId && chapterNum) fetchChapter();
  }, [novelId, chapterNum]);

  // Track reading progress
  useEffect(() => {
    if (!chapter || chapter.isLocked && !chapter.isPurchased) return;
    const userId = getUserId();
    if (!userId) return;
    fetch("/api/library/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        novelId,
        lastChapter: chapter.chapterNumber,
        status: "READING",
      }),
    }).catch(() => {});
  }, [chapter]);

  const handlePurchase = async () => {
    const userId = getUserId();
    if (!userId) {
      router.push("/login");
      return;
    }
    setPurchasing(true);
    setPurchaseError("");
    try {
      const res = await fetch(`/api/novels/${novelId}/chapters/${chapterNum}/purchase`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (res.ok) {
        // Cập nhật coins trong localStorage
        try {
          const raw = localStorage.getItem("user");
          if (raw) {
            const u = JSON.parse(raw);
            u.coins = data.coinsRemaining;
            localStorage.setItem("user", JSON.stringify(u));
          }
        } catch { /* ignore */ }
        // Reload chương
        fetchChapter();
      } else if (res.status === 402) {
        setPurchaseError(`Không đủ xu. Cần ${data.required} xu, bạn có ${data.current} xu.`);
      } else {
        setPurchaseError(data.error || "Mua thất bại");
      }
    } catch {
      setPurchaseError("Lỗi kết nối");
    } finally {
      setPurchasing(false);
    }
  };

  // Parse content thành mảng đoạn văn
  const contentParagraphs = chapter?.content
    ? chapter.content.split("\n").filter((p) => p.trim() !== "")
    : [];

  return (
    <div
      className="text-white text-[16px] leading-[24px] min-h-screen bg-[rgb(31,38,25)]"
      style={{ fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="flex flex-col items-center w-full">
        <div className="w-full lg:w-[1920px] relative">

          <ReadingHeader
            novelId={novelId}
            chapterNumber={chapter?.chapterNumber ?? parseInt(chapterNum)}
            chapterTitle={chapter?.title ?? ""}
            onToggleSettings={() => setIsSettingsOpen(!isSettingsOpen)}
          />

          <SettingsPopup
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            settings={settings}
            onChange={setSettings}
          />

          <main className="mt-20 px-4 md:px-10 lg:px-0">
            <div className="ml-auto mr-auto w-full lg:max-w-6xl pt-8 pb-8">

              {/* Loading */}
              {loading && (
                <div className="space-y-3 animate-pulse">
                  <div className="h-8 bg-neutral-800 rounded w-1/2 mx-auto" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-4 bg-neutral-800 rounded w-full" />
                  ))}
                </div>
              )}

              {/* Error */}
              {!loading && error && (
                <div className="text-center py-20 text-red-400">{error}</div>
              )}

              {/* Paywall — chương bị khóa */}
              {!loading && chapter && chapter.isLocked && !chapter.isPurchased && (
                <div className="text-center py-16">
                  <div className="inline-flex flex-col items-center gap-6 bg-[rgb(10,10,10)] border border-neutral-800 rounded-2xl p-10 max-w-md mx-auto shadow-2xl">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-400">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-2">Chương {chapter.chapterNumber} — Trả phí</h2>
                      <p className="text-neutral-400 text-sm">
                        {chapter.title && <span className="block mb-1 text-white">{chapter.title}</span>}
                        Chương này yêu cầu <span className="text-yellow-400 font-bold">{chapter.price} xu</span> để mở khóa.
                      </p>
                    </div>

                    <div className="w-full space-y-3">
                      <div className="flex items-center justify-between text-sm bg-neutral-800/60 rounded-lg px-4 py-2.5">
                        <span className="text-neutral-400">Xu của bạn</span>
                        <span className="font-bold text-yellow-400">{getUserCoins()} xu</span>
                      </div>

                      {purchaseError && (
                        <p className="text-red-400 text-xs text-center">{purchaseError}</p>
                      )}

                      <button
                        onClick={handlePurchase}
                        disabled={purchasing}
                        className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        {purchasing ? (
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.33.576z" />
                            <path fillRule="evenodd" d="M9.99 2C5.578 2 2 5.58 2 9.99 2 14.4 5.58 18 9.99 18 14.4 18 18 14.42 18 10.01 18 5.6 14.42 2 9.99 2zM9.25 6.5a.75.75 0 011.5 0v.316a3.78 3.78 0 011.653.798c.469.386.847.97.847 1.686 0 .706-.378 1.29-.847 1.686a3.78 3.78 0 01-1.653.798v2.152a3.78 3.78 0 001.653-.798c.469-.386.847-.97.847-1.686a.75.75 0 011.5 0c0 1.14-.608 2.082-1.5 2.7v.3a.75.75 0 01-1.5 0v-.316a3.78 3.78 0 01-1.653-.798C8.628 12.79 8.25 12.206 8.25 11.5c0-.706.378-1.29.847-1.686A3.78 3.78 0 0110.75 9.016V6.864a3.78 3.78 0 00-1.653.798C8.628 8.048 8.25 8.632 8.25 9.338a.75.75 0 01-1.5 0c0-1.14.608-2.082 1.5-2.7V6.5z" clipRule="evenodd" />
                          </svg>
                        )}
                        Mở khóa {chapter.price} xu
                      </button>

                      <Link
                        href="/topup"
                        className="block text-center text-xs text-neutral-500 hover:text-yellow-400 transition-colors"
                      >
                        Nạp thêm xu →
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Nội dung chương */}
              {!loading && chapter && (!chapter.isLocked || chapter.isPurchased) && (
                <ChapterContent
                  chapterNumber={chapter.chapterNumber}
                  chapterTitle={chapter.title}
                  content={contentParagraphs}
                  fontSize={settings.fontSize}
                  fontFamily={settings.fontFamily}
                />
              )}
            </div>

            {/* Navigation */}
            {!loading && chapter && (
              <div className="ml-auto mr-auto w-full lg:max-w-6xl pt-8 pb-8">
                <div className="border bg-[rgba(58,59,60,0.6)] border-neutral-800 shadow-2xl p-6 rounded-xl">
                  <ChapterSelector
                    currentChapter={chapter.chapterNumber}
                    nextChapter={chapter.nextChapter}
                  />
                </div>
              </div>
            )}

            {novelId && (chapter?.chapterNumber ?? fallbackChapterNumber) > 0 && (
              <CommentSection
                novelId={novelId}
                chapterNumber={chapter?.chapterNumber ?? fallbackChapterNumber}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
