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
      <body className="antialiased text-white min-h-screen bg-[rgb(31,38,25)]">
        {children}
      </body>
    </html>
  );
}
