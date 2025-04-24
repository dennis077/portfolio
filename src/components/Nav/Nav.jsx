import React, { useState, useEffect } from 'react';
import './Nav.css';
import { FaHome, FaUser, FaBriefcase, FaCode, FaTools, FaTrophy, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'portfolio', icon: <FaCode />, label: 'Portfolio' },
    { id: 'skills', icon: <FaTools />, label: 'Skills' },
    { id: 'achievements', icon: <FaTrophy />, label: 'Achievements' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
  ];

  return (
    <nav className="nav__container">
      <ul className="nav__menu">
        {navItems.map(item => (
          <li key={item.id} className="nav__item">
            <a
              href={`#${item.id}`}
              className={`nav__link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
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