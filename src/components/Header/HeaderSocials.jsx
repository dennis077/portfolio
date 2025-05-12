import React from 'react'
import {BsLinkedin}from 'react-icons/bs'
import {BsGithub} from  'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="" className=''> <BsLinkedin /> </a>
        <a href=""><BsGithub /></a>
        <a href=""><BsStackOverflow /></a>
        
        </div>
  )
}

export default HeaderSocials