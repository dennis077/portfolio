import React, { useState } from 'react';
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: 'GoDaddy Projects',
    description: 'Designed and developed multiple websites for GoDaddy clients',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'JavaScript'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Re-Fuel',
    description: 'ASP.net based service platform for petrol pump queue management',
    technologies: ['ASP.net', 'Materialize CSS', 'C#'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Lockdown',
    description: 'COVID-19 emergency access management system',
    technologies: ['ASP.net', 'Materialize CSS', 'C#'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    id: 4,
    title: 'E-Learning4BCA',
    description: 'Online learning platform for BCA students',
    technologies: ['PHP', 'Bootstrap', 'MySQL'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    id: 5,
    title: 'Jobwaala',
    description: 'Job portal connecting candidates and recruiters',
    technologies: ['ASP.net', 'Bootstrap', 'MySQL'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  }
];

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">My Projects</h2>
      <div className="portfolio-container">
        <div className="glass-card project-slider">
          <div className="slider-content">
            <div className="project-image">
              <img src={projects[currentSlide].image} alt={projects[currentSlide].title} />
            </div>
            <div className="project-info">
              <h3>{projects[currentSlide].title}</h3>
              <p>{projects[currentSlide].description}</p>
              <div className="technologies">
                {projects[currentSlide].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={projects[currentSlide].link} className="project-link">View Project</a>
            </div>
          </div>
          <div className="slider-controls">
            <button onClick={prevSlide} className="slider-btn">❮</button>
            <div className="slider-dots">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="slider-btn">❯</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;