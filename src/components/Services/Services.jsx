import React from 'react'
import { 
  BsWordpress, 
  BsCodeSlash, 
  BsCart3, 
  BsPhone, 
  BsSearch, 
  BsPalette,
  BsCode,
  BsPlug,
  BsBag,
  BsTools,
  BsRocket,
  BsPhoneVibrate,
  BsSpeedometer2,
  BsCheckCircle,
  BsGraphUp,
  BsLightning,
  BsPhoneFlip,
  BsBarChart,
  BsPalette2,
  BsPersonCheck,
  BsPencilSquare,
  BsBrush,
  BsPeople,
  BsBuilding,
  BsList,
  BsCreditCard,
  BsClipboardData
} from 'react-icons/bs'
import './services.css'

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">Services</h2>
          <div className='service__container'>
            <div className='service'>
              <div className="service__icon">
                <BsWordpress />
              </div>
              <h3>WordPress Development</h3>
              <ul className="service__list">
                <li><BsCode className='service__content__icon' />Custom WordPress Theme Development</li>
                <li><BsPlug className='service__content__icon' />WordPress Plugin Integration</li>
                <li><BsBag className='service__content__icon' />E-commerce Solutions with WooCommerce</li>
                <li><BsTools className='service__content__icon' />WordPress Site Maintenance</li>
                <li><BsRocket className='service__content__icon' />Performance Optimization</li>
              </ul>
            </div>

            <div className='service'>
              <div className="service__icon">
                <BsCodeSlash />
              </div>
              <h3>Web Design & Development</h3>
              <ul className="service__list">
                <li><BsPhoneVibrate className='service__content__icon' />Responsive Website Design</li>
                <li><BsRocket className='service__content__icon' />Landing Page Development</li>
                <li><BsPalette2 className='service__content__icon' />Portfolio Websites</li>
                <li><BsBuilding className='service__content__icon' />Corporate Websites</li>
                <li><BsCode className='service__content__icon' />Custom Web Applications</li>
              </ul>
            </div>

            <div className='service'>
              <div className="service__icon">
                <BsCart3 />
              </div>
              <h3>E-commerce Solutions</h3>
              <ul className="service__list">
                <li><BsBag className='service__content__icon' />WooCommerce Store Setup</li>
                <li><BsList className='service__content__icon' />Product Catalog Management</li>
                <li><BsCreditCard className='service__content__icon' />Payment Gateway Integration</li>
                <li><BsCart3 className='service__content__icon' />Shopping Cart Customization</li>
                <li><BsClipboardData className='service__content__icon' />Order Management System</li>
              </ul>
            </div>

            <div className='service'>
              <div className="service__icon">
                <BsPhone />
              </div>
              <h3>Mobile-First Design</h3>
              <ul className="service__list">
                <li><BsPhoneVibrate className='service__content__icon' />Responsive Mobile Design</li>
                <li><BsPhoneFlip className='service__content__icon' />Mobile App Integration</li>
                <li><BsPhone className='service__content__icon' />Touch-Friendly Interfaces</li>
                <li><BsSpeedometer2 className='service__content__icon' />Mobile Performance Optimization</li>
                <li><BsCheckCircle className='service__content__icon' />Cross-Device Compatibility</li>
              </ul>
            </div>

            <div className='service'>
              <div className="service__icon">
                <BsSearch />
              </div>
              <h3>SEO & Optimization</h3>
              <ul className="service__list">
                <li><BsGraphUp className='service__content__icon' />On-Page SEO Optimization</li>
                <li><BsLightning className='service__content__icon' />Speed Optimization</li>
                <li><BsPhoneFlip className='service__content__icon' />Mobile-Friendly Testing</li>
                <li><BsBarChart className='service__content__icon' />Performance Monitoring</li>
                <li><BsPlug className='service__content__icon' />SEO Plugin Integration</li>
              </ul>
            </div>

            <div className='service'>
              <div className="service__icon">
                <BsPalette />
              </div>
              <h3>UI/UX Design</h3>
              <ul className="service__list">
                <li><BsPalette2 className='service__content__icon' />User Interface Design</li>
                <li><BsPersonCheck className='service__content__icon' />User Experience Optimization</li>
                <li><BsPencilSquare className='service__content__icon' />Wireframing & Prototyping</li>
                <li><BsBrush className='service__content__icon' />Visual Design & Branding</li>
                <li><BsPeople className='service__content__icon' />Usability Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services