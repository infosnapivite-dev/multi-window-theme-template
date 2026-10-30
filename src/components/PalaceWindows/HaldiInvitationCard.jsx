import React from 'react';
import { motion } from 'framer-motion';
import { HALDI_DETAILS } from '../../data/windowsData';
import ButterfliesLayer from './ButterfliesLayer';

/**
 * Haldi Ceremony Invitation Text Card ("Vibe With Blue")
 * Accurately designed per reference image:
 * - 7TH FEBRUARY 2026 header
 * - VIBE WITH BLUE title with metallic gold sheen & condensed kerning
 * - Three-line narrative:
 *   "Sun-kissed,"
 *   "poolside vibes."
 *   "Haldi but make it Santorini."
 * - 11:00 am at Poolside
 * - Vertically centered in the azure Mediterranean blue canvas
 */
export default function HaldiInvitationCard({ animated = true }) {
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
      <ButterfliesLayer theme="haldi" />

      {/* Main Text Content (Positioned higher to let poolside artwork breathe) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-center px-6 text-center -translate-y-16 sm:-translate-y-20 relative z-20"
      >
        {/* 1. Date Header */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="font-serif font-medium text-sm sm:text-[15px] tracking-[0.20em] uppercase text-[#fbf6ee] drop-shadow-sm"
        >
          <span>{HALDI_DETAILS.dateDay}</span>
          <sup className="text-[10px] -top-1 ml-0.5 font-sans font-semibold tracking-normal">
            {HALDI_DETAILS.dateSup}
          </sup>{' '}
          <span>{HALDI_DETAILS.dateRest}</span>
        </motion.p>

        {/* 2. VIBE WITH BLUE Title with Metallic Gold Sheen (Condensed Kerning) */}
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
            {HALDI_DETAILS.title}
          </h1>
        </motion.div>

        {/* 3. Three-Line Haldi Tagline */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 space-y-1 font-serif text-sm sm:text-[15px] text-[#fbf6ee] leading-relaxed drop-shadow-sm"
        >
          <p>{HALDI_DETAILS.taglineLine1}</p>
          <p>{HALDI_DETAILS.taglineLine2}</p>
          <p>{HALDI_DETAILS.taglineLine3}</p>
        </motion.div>

        {/* 4. Event Time */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 font-serif text-sm sm:text-[15px] text-[#fbf6ee] tracking-wide drop-shadow-sm font-normal"
        >
          {HALDI_DETAILS.time}
        </motion.p>

        {/* 5. Preposition 'at' */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4 font-serif italic text-sm text-[#eedcc5] drop-shadow-sm"
        >
          {HALDI_DETAILS.conjunction}
        </motion.p>

        {/* 6. Venue */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-1.5 font-serif font-medium text-base sm:text-[18px] text-[#fbf6ee] tracking-wide drop-shadow-sm"
        >
          {HALDI_DETAILS.venue}
        </motion.p>
      </motion.div>
    </div>
  );
}

