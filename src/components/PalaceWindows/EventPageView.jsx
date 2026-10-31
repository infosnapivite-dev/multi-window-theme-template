import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { playWindowCloseSound } from '../../utils/audio';
import HomeInvitationCard from './HomeInvitationCard';
import MehendiInvitationCard from './MehendiInvitationCard';
import VenueInvitationCard from './VenueInvitationCard';
import HaldiInvitationCard from './HaldiInvitationCard';
import WeddingInvitationCard from './WeddingInvitationCard';
import ThankYouInvitationCard from './ThankYouInvitationCard';

export default function EventPageView({
  windowData,
  onBack,
  onNext,
  isFirstLanding = false,
  soundEnabled,
}) {
  const handleBack = () => {
    if (soundEnabled) playWindowCloseSound();
    onBack();
  };

  const handleNext = () => {
    if (soundEnabled) playWindowCloseSound();
    if (onNext) {
      onNext();
    } else {
      onBack();
    }
  };

  const isHomePage = windowData.id === 'welcome';
  const isMehendiPage = windowData.id === 'mehendi';
  const isSangeetPage = windowData.id === 'sangeet';
  const isHaldiPage = windowData.id === 'haldi';
  const isWeddingPage = windowData.id === 'wedding';
  const isThankYouPage = windowData.id === 'reception';

  return (
    <motion.div
      initial={{ opacity: isFirstLanding ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.18, ease: 'easeIn' },
      }}
      transition={{
        delay: isFirstLanding ? 0 : 0.5,
        duration: 0.35,
        ease: 'easeOut',
      }}
      className="absolute inset-0 z-40 w-full h-full overflow-hidden select-none pointer-events-auto bg-transparent touch-none overscroll-none"
    >
      {/* 
        Full Pure Background Image
        object-fill ensures 100% of the 1080x1920 artwork is visible:
        - Top chandeliers & hanging lanterns are fully visible
        - Left & right trees, garlands, and peacocks are fully visible
        - Bottom fountains, mandap, and fort gate are fully visible
        - Zero cropping, zero hidden elements!
      */}
      <img
        src={windowData.image}
        alt=""
        loading="eager"
        decoding="sync"
        className="w-full h-full object-fill select-none pointer-events-none"
      />

      {/* Royal Wedding Invitation Text for Home Page (Window 1) */}
      {isHomePage && <HomeInvitationCard isFirstLanding={isFirstLanding} />}

      {/* Mehendi Ceremony Invitation Text for Mehendi Page (Window 2) */}
      {isMehendiPage && <MehendiInvitationCard />}

      {/* Royal Wedding Venue, Address, Timings, Directions & Countdown (Window 3) */}
      {isSangeetPage && <VenueInvitationCard />}

      {/* Haldi Ceremony Invitation Text for Haldi Page (Window 4) */}
      {isHaldiPage && <HaldiInvitationCard />}

      {/* The Wedding Ceremony Invitation Text for Wedding Page (Window 5) */}
      {isWeddingPage && <WeddingInvitationCard />}

      {/* Thank You / Warm Regards Text for Thank You Page (Window 6) */}
      {isThankYouPage && <ThankYouInvitationCard />}

      {/* Floating Minimal Return / Back Button (Shown when navigated from windows facade) */}
      {!isFirstLanding && (
        <button
          onClick={handleBack}
          type="button"
          title="Go Back"
          className="absolute top-10 left-4 z-50 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md text-white text-xs font-medium tracking-wide active:scale-95 transition-all group cursor-pointer pointer-events-auto"
        >
          <ChevronLeft className="w-4 h-4 text-white/90 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back</span>
        </button>
      )}

      {/* Floating Luxury Next Button in Bottom-Right (First visit on Home page) */}
      {isFirstLanding && isHomePage && (
        <motion.button
          onClick={handleNext}
          type="button"
          title="Explore Palace Windows"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-6 right-5 sm:bottom-7 sm:right-6 z-50 flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#edd085] via-[#fae092] to-[#d4af37] text-[#2c1a06] font-serif font-bold text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.5)] border border-white/60 cursor-pointer pointer-events-auto active:scale-95 transition-transform group"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4 text-[#2c1a06] stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      )}
    </motion.div>
  );
}
