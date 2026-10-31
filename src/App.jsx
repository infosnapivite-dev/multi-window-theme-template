import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import IPhoneFrame from './components/Chassis/IPhoneFrame';
import PalaceWindowsGrid from './components/PalaceWindows/PalaceWindowsGrid';
import EventPageView from './components/PalaceWindows/EventPageView';
import RsvpModal from './components/PalaceWindows/RsvpModal';
import homeBg from './assets/home-bg.webp';
import './styles/iphone-mockup.css';
import { playWindowOpenSound, playWindowCloseSound } from './utils/audio';

/**
 * Center coordinates for each of the 6 windows
 * Used to focus the cinematic camera directly on the clicked window
 */
const WINDOW_CENTERS = {
  welcome: { cx: 17.65, cy: 46.60 },
  mehendi: { cx: 50.00, cy: 46.60 },
  sangeet: { cx: 82.35, cy: 46.60 },
  haldi: { cx: 17.65, cy: 82.20 },
  wedding: { cx: 50.00, cy: 82.20 },
  reception: { cx: 82.35, cy: 82.20 },
};

export default function App() {
  // Initial landing directly on the Multi-Window Palace Facade
  const [activeWindow, setActiveWindow] = useState(null);
  const [lastWindow, setLastWindow] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const handleOpenWindow = (win) => {
    if (isClosing || isRsvpOpen) return;
    if (activeWindow?.id === win.id) {
      handleCloseWindow();
      return;
    }
    if (soundEnabled) {
      playWindowOpenSound();
    }
    setLastWindow(win);
    setActiveWindow(win);
    setIsClosing(false);
  };

  const handleCloseWindow = () => {
    if (isClosing || !activeWindow) return;
    if (soundEnabled) {
      playWindowCloseSound();
    }
    setIsClosing(true);

    // Keep camera transform locked onto lastWindow center for 950ms
    // so the camera smoothly zooms directly backwards out of that specific window!
    setTimeout(() => {
      setActiveWindow(null);
      setIsClosing(false);
    }, 950);
  };

  const handleOpenRsvp = (e) => {
    e?.stopPropagation?.();
    if (isClosing || activeWindow) return;
    if (soundEnabled) {
      playWindowOpenSound();
    }
    setIsRsvpOpen(true);
  };

  const handleCloseRsvp = () => {
    if (soundEnabled) {
      playWindowCloseSound();
    }
    setIsRsvpOpen(false);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  // The window currently in focus (persists during closing animation)
  const focusWindow = activeWindow || (isClosing ? lastWindow : null);
  const currentCenter = focusWindow ? WINDOW_CENTERS[focusWindow.id] : null;
  const isZoomedIn = Boolean(activeWindow && !isClosing);

  // Symmetrical cinematic camera transform for both zoom-in and zoom-out
  // scale: 3.95 perfectly expands the 25.3% wide window to 100% of the screen width
  const zoomAnimation = isZoomedIn && currentCenter
    ? {
        scale: 3.95,
        x: `${(50 - currentCenter.cx).toFixed(2)}%`,
        y: `${(50 - currentCenter.cy).toFixed(2)}%`,
        transformOrigin: `${currentCenter.cx}% ${currentCenter.cy}%`,
      }
    : {
        scale: 1,
        x: '0%',
        y: '0%',
        transformOrigin: currentCenter
          ? `${currentCenter.cx}% ${currentCenter.cy}%`
          : '50% 50%',
      };

  return (
    <div className="desktop-viewport-container">
      <IPhoneFrame>
        <main
          id="mockup-scroll-container"
          className="inner-app-scroll relative w-full h-full select-none overflow-hidden touch-none"
        >
          {/* 
            Cinematic Camera Viewport
            Scales and pans smoothly towards the clicked window (Zoom In),
            and smoothly pulls directly backwards from that window (Zoom Out).
          */}
          <motion.div
            className="gpu-layer relative w-full h-full min-h-full overflow-hidden"
            animate={zoomAnimation}
            initial={zoomAnimation}
            transition={{
              duration: isZoomedIn ? 1.0 : 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Base Palace Facade Image */}
            <img
              src={homeBg}
              alt="Royal Palace Facade"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="gpu-layer absolute inset-0 w-full h-full object-fill object-top select-none pointer-events-none"
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />

            {/* 
              Palace Facade Inscription & RSVP Button
              Embedded directly in the sandstone wall above the upper windows.
            */}
            <div
              className={`absolute inset-x-0 z-30 flex items-center justify-center transition-opacity duration-700 pointer-events-auto ${
                isZoomedIn || isRsvpOpen ? 'opacity-0 pointer-events-none' : 'opacity-95'
              }`}
              style={{
                top: '27.4%',
              }}
            >
              <p
                className="font-serif tracking-[0.16em] sm:tracking-[0.20em] uppercase text-[11px] sm:text-[12px] font-semibold select-none"
                style={{
                  color: '#735545',
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.65), 0 -1px 1px rgba(70, 45, 30, 0.3)',
                  mixBlendMode: 'multiply',
                }}
              >
                Tap any window to enter
              </p>

              {/* RSVP Button */}
              <motion.button
                type="button"
                onClick={handleOpenRsvp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-30 ml-7 sm:ml-9 px-3.5 py-1 sm:px-4 sm:py-1 rounded-full bg-[#fbf7f1]/90 hover:bg-[#faf4ec] border border-[#cfb8a6] text-[#4d3424] font-serif font-bold text-[10.5px] sm:text-[11.5px] tracking-wider uppercase active:scale-95 transition-all cursor-pointer pointer-events-auto flex items-center justify-center whitespace-nowrap"
                style={{
                  boxShadow: 'inset 0 2px 3px rgba(60, 38, 24, 0.18), 0 1px 1px rgba(255, 255, 255, 0.85)',
                  textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)',
                  touchAction: 'manipulation',
                }}
              >
                <span>RSVP</span>
              </motion.button>
            </div>

            {/* 6 Arched Palace Windows Grid */}
            <PalaceWindowsGrid
              onSelectWindow={handleOpenWindow}
              activeWindowId={activeWindow?.id}
              isClosing={isClosing}
              isRsvpOpen={isRsvpOpen}
            />
          </motion.div>

          {/* Interactive RSVP Form Modal */}
          <RsvpModal
            isOpen={isRsvpOpen}
            onClose={handleCloseRsvp}
          />

          {/* Ambient Sound Toggle (Fades out when zoomed into a window) */}
          <motion.div
            animate={{ opacity: isZoomedIn ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-11 right-3.5 z-30 ${
              isZoomedIn ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
          >
            <button
              type="button"
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Palace Chimes' : 'Enable Palace Chimes'}
              className="w-7 h-7 rounded-full bg-black/45 hover:bg-black/70 border border-[#d4af37]/40 flex items-center justify-center text-[#e0a96d] backdrop-blur-md active:scale-90 transition-all shadow-md"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-white/50" />
              )}
            </button>
          </motion.div>

          {/* 
            Dedicated Full-Screen Page View
            Crossfades in as zoom lands, displaying 100% of the artwork
            without any cropping, clipping, or hiding of background elements.
          */}
          <AnimatePresence>
            {activeWindow && !isClosing && (
              <EventPageView
                key={activeWindow.id}
                windowData={activeWindow}
                onBack={handleCloseWindow}
                soundEnabled={soundEnabled}
              />
            )}
          </AnimatePresence>
        </main>
      </IPhoneFrame>
    </div>
  );
}
