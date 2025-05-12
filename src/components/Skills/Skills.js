import React, { useEffect, useState } from 'react'
import './skills.css'
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaWordpress, FaShopify, FaCode, FaServer, FaDatabase, FaRobot } from 'react-icons/fa'
import { DiJavascript, DiPhp, DiMysql } from 'react-icons/di'
import { SiCplusplus, SiDotnet, SiPython, SiWoocommerce, SiWix, SiOpenai } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { BiLogoJava } from 'react-icons/bi'
import { BsDatabase, BsRobot, BsCursor, BsChatDots, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GiArtificialIntelligence } from 'react-icons/gi'

function Skills() {
  const [percentages, setPercentages] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      icon: <FaRobot className="skills__category-icon" />,
      skills: [
        { icon: <BsCursor className='skills__icons'/>, name: "Cursor AI", key: "cursor" },
        { icon: <BsChatDots className='skills__icons'/>, name: "ChatGPT", key: "chatgpt" },
        { icon: <SiOpenai className='skills__icons'/>, name: "OpenAI API", key: "openai" }
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
  }, []);

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
      <h2>Skills</h2>        
      <div className="container">
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
                    <article key={skill.key} className='skills__card'>
                      <div className="skills__thumbnail">
                        {skill.icon}
                      </div>
                      <h4>{skill.name}</h4>
                      <div className="skills__progress">
                        <div className="skills__progress-bar" style={{ width: `${percentages[skill.key]}%` }}></div>
                        <span className="skills__percentage">{percentages[skill.key]}%</span>
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