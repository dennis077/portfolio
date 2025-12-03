import React, { useRef, useState, useEffect } from 'react'
import './achievemets.css'
import { BsTrophy, BsAward, BsStar, BsLightning, BsPalette, BsGlobe } from 'react-icons/bs'
import { FaRibbon } from 'react-icons/fa'

const Achievements = () => {
  const cardRefs = useRef({});
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    const scale = 0.9 + (distance * 0.1);
    
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
  };

  const handleMouseLeave = (cardId) => {
    const card = cardRefs.current[cardId];
    if (card) {
      card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale(0.9)';
    }
  };

  const achievements = [
    {
      icon: <BsTrophy />,
      title: "Star Performer",
      description: "Awarded for Star Performer Of The Month of Feb 22 From AffinityX",
      organization: "AffinityX",
      date: "February 2022",
      badge: "Top Performer"
    },
    {
      icon: <BsAward />,
      title: "Best Design",
      description: "Received Best Design of the Month Twice in AffinityX",
      organization: "AffinityX",
      date: "Multiple Awards",
      badge: "Excellence"
    },
    {
      icon: <BsStar />,
      title: "Project Excellence",
      description: "Created the ProtoTech Solutions Website Forms and Followup Automation for which I was Appreciated",
      organization: "ProtoTech Solutions",
      date: "2023",
      badge: "Innovation"
    },
    {
      icon: <BsLightning />,
      title: "Rapid Development",
      description: "Successfully delivered 10+ WordPress websites within tight deadlines while maintaining high quality standards",
      organization: "Multiple Clients",
      date: "2022-2024",
      badge: "Efficiency"
    },
    {
      icon: <BsPalette />,
      title: "Creative Excellence",
      description: "Designed and implemented custom WordPress themes that enhanced client brand identity and user engagement",
      organization: "Various Projects",
      date: "2022-2024",
      badge: "Creativity"
    },
    {
      icon: <BsGlobe />,
      title: "Global Impact",
      description: "Developed websites for international clients, showcasing versatility in handling diverse project requirements",
      organization: "International Clients",
      date: "2022-2024",
      badge: "Global"
    }
  ];

  // Create a circular array for infinite loop
  const circularAchievements = [...achievements, ...achievements];

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
            Achievements & Recognition
          </h2>
          <p className={`section-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
            Celebrating milestones and excellence in my professional journey
          </p>
          <div className="achievements__container">
            <div className="achievements__carousel">
              <div className="achievements__slides">
                {circularAchievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`achievement__card ${isVisible ? 'fade-in-up' : ''}`}
                    style={{ '--index': index % achievements.length }}
                    ref={(el) => (cardRefs.current[`achievement-${index}`] = el)}
                    onMouseMove={(e) => handleMouseMove(e, `achievement-${index}`)}
                    onMouseLeave={() => handleMouseLeave(`achievement-${index}`)}
                  >
                    <div className="achievement__badge">
                      <FaRibbon />
                      <span>{achievement.badge}</span>
                    </div>
                    <div className="achievement__shine"></div>
                    <div className="achievement__icon">
                      <div className="icon__glow"></div>
                      {achievement.icon}
                    </div>
                    <div className="achievement__content">
                      <h3>{achievement.title}</h3>
                      <p>{achievement.description}</p>
                      <div className="achievement__meta">
                        <span className="achievement__organization">
                          <BsGlobe className="meta-icon" />
                          {achievement.organization}
                        </span>
                        <span className="achievement__date">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements