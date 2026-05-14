import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truyện Hot",
  description: "Web đọc truyện hot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased text-white min-h-screen bg-[#0a0a0a] flex flex-col">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
