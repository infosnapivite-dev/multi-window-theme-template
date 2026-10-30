import React from 'react';
import { motion } from 'framer-motion';

/**
 * 7 Butterflies Spread Around the Screen Edges & Periphery
 * Wide, expansive, random flight paths leaving the center invitation text open
 * Exactly 7 butterflies with varied sizes, opacities, and organic trajectories
 */
const BASE_BUTTERFLIES = [
  // 1. Upper-Left Sky (Drifts in large sweeping arc across high sky and down left)
  {
    id: 1,
    initialX: '4%',
    initialY: '12%',
    scale: 1.05,
    opacity: 0.9,
    flapDuration: 0.26,
    flightDuration: 20.0,
    flightDelay: 0.5,
    flightX: [0, 80, 160, 90, 20, 0],
    flightY: [0, 50, -10, 80, 30, 0],
    flightRotate: [12, 24, -10, 18, -6, 12],
    colorIndex: 0,
  },
  // 2. Upper-Right Sky Corner (Sweeps diagonally down-left and arcs back)
  {
    id: 2,
    initialX: '88%',
    initialY: '8%',
    scale: 0.55,
    opacity: 0.5,
    flapDuration: 0.28,
    flightDuration: 23.0,
    flightDelay: 1.5,
    flightX: [0, -90, -180, -110, -30, 0],
    flightY: [0, 60, 20, 90, 40, 0],
    flightRotate: [-15, 8, -20, 12, -8, -15],
    colorIndex: 1,
  },
  // 3. Far Mid-Right Edge (Travels down the right periphery in wide undulating curves)
  {
    id: 3,
    initialX: '92%',
    initialY: '36%',
    scale: 0.92,
    opacity: 0.85,
    flapDuration: 0.22,
    flightDuration: 18.0,
    flightDelay: 0.8,
    flightX: [0, -60, -120, -50, -15, 0],
    flightY: [0, 110, 220, 140, 40, 0],
    flightRotate: [-10, 18, -14, 20, -6, -10],
    colorIndex: 2,
  },
  // 4. Lower-Left Fort Gate / Poolside Base (Ascends steeply along the far left edge)
  {
    id: 4,
    initialX: '5%',
    initialY: '75%',
    scale: 0.85,
    opacity: 0.8,
    flapDuration: 0.25,
    flightDuration: 19.5,
    flightDelay: 2.2,
    flightX: [0, 50, 90, 40, 15, 0],
    flightY: [0, -130, -250, -160, -50, 0],
    flightRotate: [18, -12, 22, -10, 14, 18],
    colorIndex: 3,
  },
  // 5. Very Top Arch Perimeter (Wanders across the top skyline from left to right)
  {
    id: 5,
    initialX: '48%',
    initialY: '4%',
    scale: 0.5,
    opacity: 0.55,
    flapDuration: 0.27,
    flightDuration: 24.0,
    flightDelay: 0.2,
    flightX: [0, 120, -130, 80, -60, 0],
    flightY: [0, 30, 50, -15, 30, 0],
    flightRotate: [8, -15, 12, -18, 10, 8],
    colorIndex: 4,
  },
  // 6. Bottom-Right Corner (Floats upward towards middle-right)
  {
    id: 6,
    initialX: '85%',
    initialY: '82%',
    scale: 0.8,
    opacity: 0.75,
    flapDuration: 0.24,
    flightDuration: 21.0,
    flightDelay: 2.8,
    flightX: [0, -80, -160, -95, -35, 0],
    flightY: [0, -90, -190, -120, -40, 0],
    flightRotate: [-16, 12, -18, 14, -8, -16],
    colorIndex: 5,
  },
  // 7. Mid-Left Outer Edge (Drifts in sweeping random figure-8 arcs along left/lower-left)
  {
    id: 7,
    initialX: '3%',
    initialY: '48%',
    scale: 0.65,
    opacity: 0.65,
    flapDuration: 0.23,
    flightDuration: 17.5,
    flightDelay: 1.0,
    flightX: [0, 80, 150, 90, 25, 0],
    flightY: [0, 90, 170, 75, -20, 0],
    flightRotate: [14, -12, 16, -14, 8, 14],
    colorIndex: 6,
  },
];

const THEME_PALETTES = {
  gold: ['#fed876', '#ffeaad', '#ffd066', '#ffe599', '#fff3cd', '#f9d275', '#ffe7a0'],
  mehendi: ['#ffd56b', '#ffe08a', '#ffbe76', '#fed330', '#fff0b3', '#fbc531', '#ffeaa7'],
  haldi: ['#ffdd59', '#ffea79', '#ffc048', '#fbc531', '#fff8cc', '#ffd32a', '#ffe57f'],
};

/**
 * Vector Wing with forewing, hindwing, delicate veins, and golden shimmer
 */
function ButterflyWing({ isRight = false, color = '#ffd066', uid = 'b' }) {
  const gradId = `wingGrad-${uid}-${isRight ? 'r' : 'l'}`;
  return (
    <svg
      viewBox="0 0 16 22"
      className="w-4 h-5.5 overflow-visible"
      style={{
        transform: isRight ? 'scaleX(-1)' : 'none',
        filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.35))',
      }}
      fill="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff9ed" stopOpacity="0.95" />
          <stop offset="45%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Forewing */}
      <path
        d="M 15 10 C 13 4, 7 0.5, 2.5 1.5 C -0.5 2.5, -0.2 7, 2.5 10.5 C 5.5 13, 11 12.5, 15 10 Z"
        fill={`url(#${gradId})`}
        stroke="#fff1b8"
        strokeWidth="0.4"
      />
      {/* Hindwing */}
      <path
        d="M 14 10 C 10 11, 4 12, 3 15.5 C 2 18.5, 6.5 21, 9.5 20 C 12.5 19, 13.5 14.5, 15 11.5 Z"
        fill={`url(#${gradId})`}
        stroke="#fff1b8"
        strokeWidth="0.4"
      />
      {/* Delicate inner wing veins */}
      <path
        d="M 14 10 C 9 8, 5 5, 3 3 M 14 10 C 9 12, 6 15, 4 17"
        stroke="#ffffff"
        strokeWidth="0.35"
        strokeOpacity="0.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Slender Center Body & Antennae
 */
function ButterflyBody() {
  return (
    <div className="relative flex flex-col items-center justify-center z-10 w-[2px]">
      {/* Delicate Antennae */}
      <div className="absolute -top-2 flex gap-1 items-end pointer-events-none">
        <span className="w-[0.6px] h-2 bg-[#ffe89e] -rotate-[22deg] origin-bottom rounded-full" />
        <span className="w-[0.6px] h-2 bg-[#ffe89e] rotate-[22deg] origin-bottom rounded-full" />
      </div>
      {/* Head */}
      <div className="w-[1.8px] h-[1.8px] bg-[#ffd700] rounded-full" />
      {/* Thorax & Abdomen */}
      <div className="w-[1.4px] h-3 bg-gradient-to-b from-[#e6b800] via-[#b38600] to-[#805e00] rounded-full shadow-[0_0_2px_rgba(255,215,0,0.6)]" />
    </div>
  );
}

/**
 * Single Realistic Butterfly with 3D Wing Flap & Bezier Flight Drift
 */
function RealisticButterfly({ config, color, uid }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: config.initialX,
        top: config.initialY,
        opacity: config.opacity,
        scale: config.scale,
      }}
      animate={{
        x: config.flightX,
        y: config.flightY,
        rotate: config.flightRotate,
      }}
      transition={{
        duration: config.flightDuration,
        delay: config.flightDelay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{ perspective: '300px' }}
      >
        {/* Left Wing (Natural, smooth 3D flutter) */}
        <motion.div
          style={{ transformOrigin: '100% 50%' }}
          animate={{ rotateY: [0, 62, 0] }}
          transition={{
            duration: config.flapDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ButterflyWing isRight={false} color={color} uid={uid} />
        </motion.div>

        {/* Center Body */}
        <ButterflyBody />

        {/* Right Wing (Natural, smooth 3D flutter) */}
        <motion.div
          style={{ transformOrigin: '0% 50%' }}
          animate={{ rotateY: [0, -62, 0] }}
          transition={{
            duration: config.flapDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ButterflyWing isRight={true} color={color} uid={uid} />
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Reusable Butterflies Layer Component
 * Supports custom themes: 'gold' (default), 'mehendi', 'haldi'
 */
export default function ButterfliesLayer({ theme = 'gold' }) {
  const palette = THEME_PALETTES[theme] || THEME_PALETTES.gold;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
      {BASE_BUTTERFLIES.map((butterfly, idx) => (
        <RealisticButterfly
          key={butterfly.id}
          config={butterfly}
          color={palette[butterfly.colorIndex % palette.length]}
          uid={`${theme}-${idx}`}
        />
      ))}
    </div>
  );
}

