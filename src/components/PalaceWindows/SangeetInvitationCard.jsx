import React from 'react';
import { motion } from 'framer-motion';
import { SANGEET_DETAILS } from '../../data/windowsData';
import FlashingStarsLayer from './FlashingStarsLayer';

/**
 * Sangeet Evening Invitation Text Card
 * Accurately designed per reference image:
 * - 6TH FEBRUARY 2026 header
 * - SANGEET EVENING title with metallic gold sheen & condensed kerning
 * - Three-line narrative:
 *   "One night only."
 *   "Jeeps, stars, sangeet, & chills."
 *   "Get ready to dance the night away."
 * - 6:00 pm at The Fort
 * - Rich constellation of animated flashing & twinkling celestial stars + shooting star
 */

export default function SangeetInvitationCard({ animated = true }) {
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
      {/* Animated Flashing Celestial Stars Layer */}
      <FlashingStarsLayer />

      {/* Main Text Content (Shifted slightly upward for optimal visual balance) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-center px-6 text-center -translate-y-8 sm:-translate-y-10"
      >
        {/* 1. Date Header */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="font-serif font-medium text-sm sm:text-[15px] tracking-[0.20em] uppercase text-[#fbf6ee] drop-shadow-sm"
        >
          <span>{SANGEET_DETAILS.dateDay}</span>
          <sup className="text-[10px] -top-1 ml-0.5 font-sans font-semibold tracking-normal">
            {SANGEET_DETAILS.dateSup}
          </sup>{' '}
          <span>{SANGEET_DETAILS.dateRest}</span>
        </motion.p>

        {/* 2. SANGEET EVENING Title with Metallic Gold Sheen (Condensed Kerning) */}
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
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.55))',
              transform: 'scaleX(0.92)',
              transformOrigin: 'center',
            }}
          >
            {SANGEET_DETAILS.title}
          </h1>
        </motion.div>

        {/* 3. Three-Line Sangeet Tagline */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 space-y-1 font-serif text-sm sm:text-[15px] text-[#fbf6ee] leading-relaxed drop-shadow-sm"
        >
          <p>{SANGEET_DETAILS.taglineLine1}</p>
          <p>{SANGEET_DETAILS.taglineLine2}</p>
          <p>{SANGEET_DETAILS.taglineLine3}</p>
        </motion.div>

        {/* 4. Event Time */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 font-serif text-sm sm:text-[15px] text-[#fbf6ee] tracking-wide drop-shadow-sm font-normal"
        >
          {SANGEET_DETAILS.time}
        </motion.p>

        {/* 5. Preposition 'at' */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4 font-serif italic text-sm text-[#eedcc5] drop-shadow-sm"
        >
          {SANGEET_DETAILS.conjunction}
        </motion.p>

        {/* 6. Venue */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-1.5 font-serif font-medium text-base sm:text-[18px] text-[#fbf6ee] tracking-wide drop-shadow-sm"
        >
          {SANGEET_DETAILS.venue}
        </motion.p>
      </motion.div>
    </div>
  );
}

