import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IoClose />
        </button>
        
        <div className="modal-gallery">
          <div className="gallery-main">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`} 
            />
            <button className="gallery-nav prev" onClick={prevImage}>
              <BsChevronLeft />
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              <BsChevronRight />
            </button>
          </div>
          
          <div className="gallery-thumbnails">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="modal-info">
          <h2>{project.title}</h2>
          <p className="project-description">{project.description}</p>
          
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 