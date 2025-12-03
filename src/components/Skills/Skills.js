import React, { useEffect, useState, useRef } from 'react'
import './skills.css'
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaWordpress, FaShopify, FaCode, FaServer, FaDatabase, FaRobot, FaBrain } from 'react-icons/fa'
import { DiJavascript, DiPhp, DiMysql } from 'react-icons/di'
import { SiCplusplus, SiDotnet, SiPython, SiWoocommerce, SiWix, SiOpenai } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { BiLogoJava } from 'react-icons/bi'
import { BsDatabase, BsRobot, BsCursor, BsChatDots, BsChevronLeft, BsChevronRight, BsGear, BsLightning } from 'react-icons/bs'
import { GiArtificialIntelligence, GiBrain } from 'react-icons/gi'

function Skills() {
  const [percentages, setPercentages] = useState({});
  const [animatedPercentages, setAnimatedPercentages] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardRefs = useRef({});
  const progressBarRefs = useRef({});
  const percentagesRef = useRef({});

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

  const categories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="skills__category-icon" />,
      skills: [
        { icon: <FaHtml5 className='skills__icons'/>, name: "HTML 5", key: "html" },
        { icon: <FaCss3 className='skills__icons'/>, name: "CSS", key: "css" },
        { icon: <DiJavascript className='skills__icons'/>, name: "JavaScript", key: "javascript" },
        { icon: <FaBootstrap className='skills__icons'/>, name: "Bootstrap", key: "bootstrap" },
        { icon: <FaReact className='skills__icons'/>, name: "React JS", key: "react" },
        { icon: <DiJavascript className='skills__icons'/>, name: "ES 5/ES 6", key: "es6" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="skills__category-icon" />,
      skills: [
        { icon: <DiPhp className='skills__icons'/>, name: "PHP", key: "php" },
        { icon: <SiDotnet className='skills__icons'/>, name: "ASP.net C#", key: "aspnet" },
        { icon: <BiLogoJava className='skills__icons'/>, name: "Java", key: "java" },
        { icon: <SiPython className='skills__icons'/>, name: "Python", key: "python" },
        { icon: <TbBrandCpp className='skills__icons'/>, name: "C Programming", key: "c" },
        { icon: <SiCplusplus className='skills__icons'/>, name: "C++ Programming", key: "cpp" }
      ]
    },
    {
      title: "Database & CMS",
      icon: <FaDatabase className="skills__category-icon" />,
      skills: [
        { icon: <DiMysql className='skills__icons'/>, name: "MySQL Database", key: "mysql" },
        { icon: <BsDatabase className='skills__icons'/>, name: "Microsoft SQL Server", key: "mssql" },
        { icon: <FaWordpress className='skills__icons'/>, name: "WordPress", key: "wordpress" },
        { icon: <FaShopify className='skills__icons'/>, name: "Shopify", key: "shopify" },
        { icon: <SiWoocommerce className='skills__icons'/>, name: "WooCommerce", key: "woocommerce" },
        { icon: <SiWix className='skills__icons'/>, name: "Wix", key: "wix" }
      ]
    },
    {
      title: "AI & Development Tools",
      icon: <GiArtificialIntelligence className="skills__category-icon" />,
      skills: [
        { icon: <BsCursor className='skills__icons'/>, name: "Cursor AI", key: "cursor" },
        { icon: <BsChatDots className='skills__icons'/>, name: "ChatGPT", key: "chatgpt" },
        { icon: <SiOpenai className='skills__icons'/>, name: "OpenAI API", key: "openai" },
        { icon: <GiBrain className='skills__icons'/>, name: "Machine Learning", key: "ml" },
        { icon: <FaBrain className='skills__icons'/>, name: "AI Integration", key: "ai-integration" },
        { icon: <BsLightning className='skills__icons'/>, name: "AI-Powered Development", key: "ai-dev" },
        { icon: <SiPython className='skills__icons'/>, name: "Python for AI/ML", key: "python-ai" },
        { icon: <BsGear className='skills__icons'/>, name: "AI Automation", key: "ai-automation" }
      ]
    }
  ];

  useEffect(() => {
    // Generate random percentages for each skill
    const newPercentages = {};
    const allSkills = categories.flatMap(category => 
      category.skills.map(skill => skill.key)
    );
    
    allSkills.forEach(skill => {
      newPercentages[skill] = Math.floor(Math.random() * 40) + 60; // Random percentage between 60-100
    });
    
    setPercentages(newPercentages);
    percentagesRef.current = newPercentages;
    // Initialize animated percentages at 0
    setAnimatedPercentages(Object.fromEntries(allSkills.map(skill => [skill, 0])));
    
    // Animate progress bars after a short delay
    const timer = setTimeout(() => {
      setAnimatedPercentages(newPercentages);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Re-animate progress bars when slide changes
  useEffect(() => {
    if (Object.keys(percentagesRef.current).length === 0) return; // Wait for percentages to be set
    
    const currentCategorySkills = categories[currentSlide]?.skills || [];
    const skillKeys = currentCategorySkills.map(skill => skill.key);
    
    // Reset current slide's progress bars to 0
    setAnimatedPercentages(prev => {
      const updated = { ...prev };
      skillKeys.forEach(key => {
        updated[key] = 0;
      });
      return updated;
    });
    
    // Animate to target values after transition
    const timer = setTimeout(() => {
      setAnimatedPercentages(prev => {
        const updated = { ...prev };
        skillKeys.forEach(key => {
          if (percentagesRef.current[key] !== undefined) {
            updated[key] = percentagesRef.current[key];
          }
        });
        return updated;
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % categories.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__container">
          <div 
            className="skills__carousel" 
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {categories.map((category, index) => (
              <div key={index} className="skills__category">
                <div className="skills__category-thumbnail">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <div className="skills__content">
                  {category.skills.map((skill) => (
                    <article 
                      key={skill.key} 
                      className='skills__card'
                      ref={(el) => (cardRefs.current[skill.key] = el)}
                      onMouseMove={(e) => handleMouseMove(e, skill.key)}
                      onMouseLeave={() => handleMouseLeave(skill.key)}
                    >
                      <div className="skills__thumbnail">
                        {skill.icon}
                      </div>
                      <h4>{skill.name}</h4>
                      <div className="skills__progress">
                        <div 
                          className="skills__progress-bar" 
                          style={{ width: `${animatedPercentages[skill.key] || 0}%` }}
                          ref={(el) => (progressBarRefs.current[skill.key] = el)}
                        ></div>
                        <span className="skills__percentage">
                          {animatedPercentages[skill.key] !== undefined ? `${animatedPercentages[skill.key]}%` : '0%'}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills__nav">
            <button 
              className="skills__nav-btn" 
              onClick={prevSlide}
            >
              <BsChevronLeft />
            </button>
            <button 
              className="skills__nav-btn" 
              onClick={nextSlide}
            >
              <BsChevronRight />
            </button>
          </div>

          <div className="skills__dots">
            {categories.map((_, index) => (
              <div
                key={index}
                className={`skills__dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills