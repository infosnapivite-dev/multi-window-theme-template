import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { WEDDING_EVENTS_LIST } from '../../data/windowsData';
import { playWindowOpenSound } from '../../utils/audio';
import ButterfliesLayer from './ButterfliesLayer';
import EventDetailPopup from './EventDetailPopup';

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

export default function MehendiInvitationCard({ animated = true }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (evt) => {
    playWindowOpenSound();
    setSelectedEvent(evt);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.65,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
      {/* Lifelike 3D Flying Butterflies Layer (Spread around screen edges) */}
      <ButterfliesLayer theme="mehendi" />

      {/* Main Content Area (Vertically balanced) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-center px-5 sm:px-6 text-center relative z-20 -translate-y-4 sm:-translate-y-5"
      >
        {/* 1. Date Header */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="font-serif font-medium text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#eedcc5] drop-shadow-sm"
        >
          <span>6ᵀᴴ & 7ᵀᴴ FEBRUARY 2026</span>
        </motion.p>

        {/* 2. WEDDING FESTIVITIES Title with Metallic Gold Sheen */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-2 sm:mt-2.5 flex justify-center"
        >
          <h1
            className="font-serif font-bold text-2xl sm:text-[30px] tracking-[0.04em] uppercase select-none leading-tight inline-block text-center"
            style={{
              background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45))',
            }}
          >
            WEDDING FESTIVITIES
          </h1>
        </motion.div>

        {/* 3. Instruction Tagline */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-1 sm:mt-1.5 font-serif italic text-xs text-[#eedcc5]/85 tracking-wide drop-shadow-sm"
        >
          Select an event below to view time, date & venue
        </motion.p>

        {/* 4. All 4 Events List-Type Buttons */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full max-w-[290px] sm:max-w-xs space-y-2 sm:space-y-2.5 mt-4 sm:mt-5 pointer-events-auto"
        >
          {WEDDING_EVENTS_LIST.map((evt) => (
            <motion.button
              key={evt.id}
              onClick={() => handleEventClick(evt)}
              whileHover={{ scale: 1.025, x: 2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full text-left flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-black/55 hover:bg-black/75 border border-[#d4af37]/40 hover:border-[#ffd778]/80 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/45 flex items-center justify-center font-serif text-[10px] sm:text-[11px] font-bold text-[#fce59c] group-hover:bg-[#d4af37]/35 transition-colors shrink-0">
                  {evt.number}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-xs sm:text-[14px] tracking-wide text-[#fdf8f0] group-hover:text-[#ffd778] transition-colors leading-tight truncate">
                    {evt.name}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-[11px] text-[#eedcc5]/80 mt-0.5 tracking-wide truncate">
                    {evt.dateBadge} • {evt.time}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 group-hover:text-[#ffeaa7] transition-all shrink-0 ml-1.5" />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

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

      {/* Royal Event Detail Popup Card */}
      <EventDetailPopup
        event={selectedEvent}
        isOpen={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
