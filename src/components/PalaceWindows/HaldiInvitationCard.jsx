import React from 'react';
import ButterfliesLayer from './ButterfliesLayer';

/**
 * Haldi Ceremony Page Layer ("Vibe With Blue")
 * Text removed per user request.
 * Preserves the lifelike 3D flying butterflies over the poolside artwork.
 */
export default function HaldiInvitationCard() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden">
      {/* Lifelike 3D Flying Butterflies Layer */}
      <ButterfliesLayer theme="haldi" />
    </div>
  );
}
