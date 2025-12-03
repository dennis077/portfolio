import React, { useRef, useState, useEffect } from 'react'
import './About.css'
import About_Image from './about.png'
import { AiOutlineFieldTime, AiOutlineProject, AiOutlineCode, AiOutlineTeam } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { FaLaptopCode, FaReact, FaNode } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si'

const About = () => {
  const cardRefs = useRef({});
  const imageRef = useRef(null);
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e, cardId) => {
    const card = cardRefs.current[cardId];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    const distanceX = Math.abs(x - centerX) / centerX;
    const distanceY = Math.abs(y - centerY) / centerY;
    const distance = Math.max(distanceX, distanceY);
    const translateZ = 30 + (distance * 20);
    const scale = 1 + (distance * 0.02);
    
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
  };

  const handleMouseLeave = (cardId) => {
    const card = cardRefs.current[cardId];
    if (card) {
      card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    }
  };

  const handleImageMouseMove = (e) => {
    const image = imageRef.current;
    if (!image) return;
    
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleImageMouseLeave = () => {
    const image = imageRef.current;
    if (image) {
      image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    animateCounter('experience', 2);
    animateCounter('projects', 15);
    animateCounter('technologies', 10);
  }, [isVisible]);

  return (
    <section id="about" className="about-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">About Me</h2>
          
          <div className="about__container">
            <div 
              className='about__image-wrapper'
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
            >
              <div className="about__me">
                <img ref={imageRef} src={About_Image} alt="Dennis Bruno Tirkey" />
              </div>
            </div>

            <div className="about__content">
              <div className="about__description">
                <p>
                  I am a passionate Full Stack Developer with expertise in building modern web applications. 
                  My journey in web development started 2 years ago, and since then, I've been constantly 
                  learning and improving my skills. I specialize in React.js, Node.js, and modern web technologies.
                </p>
                <p>
                  I love creating responsive, user-friendly applications that solve real-world problems. 
                  My approach combines technical expertise with creative problem-solving to deliver 
                  high-quality solutions.
                </p>
              </div>

              <div className="about__tech-stack">
                <span className="tech-tag">
                  <FaReact /> React
                </span>
                <span className="tech-tag">
                  <SiJavascript /> JavaScript
                </span>
                <span className="tech-tag">
                  <FaNode /> Node.js
                </span>
                <span className="tech-tag">
                  <SiMongodb /> MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="about__stats">
            <div className="stats__grid">
              <div 
                className="stat__item"
                ref={(el) => (cardRefs.current['experience'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'experience')}
                onMouseLeave={() => handleMouseLeave('experience')}
              >
                <div className="stat__icon">
                  <AiOutlineFieldTime />
                </div>
                <div className="stat__content">
                  <h4>Experience</h4>
                  <div className="stat__value">
                    <span className="number">{counters.experience}</span>
                    <span className="plus">+</span>
                    <span className="unit">Years</span>
                  </div>
                </div>
              </div>

              <div 
                className="stat__item"
                ref={(el) => (cardRefs.current['projects'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'projects')}
                onMouseLeave={() => handleMouseLeave('projects')}
              >
                <div className="stat__icon">
                  <AiOutlineProject />
                </div>
                <div className="stat__content">
                  <h4>Projects</h4>
                  <div className="stat__value">
                    <span className="number">{counters.projects}</span>
                    <span className="plus">+</span>
                    <span className="unit">Live</span>
                  </div>
                </div>
              </div>

              <div 
                className="stat__item"
                ref={(el) => (cardRefs.current['technologies'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'technologies')}
                onMouseLeave={() => handleMouseLeave('technologies')}
              >
                <div className="stat__icon">
                  <AiOutlineCode />
                </div>
                <div className="stat__content">
                  <h4>Technologies</h4>
                  <div className="stat__value">
                    <span className="number">{counters.technologies}</span>
                    <span className="plus">+</span>
                    <span className="unit">Skills</span>
                  </div>
                </div>
              </div>

              <div 
                className="stat__item"
                ref={(el) => (cardRefs.current['collaboration'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'collaboration')}
                onMouseLeave={() => handleMouseLeave('collaboration')}
              >
                <div className="stat__icon">
                  <AiOutlineTeam />
                </div>
                <div className="stat__content">
                  <h4>Collaboration</h4>
                  <div className="stat__value">
                    <span className="text">Team</span>
                    <span className="unit">Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About