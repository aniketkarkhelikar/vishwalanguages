import { useRef, useState, useEffect } from 'react';

/**
 * useScrollReveal — Intersection Observer hook for scroll-triggered animations.
 * Lightweight alternative to adding whileInView on every element.
 * Returns a ref and isVisible boolean.
 *
 * @param {Object} options
 * @param {string} options.threshold - 0 to 1
 * @param {string} options.rootMargin - CSS margin string
 * @param {boolean} options.once - trigger only once (default true)
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '-40px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * useCountUp — animates a number from 0 to target.
 * Triggers when isActive becomes true.
 */
export function useCountUp(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0);
  const numericTarget = typeof target === 'string' ? parseInt(target.replace(/[^0-9]/g, ''), 10) : target;
  const suffix = typeof target === 'string' ? target.replace(/[0-9,]/g, '') : '';

  useEffect(() => {
    if (!isActive || !numericTarget) return;

    let startTime;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isActive, numericTarget, duration]);

  return numericTarget > 0 ? `${count.toLocaleString()}${suffix}` : target;
}

/**
 * useReducedMotion — respects user's prefers-reduced-motion setting.
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mql.matches);
    const handler = (e) => setPrefersReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
