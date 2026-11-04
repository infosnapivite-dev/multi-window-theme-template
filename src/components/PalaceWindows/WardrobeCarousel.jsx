import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { playWindowOpenSound } from '../../utils/audio';
import FlashingStarsLayer from './FlashingStarsLayer';
import wardrobe1 from '../../assets/wardrobe-1.png';
import wardrobe2 from '../../assets/wardrobe-2.png';
import wardrobe3 from '../../assets/wardrobe-3.png';
import wardrobe4 from '../../assets/wardrobe-4.png';

const WARDROBE_LOOKS = [
  {
    id: 1,
    eventName: 'Haldi Ceremony',
    tagline: 'Santorini Blue & White • Breezy Pastels',
    dressCode: 'Sky Blue Indo-Western & Cape Lehenga',
    image: wardrobe1,
    accentColor: '#64b5f6',
    glowColor: 'rgba(100, 181, 246, 0.35)',
  },
  {
    id: 2,
    eventName: 'Mehendi Soirée',
    tagline: 'Vibrant Traditions • Festive Pink & Navy',
    dressCode: 'Magenta Zardozi Lehenga & Royal Brocade Sherwani',
    image: wardrobe2,
    accentColor: '#ec407a',
    glowColor: 'rgba(236, 64, 122, 0.35)',
  },
  {
    id: 3,
    eventName: 'Sangeet Evening',
    tagline: 'Midnight Glamour • Shimmer Indo-Western',
    dressCode: 'Royal Blue Shimmer Ensemble & Formal Tuxedo Chic',
    image: wardrobe3,
    accentColor: '#5c6bc0',
    glowColor: 'rgba(92, 107, 192, 0.35)',
  },
  {
    id: 4,
    eventName: 'The Wedding Ceremony',
    tagline: 'Imperial Royal Splendor • Regal Purple & Gold',
    dressCode: 'Regal Purple Zari Saree & Black Velvet Bandhgala',
    image: wardrobe4,
    accentColor: '#ffd778',
    glowColor: 'rgba(255, 215, 120, 0.35)',
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 140 : dir < 0 ? -140 : 0,
    y: dir > 0 ? 90 : dir < 0 ? -90 : 0,
    rotate: dir > 0 ? 7 : dir < 0 ? -7 : 0,
    opacity: 0,
    scale: 0.82,
  }),
  center: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 260, damping: 14, mass: 0.85 },
      y: { type: 'spring', stiffness: 260, damping: 14, mass: 0.85 },
      rotate: { type: 'spring', stiffness: 240, damping: 15 },
      scale: { type: 'spring', stiffness: 280, damping: 14 },
      opacity: { duration: 0.28, ease: 'easeOut' },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -140 : 140,
    y: dir > 0 ? -90 : 90,
    rotate: dir > 0 ? -7 : 7,
    opacity: 0,
    scale: 0.82,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 20 },
      y: { type: 'spring', stiffness: 280, damping: 20 },
      rotate: { duration: 0.22 },
      scale: { duration: 0.22 },
      opacity: { duration: 0.2 },
    },
  }),
};

export default function WardrobeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentLook = WARDROBE_LOOKS[currentIndex];

  const handlePrev = () => {
    playWindowOpenSound();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? WARDROBE_LOOKS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playWindowOpenSound();
    setDirection(1);
    setCurrentIndex((prev) => (prev === WARDROBE_LOOKS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    playWindowOpenSound();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="absolute inset-0 z-20 w-full h-full overflow-hidden select-none pointer-events-auto touch-none flex flex-col justify-between">
      {/* 1. Ambient Celestial Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FlashingStarsLayer showShootingStar={false} />
      </div>

      {/* 2. Top Header Section (Below floating Back button) */}
      <div className="relative z-10 pt-10 sm:pt-11 px-6 flex flex-col items-center text-center pointer-events-none">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/45 border border-[#d4af37]/40 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          <Sparkles className="w-2.5 h-2.5 text-[#ffd778]" />
          <span className="font-serif text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ffd778]">
            WARDROBE LOOKBOOK
          </span>
        </div>

        {/* Dynamic Event Name with Metallic Gold Sheen */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLook.id}
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 340,
              damping: 16,
              mass: 0.8,
            }}
            className="mt-1 sm:mt-1.5 flex flex-col items-center"
          >
            <h2
              className="font-serif font-bold text-lg sm:text-[22px] tracking-[0.05em] uppercase leading-tight text-center"
              style={{
                background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45))',
              }}
            >
              {currentLook.eventName}
            </h2>
            <p className="font-serif text-[11px] sm:text-xs text-[#fae092]/90 tracking-wide mt-0.5 drop-shadow-sm font-medium">
              {currentLook.tagline}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Center Couple Illustration Carousel */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center px-4 overflow-hidden my-auto min-h-0">
        {/* Subtle Radial Glow matching Outfit Theme */}
        <motion.div
          key={`glow-${currentLook.id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.45 }}
          className="absolute w-64 h-64 rounded-full filter blur-3xl pointer-events-none -z-10"
          style={{ backgroundColor: currentLook.glowColor }}
        />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.28}
            onDragEnd={(_, { offset, velocity }) => {
              const diagDist = offset.x + offset.y * 0.5;
              const diagVel = velocity.x + velocity.y * 0.5;
              if (diagDist > 35 || diagVel > 300) {
                handlePrev();
              } else if (diagDist < -35 || diagVel < -300) {
                handleNext();
              }
            }}
            className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          >
            {/* Subtle Idle Diagonal Floating Bounce */}
            <motion.div
              animate={{
                y: [0, -7, 0, 5, 0],
                x: [0, 4, 0, -4, 0],
                rotate: [0, 0.6, 0, -0.6, 0],
              }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex items-center justify-center w-full h-full"
            >
              <img
                src={currentLook.image}
                alt={currentLook.eventName}
                loading="eager"
                decoding="sync"
                className="max-h-[46vh] sm:max-h-[50vh] w-auto max-w-[85%] object-contain select-none pointer-events-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)] filter"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          type="button"
          title="Previous Outfit"
          aria-label="Previous Outfit"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 border border-[#d4af37]/60 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center justify-center text-[#ffd778] transition-colors cursor-pointer pointer-events-auto"
        >
          <ChevronLeft className="w-5 h-5 text-[#ffd778] stroke-[2.5]" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          type="button"
          title="Next Outfit"
          aria-label="Next Outfit"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 border border-[#d4af37]/60 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center justify-center text-[#ffd778] transition-colors cursor-pointer pointer-events-auto"
        >
          <ChevronRight className="w-5 h-5 text-[#ffd778] stroke-[2.5]" />
        </button>
      </div>

      {/* 4. Bottom Info Card & Slide Indicators */}
      <div className="relative z-20 pb-5 sm:pb-6 px-4 flex flex-col items-center gap-2 pointer-events-auto">
        {/* Attire Detail Pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`attire-${currentLook.id}`}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 340,
              damping: 15,
              mass: 0.8,
            }}
            className="max-w-[92%] px-3.5 py-1.5 rounded-full bg-black/65 border border-[#d4af37]/45 backdrop-blur-md shadow-[0_4px_14px_rgba(0,0,0,0.6)] text-center"
          >
            <p className="font-serif text-[11px] sm:text-xs text-[#fff5ea] font-medium leading-snug tracking-wide">
              <span className="text-[#ffd778] font-semibold mr-1">Attire:</span>
              {currentLook.dressCode}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicator Dots & Counter */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/55 border border-white/20 backdrop-blur-md">
          {WARDROBE_LOOKS.map((look, idx) => (
            <button
              key={look.id}
              onClick={() => handleDotClick(idx)}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-5 bg-gradient-to-r from-[#ffd778] to-[#f59e0b] shadow-[0_0_8px_rgba(255,215,120,0.8)]'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
          <span className="ml-1 text-[10px] font-mono text-[#fae092]/80 font-medium">
            {currentIndex + 1}/{WARDROBE_LOOKS.length}
          </span>
        </div>
      </div>
    </div>
  );
}
