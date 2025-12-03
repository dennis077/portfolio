import React, { memo } from 'react';
import './decorations.css';
import { FaCode, FaDatabase, FaRocket, FaPalette } from 'react-icons/fa';
import { GiArtificialIntelligence, GiNetworkBars } from 'react-icons/gi';
import { BsGear, BsLightning } from 'react-icons/bs';
import { useIsMobile, useReducedMotion } from '../../hooks/useReducedMotion';

const Decorations = memo(() => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Disable decorations on mobile or for users who prefer reduced motion
  if (isMobile || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Reduced Floating Icons - 4 instead of 8 */}
      <div className="floating-icon icon-1">
        <FaCode />
      </div>
      <div className="floating-icon icon-3">
        <FaDatabase />
      </div>
      <div className="floating-icon icon-5">
        <FaPalette />
      </div>
      <div className="floating-icon icon-8">
        <FaRocket />
      </div>

      {/* Reduced Abstract Shapes - 2 instead of 4 */}
      <div className="abstract-shape shape-1">
        <GiNetworkBars />
      </div>
      <div className="abstract-shape shape-3">
        <GiArtificialIntelligence />
      </div>

      {/* Reduced Tech Elements - 2 instead of 4 */}
      <div className="tech-element tech-1">
        <BsGear />
      </div>
      <div className="tech-element tech-3">
        <BsLightning />
      </div>

      {/* Reduced Gradient Orbs - 2 instead of 4 */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-3"></div>
    </>
  );
});

Decorations.displayName = 'Decorations';

export default Decorations;