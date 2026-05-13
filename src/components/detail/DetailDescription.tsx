"use client";
import React from 'react';

interface DetailDescriptionProps {
  description: string[];
}

export function DetailDescription({ description }: DetailDescriptionProps) {
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-[16px] text-[24px] leading-[32px]">Mô tả</h2>
        <div>
          {description.map((paragraph, index) => (
            <p key={index} className="text-justify mb-[16px] text-[rgb(163,_163,_163)] leading-[26px]">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
