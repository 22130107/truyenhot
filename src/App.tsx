import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SectionHeader } from './components/SectionHeader';
import { HorizontalScroll } from './components/HorizontalScroll';
import { StoryCard } from './components/StoryCard';
import { RankedStoryCard } from './components/RankedStoryCard';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="text-white text-[16px] leading-[24px] w-full min-h-screen" style={{"fontFamily":"Figtree, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"","textDecoration":"none","margin":"auto"}}>
      <div className="bg-[rgb(31,38,25)] text-[rgb(209,_213,_219)] min-h-screen">
        <div>
          <div className="bg-[rgb(31,38,25)] min-h-screen">
            <Header />

            <HeroSection />

            <section className="pt-4 pb-4">
              <div className="ml-auto mr-auto px-4 md:px-16">
                <SectionHeader
                  title="Truyện được theo dõi"
                />
                <HorizontalScroll>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/ga-kim-thoa"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc41722039088c9f4bcbddb836b6331ab7a2d4eb4.jpg?generation=1778599312067620&amp;alt=media"
                      title="Gả Kim Thoa"
                      author="Tiếu Giai Nhân"
                      rating={5.0}
                      chapters={163}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F56eeb27bcaefc7632742ab87fbf1a92a60068b62.svg?generation=1778599312095989&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9bfd6bd75fa78cdd47ecc029ca9c99880fc8e518.svg?generation=1778599312092073&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/van-ngheneknpwenwe"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&amp;alt=media"
                      title="Vân Nghê Chi Thượng"
                      author="Thịnh Vãn Phong"
                      rating={5.0}
                      chapters={88}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5b7e0109f4b85aef7d470fb2ecc0fb3e89df0f4f.svg?generation=1778599312101868&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbed69bb5cc4879d12df71164b219e4407c93d6fa.svg?generation=1778599312137303&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/khi-mat-djat-gam-thet"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F41c7102430e5723d32de88a635a3a49177bd208b.jpg?generation=1778599312171355&amp;alt=media"
                      title="Khi Mặt Đất Gầm Thét"
                      author="Thanh Miễn"
                      rating={4.0}
                      chapters={175}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff8a8ef779ed3a5dfa93f327c74f30aaea107f023.svg?generation=1778599312137224&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F496272b310956cfe3f32f37f95548a9795c12320.svg?generation=1778599312125822&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/he-thong-mo-phong-gia-toc-tu-tien-bat-djau-tu-con-so-khong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cfcd56161ba38d291993f73110eed0db3f1c476.jpg?generation=1778599312176347&amp;alt=media"
                      title="Hệ Thống Mô Phỏng Gia Tộc Tu Tiên: Bắt"
                      author="Dữ Thần Đồng Hành"
                      rating={4.0}
                      chapters={221}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F70b4c5c8d7a3f0f6e8854fdf782d7bf7a7d48c32.svg?generation=1778599312242002&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F06324c3146dcdcdd0454ae8370d2f3dd1c89592a.svg?generation=1778599312287537&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/hop-hoan-tong-cam-tieu-thu-cung-tong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb5c9bf32c0910d5e2463867bcaa188f47ab14e10.jpg?generation=1778599312253669&amp;alt=media"
                      title="Hợp Hoan Tông Cấm Tiêu Thụ Cùng Tông"
                      author="Quan Sơn Miên"
                      rating={4.0}
                      chapters={127}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F313444a3cf0336594ba5cabd8e98a8e1db8e12a4.svg?generation=1778599312262563&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0d73fc4a6f0269d90ccb5906dc2ca8357ecb8b31.svg?generation=1778599312308725&amp;alt=media"
                    />
                  </div>
                </HorizontalScroll>
              </div>
            </section>

            <section className="pt-10 md:pt-16 pb-10 md:pb-16">
              <div className="ml-auto mr-auto px-4 md:px-16">
                <HorizontalScroll>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/ga-kim-thoa"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc41722039088c9f4bcbddb836b6331ab7a2d4eb4.jpg?generation=1778599312067620&amp;alt=media"
                      title="Gả Kim Thoa"
                      author="Tiếu Giai Nhân"
                      rating={5.0}
                      chapters={163}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd5d3244e81531abffd2d9c7b942195f750b119a5.svg?generation=1778599312289000&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa0b4dfad5db76abbdb80c23a525b7f9c204b0e6a.svg?generation=1778599312291008&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/van-ngheneknpwenwe"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&amp;alt=media"
                      title="Vân Nghê Chi Thượng"
                      author="Thịnh Vãn Phong"
                      rating={5.0}
                      chapters={88}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F29e9eb104380d1b0cd78cb88966cc5c4ed2ea53b.svg?generation=1778599312384263&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9ee59d6a9a63637b09f37b3a44c51627af80160d.svg?generation=1778599312334273&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/hop-hoan-tong-cam-tieu-thu-cung-tong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb5c9bf32c0910d5e2463867bcaa188f47ab14e10.jpg?generation=1778599312253669&amp;alt=media"
                      title="Hợp Hoan Tông Cấm Tiêu Thụ Cùng Tông"
                      author="Quan Sơn Miên"
                      rating={4.0}
                      chapters={127}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F212d69dfa159f83ff60d96f8b3cbb06ef27361f2.svg?generation=1778599312391459&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F383cc8b19e2f98258a076cab5c6fb98f80d68655.svg?generation=1778599312401663&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/khi-mat-djat-gam-thet"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F41c7102430e5723d32de88a635a3a49177bd208b.jpg?generation=1778599312171355&amp;alt=media"
                      title="Khi Mặt Đất Gầm Thét"
                      author="Thanh Miễn"
                      rating={4.0}
                      chapters={175}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb1f9a09012f46e0a5bfabbd05297d7c8b3e9b76f.svg?generation=1778599312418463&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F08a0259949e72564e79f1491e83f8723f053cc13.svg?generation=1778599312464252&amp;alt=media"
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <StoryCard
                      href="https://tiemanvat.com/novel/he-thong-mo-phong-gia-toc-tu-tien-bat-djau-tu-con-so-khong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cfcd56161ba38d291993f73110eed0db3f1c476.jpg?generation=1778599312176347&amp;alt=media"
                      title="Hệ Thống Mô Phỏng Gia Tộc Tu Tiên: Bắt"
                      author="Dữ Thần Đồng Hành"
                      rating={4.0}
                      chapters={221}
                      category="Ngôn tình"
                      iconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F55422b4f183d88b7fb90dd624caf225b54d1be51.svg?generation=1778599312451368&amp;alt=media"
                      chapterIconUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F715c60dbfbad5dea5eae7da8e78a1d0066a34582.svg?generation=1778599312442455&amp;alt=media"
                    />
                  </div>
                </HorizontalScroll>
              </div>
            </section>

            <section className="pt-10 md:pt-16 pb-10 md:pb-16">
              <div className="ml-auto mr-auto px-4 md:px-16">
                <HorizontalScroll>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <RankedStoryCard
                      href="https://tiemanvat.com/novel/ga-kim-thoa"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc41722039088c9f4bcbddb836b6331ab7a2d4eb4.jpg?generation=1778599312067620&amp;alt=media"
                      title="Gả Kim Thoa"
                      translator="Sủi Cảo Sốt Bơ"
                      date="5/12/2026"
                      chapters={163}
                      rank={1}
                      clipPathLeft={true}
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <RankedStoryCard
                      href="https://tiemanvat.com/novel/van-ngheneknpwenwe"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&amp;alt=media"
                      title="Vân Nghê Chi Thượng"
                      translator="Sủi Cảo Sốt Bơ"
                      date="5/12/2026"
                      chapters={88}
                      rank={2}
                      clipPathLeft={false}
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <RankedStoryCard
                      href="https://tiemanvat.com/novel/hop-hoan-tong-cam-tieu-thu-cung-tong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb5c9bf32c0910d5e2463867bcaa188f47ab14e10.jpg?generation=1778599312253669&amp;alt=media"
                      title="Hợp Hoan Tông Cấm Tiêu Thụ Cùng"
                      translator="Sủi Cảo Sốt Bơ"
                      date="5/12/2026"
                      chapters={127}
                      rank={3}
                      clipPathLeft={true}
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <RankedStoryCard
                      href="https://tiemanvat.com/novel/khi-mat-djat-gam-thet"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F41c7102430e5723d32de88a635a3a49177bd208b.jpg?generation=1778599312171355&amp;alt=media"
                      title="Khi Mặt Đất Gầm Thét"
                      translator="Sủi Cảo Sốt Bơ"
                      date="5/12/2026"
                      chapters={175}
                      rank={4}
                      clipPathLeft={false}
                    />
                  </div>
                  <div className="h-full relative w-[339.4px] mr-[20px] shrink-[0]">
                    <RankedStoryCard
                      href="https://tiemanvat.com/novel/he-thong-mo-phong-gia-toc-tu-tien-bat-djau-tu-con-so-khong"
                      imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cfcd56161ba38d291993f73110eed0db3f1c476.jpg?generation=1778599312176347&amp;alt=media"
                      title="Hệ Thống Mô Phỏng Gia Tộc Tu Tiên:"
                      translator="Sủi Cảo Sốt Bơ"
                      date="5/12/2026"
                      chapters={221}
                      rank={5}
                      clipPathLeft={true}
                    />
                  </div>
                </HorizontalScroll>
              </div>
            </section>

            <section className="pt-10 md:pt-16 pb-10 md:pb-16">
              <div className="ml-auto mr-auto px-4 md:px-16">
                <SectionHeader
                  title="Truyện mới nhất"
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                  <StoryCard
                    href="https://tiemanvat.com/novel/he-thong-mo-phong-gia-toc-tu-tien-bat-djau-tu-con-so-khong"
                    imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cfcd56161ba38d291993f73110eed0db3f1c476.jpg?generation=1778599312176347&amp;alt=media"
                    title="Hệ Thống Mô Phỏng Gia Tộc Tu Tiên: Bắt"
                    author="Dữ Thần Đồng Hành"
                    rating={4.0}
                    chapters={221}
                    category="Ngôn tình"
                    iconUrl=""
                    chapterIconUrl=""
                  />
                  <StoryCard
                    href="https://tiemanvat.com/novel/khi-mat-djat-gam-thet"
                    imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F41c7102430e5723d32de88a635a3a49177bd208b.jpg?generation=1778599312171355&amp;alt=media"
                    title="Khi Mặt Đất Gầm Thét"
                    author="Thanh Miễn"
                    rating={4.0}
                    chapters={175}
                    category="Ngôn tình"
                    iconUrl=""
                    chapterIconUrl=""
                  />
                  <StoryCard
                    href="https://tiemanvat.com/novel/hop-hoan-tong-cam-tieu-thu-cung-tong"
                    imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb5c9bf32c0910d5e2463867bcaa188f47ab14e10.jpg?generation=1778599312253669&amp;alt=media"
                    title="Hợp Hoan Tông Cấm Tiêu Thụ Cùng"
                    author="Quan Sơn Miên"
                    rating={4.0}
                    chapters={127}
                    category="Ngôn tình"
                    iconUrl=""
                    chapterIconUrl=""
                  />
                  <StoryCard
                    href="https://tiemanvat.com/novel/ga-kim-thoa"
                    imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc41722039088c9f4bcbddb836b6331ab7a2d4eb4.jpg?generation=1778599312067620&amp;alt=media"
                    title="Gả Kim Thoa"
                    author="Tiếu Giai Nhân"
                    rating={5.0}
                    chapters={163}
                    category="Ngôn tình"
                    iconUrl=""
                    chapterIconUrl=""
                  />
                  <StoryCard
                    href="https://tiemanvat.com/novel/van-ngheneknpwenwe"
                    imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F094e01d42e3c5ff876f997d62dcf37897869559b.jpg?generation=1778599312137373&amp;alt=media"
                    title="Vân Nghê Chi Thượng"
                    author="Thịnh Vãn Phong"
                    rating={5.0}
                    chapters={88}
                    category="Ngôn tình"
                    iconUrl=""
                    chapterIconUrl=""
                  />
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </div>
        <section aria-label="Notifications Alt+T"></section>
        <div className="absolute"></div>
        <div className="text-left text-[rgb(31,_35,_40)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Segoe UI\", Arial, sans-serif"}}></div>
        <div></div>
        <div></div>
        <div className="pointer-events-none fixed text-left w-[1000px] left-0 top-0 ml-[-500px] text-[rgb(33,_37,_41)] translate-x-[1673px] translate-y-[138px] z-[100000200]" style={{"fontFamily":"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""}}></div>
      </div>
    </div>
  );
}
