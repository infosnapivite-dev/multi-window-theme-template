import React from 'react';
import { motion } from 'framer-motion';
import { MEHENDI_DETAILS } from '../../data/windowsData';
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

export default function MehendiInvitationCard({ animated = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.65,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
      {/* Lifelike 3D Flying Butterflies Layer (Spread around screen edges) */}
      <ButterfliesLayer theme="mehendi" />

      {/* Main Text Content (Vertically centered) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-center px-6 text-center relative z-20"
      >
        {/* 1. Date Header */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="font-serif font-medium text-sm sm:text-[15px] tracking-[0.20em] uppercase text-[#fbf6ee] drop-shadow-sm"
        >
          <span>{MEHENDI_DETAILS.dateDay}</span>
          <sup className="text-[10px] -top-1 ml-0.5 font-sans font-semibold tracking-normal">
            {MEHENDI_DETAILS.dateSup}
          </sup>{' '}
          <span>{MEHENDI_DETAILS.dateRest}</span>
        </motion.p>

        {/* 2. MEHENDI SOIRÉE Title with Metallic Gold Sheen (Condensed & Tight Kerning) */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-4 sm:mt-5 flex justify-center"
        >
          <h1
            className="font-serif font-bold text-3xl sm:text-[36px] tracking-[0.03em] sm:tracking-[0.04em] uppercase select-none leading-none inline-block"
            style={{
              background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45))',
              transform: 'scaleX(0.92)',
              transformOrigin: 'center',
            }}
          >
            {MEHENDI_DETAILS.title}
          </h1>
        </motion.div>

        {/* 3. Festivities Tagline */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 space-y-1 font-serif text-sm sm:text-[15px] text-[#fbf6ee] leading-relaxed drop-shadow-sm"
        >
          <p>{MEHENDI_DETAILS.taglineLine1}</p>
          <p>{MEHENDI_DETAILS.taglineLine2}</p>
        </motion.div>

        {/* 4. Event Time */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 font-serif text-sm sm:text-[15px] text-[#fbf6ee] tracking-wide drop-shadow-sm font-normal"
        >
          {MEHENDI_DETAILS.time}
        </motion.p>

        {/* 5. Preposition 'at' */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4 font-serif italic text-sm text-[#eedcc5] drop-shadow-sm"
        >
          {MEHENDI_DETAILS.conjunction}
        </motion.p>

        {/* 6. Venue */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-1.5 font-serif font-medium text-base sm:text-[18px] text-[#fbf6ee] tracking-wide drop-shadow-sm"
        >
          {MEHENDI_DETAILS.venue}
        </motion.p>
      </motion.div>

      {/* 
        Floating Animated Musical Notes Emerging from the Vintage Gramophone Instrument
        Tight, controlled stream drifting gently upward from the horn
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
