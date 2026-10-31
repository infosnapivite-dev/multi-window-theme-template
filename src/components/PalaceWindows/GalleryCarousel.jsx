import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { playWindowOpenSound } from '../../utils/audio';
import gallery1 from '../../assets/gallery-1.webp';
import gallery3 from '../../assets/gallery-3.webp';
import haldiFrame from '../../assets/haldi.png';
import ButterfliesLayer from './ButterfliesLayer';

const GALLERY_PHOTOS = [
  { id: 1, src: gallery1, title: 'Pre-Wedding Memories' },
  { id: 2, src: gallery3, title: 'Sacred Promises' },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    playWindowOpenSound();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playWindowOpenSound();
    setDirection(1);
    setCurrentIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    playWindowOpenSound();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none touch-none">
      {/* 1. Full Page Background Photo Carousel (Behind the frame) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, { offset }) => {
              if (offset.x > 45) {
                handlePrev();
              } else if (offset.x < -45) {
                handleNext();
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <img
              src={GALLERY_PHOTOS[currentIndex].src}
              alt={GALLERY_PHOTOS[currentIndex].title}
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Transparent Haldi PNG Frame Overlay (On top of carousel) */}
      <img
        src={haldiFrame}
        alt=""
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none z-10"
      />

      {/* 3. Subtle Ambient Butterflies */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ButterfliesLayer theme="haldi" />
      </div>

      {/* 4. Left Arrow Button */}
      <button
        onClick={handlePrev}
        type="button"
        title="Previous Photo"
        aria-label="Previous Photo"
        className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 border border-[#d4af37]/60 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center justify-center text-[#ffd778] active:scale-90 transition-transform cursor-pointer pointer-events-auto group"
      >
        <ChevronLeft className="w-5 h-5 text-[#ffd778] stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* 5. Right Arrow Button */}
      <button
        onClick={handleNext}
        type="button"
        title="Next Photo"
        aria-label="Next Photo"
        className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 border border-[#d4af37]/60 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center justify-center text-[#ffd778] active:scale-90 transition-transform cursor-pointer pointer-events-auto group"
      >
        <ChevronRight className="w-5 h-5 text-[#ffd778] stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* 6. Bottom Gallery Status & Slide Indicators */}
      <div className="absolute bottom-5 sm:bottom-6 inset-x-0 z-30 flex flex-col items-center gap-1.5 pointer-events-auto select-none">
        {/* Caption & Photo Counter */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/65 border border-[#d4af37]/40 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          <Camera className="w-3 h-3 text-[#d4af37]" />
          <span className="font-serif text-[10px] sm:text-[11px] text-[#fae092] font-semibold tracking-wide">
            {currentIndex + 1} / {GALLERY_PHOTOS.length}
          </span>
        </div>

        {/* Interactive Indicator Pills */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => handleDotClick(idx)}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 h-1.5 rounded-full bg-gradient-to-r from-[#edd085] via-[#fae092] to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                  : 'w-2 h-1.5 rounded-full bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

