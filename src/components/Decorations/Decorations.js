import React from 'react';
import './decorations.css';
import { FaCode, FaServer, FaDatabase, FaRobot, FaLaptopCode, FaPalette, FaLightbulb, FaRocket } from 'react-icons/fa';
import { GiArtificialIntelligence, GiCpu, GiNetworkBars, GiAbstract024 } from 'react-icons/gi';
import { BsGear, BsCpu, BsLightning, BsStars } from 'react-icons/bs';

const Decorations = () => {
  return (
    <>
      {/* Floating Icons */}
      <div className="floating-icon icon-1">
        <FaCode />
      </div>
      <div className="floating-icon icon-2">
        <FaServer />
      </div>
      <div className="floating-icon icon-3">
        <FaDatabase />
      </div>
      <div className="floating-icon icon-4">
        <FaRobot />
      </div>
      <div className="floating-icon icon-5">
        <FaLaptopCode />
      </div>
      <div className="floating-icon icon-6">
        <FaPalette />
      </div>
      <div className="floating-icon icon-7">
        <FaLightbulb />
      </div>
      <div className="floating-icon icon-8">
        <FaRocket />
      </div>

      {/* Abstract Shapes */}
      <div className="abstract-shape shape-1">
        <GiAbstract024 />
      </div>
      <div className="abstract-shape shape-2">
        <GiCpu />
      </div>
      <div className="abstract-shape shape-3">
        <GiNetworkBars />
      </div>
      <div className="abstract-shape shape-4">
        <GiArtificialIntelligence />
      </div>

      {/* Tech Elements */}
      <div className="tech-element tech-1">
        <BsGear />
      </div>
      <div className="tech-element tech-2">
        <BsCpu />
      </div>
      <div className="tech-element tech-3">
        <BsLightning />
      </div>
      <div className="tech-element tech-4">
        <BsStars />
      </div>

      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="gradient-orb orb-4"></div>
    </>
  );
};

export default Decorations; 