import { useEffect, useRef, useCallback, memo } from 'react';
import './scrollMotion.css';

const ScrollMotion = memo(({ children, animation = 'fade-up', delay = 0 }) => {
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, 100);
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '50px 0px'
    };

    observerRef.current = new IntersectionObserver(observerCallback, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (currentElement && observerRef.current) {
        observerRef.current.unobserve(currentElement);
      }
    };
  }, [observerCallback]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-motion ${animation}`}
      style={{ 
        animationDelay: `${delay}s`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
});

ScrollMotion.displayName = 'ScrollMotion';

export default ScrollMotion; 