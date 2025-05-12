import { useEffect, useRef, useCallback } from 'react';
import './scrollMotion.css';

const ScrollMotion = ({ children, animation = 'fade-up', delay = 0 }) => {
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observerRef.current.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current && observerRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [observerCallback]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-motion ${animation}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollMotion; 