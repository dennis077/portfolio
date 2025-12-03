import { useCallback, useRef } from 'react';

/**
 * Custom hook to throttle function calls using requestAnimationFrame
 * Perfect for mouse move and scroll events to maintain 60fps
 */
export const useThrottle = (callback, delay = 16) => {
    const lastRan = useRef(Date.now());
    const timeoutRef = useRef(null);

    const throttledFunction = useCallback((...args) => {
        const now = Date.now();
        const timeSinceLastRun = now - lastRan.current;

        if (timeSinceLastRun >= delay) {
            callback(...args);
            lastRan.current = now;
        } else {
            // Clear existing timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Schedule for next available slot
            timeoutRef.current = setTimeout(() => {
                callback(...args);
                lastRan.current = Date.now();
            }, delay - timeSinceLastRun);
        }
    }, [callback, delay]);

    return throttledFunction;
};

/**
 * RAF-based throttle for smooth animations
 */
export const useRAFThrottle = (callback) => {
    const rafId = useRef(null);
    const lastArgs = useRef(null);

    const throttledFunction = useCallback((...args) => {
        lastArgs.current = args;

        if (rafId.current === null) {
            rafId.current = requestAnimationFrame(() => {
                callback(...lastArgs.current);
                rafId.current = null;
            });
        }
    }, [callback]);

    return throttledFunction;
};

export default useThrottle;
