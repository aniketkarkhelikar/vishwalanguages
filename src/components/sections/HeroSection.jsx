import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/lib/tokens';

const TILES = [
  { char: 'あ', bg: 'rgba(255,252,248,0.75)', color: colors.terracotta, x: '12%', y: '15%', rotate: -12, scale: 1.1, blur: 0,  delay: 0.1, float: -15 },
  { char: 'A',  bg: 'rgba(255,252,248,0.5)',  color: colors.brown,      x: '25%', y: '8%',  rotate:  15, scale: 0.8, blur: 1,  delay: 0.3, float:  10 },
  { char: 'Б',  bg: 'rgba(245,242,236,0.4)',  color: colors.sage,       x: '8%',  y: '35%', rotate: -25, scale: 0.6, blur: 4,  delay: 0.5, float:  -8 },
  { char: 'ع',  bg: 'rgba(255,252,248,0.6)',  color: colors.gold,       x: '18%', y: '75%', rotate:  20, scale: 1.2, blur: 0,  delay: 0.2, float:  18 },
  { char: '中', bg: 'rgba(245,240,235,0.5)',  color: colors.terracotta, x: '78%', y: '20%', rotate:  18, scale: 1.15,blur: 0,  delay: 0.15,float: -18 },
  { char: 'Α',  bg: 'rgba(250,250,248,0.3)',  color: colors.blue,       x: '88%', y: '10%', rotate: -10, scale: 0.85,blur: 2,  delay: 0.35,float:  12 },
  { char: '한', bg: 'rgba(245,240,235,0.4)',  color: colors.sage,       x: '92%', y: '35%', rotate:  30, scale: 0.6, blur: 5,  delay: 0.55,float: -10 },
  { char: 'अ',  bg: 'rgba(255,252,248,0.6)',  color: colors.brown,      x: '75%', y: '70%', rotate: -14, scale: 1.25,blur: 0,  delay: 0.25,float:  20 },
  { char: 'H',  bg: 'rgba(255,252,248,0.15)', color: colors.terracotta, x: '2%',  y: '20%', rotate:  45, scale: 2.5, blur: 12, delay: 0.7, float:  25 },
  { char: 'य',  bg: 'rgba(255,252,248,0.15)', color: colors.gold,       x: '95%', y: '75%', rotate: -35, scale: 2.2, blur: 10, delay: 0.8, float: -25 },
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
      className="absolute z-0 flex items-center justify-center font-display shadow-xl gpu-accelerated"
      style={{
        left: tile.x, top: tile.y,
        width: 'clamp(60px, 8vw, 90px)', height: 'clamp(60px, 8vw, 90px)',
        fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', borderRadius: '20px',
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

export function HeroSection({ onOpenConsultation, onScrollToPrograms }) {
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-surface">
      {/* Floating Collage */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-90">
         <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="absolute top-[8%] left-[2%] w-[35vw] h-[45vw] md:w-[18vw] md:h-[22vw] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/homepage/home-0001.jpg" className="w-full h-full object-cover" alt="Student 1" />
         </motion.div>
         <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="absolute bottom-[5%] left-[5%] md:left-[12%] w-[40vw] h-[35vw] md:w-[20vw] md:h-[16vw] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/homepage/home-0003.jpg" className="w-full h-full object-cover" alt="Student 2" />
         </motion.div>
         <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="absolute top-[10%] right-[2%] md:right-[5%] w-[32vw] h-[48vw] md:w-[16vw] md:h-[24vw] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/homepage/home-0004.jpg" className="w-full h-full object-cover" alt="Student 3" />
         </motion.div>
         <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-[10%] right-[5%] md:right-[12%] w-[45vw] h-[35vw] md:w-[22vw] md:h-[18vw] rounded-3xl overflow-hidden shadow-2xl hidden sm:block">
            <img src="/images/homepage/home-0007.jpg" className="w-full h-full object-cover" alt="Student 4" />
         </motion.div>
         <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 1 }} className="absolute top-[45%] left-[2%] w-[12vw] h-[12vw] rounded-full overflow-hidden shadow-2xl hidden md:block border-4 border-surface">
            <img src="/images/homepage/home-0011.jpg" className="w-full h-full object-cover" alt="Student 5" />
         </motion.div>
         <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute top-[40%] right-[1%] w-[10vw] h-[10vw] rounded-full overflow-hidden shadow-2xl hidden md:block border-4 border-surface">
            <img src="/images/homepage/home-0019.jpg" className="w-full h-full object-cover" alt="Student 6" />
         </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px] z-10 pointer-events-none" />

      {/* Floating Tiles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {TILES.map((tile, i) => (
          <LanguageTile key={i} tile={tile} mousePos={mousePos} />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mt-16 md:mt-0 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-[11px] font-bold uppercase tracking-widest mb-8 px-5 py-2 rounded-full border bg-terracotta/5 border-terracotta/20 text-terracotta backdrop-blur-md"
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
            <span className="text-terracotta">Without Barriers.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-body font-medium text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed tracking-tight"
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
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-tight text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl bg-terracotta hover:bg-ink"
          >
            Explore Programs
          </button>
          <button
            onClick={onOpenConsultation}
            className="bg-white text-ink px-8 py-3.5 rounded-full font-semibold text-sm tracking-tight border border-ink/10 hover:border-terracotta/30 hover:bg-surface transition-all duration-300 shadow-sm"
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
            className="w-px h-16 bg-gradient-to-b from-terracotta/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
