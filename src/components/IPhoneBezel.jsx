import React, { useState, useEffect } from 'react';

export default function IPhoneBezel() {
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours % 12 || 12}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-50 select-none overflow-hidden rounded-[54px] shadow-[0_0_0_12px_#1c1d22,0_0_0_14px_#34363f,0_25px_60px_-15px_rgba(0,0,0,0.85)]"
      aria-hidden="true"
    >
      {/* Outer Titanium Metallic Edge Highlight */}
      <div className="absolute inset-0 rounded-[54px] border border-white/20 shadow-inner pointer-events-none" />

      {/* Top Speaker Micro-Slit */}
      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-12 h-[3.5px] bg-[#111215] rounded-full shadow-inner pointer-events-none" />

      {/* iOS Status Bar Area */}
      <div className="absolute top-0 left-0 right-0 h-11 px-8 pt-3 flex items-center justify-between text-black pointer-events-none z-30">
        {/* Current Time Display */}
        <span className="text-[14px] font-semibold tracking-tight text-neutral-800 drop-shadow-sm font-sans pl-2">
          {time}
        </span>

        {/* Dynamic Island Centered */}
        <div className="absolute left-1/2 top-[11px] -translate-x-1/2 w-[125px] h-[35px] bg-black rounded-full flex items-center justify-between px-3.5 shadow-md pointer-events-none">
          {/* TrueDepth / FaceID Sensor */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f] ring-1 ring-neutral-900" />
          {/* Front Camera Lens Glint */}
          <div className="w-3 h-3 rounded-full bg-[#0e1424] flex items-center justify-center ring-1 ring-[#1b2234]">
            <div className="w-1 h-1 rounded-full bg-[#1c2c4d]" />
          </div>
        </div>

        {/* iOS Status Icons (Cellular, WiFi, Battery) */}
        <div className="flex items-center space-x-1.5 text-neutral-800 pr-1">
          {/* Cellular Signal Bars */}
          <svg className="w-4 h-3.5 fill-current" viewBox="0 0 17 12">
            <rect x="0" y="9" width="2.5" height="3" rx="0.75" />
            <rect x="4" y="6" width="2.5" height="6" rx="0.75" />
            <rect x="8" y="3" width="2.5" height="9" rx="0.75" />
            <rect x="12" y="0" width="2.5" height="12" rx="0.75" />
          </svg>

          {/* WiFi Icon */}
          <svg className="w-4 h-3.5 fill-current" viewBox="0 0 16 12">
            <path d="M8 2.5C10.7 2.5 13.1 3.6 14.8 5.4L16 4.1C13.9 2 11.1 0.7 8 0.7C4.9 0.7 2.1 2 0 4.1L1.2 5.4C2.9 3.6 5.3 2.5 8 2.5ZM8 6.5C9.7 6.5 11.2 7.2 12.3 8.3L13.5 7C12.1 5.6 10.1 4.7 8 4.7C5.9 4.7 3.9 5.6 2.5 7L3.7 8.3C4.8 7.2 6.3 6.5 8 6.5ZM8 10.2C8.7 10.2 9.2 10.7 9.2 11.4C9.2 12.1 8.7 12.6 8 12.6C7.3 12.6 6.8 12.1 6.8 11.4C6.8 10.7 7.3 10.2 8 10.2Z" />
          </svg>

          {/* Battery Pill Indicator */}
          <div className="flex items-center">
            <div className="w-[21px] h-[10.5px] border border-neutral-700 rounded-[3.5px] p-[1.5px] flex items-center">
              <div className="w-[78%] h-full bg-neutral-800 rounded-[1.5px]" />
            </div>
            <div className="w-[1.5px] h-[3.5px] bg-neutral-700 rounded-r-[1px] ml-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Inner Glare / Reflection Sheen */}
      <div className="absolute inset-0 rounded-[54px] bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />

      {/* Bottom iOS Home Indicator Bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-neutral-700/60 rounded-full pointer-events-none z-30 backdrop-blur-sm" />
    </div>
  );
}
