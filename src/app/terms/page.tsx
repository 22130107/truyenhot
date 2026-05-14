"use client";

import React from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[rgb(31,38,25)] text-white flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-28 pb-20 flex-1 w-full">
        <h1 className="text-3xl font-bold mb-6">Dieu khoan dich vu</h1>
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Su dung Truyenhot dong nghia voi viec ban dong y voi cac dieu khoan
            nay.
          </p>
          <p>
            Ban khong duoc sao chep, phan phoi noi dung trai phep hoac su dung
            dich vu cho muc dich vi pham phap luat.
          </p>
          <p>
            Chung toi co the cap nhat dieu khoan theo thoi gian. Vui long kiem tra
            dinh ky de cap nhat.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
