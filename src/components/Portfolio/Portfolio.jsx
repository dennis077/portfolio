import React, { useState, useRef, useMemo, memo } from 'react';
import './portfolio.css';
import ProjectModal from './ProjectModal';
import project1Image from './project1.png';
import papscoImage from './papsco.png';
import dhiNutriImage from './dhinutri.png';
import myportfolioImage from './myportfolio.png';
import shaktifyImage from './shaktify.png';
import whatsLiveImage from './whatslive.png';
import prototechImage from './prototech.png';
// import namoNaicoImage from './namonaico.png';
// import goDaddyImage from './godaddy.png';
// import newfoldImage from './newfold.png';
// import reFuelImage from './refuel.png';
import { BsSearch, BsGrid3X3Gap, BsList, BsX } from 'react-icons/bs';
import { useRAFThrottle } from '../../hooks/useThrottle';

const projects = [
  {
    id: 1,
    title: 'ProtoTech Solutions Website',
    description: 'Main website for ProtoTech Solutions designed and developed in WordPress. Features custom themes, responsive design, and seamless user experience with HTML, CSS, PHP, and MySQL integration.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      prototechImage,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 2,
    title: '3D Measure Up',
    description: 'ProtoTech Solutions\'s 3D Measure Up website designed and developed in WordPress. A specialized platform featuring custom functionality, responsive design, and optimized performance using HTML, CSS, PHP, and MySQL.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 3,
    title: 'Photo to Size',
    description: 'ProtoTech Solutions\'s 3D Photo to Size website designed and developed in WordPress. Custom-built solution with advanced features, responsive layout, and seamless integration using HTML, CSS, PHP, and MySQL.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 4,
    title: 'FormTrack Dashboard',
    description: 'Custom dashboard application synchronized with Google Sheets for dynamic form entry tracking and follow-up automation. Features real-time data synchronization, automated workflows, and comprehensive analytics.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Google Sheets API'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 5,
    title: 'My Portfolio',
    description: 'Personal portfolio website built with React, featuring modern animations using GSAP, custom cursor interactions, and a fully responsive design. Showcases projects, skills, and professional experience with smooth transitions and interactive elements.',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Cursor API'],
    images: [
      myportfolioImage,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 6,
    title: 'DhiNutri',
    description: 'Professional WordPress website for DhiNutri, featuring custom design, responsive layout, and optimized performance. Built with modern WordPress practices, custom themes, and seamless user experience.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      dhiNutriImage,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 7,
    title: 'Shaktify',
    description: 'WordPress website for Shaktify, designed with custom themes and plugins. Features responsive design, modern UI/UX, and optimized performance for seamless user experience across all devices.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      shaktifyImage,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 8,
    title: 'Namo Naico',
    description: 'WordPress website for Namo Naico, featuring custom design elements, responsive layout, and modern functionality. Built with best practices in WordPress development for optimal performance and user experience.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      papscoImage,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 9,
    title: 'GoDaddy Projects',
    description: 'Designed and developed multiple websites for GoDaddy clients, focusing on creating modern, responsive, and user-friendly interfaces. Implemented custom WordPress themes and plugins to meet specific client requirements.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    images: [
      project1Image,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 10,
    title: 'Newfold Projects',
    description: 'Multiple WordPress projects developed for Newfold Digital clients. Custom themes, responsive designs, and optimized performance. Focused on delivering high-quality websites that meet client specifications and industry standards.',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
    title: 'Jobwaala',
    description: 'Developed a comprehensive job portal that connects candidates with recruiters. Features include job posting, resume management, candidate search, and automated matching algorithms.',
    technologies: ['ASP.net', 'Bootstrap', 'MySQL', 'JavaScript'],
    images: [
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  },
  {
    id: 15,
    title: 'WhatsLive',
    description: 'Developed a Company Landing Page application using wordpress that allows users to chat with live agents in real-time. Features include live chat, message history, and automated responses. ',
    technologies: ['Node.js', 'Bootstrap', 'MySQL', 'JavaScript'],
    images: [
      whatsLiveImage,
      'https://via.placeholder.com/800x450',
      'https://via.placeholder.com/800x450'
    ],
    link: '#'
  }
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'compact'
  const cardRefs = useRef({});

  // Extract unique technologies for filter buttons
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' ||
        project.technologies.includes(activeFilter);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const handleMouseMoveRaw = (e, projectId) => {
    const card = cardRefs.current[projectId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation with smoother, more subtle effect
    const rotateX = ((y - centerY) / centerY) * -5; // Reduced from 8
    const rotateY = ((x - centerX) / centerX) * 5; // Reduced from 8

    // Calculate scale and translateZ for depth
    const distanceX = Math.abs(x - centerX) / centerX;
    const distanceY = Math.abs(y - centerY) / centerY;
    const distance = Math.max(distanceX, distanceY);
    const translateZ = 20 + (distance * 15); // Reduced from 30-50
    const scale = 1 + (distance * 0.01); // Reduced from 0.02

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
  };

  // Throttle with RAF for 60fps performance
  const handleMouseMove = useRAFThrottle(handleMouseMoveRaw);

  const handleMouseLeave = (projectId) => {
    const card = cardRefs.current[projectId];
    if (card) {
      card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    }
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

      {/* Search and Filter Controls */}
      <div className="portfolio-controls">
        <div className="search-container">
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <BsX />
            </button>
          )}
        </div>

        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <BsGrid3X3Gap />
          </button>
          <button
            className={`view-btn ${viewMode === 'compact' ? 'active' : ''}`}
            onClick={() => setViewMode('compact')}
            aria-label="Compact view"
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="filter-tags">
        {allTechnologies.slice(0, 8).map((tech) => (
          <button
            key={tech}
            className={`filter-tag ${activeFilter === tech ? 'active' : ''}`}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </button>
        ))}
        {allTechnologies.length > 8 && (
          <button
            className={`filter-tag ${activeFilter === 'More' ? 'active' : ''}`}
            onClick={() => {
              if (activeFilter === 'More') {
                setActiveFilter('All');
              } else {
                // Show dropdown or expand
                setActiveFilter('More');
              }
            }}
          >
            More...
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="results-count">
        Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
      </div>

      <div className="portfolio-container">
        {filteredProjects.length > 0 ? (
          <div className={`projects-3d-grid ${viewMode === 'compact' ? 'compact-view' : ''}`}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[project.id] = el)}
                className="project-card-3d"
                style={{ '--index': index }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                onClick={() => openModal(project)}
              >
                <div className="card-3d-inner">
                  <div className="card-3d-front">
                    <div className="project-image-3d">
                      <img src={project.images[0]} alt={project.title} />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="project-content-3d">
                      <h3>{project.title}</h3>
                      <p>{project.description.substring(0, 100)}...</p>
                      <div className="technologies-3d">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag-3d">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-tag-3d">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-3d-back">
                    <div className="card-back-content">
                      <h3>{project.title}</h3>
                      <p className="back-description">{project.description}</p>
                      <div className="all-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag-3d">{tech}</span>
                        ))}
                      </div>
                      <button
                        className="view-project-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No projects found matching your search criteria.</p>
            <button
              className="clear-filters-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
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
