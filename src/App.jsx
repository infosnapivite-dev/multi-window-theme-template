import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import IPhoneFrame from './components/Chassis/IPhoneFrame';
import PalaceWindowsGrid from './components/PalaceWindows/PalaceWindowsGrid';
import EventPageView from './components/PalaceWindows/EventPageView';
import homeBg from './assets/home-bg.webp';
import './styles/iphone-mockup.css';
import { playWindowOpenSound, playWindowCloseSound } from './utils/audio';
import { WINDOWS_DATA } from './data/windowsData';

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
  // Initial landing directly on the Grand Royal Welcome / Home Page (Window 0)
  const [activeWindow, setActiveWindow] = useState(WINDOWS_DATA[0]);
  const [lastWindow, setLastWindow] = useState(WINDOWS_DATA[0]);
  const [isClosing, setIsClosing] = useState(false);
  const [isFirstLanding, setIsFirstLanding] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleOpenWindow = (win) => {
    if (isClosing) return;
    if (activeWindow?.id === win.id) {
      handleCloseWindow();
      return;
    }
    if (soundEnabled) {
      playWindowOpenSound();
    }
    setIsFirstLanding(false);
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
    setIsFirstLanding(false);

    // Keep camera transform locked onto lastWindow center for 950ms
    // so the camera smoothly zooms directly backwards out of that specific window!
    setTimeout(() => {
      setActiveWindow(null);
      setIsClosing(false);
    }, 950);
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
              Palace Facade Inscription
              Embedded directly in the sandstone wall above the upper windows.
              Blended seamlessly into the palace masonry with an engraved stone relief.
            */}
            <div
              className="absolute inset-x-0 z-10 flex justify-center pointer-events-none select-none transition-opacity duration-300"
              style={{
                top: '27.9%',
                opacity: isZoomedIn ? 0 : 0.78,
              }}
            >
              <p
                className="font-serif tracking-[0.24em] uppercase text-[12px] sm:text-[13px] font-medium"
                style={{
                  color: '#735545',
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.65), 0 -1px 1px rgba(70, 45, 30, 0.3)',
                  mixBlendMode: 'multiply',
                }}
              >
                Tap any window to enter
              </p>
            </div>

            {/* 6 Arched Palace Windows Grid */}
            <PalaceWindowsGrid
              onSelectWindow={handleOpenWindow}
              activeWindowId={activeWindow?.id}
              isClosing={isClosing}
            />
          </motion.div>

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
                onNext={handleCloseWindow}
                isFirstLanding={isFirstLanding}
                soundEnabled={soundEnabled}
              />
            )}
          </AnimatePresence>
        </main>
      </IPhoneFrame>
    </div>
  );
}
