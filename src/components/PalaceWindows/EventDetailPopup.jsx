import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Sparkles, Shirt } from 'lucide-react';
import { playWindowCloseSound } from '../../utils/audio';

/**
 * Royal Event Detail Popup Card
 * Displays comprehensive event information:
 * - Date & Day
 * - Event Time
 * - Location / Venue
 * - Dress Code / Attire
 * - Tagline & Narrative
 */
export default function EventDetailPopup({ event, isOpen, onClose }) {
  const handleClose = useCallback(() => {
    playWindowCloseSound();
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen || !event) return null;

  return (
    <AnimatePresence>
      <div 
        className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md pointer-events-auto select-none"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 12 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xs sm:max-w-sm rounded-3xl bg-gradient-to-b from-[#1e141a]/95 via-[#160f14]/98 to-[#100b0f]/98 border border-[#d4af37]/45 shadow-[0_20px_50px_rgba(0,0,0,0.85),_0_0_25px_rgba(212,175,55,0.2)] p-5 sm:p-6 text-[#fbf6ee] text-center overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow Inside */}
          <div className="absolute top-0 inset-x-0 h-32 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.25)_0%,_transparent_70%)] pointer-events-none" />

          {/* Decorative Corner Filigree Highlights */}
          <div className="absolute top-0 left-0 w-10 h-10 pointer-events-none border-t-2 border-l-2 border-[#d4af37]/50 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none border-t-2 border-r-2 border-[#d4af37]/50 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none border-b-2 border-l-2 border-[#d4af37]/50 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none border-b-2 border-r-2 border-[#d4af37]/50 rounded-br-3xl" />

          {/* Floating Close Button */}
          <button
            onClick={handleClose}
            type="button"
            title="Close"
            className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-[#eedcc5] active:scale-90 transition-all cursor-pointer z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* 1. Event Number & Hindi Blessing Badge */}
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fce59c] text-[10px] font-serif uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>Event {event.number} • {event.hindiTagline || '॥ शुभ प्रसंग ॥'}</span>
            </span>
          </div>

          {/* 2. Main Event Title */}
          <h2 className="font-serif font-bold text-2xl sm:text-[26px] tracking-wide uppercase text-[#fae092] leading-tight drop-shadow-md mt-1">
            {event.name}
          </h2>

          {/* 3. Event Tagline */}
          {event.tagline && (
            <p className="mt-1.5 font-serif italic text-xs sm:text-[13px] text-[#eedcc5]/90 leading-relaxed px-2">
              "{event.tagline}"
            </p>
          )}

          {/* Golden Divider */}
          <div className="my-4 flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
            <span className="text-[#d4af37] text-xs">❖</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
          </div>

          {/* 4. Event Information Tiles */}
          <div className="space-y-2.5 text-left">
            {/* Date Tile */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-[#d4af37]/25 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#fce59c]">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-sans uppercase tracking-widest text-[#eedcc5]/70 font-semibold leading-none">
                  Date
                </p>
                <p className="font-serif font-semibold text-xs sm:text-sm text-[#fbf6ee] mt-0.5 truncate">
                  {event.dateFull}
                </p>
              </div>
            </div>

            {/* Time Tile */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-[#d4af37]/25 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#fce59c]">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-sans uppercase tracking-widest text-[#eedcc5]/70 font-semibold leading-none">
                  Time
                </p>
                <p className="font-serif font-semibold text-xs sm:text-sm text-[#fbf6ee] mt-0.5 truncate">
                  {event.time}
                </p>
              </div>
            </div>

            {/* Location Tile */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-[#d4af37]/25 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#fce59c]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-sans uppercase tracking-widest text-[#eedcc5]/70 font-semibold leading-none">
                  Location / Venue
                </p>
                <p className="font-serif font-semibold text-xs sm:text-sm text-[#fbf6ee] mt-0.5 truncate">
                  {event.location}
                </p>
              </div>
            </div>

            {/* Dress Code Tile */}
            {event.dressCode && (
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-[#d4af37]/25 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#fce59c]">
                  <Shirt className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-sans uppercase tracking-widest text-[#eedcc5]/70 font-semibold leading-none">
                    Dress Code / Attire
                  </p>
                  <p className="font-serif text-xs sm:text-[13px] text-[#fbf6ee] mt-0.5 truncate">
                    {event.dressCode}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 5. Bottom Close Button */}
          <button
            onClick={handleClose}
            type="button"
            className="w-full mt-4 py-2 sm:py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#edd085] via-[#fae092] to-[#d4af37] text-[#2c1a06] font-serif font-bold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            Close Details
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
