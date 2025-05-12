import React from 'react'
import './experience.css'
import { FaBriefcase, FaLaptopCode, FaCode, FaUserTie } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">Experience</h2>
          <div className="experience__container">
            <div className="experience__timeline">
              <article className="experience__card">
                <div className="experience__icon">
                  <FaBriefcase />
                </div>
                <div className="experience__content">
                  <h3>AffinityX</h3>
                  <span className="experience__duration">1.5 Years</span>
                  <p className="experience__role">Website Designer</p>
                  <div className="experience__details">
                    <p>Currently working as a Website Designer, creating modern and responsive web designs.</p>
                  </div>
                </div>
              </article>

              <article className="experience__card">
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

              <article className="experience__card">
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

              <article className="experience__card">
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