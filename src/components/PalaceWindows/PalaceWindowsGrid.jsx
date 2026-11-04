import React, { useState } from 'react';
import { motion } from 'framer-motion';
import windowFrameImg from '../../assets/window.png';
import galleryPreviewImg from '../../assets/gallery-1.webp';
import { WINDOWS_DATA } from '../../data/windowsData';

/**
 * 6 Palace Arched Windows Grid
 * Accurately mapped to the reference image:
 * - 2 rows × 3 columns
 * - Arched stone frame overlay with transparent inner aperture
 * - Inner artwork displayed with object-fill so 100% of the artwork
 *   (including side trees, chandeliers, lanterns, and peacocks) is visible without cropping
 * - Hover effect: ONLY the inner image zooms inside the arch; stone frame stays static
 * - Zero-flicker architecture: Aperture bounds stay rock-solid fixed so image never shifts or shakes
 * - Smooth frame dissolution: Stone frame cleanly dissolves as zoom lands
 */
/**
 * Directional dispersion offsets when RSVP form opens:
 * Window 1 (Top-Left) -> flies Left & Up
 * Window 2 (Top-Center) -> flies Straight Up
 * Window 3 (Top-Right) -> flies Right & Up
 * Window 4 (Bottom-Left) -> flies Left & Down
 * Window 5 (Bottom-Center) -> flies Straight Down
 * Window 6 (Bottom-Right) -> flies Right & Down
 */
const RSVP_DISPERSION_OFFSETS = {
  welcome: { x: -320, y: -220 },
  mehendi: { x: 0, y: -300 },
  sangeet: { x: 320, y: -220 },
  haldi: { x: -320, y: 220 },
  wedding: { x: 0, y: 300 },
  reception: { x: 320, y: 220 },
};

export default function PalaceWindowsGrid({ onSelectWindow, activeWindowId, isClosing, isRsvpOpen = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none">
      {WINDOWS_DATA.map((win) => {
        const isHovered = hoveredId === win.id;
        const isActive = activeWindowId === win.id && !isClosing;
        const isAnyZoomed = Boolean(activeWindowId);

        return (
          <motion.button
            key={win.id}
            type="button"
            data-window-id={win.id}
            onClick={() => onSelectWindow?.(win)}
            onMouseEnter={() => !isAnyZoomed && !isRsvpOpen && setHoveredId(win.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => !isAnyZoomed && !isRsvpOpen && setHoveredId(win.id)}
            onBlur={() => setHoveredId(null)}
            aria-label={`Open ${win.title}`}
            animate={{
              x: isRsvpOpen ? RSVP_DISPERSION_OFFSETS[win.id].x : 0,
              y: isRsvpOpen ? RSVP_DISPERSION_OFFSETS[win.id].y : 0,
              opacity: isRsvpOpen ? 0 : 1,
              scale: isRsvpOpen ? 0.72 : 1,
            }}
            transition={{
              duration: isRsvpOpen ? 1.75 : 1.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group absolute gpu-layer focus:outline-none ${
              (isAnyZoomed && !isActive) || isRsvpOpen ? 'pointer-events-none' : 'cursor-pointer pointer-events-auto'
            }`}
            style={{
              left: win.left,
              top: win.top,
              width: win.width,
              height: win.height,
              touchAction: 'manipulation',
            }}
          >
            {/* Ambient Aura Glow behind the window on hover (only in grid overview) */}
            <div
              className="absolute inset-[-10%] rounded-t-full transition-opacity duration-500 pointer-events-none"
              style={{
                opacity: isHovered && !isAnyZoomed ? 0.75 : 0,
                background: `radial-gradient(circle at 50% 50%, ${win.glowColor} 0%, transparent 70%)`,
                filter: 'blur(10px)',
              }}
            />

            {/* Inner Alcove Aperture Container
                - Bounds remain fixed to eliminate all image recalculation and shaking
                - borderRadius smoothly morphs to 0px on zoom
            */}
            <motion.div
              className="absolute overflow-hidden"
              style={{
                top: '5.9%',
                left: '9.9%',
                right: '10.1%',
                bottom: '6.0%',
              }}
              animate={{
                borderRadius: isActive ? '0px 0px 0px 0px' : '999px 999px 0 0',
              }}
              transition={{
                delay: isActive ? 0.45 : 0,
                duration: isActive ? 0.35 : 0.25,
                ease: 'easeOut',
              }}
            >
              {/* 
                Event Background Artwork
                - object-fill ensures 100% of the artwork width & height is visible without cropping
                - Fixed dimensions inside aperture prevent any wobble or jitter
                - Smooth hover zoom when in overview
              */}
              {/* Event Background Artwork (For Gallery window, render photo behind frame) */}
              {win.id === 'haldi' && (
                <img
                  src={galleryPreviewImg}
                  alt=""
                  loading="eager"
                  decoding="sync"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-out will-change-transform"
                  style={{
                    transform: isHovered && !isAnyZoomed ? 'scale(1.10)' : 'scale(1.0)',
                  }}
                />
              )}
              <img
                src={win.image}
                alt={win.title}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-fill transform transition-transform duration-500 ease-out will-change-transform relative z-10"
                style={{
                  transform: isHovered && !isAnyZoomed ? 'scale(1.10)' : 'scale(1.0)',
                }}
              />

              {/* Physical Recessed Arch Shadow for depth */}
              <motion.div
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 pointer-events-none shadow-[inset_0_8px_16px_rgba(0,0,0,0.5),inset_0_-4px_10px_rgba(0,0,0,0.4)]"
              />

              {/* Warm Golden Sheen Overlay on Hover (only in grid overview) */}
              <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,215,0,0.18) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.25) 100%)',
                  opacity: isHovered && !isAnyZoomed ? 1 : 0,
                }}
              />
            </motion.div>

            {/* 
              Arched Stone Window Frame Overlay
              - Dissolves as zoom reaches completion (opacity: 0)
              - Restores immediately when closing for the symmetrical reverse zoom-out
            */}
            <motion.img
              src={windowFrameImg}
              alt=""
              loading="eager"
              decoding="sync"
              animate={{
                opacity: isActive ? 0 : 1,
              }}
              transition={{
                delay: isActive ? 0.45 : 0,
                duration: isActive ? 0.35 : 0.22,
                ease: 'easeOut',
              }}
              className="gpu-layer relative z-10 w-full h-full object-fill pointer-events-none select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
            />

            {/* Embedded Ceremony Title (Carved into the wall below the window) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-30 transition-all duration-300 pointer-events-none whitespace-nowrap"
              style={{
                top: 'calc(100% + 4px)',
                opacity: !isAnyZoomed ? (isHovered ? 1 : 0.9) : 0,
                transform: 'translate(-50%, 0)',
              }}
            >
              <p
                className="font-serif tracking-[0.20em] uppercase text-[10px] sm:text-[11px] font-semibold"
                style={{
                  color: '#735545',
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.65), 0 -1px 1px rgba(70, 45, 30, 0.3)',
                  mixBlendMode: 'multiply',
                }}
              >
                {win.shortTitle}
              </p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
