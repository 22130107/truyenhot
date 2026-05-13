import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black pt-4 pr-0 pb-4 pl-0">
      <div className="ml-auto mr-auto w-full max-w-[1536px] pt-0 pr-4 pb-0 pl-4">
        <div className="grid gap-[32px]" style={{"gridTemplateColumns":"repeat(5, minmax(0px, 1fr))"}}>
          <div className="items-center flex justify-start" style={{"gridArea":"1 / 1 / 2 / 2"}}>
            <img alt="Logo" src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbab93d48150f4568f77500303a1a96440e86ac39.png?generation=1778599311903591&amp;alt=media" className="block max-w-full object-cover overflow-clip align-middle w-10 h-10 rounded-[624.9375rem]" />
            <span className="block font-bold ml-[8px] text-white text-[24px] leading-[32px]" style={{"fontFamily":"Itim"}}>Truyenhot</span>
          </div>
          <div className="grid gap-[16px]" style={{"gridTemplateColumns":"repeat(4, minmax(0px, 1fr))","gridArea":"1 / 2 / 2 / 6"}}>
            <div className="items-center flex justify-start" style={{"gridArea":"1 / 1 / 2 / 2"}}>
              <ul>
                <li className="list-none">
                  <a href="https://tiemanvat.com/help" className="text-white">Trung tâm hỗ trợ</a>
                </li>
              </ul>
            </div>
            <div className="items-center flex justify-start" style={{"gridArea":"1 / 2 / 2 / 3"}}>
              <ul>
                <li className="list-none">
                  <a href="https://tiemanvat.com/contact" className="text-white">Liên hệ với chúng tôi</a>
                </li>
              </ul>
            </div>
            <div className="items-center flex justify-start" style={{"gridArea":"1 / 3 / 2 / 4"}}>
              <ul>
                <li className="list-none">
                  <a href="https://tiemanvat.com/terms" className="text-white">Điều khoản & Điều kiện</a>
                </li>
              </ul>
            </div>
            <div className="items-center flex justify-start" style={{"gridArea":"1 / 4 / 2 / 5"}}>
              <ul>
                <li className="list-none">
                  <a href="https://tiemanvat.com/policy" className="text-white">Chính sách dịch vụ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
