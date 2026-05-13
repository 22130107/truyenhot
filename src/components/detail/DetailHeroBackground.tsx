import React from 'react';

interface DetailHeroBackgroundProps {
  imageUrl: string;
  alt?: string;
}

export function DetailHeroBackground({ imageUrl, alt = "background" }: DetailHeroBackgroundProps) {
  return (
    <div className="overflow-hidden relative w-full h-[600px]">
      <img alt={alt} src={imageUrl} className="block size-full max-w-full object-cover overflow-clip absolute align-middle left-0 top-0 right-0 bottom-0 text-black/0" />
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/40"></div>
      <div className="absolute h-[200px] left-0 right-0 bottom-0 content-[&quot;&quot;] z-[3]" style={{"backgroundImage":"linear-gradient(0deg, rgb(17, 24, 39), rgba(17, 24, 39, 0))"}}></div>
    </div>
  );
}
