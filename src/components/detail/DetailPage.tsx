import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { DetailHeroBackground } from './DetailHeroBackground';
import { DetailSidebar } from './DetailSidebar';
import { DetailActionButtons } from './DetailActionButtons';
import { DetailDescription } from './DetailDescription';
import { DetailStatistics } from './DetailStatistics';
import { RatingOverview } from './RatingOverview';
import { RatingForm } from './RatingForm';
import { ChapterList } from './ChapterList';
import { HorizontalScroll } from '../HorizontalScroll';
import { StoryCard } from '../StoryCard';

export default function DetailPage() {
  const { id } = useParams();
  const chapters = Array.from({ length: 127 }, (_, i) => ({
    number: i + 1,
    url: `/novel/${id || 'hop-hoan-tong'}/${i + 1}`,
    date: "4/20/2026"
  }));

  const description = [
    "Văn án:",
    "Sau khi Đường Giảo bái nhập Hợp Hoan Tông, chăm chỉ khắc khổ, học một đống lí thuyết, vẫn chưa được thực hành.",
    "Chờ mãi mới đến tuổi trưởng thành, sư tỷ mang theo nàng tham gia Đàn Môn yến, chỉ vào một dàn nam nhân bảo nàng chọn.",
    "Trên tòa có một vị kiếm tu, mặt mày sáng sủa, y phục mỏng nhẹ, thanh dật thản nhiên, y như một trích tiên, trái tim Đường Giảo manh động, giả bộ ngã vào lòng ngực hắn, lanh lẹ treo túi thơm lên chuôi kiếm của hắn, hai mắt rưng rưng xin lỗi, lỗ tai đỏ lên, bước từng bước lưu luyến rời đi.",
    "Kiếm tu rất biết điều, màn đêm buông xuống liền theo địa chỉ được thêu trên túi thơm tìm đến.",
    "Hai người trò chuyện vui vẻ với nhau, tình ý dâng trào, vô cùng ăn ý, Đường Giảo vừa mới đưa tay ôm lấy eo hắn, cánh tay kiếm tu đã vòng qua eo nàng rồi.",
    "Vành tai chạm vào tóc mai, Đường Giảo xích nhẹ ra một chút, mềm giọng hỏi hắn tên họ là gì, tu sĩ của môn phái nào.",
    "Kiếm tu hôn khóe môi nàng, giọng nói khàn khàn: \"Từ Trầm Vân, Hợp Hoan Tông\"",
    "Đường Giảo bừng tỉnh.",
    "Đường Giảo đẩy hắn ra.",
    "Từ Trầm Vân: ...?",
    "Đường Giảo nhanh chóng mặc áo ngoài vào, ngồi nghiêm chỉnh, dáng vẻ đoan trang.",
    "Sau đó nàng cười gượng hai tiếng, nói: \"Haha, trùng hợp ghê, thì ra là đại sư huynh\"",
    "Nàng gia nhập vào Hợp Hoan Tông mới có 3-4 năm, còn chưa gặp vị đại sư huynh bế quan 10 năm này.",
    "Mọi người đều biết, Hợp Hoan Tông cấm tiêu thụ cùng tông.",
    "Bởi vì công pháp giống nhau, cho nên không thể hỗ trợ nhau tu luyện được.",
    "Tuy rằng hai bên đều là hình mẫu của nhau, nhưng Đường Giảo và Từ Trầm Vân vẫn quyết định buông tha cho đối phương.",
    "Nhưng mà dù sao là đồng môn, có đôi khi không muốn gặp là có thể không gặp được.",
    "Ví dụ như:",
    "Đường Giảo vừa mới đến gần một Đan tu, Từ Trầm Vân đã dán bên tai nàng, tha thiết khuyên bảo: \"Sư muôi, tên Đan tu này nhìn hơi đần, tu vi chắc không được cao lắm đâu, đổi người khác đi?\"",
    "Lại ví dụ như:",
    "Từ Trầm Vân mời một vị nữ Kiếm tu đi chung với nhau, Đường Giảo khoanh tay trước ngực, nhẹ giọng cười với hắn: \"Sư huynh, nếu huynh thích kiểu này, không phải muội tốt hơn sao?\"",
    "Một đoạn thời gian sau, cả hai người đều không tìm được đối tượng thích hợp.",
    "Rơi vào đường cùng, Đường Giảo và Từ Trầm Vân trải qua một cuộc nói chuyện nghiêm túc, quyết định hay là thử xem.",
    "Nhưng mà... ai có thể nói cho nàng biết, đệ tử Hợp Hoan Tông với đệ tử Hợp Hoan Tông tu luyện như thế nào bây giờ?",
    "Tiểu sư muội x Đại sư huynh",
    "Nữ chính trông có vẻ ngây thơ đáng yêu, nam chính trông thanh nhã cao khiết, thế nên cả hai đều bị lừa.",
    "Nữ chính là \"bạch thiết hắc\" (bề ngoài ngây thơ bên trong đen tối), ngọt ngào.",
    "Tu luyện theo kiểu \"chân trái đạp chân phải bay lên trời\", xin đừng đào sâu logic."
  ];

  const ratingDistribution = [
    { label: "Xuất sắc", percentage: 0 },
    { label: "Rất tốt", percentage: 100 },
    { label: "Trung bình", percentage: 0 },
    { label: "Tệ", percentage: 0 },
    { label: "Rất tệ", percentage: 0 }
  ];

  return (
    <div className="text-white text-[16px] leading-[24px]" style={{"fontFamily":"Figtree, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"","textDecoration":"none","width":"100%","maxWidth":"100vw","margin":"auto"}}>
      <div className="bg-[rgb(17,_24,_39)] text-[rgb(209,_213,_219)] min-h-[855px]">
        <div className="flex flex-col items-center">
          {/* Laptop Wrapper with fixed width */}
          <div className="w-full lg:w-[1920px] min-h-[855px] relative">
            <Header />

            <DetailHeroBackground
              imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F886e2673d315d9e33c767740dacc629f7c8e9924.jpg?generation=1778599312007900&amp;alt=media"
            />

            <div className="ml-auto mr-auto relative mt-[-64px] lg:mt-[-96px] pt-8 px-4 lg:pr-4 lg:pb-8 lg:pl-4 z-[10]">
              <div className="grid mb-[48px] gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1 lg:order-1">
                  <DetailSidebar
                    coverImage="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb5c9bf32c0910d5e2463867bcaa188f47ab14e10.jpg?generation=1778599312253669&amp;alt=media"
                    title="Hợp Hoan Tông Cấm Tiêu Thụ Cùng Tông"
                    translator="Sủi Cảo Sốt Bơ"
                    translatorUrl="https://tiemanvat.com/teams/69bc3013872922ed35c4ac47"
                    author="Quan Sơn Miên"
                    status="Hoàn Thành"
                    chapters={127}
                    genre="Ngôn tình"
                  />
                </div>

                <div className="lg:col-span-2 lg:order-2 bg-[rgb(17,_24,_39)] rounded-xl lg:rounded-bl-2xl lg:rounded-br-2xl lg:rounded-tl-[4rem] lg:rounded-tr-2xl shadow-2xl p-6 lg:p-10">
                  <DetailActionButtons
                    readNowUrl={`/novel/${id || 'hop-hoan-tong'}/1`}
                  />

                  <DetailDescription description={description} />

                  <DetailStatistics
                    views={1171}
                    likes={3}
                    follows={0}
                    lastUpdate="4/20/2026"
                  />
                </div>
              </div>

              <div className="grid mb-[48px] gap-8 lg:gap-[32px] lg:pr-9 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1 lg:order-1">
                  <RatingOverview
                    averageRating={4.0}
                    totalRatings={1}
                    distribution={ratingDistribution}
                  />
                  <div className="mt-8">
                    <RatingForm />
                  </div>
                </div>

                <div className="lg:col-span-2 lg:order-2">
                  <ChapterList chapters={chapters} />
                </div>
              </div>

              <div className="mb-[48px]">
                <div className="items-center flex justify-start mb-[32px]">
                  <h2 className="font-bold mr-[32px] text-2xl lg:text-[30px] leading-tight lg:leading-[36px]">Truyện liên quan</h2>
                </div>
                <HorizontalScroll>
                  <div className="h-full relative w-[280px] lg:w-[344.2px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/ga-kim-thoa"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc41722039088c9f4bcbddb836b6331ab7a2d4eb4.jpg?generation=1778599312067620&amp;alt=media"
                      title="Gả Kim Thoa"
                      author="Tiếu Giai Nhân"
                      rating={5.0}
                      chapters={163}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fdd0c16a6d14bacc3d04c9dd7ee3e59fbd51b0c4e.svg?generation=1778667867837502&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F22a8c165b3aeb2b5e8f07fc74e7d5e0fde6cba00.svg?generation=1778667867842039&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[280px] lg:w-[344.2px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/he-thong-mo-phong-gia-toc-tu-tien-bat-djau-tu-con-so-khong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cfcd56161ba38d291993f73110eed0db3f1c476.jpg?generation=1778599312176347&amp;alt=media"
                      title="Hệ Thống Mô Phỏng Gia Tộc Tu Tiên: Bắt"
                      author="Dữ Thần Đồng Hành"
                      rating={4.0}
                      chapters={221}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9c6f0b9a6b5e7e1b8b9c8e1b8b9c8e1b8b9c8e1b.svg?generation=1778667867870397&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8c97452fb8031b81db8163cd80b47c0d8ffc3e67.svg?generation=1778667867870397&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[280px] lg:w-[344.2px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/van-ngheneknpwenwe"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&amp;alt=media"
                      title="Vân Nghê Chi Thượng"
                      author="Thịnh Vãn Phong"
                      rating={5.0}
                      chapters={88}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd0e2917fd78c1a608faf8274a7aa87f83b6a034f.svg?generation=1778667867909926&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F33cdf3f75dfd9f6e0abf636d892e59875c4a232b.svg?generation=1778667867913368&amp;alt=media"
                    />
                  </div>
                </HorizontalScroll>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
