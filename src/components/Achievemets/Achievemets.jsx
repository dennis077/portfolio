import React from 'react'
import './achievemets.css' 
import  {BsTrophy} from 'react-icons/bs' 

const Achievemets = () => {
  return (
    <section>
      <h2>Achievements and Certifications</h2>
      <div className='container '>
        <div className='award__container'>
        <BsTrophy className='award__icon'/>
        <h3>
          Awarded for Star Performer Of The Month of Feb 22 From AffinityX
        </h3>
        </div>
      </div>
    </section>
  )
}

export default Achievemets