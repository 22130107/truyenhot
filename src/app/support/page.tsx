import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Trung Tâm Hỗ Trợ",
  description:
    "Trung tâm hỗ trợ Truyện Hot. Liên hệ qua email hoặc fanpage để được hỗ trợ.",
  alternates: {
    canonical: "https://truyenhot.online/support",
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[rgb(31,38,25)] text-white flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 pt-32 pb-20">
        <h1 className="text-2xl font-bold text-center mb-6">Trung Tâm Hỗ Trợ</h1>

        <p className="text-gray-300 mb-6">
          Chúng tôi luôn sẵn sàng hỗ trợ người dùng trong quá trình trải nghiệm đọc truyện trên nền tảng.
        </p>

        <p className="font-bold text-white mb-3">Các vấn đề thường gặp:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>Đăng ký / đăng nhập tài khoản</li>
          <li>Thanh toán, nạp tiền</li>
          <li>Lỗi hiển thị nội dung truyện</li>
          <li>Khiếu nại bản quyền nội dung</li>
          <li>Góp ý cải thiện dịch vụ</li>
        </ul>

        <p className="text-gray-300 mb-2">
          Vui lòng liên hệ bộ phận hỗ trợ qua fanpage chính thức để được phản hồi trong thời gian sớm nhất.
        </p>
        <p className="text-gray-300">
          Fanpage hỗ trợ:{" "}
          <a
            href="https://www.facebook.com/truyenhotonline.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            facebook.com/truyenhotonline.vn
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
