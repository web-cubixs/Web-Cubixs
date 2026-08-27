import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export const useAnimeReveal = ({
  selector = '.reveal-item',
  delay = 100,
  staggerDelay = 80,
  translateY = 24,
  duration = 650,
  ease = 'outQuad'
} = {}) => {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    // Initially hide and offset
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = `translateY(${translateY}px)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(elements, {
              opacity: [0, 1],
              translateY: [translateY, 0],
              delay: stagger(staggerDelay, { start: delay }),
              duration: duration,
              ease: 'outCubic'
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [selector, delay, staggerDelay, translateY, duration, ease, prefersReducedMotion]);

  return containerRef;
};
