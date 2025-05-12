import React from 'react'
import './header.css' 
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {BsArrowDownCircleFill} from 'react-icons/bs'
import ME from './banner.png'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        
        <h5 style={{margin:0}}>Hello I'm </h5>
        <h1 style={{margin:0}}>Dennis Bruno Tirkey</h1>
        <h5 className="text-light" style={{margin:0}}>Frontend Developer</h5>
        <CTA />

        <HeaderSocials />
        
        <div className='me'>
          <img className='me__img' src={ME} alt="me"/>
        </div>

        <a href="#content" className='scroll__down'><BsArrowDownCircleFill />Scroll Down</a>


        </div>
    </header>
  )
}

export default Header