import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/lib/tokens';

// Floating character tiles — glassmorphic
const TILES = [
  { char: 'あ', bg: 'rgba(255,255,255,0.7)', color: colors.ink, x: '12%', y: '15%', rotate: -12, scale: 1.1, blur: 0,  delay: 0.1, float: -15, isGlass: true },
  { char: 'A',  bg: 'rgba(255,255,255,0.5)', color: colors.blue,       x: '25%', y: '8%',  rotate:  15, scale: 0.8, blur: 1,  delay: 0.3, float:  10, isGlass: true },
  { char: 'Б',  bg: 'rgba(240,240,245,0.4)', color: colors.ink, x: '8%',  y: '35%', rotate: -25, scale: 0.6, blur: 4,  delay: 0.5, float:  -8, isGlass: true },
  { char: 'ع',  bg: 'rgba(255,255,255,0.6)', color: colors.ink,        x: '18%', y: '75%', rotate:  20, scale: 1.2, blur: 0,  delay: 0.2, float:  18, isGlass: true },
  { char: '中', bg: 'rgba(240,245,255,0.5)', color: colors.blue,      x: '78%', y: '20%', rotate:  18, scale: 1.15,blur: 0,  delay: 0.15,float: -18, isGlass: true },
  { char: 'Α',  bg: 'rgba(245,245,245,0.3)', color: colors.ink,       x: '88%', y: '10%', rotate: -10, scale: 0.85,blur: 2,  delay: 0.35,float:  12, isGlass: true },
  { char: '한', bg: 'rgba(240,245,255,0.4)', color: colors.blue,       x: '92%', y: '35%', rotate:  30, scale: 0.6, blur: 5,  delay: 0.55,float: -10, isGlass: true },
  { char: 'अ',  bg: 'rgba(255,255,255,0.6)', color: colors.ink,      x: '75%', y: '70%', rotate: -14, scale: 1.25,blur: 0,  delay: 0.25,float:  20, isGlass: true },
  { char: 'H',  bg: 'rgba(255,255,255,0.15)', color: colors.ink,        x: '2%',  y: '20%', rotate:  45, scale: 2.5, blur: 12, delay: 0.7, float:  25, isGlass: true },
  { char: 'य',  bg: 'rgba(255,255,255,0.15)', color: colors.ink,        x: '95%', y: '75%', rotate: -35, scale: 2.2, blur: 10, delay: 0.8, float: -25, isGlass: true },
];

function LanguageTile({ tile, mousePos }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (mousePos.x !== null) {
      const x = (mousePos.x - window.innerWidth / 2) * (tile.scale * 0.015);
      const y = (mousePos.y - window.innerHeight / 2) * (tile.scale * 0.015);
      setParallax({ x, y });
    }
  }, [mousePos, tile.scale]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, rotate: tile.rotate - 20 }}
      animate={{ y: 0, opacity: 1, rotate: tile.rotate }}
      transition={{ type: 'spring', damping: 20, stiffness: 40, delay: tile.delay, opacity: { duration: 1 } }}
      className="absolute z-0 hidden md:flex items-center justify-center font-display shadow-xl gpu-accelerated"
      style={{
        left: tile.x, top: tile.y,
        width: '90px', height: '90px',
        fontSize: '2.75rem', borderRadius: '20px',
        backgroundColor: tile.bg, color: tile.color,
        filter: `blur(${tile.blur}px)`,
        transform: `scale(${tile.scale}) translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        boxShadow: '0 15px 35px rgba(23,21,18,0.06), inset 0 1px 0 rgba(255,255,255,0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.5)',
        willChange: 'transform',
      }}
    >
      <motion.div
        animate={{ y: [0, tile.float, 0], rotate: [0, tile.float > 0 ? 4 : -4, 0] }}
        transition={{ duration: 7 + tile.delay * 3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full flex items-center justify-center"
      >
        {tile.char}
      </motion.div>
    </motion.div>
  );
}

/**
 * HeroSection — flagship hero with parallax tiles.
 * Enhanced with staggered text reveals, ambient glows, and scroll-driven parallax.
 */
export function HeroSection({ onOpenConsultation, onScrollToPrograms }) {
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  // Throttled mouse tracking for performance
  const rafRef = useRef(null);
  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-surface/40 via-white to-white">
      {/* Ambient background glows — now with breathing animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] bg-terracotta"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.09, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] bg-blue"
        />
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full blur-[120px] bg-sage"
        />
      </div>

      {/* Parallax tile layer */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95 z-10" />
        {TILES.map((tile, i) => (
          <LanguageTile key={i} tile={tile} mousePos={mousePos} />
        ))}
      </motion.div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mt-16 md:mt-0 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-[11px] font-bold uppercase tracking-widest mb-8 text-vw-blue bg-vw-blue/5 px-4 py-1.5 rounded-full"
        >
          Master the World's Languages
        </motion.div>

        {/* Staggered heading reveal */}
        <div className="overflow-hidden pb-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-hero font-display leading-[1.05] tracking-tight text-ink font-semibold"
          >
            Communication, <br />
            <span className="text-vw-blue">Without Borders.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-body font-medium text-lg md:text-xl text-ink/50 max-w-2xl mx-auto leading-relaxed tracking-tight"
        >
          Premium language programs, corporate training, and healthcare placements. Expert-led and tailored for your global career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <button
            onClick={onScrollToPrograms}
            className="bg-ink text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-tight hover:opacity-90 transition-opacity shadow-md"
          >
            Explore Programs
          </button>
          <button
            onClick={onOpenConsultation}
            className="bg-white text-ink px-8 py-3.5 rounded-full font-semibold text-sm tracking-tight border border-black/5 hover:border-black/20 hover:bg-surface transition-colors shadow-sm"
          >
            Book Consultation
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute -bottom-16 md:bottom-[-6rem]"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-ink/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
