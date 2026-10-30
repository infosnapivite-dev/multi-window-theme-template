import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DETAILS } from '../../data/windowsData';
import FlashingStarsLayer from './FlashingStarsLayer';

/**
 * Wedding Ceremony Invitation Text Card ("The Wedding Ceremony")
 * Accurately designed per reference image:
 * - 7TH FEBRUARY 2026 header
 * - THE WEDDING CEREMONY 2-line title with solid luxury gold color (no gradient)
 * - Three-line narrative:
 *   "Here begins forever."
 *   "Where masala meets Mozart,"
 *   "and Pushkal & Radhika take their sacred pheras."
 * - 5:00 pm onward at Bagh-E-Inayat
 * - Animated flashing celestial stars echoing the royal chandelier ambiance
 */

export default function WeddingInvitationCard({ animated = true }) {
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
      {/* Animated Flashing Stars Layer (Chandelier & Candlelight Starlight) */}
      <FlashingStarsLayer showShootingStar={false} />

      {/* Main Text Content (Brought slightly down into balanced position) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-center px-6 text-center -translate-y-12 sm:-translate-y-14"
      >
        {/* 1. Date Header */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="font-serif font-medium text-sm sm:text-[15px] tracking-[0.20em] uppercase text-[#fbf6ee] drop-shadow-sm"
        >
          <span>{WEDDING_DETAILS.dateDay}</span>
          <sup className="text-[10px] -top-1 ml-0.5 font-sans font-semibold tracking-normal">
            {WEDDING_DETAILS.dateSup}
          </sup>{' '}
          <span>{WEDDING_DETAILS.dateRest}</span>
        </motion.p>

        {/* 2. THE WEDDING CEREMONY Title with Solid Luxury Gold Color (No Gradient) */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-4 sm:mt-5 flex justify-center"
        >
          <h1
            className="font-serif font-bold text-3xl sm:text-[36px] tracking-[0.03em] sm:tracking-[0.04em] uppercase select-none leading-[1.08] flex flex-col items-center text-center text-[#fae092]"
            style={{
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.55))',
              transform: 'scaleX(0.92)',
              transformOrigin: 'center',
            }}
          >
            <span>{WEDDING_DETAILS.titleLine1}</span>
            <span className="mt-0.5 sm:mt-1">{WEDDING_DETAILS.titleLine2}</span>
          </h1>
        </motion.div>

        {/* 3. Three-Line Wedding Tagline */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6 space-y-1 font-serif text-sm sm:text-[15px] text-[#fbf6ee] leading-relaxed drop-shadow-sm"
        >
          <p>{WEDDING_DETAILS.taglineLine1}</p>
          <p>{WEDDING_DETAILS.taglineLine2}</p>
          <p>{WEDDING_DETAILS.taglineLine3}</p>
        </motion.div>

        {/* 4. Event Time, 5. Preposition 'at', & 6. Venue (Shifted 30px further left) */}
        <motion.div 
          variants={animated ? itemVariants : undefined}
          className="flex flex-col items-center"
          style={{ transform: 'translateX(-78px)' }}
        >
          {/* 4. Event Time */}
          <motion.p
            variants={animated ? itemVariants : undefined}
            className="mt-5 sm:mt-6 font-serif text-sm sm:text-[15px] text-[#fbf6ee] tracking-wide drop-shadow-sm font-normal"
          >
            {WEDDING_DETAILS.time}
          </motion.p>

          {/* 5. Preposition 'at' */}
          <motion.p
            variants={animated ? itemVariants : undefined}
            className="mt-3.5 sm:mt-4 font-serif italic text-sm text-[#eedcc5] drop-shadow-sm"
          >
            {WEDDING_DETAILS.conjunction}
          </motion.p>

          {/* 6. Venue */}
          <motion.p
            variants={animated ? itemVariants : undefined}
            className="mt-1.5 font-serif font-medium text-base sm:text-[18px] text-[#fbf6ee] tracking-wide drop-shadow-sm"
          >
            {WEDDING_DETAILS.venue}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

