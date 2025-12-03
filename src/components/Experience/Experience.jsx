import React, { useRef } from 'react'
import './experience.css'
import { FaBriefcase, FaLaptopCode, FaCode, FaUserTie, FaRocket } from 'react-icons/fa'

const Experience = () => {
  const cardRefs = useRef({});

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

  return (
    <section id="experience" className="experience-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">Experience</h2>
          <div className="experience__container">
            <div className="experience__timeline">
              <article 
                className="experience__card"
                ref={(el) => (cardRefs.current['prototech'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'prototech')}
                onMouseLeave={() => handleMouseLeave('prototech')}
              >
                <div className="experience__icon">
                  <FaRocket />
                </div>
                <div className="experience__content">
                  <h3>Prototech Solutions</h3>
                  <span className="experience__duration">Currently Working</span>
                  <p className="experience__role">Full Stack Developer</p>
                  <div className="experience__details">
                    <p>Currently working as a Full Stack Developer, developing modern web applications and AI-powered solutions using cutting-edge technologies.</p>
                  </div>
                </div>
              </article>

              <article 
                className="experience__card"
                ref={(el) => (cardRefs.current['affinityx'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'affinityx')}
                onMouseLeave={() => handleMouseLeave('affinityx')}
              >
                <div className="experience__icon">
                  <FaBriefcase />
                </div>
                <div className="experience__content">
                  <h3>AffinityX</h3>
                  <span className="experience__duration">1.5 Years</span>
                  <p className="experience__role">Website Designer</p>
                  <div className="experience__details">
                    <p>Worked as a Website Designer, creating modern and responsive web designs.</p>
                  </div>
                </div>
              </article>

              <article 
                className="experience__card"
                ref={(el) => (cardRefs.current['indiavorks'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'indiavorks')}
                onMouseLeave={() => handleMouseLeave('indiavorks')}
              >
                <div className="experience__icon">
                  <FaLaptopCode />
                </div>
                <div className="experience__content">
                  <h3>Indiavorks Bizconcepts Pvt. Ltd.</h3>
                  <span className="experience__duration">7 Months</span>
                  <p className="experience__role">Web Developer/Administrator</p>
                  <div className="experience__details">
                    <p>Worked as a Web Developer and Administrator, managing and developing web solutions.</p>
                  </div>
                </div>
              </article>

              <article 
                className="experience__card"
                ref={(el) => (cardRefs.current['keyword'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'keyword')}
                onMouseLeave={() => handleMouseLeave('keyword')}
              >
                <div className="experience__icon">
                  <FaCode />
                </div>
                <div className="experience__content">
                  <h3>Keyword Technology</h3>
                  <span className="experience__duration">3 Months</span>
                  <p className="experience__role">Intern</p>
                  <div className="experience__details">
                    <p>Completed a 3-month internship, gaining hands-on experience in web development.</p>
                  </div>
                </div>
              </article>

              <article 
                className="experience__card"
                ref={(el) => (cardRefs.current['freelance'] = el)}
                onMouseMove={(e) => handleMouseMove(e, 'freelance')}
                onMouseLeave={() => handleMouseLeave('freelance')}
              >
                <div className="experience__icon">
                  <FaUserTie />
                </div>
                <div className="experience__content">
                  <h3>Freelance Projects</h3>
                  <span className="experience__duration">3 Months</span>
                  <p className="experience__role">Freelance Developer</p>
                  <div className="experience__details">
                    <p>Worked on various freelance projects, delivering custom web solutions to clients.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience