import React from 'react';
import FlashingStarsLayer from './FlashingStarsLayer';

/**
 * Wedding Ceremony Page Layer ("The Wedding Ceremony")
 * Text removed per user request.
 * Preserves the animated flashing celestial stars echoing the royal chandelier ambiance.
 */
export default function WeddingInvitationCard() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
      {/* Animated Flashing Stars Layer (Chandelier & Starlight Ambiance) */}
      <FlashingStarsLayer showShootingStar={false} />
    </div>
  );
}
