import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { playWindowOpenSound } from '../../utils/audio';
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
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLive: false,
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

  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center px-4 sm:px-5">
      {/* Animated Flashing Celestial Stars Layer */}
      <FlashingStarsLayer />

      {/* Main Glassmorphic Venue Card */}
      <motion.div
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        className="w-full max-w-[325px] sm:max-w-[340px] flex flex-col items-center text-center pointer-events-auto relative z-20 -translate-y-2 sm:-translate-y-3"
      >
        {/* 1. Header Blessing Badge */}
        <motion.div variants={animated ? itemVariants : undefined}>
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/45 text-[#ffd778] text-[10px] sm:text-[11px] font-serif uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>॥ शुभ विवाह स्थल ॥</span>
          </span>
        </motion.div>

        {/* 2. Main Title */}
        <motion.h1
          variants={animated ? itemVariants : undefined}
          className="font-serif font-bold text-2xl sm:text-[27px] tracking-[0.04em] uppercase select-none leading-tight mt-1.5"
          style={{
            background: 'linear-gradient(180deg, #fff8dc 0%, #fbd36d 26%, #d8a038 65%, #98650e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.55))',
          }}
        >
          THE WEDDING VENUE
        </motion.h1>

        {/* 3. Live Countdown Section */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full mt-2.5 sm:mt-3"
        >
          <p className="font-serif text-[10px] uppercase tracking-[0.22em] text-[#eedcc5]/80 mb-1.5">
            Countdown to Celebrations
          </p>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full">
            {/* Days */}
            <div className="rounded-xl bg-black/60 border border-[#d4af37]/40 backdrop-blur-md py-1.5 px-1 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="font-serif font-bold text-base sm:text-lg text-[#ffd778] leading-none">
                {formatUnit(timeLeft.days)}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#eedcc5]/70 font-semibold mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="rounded-xl bg-black/60 border border-[#d4af37]/40 backdrop-blur-md py-1.5 px-1 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="font-serif font-bold text-base sm:text-lg text-[#ffd778] leading-none">
                {formatUnit(timeLeft.hours)}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#eedcc5]/70 font-semibold mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="rounded-xl bg-black/60 border border-[#d4af37]/40 backdrop-blur-md py-1.5 px-1 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="font-serif font-bold text-base sm:text-lg text-[#ffd778] leading-none">
                {formatUnit(timeLeft.minutes)}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#eedcc5]/70 font-semibold mt-1">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="rounded-xl bg-black/60 border border-[#d4af37]/40 backdrop-blur-md py-1.5 px-1 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="font-serif font-bold text-base sm:text-lg text-[#ffd778] leading-none tabular-nums">
                {formatUnit(timeLeft.seconds)}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#eedcc5]/70 font-semibold mt-1">
                Secs
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Address Details Card */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full mt-2.5 p-2.5 sm:p-3 rounded-2xl bg-black/60 border border-[#d4af37]/35 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)] text-left"
        >
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#ffd778]">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-[#eedcc5]/70 font-semibold">
                  Location & Address
                </span>
                <span className="text-[9px] font-serif text-[#ffd778]/90 italic">Jaipur, RJ</span>
              </div>
              <h3 className="font-serif font-bold text-xs sm:text-[14px] text-[#fae092] leading-snug mt-0.5">
                Bagh-E-Inayat & The Fort
              </h3>
              <p className="font-serif text-[11px] sm:text-xs text-[#fbf6ee]/85 leading-snug mt-0.5">
                Near Amer Heritage Valley, Amber Fort Road, Jaipur, Rajasthan — 302028
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. Time & Date Schedule Card */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="w-full mt-2 p-2.5 sm:p-3 rounded-2xl bg-black/60 border border-[#d4af37]/35 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)] text-left"
        >
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#ffd778]">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-[#eedcc5]/70 font-semibold">
                  Ceremony Schedule & Timings
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-serif text-[#ffd778]">
                  <Calendar className="w-3 h-3 text-[#d4af37]" />
                  <span>6 & 7 Feb 2026</span>
                </span>
              </div>
              <div className="mt-1 space-y-0.5 font-serif text-[11px] sm:text-xs text-[#fbf6ee]/85">
                <p>
                  <span className="text-[#ffd778] font-semibold">Sangeet & Welcome:</span> 6:00 pm onwards
                </p>
                <p>
                  <span className="text-[#ffd778] font-semibold">Wedding Pheras:</span> 5:00 pm onward
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6. Get Directions Button */}
        <motion.button
          variants={animated ? itemVariants : undefined}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleGetDirections}
          type="button"
          title="Open Google Maps Directions"
          className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#edd085] via-[#fae092] to-[#d4af37] text-[#2c1a06] font-serif font-bold text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.45)] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/40"
        >
          <Navigation className="w-4 h-4 text-[#2c1a06] fill-[#2c1a06]" />
          <span>Get Directions (Google Maps)</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#2c1a06]/75 ml-0.5" />
        </motion.button>
      </motion.div>
    </div>
  );
}
