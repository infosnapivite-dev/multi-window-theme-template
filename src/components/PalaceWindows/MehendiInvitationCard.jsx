import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { WEDDING_EVENTS_LIST } from '../../data/windowsData';
import { playWindowOpenSound, playWindowCloseSound } from '../../utils/audio';
import ButterfliesLayer from './ButterfliesLayer';

/**
 * Animated Musical Notes floating up from the Vintage Gramophone
 * Horn & instrument base area positioned at ~73.5% X, 70.5% Y
 * Controlled, tight musical plume rising with gentle waft
 */
const GRAMOPHONE_NOTES = [
  // 1. Soft waft to the left
  { id: 1, symbol: '♪', delay: 0, duration: 3.2, x1: -8, x2: -16, x3: -24, y1: -28, y2: -65, y3: -105, r1: -8, r2: 10, r3: -5, size: 'text-sm' },
  // 2. Straight up with tiny gentle wave
  { id: 2, symbol: '♫', delay: 0.6, duration: 3.6, x1: 4, x2: -3, x3: 6, y1: -35, y2: -75, y3: -120, r1: 8, r2: -6, r3: 10, size: 'text-base' },
  // 3. Slight drift to the right-center
  { id: 3, symbol: '♬', delay: 1.2, duration: 3.0, x1: 6, x2: 12, x3: 16, y1: -25, y2: -58, y3: -95, r1: 6, r2: -10, r3: 5, size: 'text-xs' },
  // 4. Gentle wave to the left
  { id: 4, symbol: '♩', delay: 1.8, duration: 3.5, x1: -6, x2: -14, x3: -20, y1: -30, y2: -70, y3: -110, r1: -10, r2: 8, r3: -8, size: 'text-sm' },
  // 5. Slight curve right then center
  { id: 5, symbol: '♪', delay: 2.4, duration: 3.4, x1: 7, x2: 3, x3: 8, y1: -32, y2: -72, y3: -115, r1: -6, r2: 10, r3: -7, size: 'text-xs' },
  // 6. Ascending with subtle S-curve
  { id: 6, symbol: '♫', delay: 3.0, duration: 3.8, x1: -4, x2: 5, x3: -3, y1: -38, y2: -82, y3: -125, r1: 10, r2: -8, r3: 12, size: 'text-base' },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.28 },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.22 },
    },
  }),
};

export default function MehendiInvitationCard() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [direction, setDirection] = useState(1);

  const handleEventClick = (evt) => {
    playWindowOpenSound();
    setDirection(1);
    setSelectedEvent(evt);
  };

  const handleBackToList = () => {
    playWindowCloseSound();
    setDirection(-1);
    setSelectedEvent(null);
  };

  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
      {/* Lifelike 3D Flying Butterflies Layer (Spread around screen edges) */}
      <ButterfliesLayer theme="mehendi" />

      {/* Main Content Area (Vertically balanced) */}
      <div className="w-full h-full flex flex-col items-center justify-center px-5 sm:px-6 text-center relative z-20 -translate-y-3 sm:-translate-y-4">
        <AnimatePresence mode="wait" custom={direction}>
          {!selectedEvent ? (
            /* VIEW A: All Events List View */
            <motion.div
              key="list"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              {/* 1. Date Header */}
              <p className="font-serif font-medium text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#eedcc5] drop-shadow-sm">
                <span>6ᵀᴴ & 7ᵀᴴ FEBRUARY 2026</span>
              </p>

              {/* 2. WEDDING FESTIVITIES Title with Metallic Gold Sheen */}
              <div className="mt-2 sm:mt-2.5 flex justify-center">
                <h1
                  className="font-serif font-bold text-lg sm:text-[22px] tracking-[0.06em] uppercase select-none leading-tight inline-block text-center"
                  style={{
                    background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45))',
                  }}
                >
                  WEDDING FESTIVITIES
                </h1>
              </div>

              {/* 3. Instruction Tagline */}
              <p className="mt-1 sm:mt-1.5 font-serif italic text-xs text-[#eedcc5]/85 tracking-wide drop-shadow-sm">
                Select an event below to view time, date & venue
              </p>

              {/* 4. All 4 Events Centered List */}
              <div className="w-full max-w-[270px] sm:max-w-[290px] mt-3.5 sm:mt-4 pointer-events-auto divide-y divide-[#ffd778]/20">
                {WEDDING_EVENTS_LIST.map((evt) => (
                  <motion.button
                    key={evt.id}
                    onClick={() => handleEventClick(evt)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    className="w-full text-center flex flex-col items-center justify-center py-2.5 sm:py-3 px-2 transition-all cursor-pointer group"
                  >
                    <h3 className="font-serif font-bold text-[13px] sm:text-[14.5px] tracking-wide text-[#fdf8f0] group-hover:text-[#ffd778] transition-colors leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                      {evt.name}
                    </h3>
                    <p className="font-sans text-[10.5px] sm:text-[11px] text-[#eedcc5]/90 mt-0.5 tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {evt.dateBadge} • {evt.time}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* VIEW B: Selected Event Detail View (Sliding In) */
            <motion.div
              key="detail"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-[290px] sm:max-w-[310px] flex flex-col items-center pointer-events-auto"
            >
              {/* Top: Selected Event Name */}
              <h1
                className="font-serif font-bold text-xl sm:text-[24px] tracking-[0.04em] uppercase select-none leading-tight inline-block text-center"
                style={{
                  background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45))',
                }}
              >
                {selectedEvent.name}
              </h1>

              {/* Tagline / Narrative */}
              {selectedEvent.tagline && (
                <p className="mt-2 font-serif italic text-xs sm:text-[12.5px] text-[#eedcc5]/90 tracking-wide leading-relaxed drop-shadow-sm px-2">
                  "{selectedEvent.tagline}"
                </p>
              )}

              {/* Delicate Gold Divider */}
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#ffd778]/50 to-transparent my-3 sm:my-3.5" />

              {/* Bottom: Event Details */}
              <div className="w-full space-y-2.5 sm:space-y-3">
                {/* Date & Time */}
                <div className="space-y-0.5 text-center">
                  <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-[#eedcc5]/70 font-semibold">
                    Date & Time
                  </p>
                  <p className="font-serif font-bold text-xs sm:text-[13.5px] text-[#fbf6ee] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                    {selectedEvent.dateFull}
                  </p>
                  <p className="font-serif text-xs text-[#ffd778] drop-shadow-sm">
                    {selectedEvent.time}
                  </p>
                </div>

                {/* Location / Venue */}
                <div className="space-y-0.5 text-center">
                  <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-[#eedcc5]/70 font-semibold">
                    Location / Venue
                  </p>
                  <p className="font-serif font-bold text-xs sm:text-[13.5px] text-[#fbf6ee] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                    {selectedEvent.location}
                  </p>
                </div>

                {/* Dress Code (if present) */}
                {selectedEvent.dressCode && (
                  <div className="space-y-0.5 text-center">
                    <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-[#eedcc5]/70 font-semibold">
                      Dress Code
                    </p>
                    <p className="font-serif text-[11.5px] sm:text-xs text-[#eedcc5]/90 drop-shadow-sm">
                      {selectedEvent.dressCode}
                    </p>
                  </div>
                )}
              </div>

              {/* In Last: Back Button (Hides details and returns to event list) */}
              <motion.button
                onClick={handleBackToList}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="mt-4 sm:mt-5 py-1.5 sm:py-2 px-5 sm:px-6 rounded-full bg-gradient-to-r from-[#edd085] via-[#fae092] to-[#d4af37] text-[#2c1a06] font-serif font-bold text-xs sm:text-[12.5px] tracking-wider uppercase shadow-[0_4px_16px_rgba(212,175,55,0.45)] hover:brightness-105 active:scale-95 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer border border-white/50"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#2c1a06] stroke-[2.5]" />
                <span>Back</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 
        Floating Animated Musical Notes Emerging from the Vintage Gramophone Instrument
        Horn positioned at ~73.5% X, 70.5% Y
      */}
      <div
        className="absolute pointer-events-none select-none z-30"
        style={{
          left: '73.5%',
          top: '70.5%',
        }}
      >
        {GRAMOPHONE_NOTES.map((note) => (
          <motion.span
            key={note.id}
            className={`absolute ${note.size} font-serif font-bold pointer-events-none select-none`}
            style={{
              color: '#ffd066',
              textShadow: '0 0 8px rgba(255, 208, 102, 0.85), 0 0 16px rgba(212, 175, 55, 0.55)',
            }}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.3, rotate: 0 }}
            animate={{
              opacity: [0, 0.95, 0.85, 0],
              x: [0, note.x1, note.x2, note.x3],
              y: [0, note.y1, note.y2, note.y3],
              scale: [0.3, 1.15, 1, 0.75],
              rotate: [0, note.r1, note.r2, note.r3],
            }}
            transition={{
              duration: note.duration,
              delay: 0.65 + note.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {note.symbol}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
