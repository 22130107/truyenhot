import React from 'react';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className="relative w-full">
      <div className="ml-auto mr-auto overflow-hidden relative w-full z-[1]">
        <div className="flex size-full relative z-[1]">
          {children}
        </div>
      </div>
    </div>
  );
}
