import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { playWindowCloseSound } from '../../utils/audio';
import HomeInvitationCard from './HomeInvitationCard';
import MehendiInvitationCard from './MehendiInvitationCard';
import VenueInvitationCard from './VenueInvitationCard';
import GalleryCarousel from './GalleryCarousel';
import WeddingInvitationCard from './WeddingInvitationCard';
import ThankYouInvitationCard from './ThankYouInvitationCard';

export default function EventPageView({
  windowData,
  onBack,
  soundEnabled,
}) {
  const handleBack = () => {
    if (soundEnabled) playWindowCloseSound();
    onBack();
  };

  const isHomePage = windowData.id === 'welcome';
  const isMehendiPage = windowData.id === 'mehendi';
  const isSangeetPage = windowData.id === 'sangeet';
  const isHaldiPage = windowData.id === 'haldi';
  const isWeddingPage = windowData.id === 'wedding';
  const isThankYouPage = windowData.id === 'reception';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.18, ease: 'easeIn' },
      }}
      transition={{
        delay: 0.5,
        duration: 0.35,
        ease: 'easeOut',
      }}
      className="absolute inset-0 z-40 w-full h-full overflow-hidden select-none pointer-events-auto bg-transparent touch-none overscroll-none"
    >
      {/* 
        Full Pure Background Image
        - For Gallery (Window 4), renders interactive photo carousel framed by haldi.png
        - For all other windows, renders full 1080x1920 artwork
      */}
      {!isHaldiPage ? (
        <img
          src={windowData.image}
          alt=""
          loading="eager"
          decoding="sync"
          className="w-full h-full object-fill select-none pointer-events-none"
        />
      ) : (
        <GalleryCarousel />
      )}

      {/* Royal Wedding Invitation Text for Home Page (Window 1) */}
      {isHomePage && <HomeInvitationCard />}

      {/* Mehendi Ceremony Invitation Text for Mehendi Page (Window 2) */}
      {isMehendiPage && <MehendiInvitationCard />}

      {/* Royal Wedding Venue, Address, Timings, Directions & Countdown (Window 3) */}
      {isSangeetPage && <VenueInvitationCard />}

      {/* The Wedding Ceremony Invitation Text for Wedding Page (Window 5) */}
      {isWeddingPage && <WeddingInvitationCard />}

      {/* Thank You / Warm Regards Text for Thank You Page (Window 6) */}
      {isThankYouPage && <ThankYouInvitationCard />}

      {/* Floating Minimal Return / Back Button (Top-Left) */}
      <button
        onClick={handleBack}
        type="button"
        title="Go Back"
        className="absolute top-10 left-4 z-50 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md text-white text-xs font-medium tracking-wide active:scale-95 transition-all group cursor-pointer pointer-events-auto"
      >
        <ChevronLeft className="w-4 h-4 text-white/90 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back</span>
      </button>
    </motion.div>
  );
}
