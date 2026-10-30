import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_COUPLE } from '../../data/windowsData';
import ButterfliesLayer from './ButterfliesLayer';

/**
 * Royal Indian Wedding Invitation Text Card
 * Accurately designed per reference image with realistic animated butterflies
 */
export default function HomeInvitationCard({ animated = true, isFirstLanding = false }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: isFirstLanding ? 0.25 : 0.65,
        staggerChildren: 0.09,
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
      <ButterfliesLayer theme="gold" />

      {/* Main Invitation Text Content */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-start pointer-events-none select-none px-6 pt-16 sm:pt-20 text-center relative z-20"
      >
        {/* 1. Divine Blessing */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="font-serif italic text-xs sm:text-[13px] tracking-[0.14em] text-[#eedcc5] drop-shadow-sm"
        >
          {WEDDING_COUPLE.blessing}
        </motion.p>

        {/* 2. Groom's Parents */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4 space-y-0.5 font-serif text-sm sm:text-[15px] text-[#fbf6ee] tracking-[0.06em] leading-snug drop-shadow-sm font-medium"
        >
          <p>{WEDDING_COUPLE.groomParentsLine1}</p>
          <p>{WEDDING_COUPLE.groomParentsLine2}</p>
        </motion.div>

        {/* 3. Invitation Clause */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4 space-y-0.5 font-serif italic text-xs sm:text-[13px] text-[#eedcc5] leading-snug drop-shadow-sm"
        >
          <p>{WEDDING_COUPLE.inviteLine1}</p>
          <p>{WEDDING_COUPLE.inviteLine2}</p>
        </motion.div>

        {/* 4. Groom's Name (PUSHKAL) with Metallic Gold Sheen */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-4 sm:mt-5"
        >
          <h1
            className="font-serif font-bold text-3xl sm:text-[36px] tracking-[0.18em] uppercase select-none leading-none"
            style={{
              background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.55))',
            }}
          >
            {WEDDING_COUPLE.groomName}
          </h1>
        </motion.div>

        {/* 5. Groom's Lineage / Grandparents */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-2.5 sm:mt-3 space-y-0.5 font-serif text-[11px] sm:text-xs text-[#eedcc5]/90 leading-snug drop-shadow-sm"
        >
          <p>{WEDDING_COUPLE.groomLineageLine1}</p>
          <p>{WEDDING_COUPLE.groomLineageLine2}</p>
        </motion.div>

        {/* 6. Conjunction (with) */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4 font-serif italic text-sm sm:text-[15px] text-[#dfc08a] tracking-wider drop-shadow-sm"
        >
          {WEDDING_COUPLE.conjunction}
        </motion.p>

        {/* 7. Bride's Name (RADHIKA) with Metallic Gold Sheen */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-3.5 sm:mt-4"
        >
          <h2
            className="font-serif font-bold text-3xl sm:text-[36px] tracking-[0.18em] uppercase select-none leading-none"
            style={{
              background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.55))',
            }}
          >
            {WEDDING_COUPLE.brideName}
          </h2>
        </motion.div>

        {/* 8. Bride's Parents (Indian Wedding) */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-2.5 sm:mt-3 font-serif text-[11px] sm:text-xs text-[#eedcc5]/90 leading-snug drop-shadow-sm"
        >
          <p>{WEDDING_COUPLE.brideParents}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

