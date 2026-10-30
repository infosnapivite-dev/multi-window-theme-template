import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { playBlessingSound } from '../../utils/audio';

export default function BlessingsModal({ isOpen, onClose, windowData }) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    playBlessingSound();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 2.5s
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setMessage('');
        onClose();
      }, 2500);
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-sm rounded-3xl bg-[#1c1417]/95 border border-[#d4af37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-6 text-center text-[#f7eedc] overflow-hidden"
        >
          {/* Decorative Corner Filigree Highlights */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none border-t-2 border-l-2 border-[#d4af37]/50 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none border-t-2 border-r-2 border-[#d4af37]/50 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none border-b-2 border-l-2 border-[#d4af37]/50 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none border-b-2 border-r-2 border-[#d4af37]/50 rounded-br-3xl" />

          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#f7eedc] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-center mb-1">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d4af37] font-serif">
                  {windowData?.tagline || '॥ शुभ विवाह ॥'}
                </p>
                <h3 className="text-xl font-serif font-bold text-[#fff7e6] mt-1">
                  Send Royal Blessings
                </h3>
                <p className="text-xs text-[#d6c7b2] mt-0.5">
                  For {windowData?.title || 'the Royal Couple'}
                </p>
              </div>

              <div className="text-left space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#d4af37] mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Royal Guest / Family"
                    className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-[#d4af37]/30 text-[#fff] placeholder-white/30 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#d4af37] mb-1 font-medium">
                    Will you attend this event?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`py-2 px-3 rounded-xl border transition-all ${
                        attending === 'yes'
                          ? 'bg-[#d4af37]/25 border-[#d4af37] text-white font-medium'
                          : 'bg-black/30 border-white/10 text-white/60 hover:border-white/30'
                      }`}
                    >
                      ✓ Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending('spirit')}
                      className={`py-2 px-3 rounded-xl border transition-all ${
                        attending === 'spirit'
                          ? 'bg-[#d4af37]/25 border-[#d4af37] text-white font-medium'
                          : 'bg-black/30 border-white/10 text-white/60 hover:border-white/30'
                      }`}
                    >
                      With Love in Spirit
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#d4af37] mb-1 font-medium">
                    Blessing & Warm Wishes
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Wishing the bride & groom a lifetime of love and joy..."
                    className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-[#d4af37]/30 text-[#fff] placeholder-white/30 text-xs focus:outline-none focus:border-[#d4af37] resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#b38728] via-[#fbf5b7] to-[#aa771c] text-[#1c1205] font-semibold text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Deliver My Royal Blessings</span>
              </button>
            </form>
          ) : (
            <div className="py-6 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#fff7e6]">
                Blessings Received!
              </h4>
              <p className="text-xs text-[#d6c7b2] leading-relaxed">
                Thank you, <strong className="text-[#fbf5b7]">{name}</strong>. Your heartfelt prayers and presence will illuminate the celebration.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fbf5b7] text-[11px]">
                  <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                  Recorded in the Royal Guestbook
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

