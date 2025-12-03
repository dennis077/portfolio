import React, { useRef } from 'react'
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
  const cardRefs = useRef({});

  const handleMouseMove = (e, cardId) => {
    const card = cardRefs.current[cardId];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    const distanceX = Math.abs(x - centerX) / centerX;
    const distanceY = Math.abs(y - centerY) / centerY;
    const distance = Math.max(distanceX, distanceY);
    const translateZ = 30 + (distance * 20);
    const scale = 1 + (distance * 0.02);
    
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
  };

  const handleMouseLeave = (cardId) => {
    const card = cardRefs.current[cardId];
    if (card) {
      card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section__bg"></div>
      <div className="container">
        <div className="section__content">
          <h2 className="section-title">Services</h2>
          <div className='service__container'>
            <div 
              className='service'
              ref={(el) => (cardRefs.current['wordpress'] = el)}
              onMouseMove={(e) => handleMouseMove(e, 'wordpress')}
              onMouseLeave={() => handleMouseLeave('wordpress')}
            >
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

            <div 
              className='service'
              ref={(el) => (cardRefs.current['webdev'] = el)}
              onMouseMove={(e) => handleMouseMove(e, 'webdev')}
              onMouseLeave={() => handleMouseLeave('webdev')}
            >
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

            <div 
              className='service'
              ref={(el) => (cardRefs.current['ecommerce'] = el)}
              onMouseMove={(e) => handleMouseMove(e, 'ecommerce')}
              onMouseLeave={() => handleMouseLeave('ecommerce')}
            >
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

            <div 
              className='service'
              ref={(el) => (cardRefs.current['mobile'] = el)}
              onMouseMove={(e) => handleMouseMove(e, 'mobile')}
              onMouseLeave={() => handleMouseLeave('mobile')}
            >
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

            <div 
              className='service'
              ref={(el) => (cardRefs.current['seo'] = el)}
              onMouseMove={(e) => handleMouseMove(e, 'seo')}
              onMouseLeave={() => handleMouseLeave('seo')}
            >
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

            <div 
              className='service'
              ref={(el) => (cardRefs.current['uiux'] = el)}
              onMouseMove={(e) => handleMouseMove(e, 'uiux')}
              onMouseLeave={() => handleMouseLeave('uiux')}
            >
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