import React from 'react';
import { motion } from 'framer-motion';

/**
 * 4-Point Radiant Flare Star (Delicate starlight with needle spikes & glowing core)
 */
function RadiantFlareStar({ size = 12, color = '#ffffff', glow = '#ffd778' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className="overflow-visible"
      style={{
        filter: `drop-shadow(0 0 3px ${glow}) drop-shadow(0 0 7px rgba(255, 215, 120, 0.6))`,
      }}
    >
      {/* Horizontal & vertical tapered star spikes */}
      <path
        d="M20 1 C20.6 13.5 26.5 19.4 39 20 C26.5 20.6 20.6 26.5 20 39 C19.4 26.5 13.5 20.6 1 20 C13.5 19.4 19.4 13.5 20 1 Z"
        fill={color}
      />
      {/* Diagonal micro rays */}
      <path
        d="M20 7 C20.4 14.5 25.5 19.6 33 20 C25.5 20.4 20.4 25.5 20 33 C19.6 25.5 14.5 20.4 7 20 C14.5 19.6 19.6 14.5 20 7 Z"
        fill="#ffffff"
        transform="rotate(45 20 20)"
        opacity="0.8"
      />
      {/* Supernova white-hot core */}
      <circle cx="20" cy="20" r="3" fill="#ffffff" />
    </svg>
  );
}

/**
 * 8-Point Royal Octagram Star (Delicate faceted diamond star glint)
 */
function OctagramStar({ size = 10, color = '#ffeaa7', glow = '#ffbe3b' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className="overflow-visible"
      style={{
        filter: `drop-shadow(0 0 3px ${glow}) drop-shadow(0 0 6px rgba(255, 190, 60, 0.5))`,
      }}
    >
      <path
        d="M16 2 C16.5 10.5 21.5 15.5 30 16 C21.5 16.5 16.5 21.5 16 30 C15.5 21.5 10.5 16.5 2 16 C10.5 15.5 15.5 10.5 16 2 Z"
        fill={color}
      />
      <path
        d="M16 5.5 C16.4 11.5 20.5 15.6 26.5 16 C20.5 16.4 16.4 20.5 16 26.5 C15.6 20.5 11.5 16.4 5.5 16 C11.5 15.6 15.6 11.5 16 5.5 Z"
        fill="#ffffff"
        transform="rotate(45 16 16)"
        opacity="0.8"
      />
      <circle cx="16" cy="16" r="2" fill="#ffffff" />
    </svg>
  );
}

/**
 * Classic 4-Point Diamond Sparkle Star (Small fine starlight sparkle)
 */
function DiamondSparkleStar({ size = 8, color = '#ffd778' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="overflow-visible"
      style={{
        filter: 'drop-shadow(0 0 2.5px rgba(255, 215, 120, 0.85)) drop-shadow(0 0 5px rgba(255, 200, 80, 0.4))',
      }}
    >
      <path
        d="M12 0 C12.6 7.5 16.5 11.4 24 12 C16.5 12.6 12.6 16.5 12 24 C11.4 16.5 7.5 12.6 0 12 C7.5 11.4 11.4 7.5 12 0 Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="2" fill="#ffffff" />
    </svg>
  );
}

/**
 * Micro Glint Point Star (Tiny pinpoint starlight)
 */
function MicroGlintStar({ size = 3, color = '#ffffff' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        boxShadow: `0 0 3px 1px ${color}, 0 0 6px 1.5px rgba(255, 215, 120, 0.6)`,
      }}
    />
  );
}

/**
 * Subtle Shooting Star that streaks delicately across the upper night sky periodically
 */
function ShootingStar() {
  return (
    <motion.div
      className="absolute pointer-events-none select-none z-10"
      style={{
        top: '10%',
        left: '-15%',
        width: '55px',
        height: '1.5px',
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,220,130,0.8) 65%, rgba(255,255,255,1) 100%)',
        borderRadius: '999px',
        filter: 'drop-shadow(0 0 4px rgba(255, 230, 160, 0.9))',
        transform: 'rotate(-25deg)',
      }}
      animate={{
        x: ['0vw', '130vw'],
        y: ['0vh', '45vh'],
        opacity: [0, 0, 0.9, 0.9, 0],
      }}
      transition={{
        duration: 1.3,
        repeat: Infinity,
        repeatDelay: 7.5,
        ease: 'easeOut',
      }}
    />
  );
}

/**
 * Delicate, finely sized flashing stars spread across the Sangeet night sky
 */
const FLASHING_STARS = [
  // --- Upper Sky Canopy ---
  {
    id: 'flare-1',
    type: 'flare',
    top: '6%',
    left: '14%',
    size: 13,
    color: '#ffffff',
    glow: '#ffd778',
    duration: 1.5,
    delay: 0.1,
    mode: 'burst',
  },
  {
    id: 'octa-1',
    type: 'octagram',
    top: '8%',
    right: '16%',
    size: 11,
    color: '#ffeaa7',
    glow: '#ffbe3b',
    duration: 1.9,
    delay: 0.8,
    mode: 'burst',
  },
  {
    id: 'dia-1',
    type: 'diamond',
    top: '13%',
    left: '28%',
    size: 8,
    color: '#ffd778',
    duration: 1.2,
    delay: 0.4,
    mode: 'fast',
  },
  {
    id: 'dia-2',
    type: 'diamond',
    top: '12%',
    right: '29%',
    size: 7,
    color: '#fff3cd',
    duration: 1.6,
    delay: 1.1,
    mode: 'med',
  },
  {
    id: 'micro-1',
    type: 'micro',
    top: '5%',
    left: '46%',
    size: 3,
    color: '#ffffff',
    duration: 1.1,
    delay: 0.3,
    mode: 'fast',
  },
  {
    id: 'dia-3',
    type: 'diamond',
    top: '18%',
    left: '9%',
    size: 8,
    color: '#ffd778',
    duration: 2.1,
    delay: 1.4,
    mode: 'med',
  },
  {
    id: 'micro-2',
    type: 'micro',
    top: '17%',
    right: '10%',
    size: 3,
    color: '#ffd778',
    duration: 1.3,
    delay: 0.6,
    mode: 'fast',
  },

  // --- Mid-Left Celestial Flank ---
  {
    id: 'flare-2',
    type: 'flare',
    top: '25%',
    left: '15%',
    size: 12,
    color: '#fff8db',
    glow: '#ffd778',
    duration: 1.7,
    delay: 0.2,
    mode: 'burst',
  },
  {
    id: 'octa-2',
    type: 'octagram',
    top: '32%',
    left: '7%',
    size: 10,
    color: '#ffeaa7',
    glow: '#ffbe3b',
    duration: 2.0,
    delay: 1.3,
    mode: 'med',
  },
  {
    id: 'dia-4',
    type: 'diamond',
    top: '39%',
    left: '16%',
    size: 8,
    color: '#ffd778',
    duration: 1.1,
    delay: 0.7,
    mode: 'fast',
  },
  {
    id: 'micro-3',
    type: 'micro',
    top: '46%',
    left: '8%',
    size: 3,
    color: '#ffffff',
    duration: 1.4,
    delay: 1.0,
    mode: 'fast',
  },
  {
    id: 'dia-5',
    type: 'diamond',
    top: '52%',
    left: '15%',
    size: 8,
    color: '#fff3cd',
    duration: 1.8,
    delay: 0.5,
    mode: 'med',
  },

  // --- Mid-Right Celestial Flank ---
  {
    id: 'flare-3',
    type: 'flare',
    top: '27%',
    right: '13%',
    size: 13,
    color: '#ffffff',
    glow: '#ffd778',
    duration: 1.6,
    delay: 0.9,
    mode: 'burst',
  },
  {
    id: 'dia-6',
    type: 'diamond',
    top: '34%',
    right: '7%',
    size: 8,
    color: '#ffd778',
    duration: 1.2,
    delay: 0.3,
    mode: 'fast',
  },
  {
    id: 'octa-3',
    type: 'octagram',
    top: '41%',
    right: '17%',
    size: 11,
    color: '#ffeaa7',
    glow: '#ffbe3b',
    duration: 2.2,
    delay: 1.5,
    mode: 'med',
  },
  {
    id: 'micro-4',
    type: 'micro',
    top: '48%',
    right: '9%',
    size: 3.5,
    color: '#ffffff',
    duration: 1.0,
    delay: 0.2,
    mode: 'fast',
  },
  {
    id: 'dia-7',
    type: 'diamond',
    top: '54%',
    right: '16%',
    size: 7.5,
    color: '#ffd778',
    duration: 1.7,
    delay: 1.1,
    mode: 'burst',
  },

  // --- Lower Sky Zone (Above Fort & Jeeps) ---
  {
    id: 'flare-4',
    type: 'flare',
    top: '63%',
    left: '11%',
    size: 12,
    color: '#fff8db',
    glow: '#ffd778',
    duration: 1.8,
    delay: 0.4,
    mode: 'burst',
  },
  {
    id: 'octa-4',
    type: 'octagram',
    top: '66%',
    right: '12%',
    size: 10,
    color: '#ffeaa7',
    glow: '#ffbe3b',
    duration: 1.5,
    delay: 1.2,
    mode: 'fast',
  },
  {
    id: 'dia-8',
    type: 'diamond',
    top: '73%',
    left: '18%',
    size: 8,
    color: '#ffd778',
    duration: 1.3,
    delay: 0.8,
    mode: 'fast',
  },
  {
    id: 'micro-5',
    type: 'micro',
    top: '71%',
    right: '19%',
    size: 3,
    color: '#ffffff',
    duration: 1.1,
    delay: 0.5,
    mode: 'fast',
  },
  {
    id: 'dia-9',
    type: 'diamond',
    top: '78%',
    right: '9%',
    size: 7.5,
    color: '#fff3cd',
    duration: 1.9,
    delay: 1.6,
    mode: 'med',
  },
  {
    id: 'micro-6',
    type: 'micro',
    top: '82%',
    left: '13%',
    size: 3,
    color: '#ffd778',
    duration: 1.2,
    delay: 0.7,
    mode: 'fast',
  },
  {
    id: 'dia-10',
    type: 'diamond',
    top: '85%',
    right: '23%',
    size: 7,
    color: '#ffd778',
    duration: 1.6,
    delay: 0.2,
    mode: 'burst',
  },
  {
    id: 'octa-5',
    type: 'octagram',
    top: '88%',
    left: '38%',
    size: 9.5,
    color: '#ffeaa7',
    glow: '#ffbe3b',
    duration: 2.3,
    delay: 1.0,
    mode: 'med',
  },
];

/**
 * Flashing Keyframes Helper
 * Subtle scale expansion with bright opacity flashing
 */
function getFlashAnimation(mode) {
  switch (mode) {
    case 'burst':
      return {
        opacity: [0.15, 0.2, 1.0, 0.35, 0.95, 0.15],
        scale: [0.55, 0.65, 1.15, 0.75, 1.05, 0.55],
        rotate: [0, 6, 18, 9, 14, 0],
      };
    case 'fast':
      return {
        opacity: [0.15, 0.3, 1.0, 0.35, 0.15],
        scale: [0.6, 0.75, 1.1, 0.75, 0.6],
        rotate: [0, 10, 20, 10, 0],
      };
    case 'med':
    default:
      return {
        opacity: [0.2, 0.4, 1.0, 0.5, 0.2],
        scale: [0.65, 0.8, 1.08, 0.85, 0.65],
        rotate: [0, 8, -8, 4, 0],
      };
  }
}

/**
 * Animated Flashing Stars Layer (Delicate, finely proportioned stars)
 * Supports optional shooting star (ideal for night themes like Sangeet)
 */
export default function FlashingStarsLayer({ showShootingStar = true }) {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
      {/* Subtle Shooting Star */}
      {showShootingStar && <ShootingStar />}

      {/* Constellation of Delicately Scaled Flashing Stars */}
      {FLASHING_STARS.map((star) => {
        const anim = getFlashAnimation(star.mode);

        return (
          <motion.div
            key={star.id}
            className="absolute flex items-center justify-center pointer-events-none select-none"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              transformOrigin: 'center center',
            }}
            initial={{ opacity: 0.2, scale: 0.6 }}
            animate={anim}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {star.type === 'flare' && (
              <RadiantFlareStar size={star.size} color={star.color} glow={star.glow} />
            )}
            {star.type === 'octagram' && (
              <OctagramStar size={star.size} color={star.color} glow={star.glow} />
            )}
            {star.type === 'diamond' && (
              <DiamondSparkleStar size={star.size} color={star.color} />
            )}
            {star.type === 'micro' && (
              <MicroGlintStar size={star.size} color={star.color} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
