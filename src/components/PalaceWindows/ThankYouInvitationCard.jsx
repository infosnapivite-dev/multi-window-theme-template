import React from 'react';
import { motion } from 'framer-motion';
import { THANK_YOU_DETAILS } from '../../data/windowsData';

/**
 * Royal Golden Filigree Ornament Divider
 * Recreated matching the traditional Indian wedding invitation divider in reference image
 */
function GoldFiligreeDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 160 18"
        className="w-40 sm:w-48 h-4 text-[#e2b77a]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        {/* Left line with outer diamond arrow */}
        <line x1="12" y1="9" x2="52" y2="9" stroke="url(#thankYouGoldGrad)" strokeWidth="1" />
        <polygon points="12,9 7,6.5 2,9 7,11.5" fill="url(#thankYouGoldGrad)" />
        <circle cx="20" cy="9" r="1.5" fill="url(#thankYouGoldGrad)" />

        {/* Center loops / filigree scroll */}
        <path
          d="M 52,9 C 60,3 68,3 74,9 C 68,15 60,15 52,9 Z"
          stroke="url(#thankYouGoldGrad)"
          strokeWidth="1.1"
          fill="none"
        />
        <circle cx="80" cy="9" r="2.2" fill="url(#thankYouGoldGrad)" />
        <path
          d="M 108,9 C 100,3 92,3 86,9 C 92,15 100,15 108,9 Z"
          stroke="url(#thankYouGoldGrad)"
          strokeWidth="1.1"
          fill="none"
        />

        {/* Right line with outer diamond arrow */}
        <line x1="108" y1="9" x2="148" y2="9" stroke="url(#thankYouGoldGrad)" strokeWidth="1" />
        <circle cx="140" cy="9" r="1.5" fill="url(#thankYouGoldGrad)" />
        <polygon points="148,9 153,6.5 158,9 153,11.5" fill="url(#thankYouGoldGrad)" />

        <defs>
          <linearGradient id="thankYouGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff8dc" />
            <stop offset="50%" stopColor="#fbd36d" />
            <stop offset="100%" stopColor="#d8a038" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Thank You / Warm Regards Card (Window 6)
 * Accurately designed per reference image:
 * - WARM REGARDS title in gold gradient
 * - Sadhana - Manmohan, Punam - Jagmohan, Purva - Mrigank, Yashaswini
 * - & The Chhaparwal Family
 * - Gold filigree divider
 * - Chirayu Pharmaceuticals & phone numbers
 * - Bottom gold filigree divider
 */
export default function ThankYouInvitationCard({ animated = true }) {
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
      {/* Main Text Content (Vertically centered) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* 1. WARM REGARDS Title with Metallic Gold Sheen */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="flex justify-center"
        >
          <h1
            className="font-serif font-bold text-3xl sm:text-[36px] tracking-[0.04em] uppercase select-none leading-none inline-block text-center"
            style={{
              background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.55))',
              transform: 'scaleX(0.92)',
              transformOrigin: 'center',
            }}
          >
            {THANK_YOU_DETAILS.title}
          </h1>
        </motion.div>

        {/* 2. Family Members */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-6 sm:mt-7 space-y-1.5 font-serif text-[14px] sm:text-[15px] text-[#fbf6ee] leading-relaxed drop-shadow-sm"
        >
          {THANK_YOU_DETAILS.familyMembers.map((member) => (
            <p key={member}>{member}</p>
          ))}
          <p className="italic text-sm text-[#eedcc5] pt-0.5">{THANK_YOU_DETAILS.conjunction}</p>
          <p className="font-medium text-[15px] sm:text-[16px] text-[#fbf6ee] pt-0.5">
            {THANK_YOU_DETAILS.familyName}
          </p>
        </motion.div>

        {/* 3. Upper Gold Filigree Divider */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="my-5 sm:my-6"
        >
          <GoldFiligreeDivider />
        </motion.div>

        {/* 4. Business & Contact Numbers */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="space-y-1 font-serif drop-shadow-sm text-center"
        >
          <p className="font-medium text-[15px] sm:text-[16px] text-[#fbf6ee] tracking-wide">
            {THANK_YOU_DETAILS.companyName}
          </p>
          <p className="text-[13px] sm:text-[14px] text-[#eedcc5] tracking-wider pt-0.5">
            {THANK_YOU_DETAILS.contactNumbers}
          </p>
        </motion.div>

        {/* 5. Lower Gold Filigree Divider */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mt-5 sm:mt-6"
        >
          <GoldFiligreeDivider />
        </motion.div>
      </motion.div>
    </div>
  );
}

