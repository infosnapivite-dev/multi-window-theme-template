import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { playWindowOpenSound } from '../../utils/audio';
import goldCircleImg from '../../assets/gold-frame.png';
import FlashingStarsLayer from './FlashingStarsLayer';

/**
 * Target Wedding Date for the Countdown Timer:
 * December 12, 2026 at 16:00:00 (or next upcoming ceremony)
 */
const GET_WEDDING_TARGET = () => {
  const decTarget = new Date('2026-12-12T16:00:00');
  if (decTarget.getTime() > Date.now()) {
    return decTarget;
  }
  return new Date('2027-02-06T11:00:00');
};

function calculateTimeRemaining(target) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function VenueInvitationCard({ animated = true }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(GET_WEDDING_TARGET()));

  useEffect(() => {
    const target = GET_WEDDING_TARGET();
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(target));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGetDirections = () => {
    playWindowOpenSound();
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Bagh-E-Inayat+Amer+Road+Jaipur+Rajasthan';
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const formatUnit = (num) => String(num).padStart(2, '0');

  const countdownUnits = [
    { label: 'Days', value: formatUnit(timeLeft.days) },
    { label: 'Hours', value: formatUnit(timeLeft.hours) },
    { label: 'Mins', value: formatUnit(timeLeft.minutes) },
    { label: 'Secs', value: formatUnit(timeLeft.seconds) },
  ];

  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Animated Flashing Celestial Stars Layer */}
      <FlashingStarsLayer />

      {/* Main Text Container (Lifted Upside, Clean Minimal Width, Countdown at the End) */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full max-w-[245px] sm:max-w-[255px] flex flex-col items-center text-center pointer-events-auto relative z-20 -translate-y-8 sm:-translate-y-10"
      >
        {/* 1. Main Title */}
        <motion.h1
          variants={animated ? itemVariants : undefined}
          className="font-serif font-bold text-2xl sm:text-[25px] tracking-[0.04em] uppercase select-none leading-tight"
          style={{
            background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.65))',
          }}
        >
          THE WEDDING VENUE
        </motion.h1>

        {/* 2. Address Section (Pure Text) */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full mt-2.5 sm:mt-3 space-y-1 text-center"
        >
          <h2 className="font-serif font-bold text-sm sm:text-[15px] text-[#fae092] tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            Bagh-E-Inayat & The Fort
          </h2>
          <p className="font-serif text-[11px] sm:text-xs text-[#fbf6ee]/90 leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            Near Amer Heritage Valley, Amber Fort Road, Jaipur, Rajasthan — 302028
          </p>
        </motion.div>

        {/* 3. Time Section (Pure Text) */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full mt-2 sm:mt-2.5 space-y-0.5 text-center"
        >
          <p className="font-serif font-semibold text-xs sm:text-[13px] tracking-wide text-[#eedcc5] drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            6th & 7th February 2026
          </p>
          <p className="font-serif text-[10.5px] sm:text-[11px] text-[#fbf6ee]/80 leading-snug drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            Sangeet: 6:00 pm onwards
          </p>
          <p className="font-serif text-[10.5px] sm:text-[11px] text-[#fbf6ee]/80 leading-snug drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            Wedding Pheras: 5:00 pm onward
          </p>
        </motion.div>

        {/* 4. Direction Button (Only Direction Name & Arrow Sign) */}
        <motion.button
          variants={animated ? itemVariants : undefined}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetDirections}
          type="button"
          title="Direction"
          className="mt-3 py-1.5 sm:py-2 px-5 sm:px-6 rounded-full bg-gradient-to-r from-[#edd085] via-[#fae092] to-[#d4af37] text-[#2c1a06] font-serif font-bold text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_16px_rgba(212,175,55,0.45)] hover:brightness-105 active:scale-95 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer border border-white/50"
        >
          <span>Direction</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#2c1a06] stroke-[2.5]" />
        </motion.button>

        {/* Delicate Golden Divider */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#ffd778]/50 to-transparent my-3 sm:my-3.5"
        />

        {/* 5. Live Countdown Section (Placed at the Last: 4 Numbers in 4 Circle PNGs) */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full flex flex-col items-center"
        >
          <p className="font-serif text-[9px] uppercase tracking-[0.22em] text-[#eedcc5]/80 mb-2 drop-shadow-sm">
            Countdown to Celebrations
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            {countdownUnits.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                {/* Ornate Gold Circle Frame PNG Container with Continuous Slow Rotation */}
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
                  <motion.img
                    src={goldCircleImg}
                    alt=""
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)] will-change-transform"
                  />
                  {/* Countdown Digit inside the Circle with Luxury Cinzel Serif Font */}
                  <span
                    className="relative z-10 font-cinzel font-bold text-xs sm:text-[14px] text-[#ffd778] leading-none tabular-nums"
                    style={{
                      textShadow: '0 0 8px rgba(255, 215, 120, 0.45), 0 2px 4px rgba(0,0,0,0.95)',
                    }}
                  >
                    {unit.value}
                  </span>
                </div>
                {/* Unit Label */}
                <span className="font-sans text-[7.5px] sm:text-[8px] uppercase tracking-wider text-[#eedcc5]/80 font-semibold mt-1 drop-shadow-sm">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
