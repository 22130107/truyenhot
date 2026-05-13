import React from 'react';

interface SettingsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsPopup({ isOpen }: SettingsPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay to close when clicking outside could be added here */}
      <div className="fixed top-16 right-8 w-80 bg-[rgb(58,59,60)] border border-neutral-700 shadow-2xl rounded-xl z-[60] overflow-hidden">
        <div className="p-6 space-y-6">
          <h3 className="text-lg font-bold text-white">Cài đặt</h3>
          
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-300">Cỡ chữ</label>
            <div className="relative pt-1">
              <input 
                type="range" 
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[rgb(208,203,203)]"
                min="12" 
                max="32" 
                defaultValue="20"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">20px</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-300">Phông chữ</label>
            <button className="flex items-center justify-between w-full p-3 bg-[rgb(36,37,38)] border border-neutral-800 rounded-lg text-gray-200 text-sm hover:border-[rgb(250,204,21)] transition-colors">
              <span>Google Sans</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
