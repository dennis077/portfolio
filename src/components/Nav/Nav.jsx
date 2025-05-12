import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Nav.css';
import { FaHome, FaUser, FaBriefcase, FaCode, FaTools, FaTrophy, FaEnvelope, FaLaptopCode, FaCogs } from 'react-icons/fa';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('header');
  const isProgrammaticScroll = useRef(false);

  const handleScroll = useCallback(() => {
    // Skip visibility calculations during programmatic scroll
    if (isProgrammaticScroll.current) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const headerHeight = 80; // Adjust this based on your header height

    // Get all sections
    const sections = Array.from(document.querySelectorAll('section[id]'));
    
    // Check if we're at the top of the page
    if (scrollPosition < windowHeight * 0.3) {
      setActiveSection('header');
      return;
    }

    // Find the current section
    let currentSection = null;
    let maxVisibility = 0;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.pageYOffset;
      const sectionBottom = sectionTop + rect.height;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible in the viewport
      const visibleTop = Math.max(sectionTop, scrollPosition);
      const visibleBottom = Math.min(sectionBottom, scrollPosition + windowHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibility = visibleHeight / sectionHeight;

      // Debug logs for Experience and Portfolio sections
      if (section.id === 'experience' || section.id === 'portfolio') {
        console.log(`Section: ${section.id}`);
        console.log(`Section Top: ${sectionTop}`);
        console.log(`Section Bottom: ${sectionBottom}`);
        console.log(`Scroll Position: ${scrollPosition}`);
        console.log(`Visibility: ${visibility}`);
        console.log('-------------------');
      }

      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        currentSection = section;
      }
    });

    if (currentSection && maxVisibility > 0.3) { // Only update if section is at least 30% visible
      console.log(`Active Section: ${currentSection.id}, Visibility: ${maxVisibility}`);
      setActiveSection(currentSection.id);
    }
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();

    // Add scroll event listener with throttling
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler);
    
    // Cleanup
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  const navItems = [
    { id: 'header', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'portfolio', icon: <FaCode />, label: 'Portfolio' },
    { id: 'skills', icon: <FaLaptopCode />, label: 'Skills' },
    { id: 'services', icon: <FaCogs />, label: 'Services' },
    { id: 'achievements', icon: <FaTrophy />, label: 'Achievements' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
  ];

  const handleNavClick = (e, itemId) => {
    e.preventDefault();
    
    // Set programmatic scroll flag
    isProgrammaticScroll.current = true;
    
    // Set active section immediately
    setActiveSection(itemId);
    
    if (itemId === 'header') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(itemId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Reset programmatic scroll flag after animation
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  };

  return (
    <nav className="nav__container">
      <ul className="nav__menu">
        {navItems.map(item => (
          <li key={item.id} className="nav__item">
            <a
              href={`#${item.id}`}
              className={`nav__link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
              data-tooltip={item.label}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;