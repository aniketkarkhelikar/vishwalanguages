/**
 * VISHWA LANGUAGES — Motion Presets
 * All animations centralized here. Every motion has intention.
 * Never use arbitrary values — always use these presets.
 */

// --- Easing Curves ---
export const ease = {
  /** Apple-style expressive spring feel */
  out:    [0.16, 1, 0.3, 1],
  /** Smooth, calm deceleration */
  smooth: [0.4, 0, 0.2, 1],
  /** Sharp entrance */
  in:     [0.4, 0, 1, 1],
};

// --- Duration Scale ---
export const duration = {
  fast:     0.2,
  base:     0.35,
  moderate: 0.5,
  slow:     0.7,
  page:     0.6,
};

// --- Spring Configs ---
export const spring = {
  /** Tile parallax — soft landing */
  tile:   { type: 'spring', damping: 20, stiffness: 40 },
  /** UI elements — snappy */
  snappy: { type: 'spring', damping: 25, stiffness: 200 },
  /** Modal — smooth arrival */
  modal:  { type: 'spring', damping: 30, stiffness: 150 },
};

// --- Reusable Variants ---

/** Section reveal from below */
export const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } },
};

/** Fade in only */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.moderate } },
};

/** Hero entrance — large vertical lift */
export const heroEntrance = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: ease.out } },
};

/** Stagger container */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Card lift on hover */
export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 4px 24px rgba(23,21,18,0.06)' },
  hover: { y: -4, boxShadow: '0 20px 40px -12px rgba(23,21,18,0.12)',
           transition: { duration: duration.base, ease: ease.smooth } },
};

/** Modal entrance */
export const modalEntrance = {
  hidden:  { y: 30, opacity: 0, scale: 0.98 },
  visible: { y: 0,  opacity: 1, scale: 1,
             transition: { ease: ease.out, duration: duration.moderate } },
  exit:    { y: 20, opacity: 0, scale: 0.98 },
};

/** Page transition */
export const pageTransition = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.page } },
  exit:    { opacity: 0 },
};

/** Language page entrance */
export const pageSlideUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,
             transition: { duration: duration.moderate, ease: ease.out } },
  exit:    { opacity: 0 },
};

/** Toast */
export const toastEntrance = {
  hidden:  { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1 },
  exit:    { opacity: 0, y: 20, scale: 0.9 },
};

/** Text reveal — character or line */
export const textReveal = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out, delay } },
});

/** Horizontal slide for nav/progress */
export const slideInLeft = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0,
             transition: { duration: duration.base, ease: ease.out } },
};

/** Image drift (parallax-like) */
export const imageDrift = {
  rest:  { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.8, ease: ease.smooth } },
};

/** Top border reveal on card hover */
export const borderReveal = {
  rest:  { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.7, ease: ease.out } },
};

/** Arrow nudge — used on ghost buttons */
export const arrowNudge = {
  rest:  { x: 0 },
  hover: { x: 4, transition: { duration: duration.fast } },
};
