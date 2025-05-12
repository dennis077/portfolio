import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("bHF5oQU9MalLDA6WU");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await emailjs.send(
        'service_6ter8od',
        'template_i895yee',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setShowThankYou(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <div className="thank-you-container">
        <div className="thank-you-content">
          <div className="success-icon">
            <FaPaperPlane />
          </div>
          <h2>Message Sent!</h2>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
          <button 
            className="submit-button"
            onClick={() => setShowThankYou(false)}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a question or want to work together? Feel free to reach out!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these channels. I'll get back to you as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaEnvelope className="icon" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaPhone className="icon" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>City, Country</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="contact-form">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 