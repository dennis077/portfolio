import React from 'react'
import { FaEnvelope, FaDownload } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className="cta">
      <a className='btn btn-primary' href="#contact">
        <FaEnvelope />
        <span>Let's Connect</span>
      </a>
      <a className='btn btn-secondary' href="#resume">
        <FaDownload />
        <span>Download Resume</span>
      </a>
    </div>
  )
}

export default CTA