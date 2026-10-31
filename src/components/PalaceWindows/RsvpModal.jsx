import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Heart, Check, Home, Sparkles } from 'lucide-react';
import { playWindowCloseSound, playWindowOpenSound } from '../../utils/audio';

export default function RsvpModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState('');
  const [guestNames, setGuestNames] = useState('');
  const [attendance, setAttendance] = useState('accept'); // 'accept' | 'decline'
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    playWindowOpenSound();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    playWindowCloseSound();
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 400);
  };

  return (
    <AnimatePresence>
      {/* 
        Container sits directly over the palace facade
        Zero background blur, zero dark overlay, zero big card box!
      */}
      <div className="absolute inset-0 z-40 flex items-center justify-center px-2 sm:px-3 py-2 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: -10 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[342px] sm:max-w-[352px] flex flex-col pointer-events-auto relative z-40 mt-[116px] sm:mt-[124px]"
        >
          {/* Top Bar with Home Button */}
          <div className="flex items-center justify-between mb-2.5 sm:mb-3">
            {/* Home Button to return to all windows */}
            <button
              onClick={handleClose}
              type="button"
              title="Return to Palace Windows"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf7f1]/90 hover:bg-[#faf4ec] border border-[#cfb8a6] text-[#4d3424] font-serif text-[13px] font-bold active:scale-95 transition-all cursor-pointer group pointer-events-auto whitespace-nowrap"
              style={{
                boxShadow: 'inset 0 2px 3px rgba(60, 38, 24, 0.18), 0 1px 1px rgba(255, 255, 255, 0.85)',
                textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              <Home className="w-4 h-4 text-[#8a5d3b] group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">Home</span>
            </button>

            {/* Inscription Header */}
            <div
              className="flex items-center px-3.5 py-1 rounded-full bg-[#ede1d3]/85 border border-[#cfb8a6] text-xs font-serif font-bold uppercase tracking-[0.16em] whitespace-nowrap"
              style={{
                color: '#5c3e2e',
                boxShadow: 'inset 0 2px 3px rgba(60, 38, 24, 0.20), 0 1px 1px rgba(255, 255, 255, 0.85)',
                textShadow: '0 1px 1px rgba(255, 255, 255, 0.8), 0 -1px 0 rgba(60, 38, 24, 0.3)',
              }}
            >
              <span>Wedding RSVP</span>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              {/* 1. Full Name */}
              <div>
                <label
                  className="flex items-center gap-1.5 text-[11.5px] sm:text-xs font-serif font-bold tracking-[0.08em] uppercase whitespace-nowrap"
                  style={{
                    color: '#5c3e2e',
                    textShadow: '0 1px 1px rgba(255, 255, 255, 0.85), 0 -1px 1px rgba(50, 28, 16, 0.45)',
                  }}
                >
                  <User className="w-4 h-4 text-[#75503b] shrink-0" style={{ filter: 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.7))' }} />
                  <span className="whitespace-nowrap">YOUR FULL NAME *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-2xl bg-[#fbf7f1]/90 backdrop-blur-[2px] border border-[#cfb8a6] text-[15px] sm:text-[16px] font-serif text-[#382417] placeholder:text-[#9e8677] focus:outline-none focus:ring-2 focus:ring-[#bfa073] focus:border-[#bfa073] transition-all"
                  style={{
                    boxShadow: 'inset 0 2px 4px rgba(60, 38, 24, 0.20), inset 0 1px 2px rgba(60, 38, 24, 0.14), 0 1px 1px rgba(255, 255, 255, 0.85)',
                  }}
                />
              </div>

              {/* 2. Additional Guest Names */}
              <div>
                <label
                  className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-serif font-bold tracking-[0.03em] uppercase whitespace-nowrap"
                  style={{
                    color: '#5c3e2e',
                    textShadow: '0 1px 1px rgba(255, 255, 255, 0.85), 0 -1px 1px rgba(50, 28, 16, 0.45)',
                  }}
                >
                  <Users className="w-4 h-4 text-[#75503b] shrink-0" style={{ filter: 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.7))' }} />
                  <span className="whitespace-nowrap">ADDITIONAL GUEST NAMES (OPTIONAL)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma, Rohan Sharma"
                  value={guestNames}
                  onChange={(e) => setGuestNames(e.target.value)}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-2xl bg-[#fbf7f1]/90 backdrop-blur-[2px] border border-[#cfb8a6] text-[15px] sm:text-[16px] font-serif text-[#382417] placeholder:text-[#9e8677] focus:outline-none focus:ring-2 focus:ring-[#bfa073] focus:border-[#bfa073] transition-all"
                  style={{
                    boxShadow: 'inset 0 2px 4px rgba(60, 38, 24, 0.20), inset 0 1px 2px rgba(60, 38, 24, 0.14), 0 1px 1px rgba(255, 255, 255, 0.85)',
                  }}
                />
              </div>

              {/* 3. Will You Be Joining Us? */}
              <div>
                <label
                  className="flex items-center gap-1.5 text-[11.5px] sm:text-xs font-serif font-bold tracking-[0.08em] uppercase whitespace-nowrap mb-1.5"
                  style={{
                    color: '#5c3e2e',
                    textShadow: '0 1px 1px rgba(255, 255, 255, 0.85), 0 -1px 1px rgba(50, 28, 16, 0.45)',
                  }}
                >
                  <Heart className="w-4 h-4 text-[#75503b] shrink-0" style={{ filter: 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.7))' }} />
                  <span className="whitespace-nowrap">WILL YOU BE JOINING US? *</span>
                </label>

                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {/* Card 1: Joyfully Accepts */}
                  <button
                    type="button"
                    onClick={() => {
                      playWindowOpenSound();
                      setAttendance('accept');
                    }}
                    className={`relative p-2.5 sm:p-3 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between active:scale-[0.98] ${
                      attendance === 'accept'
                        ? 'bg-gradient-to-b from-[#fefbf6] to-[#f5ecdd] border-2 border-[#b89564]'
                        : 'bg-[#fbf7f1]/85 backdrop-blur-[2px] border border-[#cfb8a6] hover:bg-[#faf4ec]'
                    }`}
                    style={{
                      boxShadow: attendance === 'accept'
                        ? 'inset 0 1px 3px rgba(184, 149, 100, 0.28), 0 3px 8px rgba(70, 45, 25, 0.16), 0 1px 1px rgba(255, 255, 255, 0.9)'
                        : 'inset 0 2px 4px rgba(60, 38, 24, 0.18), 0 1px 1px rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-base sm:text-lg">💍</span>
                      {attendance === 'accept' && (
                        <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-b from-[#caa66c] to-[#a47e40] flex items-center justify-center text-white shadow-[0_1px_3px_rgba(60,38,20,0.35)]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div className="mt-1">
                      <h4
                        className="font-serif font-bold text-xs sm:text-[13px] text-[#382417] leading-tight whitespace-nowrap"
                        style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)' }}
                      >
                        Joyfully Accepts
                      </h4>
                      <p className="text-[9.5px] sm:text-[10px] text-[#7a5f4f] leading-tight font-serif whitespace-nowrap mt-0.5">
                        Can't wait to celebrate!
                      </p>
                    </div>
                  </button>

                  {/* Card 2: Regretfully Declines */}
                  <button
                    type="button"
                    onClick={() => {
                      playWindowOpenSound();
                      setAttendance('decline');
                    }}
                    className={`relative p-2.5 sm:p-3 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between active:scale-[0.98] ${
                      attendance === 'decline'
                        ? 'bg-gradient-to-b from-[#fefbf6] to-[#f5ecdd] border-2 border-[#b89564]'
                        : 'bg-[#fbf7f1]/85 backdrop-blur-[2px] border border-[#cfb8a6] hover:bg-[#faf4ec]'
                    }`}
                    style={{
                      boxShadow: attendance === 'decline'
                        ? 'inset 0 1px 3px rgba(184, 149, 100, 0.28), 0 3px 8px rgba(70, 45, 25, 0.16), 0 1px 1px rgba(255, 255, 255, 0.9)'
                        : 'inset 0 2px 4px rgba(60, 38, 24, 0.18), 0 1px 1px rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-base sm:text-lg">💌</span>
                      {attendance === 'decline' && (
                        <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-b from-[#caa66c] to-[#a47e40] flex items-center justify-center text-white shadow-[0_1px_3px_rgba(60,38,20,0.35)]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div className="mt-1">
                      <h4
                        className="font-serif font-bold text-xs sm:text-[13px] text-[#382417] leading-tight whitespace-nowrap"
                        style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)' }}
                      >
                        Regretfully Declines
                      </h4>
                      <p className="text-[9.5px] sm:text-[10px] text-[#7a5f4f] leading-tight font-serif whitespace-nowrap mt-0.5">
                        Celebrating in spirit
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* 4. Number of Guests (Only shown when Joyfully Accepts) */}
              <AnimatePresence>
                {attendance === 'accept' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <label
                      className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-serif font-bold tracking-[0.05em] uppercase whitespace-nowrap mb-1.5"
                      style={{
                        color: '#5c3e2e',
                        textShadow: '0 1px 1px rgba(255, 255, 255, 0.85), 0 -1px 1px rgba(50, 28, 16, 0.45)',
                      }}
                    >
                      <Users className="w-4 h-4 text-[#75503b] shrink-0" style={{ filter: 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.7))' }} />
                      <span className="whitespace-nowrap">NUMBER OF GUESTS ATTENDING *</span>
                    </label>

                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => {
                            playWindowOpenSound();
                            setGuestCount(num);
                          }}
                          className={`h-9 sm:h-10 rounded-2xl font-serif font-bold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center active:scale-95 whitespace-nowrap ${
                            guestCount === num
                              ? 'bg-gradient-to-b from-[#caa66c] via-[#b68f53] to-[#9c783c] text-white border border-[#85632e]'
                              : 'bg-[#fbf7f1]/85 backdrop-blur-[2px] text-[#4a3426] border border-[#cfb8a6] hover:bg-[#faf4ec]'
                          }`}
                          style={{
                            boxShadow: guestCount === num
                              ? 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 6px rgba(60, 38, 20, 0.3)'
                              : 'inset 0 2px 3px rgba(60, 38, 24, 0.18), 0 1px 1px rgba(255, 255, 255, 0.85)',
                            textShadow: guestCount === num
                              ? '0 1px 2px rgba(45, 28, 12, 0.6)'
                              : '0 1px 0 rgba(255, 255, 255, 0.8)',
                          }}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 5. Submit RSVP Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-full bg-[#fbf7f1]/92 hover:bg-[#faf4ec] border border-[#cfb8a6] text-[#4d3424] font-serif font-bold text-sm sm:text-[15px] tracking-[0.16em] uppercase active:scale-98 transition-all cursor-pointer flex items-center justify-center whitespace-nowrap"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(60, 38, 24, 0.18), 0 1px 1px rgba(255, 255, 255, 0.85)',
                  textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)',
                }}
              >
                <span>Submit RSVP</span>
              </button>
            </form>
          ) : (
            /* Success / Confirmation State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-4 rounded-3xl bg-[#fbf7f1]/95 backdrop-blur-md border border-[#cfb8a6] text-center space-y-3"
              style={{
                boxShadow: 'inset 0 2px 5px rgba(60, 38, 24, 0.18), 0 8px 24px rgba(60, 38, 20, 0.25), 0 1px 1px rgba(255, 255, 255, 0.9)',
              }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-b from-[#e5c577] to-[#d4aa52] border border-[#fff4d1] flex items-center justify-center text-[#382210] shadow-[0_2px_6px_rgba(60,38,20,0.3)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3
                className="font-serif font-bold text-xl sm:text-2xl text-[#382417]"
                style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)' }}
              >
                {attendance === 'accept' ? 'RSVP Received!' : 'Warm Gratitude'}
              </h3>
              <p className="text-sm sm:text-[14.5px] text-[#694e3e] leading-relaxed px-2 font-serif">
                {attendance === 'accept'
                  ? `Thank you, ${fullName}! We are overjoyed and can't wait to celebrate with you.`
                  : `Thank you for letting us know, ${fullName}. You will be warmly celebrated in our hearts.`}
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#e5c577] via-[#f7df99] to-[#d4aa52] text-[#382210] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase hover:brightness-105 active:scale-95 transition-all cursor-pointer border border-[#fff4d1]"
                style={{
                  boxShadow: '0 3px 8px rgba(70, 45, 25, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                  textShadow: '0 1px 0 rgba(255, 255, 255, 0.7)',
                }}
              >
                Back to Palace Windows
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
