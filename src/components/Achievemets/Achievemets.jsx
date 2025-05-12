import React from 'react'
import './achievemets.css'
import { BsTrophy, BsAward, BsStar, BsLightning, BsPalette, BsGlobe } from 'react-icons/bs'

const Achievemets = () => {
  const achievements = [
    {
      icon: <BsTrophy />,
      title: "Star Performer",
      description: "Awarded for Star Performer Of The Month of Feb 22 From AffinityX"
    },
    {
      icon: <BsAward />,
      title: "Best Design",
      description: "Received Best Design of the Month Twice in AffinityX"
    },
    {
      icon: <BsStar />,
      title: "Project Excellence",
      description: "Created the ProtoTech Solutions Website Forms and Followup Automation for which I was Appreciated"
    },
    {
      icon: <BsLightning />,
      title: "Rapid Development",
      description: "Successfully delivered 10+ WordPress websites within tight deadlines while maintaining high quality standards"
    },
    {
      icon: <BsPalette />,
      title: "Creative Excellence",
      description: "Designed and implemented custom WordPress themes that enhanced client brand identity and user engagement"
    },
    {
      icon: <BsGlobe />,
      title: "Global Impact",
      description: "Developed websites for international clients, showcasing versatility in handling diverse project requirements"
    }
  ];

  // Create a circular array for infinite loop
  const circularAchievements = [...achievements, ...achievements];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="achievements__container">
            <div className="achievements__carousel">
              <div className="achievements__slides">
                {circularAchievements.map((achievement, index) => (
                  <div key={index} className="achievement__card">
                    <div className="achievement__icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement__content">
                      <h3>{achievement.title}</h3>
                      <p>{achievement.description}</p>
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

export default Achievemets