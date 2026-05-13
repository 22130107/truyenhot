"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Coins,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Quản lý Truyện", href: "/admin/novels", icon: BookOpen },
    { name: "Người dùng", href: "/admin/users", icon: Users },
    { name: "Nạp Coin", href: "/admin/transactions", icon: Coins },
    { name: "Cài đặt", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-[#111] border-r border-neutral-800 transition-all duration-300">
        <div className="h-16 flex items-center px-6 border-b border-neutral-800">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-yellow-400">Truyenhot</span>
            <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 font-medium"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-black" : "text-neutral-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-neutral-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200">
            <LogOut className="w-5 h-5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Mobile Header & Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="md:hidden h-16 flex items-center justify-between px-4 border-b border-neutral-800 bg-[#111]">
          <Link href="/admin" className="text-xl font-bold text-yellow-400">
            Truyenhot Admin
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-800 text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-[#111] border-b border-neutral-800 z-50 px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-yellow-400 text-black font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}

        <main className="flex-1 overflow-y-auto bg-[#0a0a0a] p-4 md:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
