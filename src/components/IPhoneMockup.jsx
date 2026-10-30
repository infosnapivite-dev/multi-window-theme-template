import React, { useRef } from 'react';
import IPhoneBezel from './IPhoneBezel';
import { useScrollSync } from '../hooks/useScrollSync';

export default function IPhoneMockup() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const { isDesktop } = useScrollSync(containerRef, contentRef);

  return (
    <div className="relative w-full h-screen min-h-screen bg-[#08090c] text-white flex flex-col items-center justify-center overflow-hidden font-sans select-none">
      
      {/* Desktop Luxury Ambient Backdrop */}
      {isDesktop && (
        <>
          {/* Subtle warm champagne radial light pool behind device */}
          <div className="absolute w-[600px] h-[900px] rounded-full bg-gradient-to-b from-[#d4af37]/[0.07] via-[#c9a050]/[0.03] to-transparent blur-3xl pointer-events-none transform -translate-y-8" />
          
          {/* Studio Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050608_90%)] pointer-events-none" />

          {/* Desktop Status Badge Header */}
          <header className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center space-x-3 text-xs tracking-wider uppercase font-medium text-neutral-400 bg-neutral-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 z-20 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-200">iPhone 15 Pro</span>
            <span className="text-neutral-600">•</span>
            <span>393 × 852 px</span>
            <span className="text-neutral-600">•</span>
            <span className="text-amber-300/90">Phase 1: Foundation Locked</span>
          </header>
        </>
      )}

      {/* Device / Viewport Wrapper:
          Desktop: Fixed 393px × 852px centered iPhone mockup container
          Mobile: 100vw × 100dvh native edge-to-edge layout
      */}
      <div
        className={
          isDesktop
            ? "relative w-[393px] h-[852px] rounded-[54px] bg-black p-[10px] shadow-[0_30px_100px_rgba(0,0,0,0.9)] transition-transform duration-300"
            : "relative w-full h-[100dvh] bg-black overflow-hidden"
        }
        style={
          isDesktop
            ? {
                // Ensures device stays fully visible even on smaller 1080p laptop viewports
                maxHeight: 'calc(100vh - 40px)',
                aspectRatio: '393 / 852',
              }
            : undefined
        }
      >
        {/* iPhone 15 Pro Bezel & Hardware Overlay (Desktop only, pointer-events: none) */}
        {isDesktop && <IPhoneBezel />}

        {/* Internal Scroll Container:
            - Desktop: #mockup-scroll-container (393 × 852, hidden scrollbars, Lenis + GSAP target)
            - Mobile: edge-to-edge scroll container
        */}
        <div
          id="mockup-scroll-container"
          ref={containerRef}
          className={`relative w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-[#fcfbf9] ${
            isDesktop ? 'rounded-[46px]' : ''
          }`}
          style={{
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Scroll Content Wrapper synced with Lenis */}
          <div ref={contentRef} className="relative w-full min-h-full flex flex-col">
            
            {/* Base Background Image Layer:
                - loading="eager"
                - fetchPriority="high"
                - z-index: 0
                - .gpu-layer hardware acceleration
                - Pre-locked dimensions to prevent layout recalculations
            */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
              <img
                src="/wedding-base-bg.jpg"
                alt="Base Wedding Invitation Canvas"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="gpu-layer w-full h-full object-cover object-top"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '852px',
                  display: 'block',
                }}
              />
              {/* Subtle luxury paper texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f5]/20 to-[#faf8f5]/40 pointer-events-none" />
            </div>

            {/* Controlled Iterative Stage: Phase 1 Ready Container (Awaiting Phase 2 instructions) */}
            <div className="relative z-10 w-full min-h-[852px] flex flex-col items-center justify-between p-8 pt-20 pb-12 pointer-events-none">
              
              {/* Top Phase Indicator */}
              <div className="text-center space-y-1">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-neutral-500/80">
                  Step 1 • Architecture Locked
                </span>
                <div className="w-8 h-[1px] bg-amber-600/30 mx-auto mt-1" />
              </div>

              {/* Center Status Emblem */}
              <div className="text-center space-y-3 px-4 py-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-amber-900/10 shadow-sm max-w-[280px]">
                <div className="w-10 h-10 rounded-full bg-amber-100/80 border border-amber-300/50 flex items-center justify-center mx-auto text-amber-700 shadow-inner">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-base font-serif font-medium text-neutral-800 tracking-wide">
                    Foundation Ready
                  </h1>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed">
                    iPhone 15 Pro mockup (393×852px), GPU hardware acceleration, Lenis scroll engine, and base background image locked.
                  </p>
                </div>
                <div className="pt-2 border-t border-amber-900/10 text-[10px] font-medium text-amber-800/80 uppercase tracking-wider">
                  Awaiting Phase 2 Instructions
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="text-center">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">
                  Zero Flickering • Force3D
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Desktop Footer Control / Info Tip */}
      {isDesktop && (
        <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[11px] text-neutral-500 pointer-events-none">
          <p>Scroller Target: <code className="text-amber-400/80 font-mono">#mockup-scroll-container</code> • GSAP Ticker Synced • Lenis Smooth Scroll</p>
        </footer>
      )}

    </div>
  );
}
