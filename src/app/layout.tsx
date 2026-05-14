import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
