import React, { useState } from 'react';
import './portfolio.css';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'GoDaddy Projects',
    description: 'Designed and developed multiple websites for GoDaddy clients, focusing on creating modern, responsive, and user-friendly interfaces. Implemented custom WordPress themes and plugins to meet specific client requirements.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 2,
    title: 'Project Re-Fuel',
    description: 'Developed an ASP.net based service platform for petrol pump queue management. The system helps optimize fuel station operations by managing vehicle queues and reducing waiting times.',
    technologies: ['ASP.net', 'Materialize CSS', 'C#', 'SQL Server'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 3,
    title: 'Project Lockdown',
    description: 'Created a COVID-19 emergency access management system to help organizations manage and monitor access during the pandemic. Features include contact tracing, health status tracking, and automated notifications.',
    technologies: ['ASP.net', 'Materialize CSS', 'C#', 'Azure'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 4,
    title: 'E-Learning4BCA',
    description: 'Built an online learning platform specifically designed for BCA students. The platform includes course materials, video lectures, practice tests, and a discussion forum for student interaction.',
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'JavaScript'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 5,
    title: 'Jobwaala',
    description: 'Developed a comprehensive job portal that connects candidates with recruiters. Features include job posting, resume management, candidate search, and automated matching algorithms.',
    technologies: ['ASP.net', 'Bootstrap', 'MySQL', 'JavaScript'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  }
];

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">My Projects</h2>
      <div className="portfolio-container">
        <div className="glass-card project-slider">
          <div className="slider-content">
            <div className="project-image">
              <img src={projects[currentSlide].images[0]} alt={projects[currentSlide].title} />
            </div>
            <div className="project-info">
              <h3>{projects[currentSlide].title}</h3>
              <p>{projects[currentSlide].description}</p>
              <div className="technologies">
                {projects[currentSlide].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button 
                className="project-link"
                onClick={() => openModal(projects[currentSlide])}
              >
                View Project
              </button>
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

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}

export default Portfolio;