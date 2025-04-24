import React from 'react'
import './About.css'
import About_Image from './about.png'
import { AiOutlineFieldTime, AiOutlineProject, AiOutlineCode, AiOutlineTeam } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">About Me</h2>
          <div className="about__container">
            <div className="about__left">
              <div className='about__me'>
                <img src={About_Image} alt="About Image" />
              </div>
              <div className="about__social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social__link">
                  <BsGithub className="social__icon" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social__link">
                  <BsLinkedin className="social__icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="about__cta">
                <a className='btn btn-primary' href="#contact">Let's Talk</a>
                <a className='btn btn-secondary' href="#portfolio">View Projects</a>
              </div>
            </div>

            <div className='about__right'>
              <div className="about__description">
                <h3>Full Stack Developer</h3>
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

              <div className="about__stats">
                <div className="stats__grid">
                  <div className="stat__item">
                    <div className="stat__icon">
                      <AiOutlineFieldTime />
                    </div>
                    <div className="stat__content">
                      <h4>Experience</h4>
                      <div className="stat__value">
                        <span className="number">2</span>
                        <span className="plus">+</span>
                        <span className="unit">Years</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat__item">
                    <div className="stat__icon">
                      <AiOutlineProject />
                    </div>
                    <div className="stat__content">
                      <h4>Projects</h4>
                      <div className="stat__value">
                        <span className="number">15</span>
                        <span className="plus">+</span>
                        <span className="unit">Live</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat__item">
                    <div className="stat__icon">
                      <AiOutlineCode />
                    </div>
                    <div className="stat__content">
                      <h4>Technologies</h4>
                      <div className="stat__value">
                        <span className="number">10</span>
                        <span className="plus">+</span>
                        <span className="unit">Skills</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat__item">
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
        </div>
      </div>
    </section>
  )
}

export default About