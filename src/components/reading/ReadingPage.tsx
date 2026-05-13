import React from 'react';
import { ReadingHeader } from './ReadingHeader';
import { SettingsPopup } from './SettingsPopup';
import { ChapterContent } from './ChapterContent';
import { ChapterNavigation } from './ChapterNavigation';
import { ChapterSelector } from './ChapterSelector';
import { CommentSection } from './CommentSection';

export default function ReadingPage() {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  const chapterContent = [
    "Cũng giống như việc chạy xe mô tô bình thường cần có bằng lái phổ thông, chạy xe mô tô trên đường đua chuyên  nghiệp cũng cần có bằng lái chuyên dụng.",
    "Người bình thường muốn chạy mô tô thì phải thi bằng D (Bằng lái xe máy ba bánh) hoặc bằng E (Bằng lái xe máy  hai bánh).",
    "Nhưng một tay đua, nếu muốn tham gia vào các giải đấu tầm cỡ quốc gia (được Liên đoàn Thể thao Ô tô Mô tô  Trung Quốc - CAMF bảo trợ, ví dụ như Giải Vô địch Đường trường CRRC hay Giải Grand Prix Mô tô Trung  Quốc...), thì ít nhất phải sở hữu một chiếc bằng B. Đó được coi là giấy phép tay đua nghiệp dư/nhập môn. Có bằng B trong tay, bạn mới được phép tham gia các giải đấu cấp địa phương, cấp câu lạc bộ hoặc một số giải  mở rộng toàn quốc. Trong giới gọi đây là \"lên sân hợp pháp\" (tức là mọi vấn đề từ bảo hiểm, kiểm tra an toàn đến  thành tích đều được hệ thống chính thức ghi nhận).",
    "Về lý thuyết, ai cũng có thể thi lấy bằng B. —— Nhưng xếp trên bằng B, còn có một loại bằng A.",
    "Bằng A chính là phiên bản nâng cấp của bằng B, có thể hiểu là \"Giấy phép tay đua chuyên nghiệp\". Cầm được  bằng A, bạn mới đủ tư cách tham gia các giải đấu cấp quốc gia, quốc tế, thậm chí là có quyền nộp đơn xin cấp  Giấy phép Quốc tế của FIM (Liên đoàn Mô tô Quốc tế).",
    "Để thi bằng A, bạn bắt buộc phải sở hữu bằng B ít nhất một năm, đồng thời phải đạt được những thành tích nhất  định trong các giải đấu chính thức (ví dụ: hoàn thành đủ số chặng đua quy định, điểm tích lũy đạt chuẩn). Bằng A  chính là tấm vé thông hành để bước ra biển lớn, vươn tầm thế giới.",
    "Điều kiện nghe qua thì có vẻ không đến nỗi quá hà khắc, nhưng trên thực tế, số người thực sự nắm được tấm  bằng A này lại đếm trên đầu ngón tay.",
    "—— Theo số liệu do CAMF công bố hồi đầu năm nay, trong lịch sử, số người được cấp bằng A không vượt quá 50  người.①",
    "........................Mô tô được mệnh danh là \"Bộ cân bằng quốc vận\" thứ hai sau bóng đá quả thực chẳng sai chút  nào.",
    "Ba của Khổng Tuy - ông Khổng Nam Ân - chính là một trong những tay đua chuyên nghiệp đầu tiên trong nước lấy  được tấm bằng A đó.",
    "Dịch ra ngôn ngữ giang hồ cho dễ hiểu thì thế này. Nếu chuyện này được đưa vào tiểu thuyết tu tiên, với địa vị giang hồ của Khổng Nam Ân, thì hiện tại Khổng Tuy  bèo nhất cũng phải là con gái ruột của vị lão tổ khai tông lập phái, chức danh bét ra cũng là Thánh nữ tông môn.",
    "Nhưng Khổng Nam Ân mất rồi, đúng là phượng hoàng sa cơ lỡ vận không bằng con gà gô...",
    "Thánh nữ tông môn mà chết tiệt thay lại bị chính ái đồ của ba ruột mình ban lệnh truy nã toàn giang hồ.",
    "...",
    "Bước ra khỏi tiệm mô tô, trong lúc mọi người đang xôn xao bàn tán chuyện mua vé xem phim, Khổng Tuy rúc vào  một góc, bận rộn ôm điện thoại nhắn tin cho chú Thạch Khải - lão đại của câu lạc bộ \"Không\".",
    "Khởi đầu là một chuỗi meme [Marmot_hét_chói_tai.JPG], tiếp theo là một tràng [Gà_la_hét_bị_bóp_cổ.JPG] để  dọn đường cảm xúc.",
    "Năm phút sau, đúng lúc Vệ Diễn đang hỏi Khổng Tuy có muốn ăn bắp rang bơ không, thì Thạch Khải gửi tin nhắn  phản hồi.",
    "【Mr Thạch: Chú thực sự rất đau lòng.】",
    "【Mr Thạch: Bọn họ đã khuyên chú đừng có vã quá mà vơ bèo gạt tép, thu nhận một con ranh vắt mũi chưa sạch  đang học cấp ba vào câu lạc bộ, nhưng chú không nghe.】",
    "【Mr Thạch: Hậu quả là bây giờ chú phải đối mặt với căn bệnh chuunibyou (hội chứng tuổi teen) của cháu. Đang  hoảng hốt mà không được chửi thề, chỉ đành nở nụ cười hiền từ hỏi: Con gái cưng à, lại có chuyện gì nữa đây?】"
  ];

  return (
    <div className="text-white text-[16px] leading-[24px] min-h-screen bg-[rgb(17,24,39)]" style={{"fontFamily":"Figtree, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"","textDecoration":"none"}}>
      <div className="flex flex-col items-center w-full">
        <div className="w-full lg:w-[1920px] relative">
          <ReadingHeader
            chapterNumber={8}
            chapterTitle="Chia tay"
            onToggleSettings={() => setIsSettingsOpen(!isSettingsOpen)}
          />

          <SettingsPopup 
            isOpen={isSettingsOpen} 
            onClose={() => setIsSettingsOpen(false)} 
          />

          <main className="mt-20 px-4 md:px-10 lg:px-0">
            <div className="ml-auto mr-auto w-full lg:max-w-6xl pt-8 pb-8">
              <ChapterContent
                chapterNumber={8}
                chapterTitle="Chia tay"
                content={chapterContent}
              />
            </div>

            <div className="ml-auto mr-auto w-full lg:max-w-6xl pt-8 pb-8">
              <div className="border bg-[rgba(58,_59,_60,_0.6)]/60 border-neutral-800 shadow-2xl p-6 rounded-xl">
                <ChapterSelector currentChapter={8} />
              </div>
            </div>

            <CommentSection />
          </main>
        </div>
      </div>
    </div>
  );
}
