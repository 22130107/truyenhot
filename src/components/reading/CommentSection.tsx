import React from 'react';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  comments?: Comment[];
}

export function CommentSection({ comments = [] }: CommentSectionProps) {
  return (
    <div className="ml-auto mr-auto w-full max-w-6xl pt-8 pr-10 pb-8 pl-10">
      <div className="items-center flex mb-[20px] gap-[8px]">
        <div className="fill-none overflow-hidden align-middle w-5 h-5 mb-[4px]">
          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc5717b98f526a21cc57526ac8eeed08792f47729.svg?generation=1778670420954249&amp;alt=media" className="block size-full" />
        </div>
        <h2 className="font-semibold mb-[4px] text-[20px] leading-[28px]">Bình luận</h2>
      </div>
      <div className="text-gray-200 p-6 rounded-xl">
        <div className="flex mb-[24px] gap-[12px]">
          <div className="grow basis-[0%]">
            <textarea rows={2} placeholder="Viết bình luận của bạn..." className="flex overflow-auto resize-none whitespace-pre-wrap w-full h-[82px] bg-[rgb(36,_37,_38)] text-white text-[14px] leading-[20px] min-h-20 pt-2 pr-3 pb-2 pl-3 rounded-xl" style={{"backgroundImage":"linear-gradient(to right, rgb(88, 28, 135), rgb(131, 24, 67))"}}></textarea>
          </div>
        </div>
        {comments.length === 0 ? (
          <p className="text-center text-[rgb(156,_163,_175)]">Chưa có bình luận nào.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-neutral-800 pb-4">
                <div className="flex gap-3">
                  <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{comment.author}</span>
                      <span className="text-[rgb(163,_163,_163)] text-[12px]">{comment.timestamp}</span>
                    </div>
                    <p className="text-[rgb(209,_213,_219)]">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
