import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Users, Target, Globe2 } from 'lucide-react';
import { fadeUp, fadeUpScale, staggerContainer, lineGrow } from '@/animations/motion';
import { colors } from '@/lib/tokens';
import { useRef } from 'react';

const ALL_MOMENTS = [
  '/images/corporate/corporate-1.jpg',
  '/images/corporate/corporate-2.jpg',
  '/images/corporate/corporate-3.jpg',
  '/images/corporate/corporate-4.jpg',
  '/images/corporate/corporate-5.jpg',
  '/images/corporate/IMG_20220323_194021_465.webp',
  '/images/corporate/IMG_20220429_140223_660.webp',
  '/images/healthcare/healthcare-1.jpg',
  '/images/healthcare/healthcare-2.jpg',
  '/images/healthcare/healthcare-3.jpg',
  '/images/healthcare/healthcare-4.jpg',
  '/images/healthcare/healthcare-5.jpg',
  '/images/homepage/home-0001.jpg',
  '/images/homepage/home-0003.jpg',
  '/images/homepage/home-0004.jpg',
  '/images/homepage/home-0007.jpg',
  '/images/homepage/home-0011.jpg',
  '/images/homepage/home-0013.jpg',
  '/images/homepage/home-0014.jpg',
  '/images/homepage/home-0016.jpg',
  '/images/homepage/home-0018.jpg',
  '/images/homepage/home-0019.jpg',
  '/images/homepage/home-0023.jpg',
  '/images/homepage/home-0025.jpg',
  '/images/homepage/home-0027.jpg',
  '/images/homepage/home-0032.jpg',
  '/images/homepage/home-0044.jpg',
  '/images/homepage/home-0048.jpg',
  '/images/homepage/home-0051.jpg',
  '/images/interpretation/interp-1.jpg',
  '/images/interpretation/interp-2.jpg',
  '/images/interpretation/interp-3.jpg',
  '/images/interpretation/interp-4.jpg',
  '/images/languages/lang-0029.jpg',
  '/images/languages/lang-0030.jpg',
  '/images/languages/lang-0033.jpg',
  '/images/languages/lang-0034.jpg',
  '/images/languages/lang-0035.jpg',
  '/images/languages/lang-0039.jpg',
  '/images/languages/lang-0040.jpg',
  '/images/languages/lang-0041.jpg',
  '/images/languages/lang-0045.jpg',
  '/images/languages/lang-0052.jpg',
  '/images/languages/lang-0053.jpg',
  '/images/languages/lang-0054.jpg'
];
const ROW1 = ALL_MOMENTS.slice(0, 15);
const ROW2 = ALL_MOMENTS.slice(15, 30);
const ROW3 = ALL_MOMENTS.slice(30, 45);

export function MomentsStrip() {
  return (
    <section className="py-20 overflow-hidden" style={{ borderTop: `1px solid ${colors.line}`, backgroundColor: colors.surface }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-site mb-10 flex items-end justify-between"
      >
        <div>
          <span className="text-micro opacity-40 block mb-2">From our cohorts</span>
          <h3 className="font-display text-3xl md:text-4xl">Life at Vishwa.</h3>
        </div>
        <Link to="/languages" className="hidden md:flex items-center gap-2 text-micro opacity-50 hover:opacity-100 transition-opacity group">
          See all programs <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>

      <div className="relative overflow-hidden w-full space-y-6">
        {/* Blur Edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Line 1 - Moving Left */}
        <motion.div 
          className="flex gap-4 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
          style={{ willChange: "transform" }}
        >
          {[...ROW1, ...ROW1].map((src, i) => (
             <div key={`r1-${i}`} className="flex-shrink-0 w-48 md:w-72 h-32 md:h-48 rounded-[2rem] overflow-hidden shadow-sm border border-ink/5">
                <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" loading="lazy" />
             </div>
          ))}
        </motion.div>

        {/* Line 2 - Moving Right */}
        <motion.div 
          className="flex gap-4 px-4 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
          style={{ willChange: "transform" }}
        >
          {[...ROW2, ...ROW2].map((src, i) => (
             <div key={`r2-${i}`} className="flex-shrink-0 w-48 md:w-72 h-32 md:h-48 rounded-[2rem] overflow-hidden shadow-sm border border-ink/5">
                <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" loading="lazy" />
             </div>
          ))}
        </motion.div>

        {/* Line 3 - Moving Left */}
        <motion.div 
          className="flex gap-4 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 65 }}
          style={{ willChange: "transform" }}
        >
          {[...ROW3, ...ROW3].map((src, i) => (
             <div key={`r3-${i}`} className="flex-shrink-0 w-48 md:w-72 h-32 md:h-48 rounded-[2rem] overflow-hidden shadow-sm border border-ink/5">
                <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" loading="lazy" />
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * WhyVishwaSection — Asymmetrical, premium grid with imagery and deep contrast.
 * Enhanced with scroll-driven parallax and richer animations.
 */
export function WhyVishwaSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-paper overflow-hidden relative" style={{ borderTop: `1px solid ${colors.line}` }}>
      {/* Ambient background blur — warm mesh gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -z-10 pointer-events-none opacity-[0.06]"
        style={{ background: `radial-gradient(circle, ${colors.blue} 0%, transparent 60%)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full -z-10 pointer-events-none opacity-[0.04]"
        style={{ background: `radial-gradient(circle, ${colors.teal} 0%, transparent 60%)` }}
      />

      <div className="container-site max-w-7xl mx-auto">
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
          className="mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest uppercase mb-4 block text-terracotta">
              The Vishwa Difference
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink tracking-tight">
              We don't just teach.<br />
              <span className="italic text-terracotta">We build careers.</span>
            </h2>
          </div>
          <p className="text-ink/65 font-light max-w-sm text-sm md:text-base leading-relaxed">
            Language is the bridge, but your career is the destination. Our methodology is designed to prepare you for the global professional stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Card 1 - Large Image Card */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[280px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden group shadow-sm border border-ink/5"
          >
            <motion.img
              style={{ y: bgY }}
              src="/images/homepage/home-0004.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Students in discussion"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-2 block">01 / Methodology</span>
              <h3 className="text-white font-display text-xl sm:text-2xl md:text-3xl mb-2 tracking-tight">Career-First Curriculum</h3>
              <p className="text-white/80 font-light max-w-md text-xs leading-relaxed">Every syllabus is mapped to a real professional outcome, not just a generic certificate.</p>
            </div>
          </motion.div>

          {/* Card 2 - Accent Color Card */}
          <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[280px] sm:h-[320px] md:h-[380px] relative overflow-hidden shadow-sm group" style={{ backgroundColor: colors.sage }}>
            <img src="/images/homepage/home-0019.jpg" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Small batch" />
            <div className="absolute top-0 right-0 p-8 opacity-[0.25]">
              <span className="font-display text-8xl">15</span>
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                <Users size={18} />
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-2 block">02 / Focus</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-2 tracking-tight">Small Batches</h3>
              <p className="font-light text-white/80 text-xs leading-relaxed">Max 15 students per batch. Personalized attention ensures you are actively speaking from day one.</p>
            </div>
          </motion.div>

          {/* Card 3 - Minimal Card */}
          <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface border border-ink/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[280px] sm:h-[320px] md:h-[380px] relative overflow-hidden group shadow-sm">
            <img src="/images/corporate/corporate-2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" alt="Corporate" />
            <div className="relative z-10 w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target size={18} />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink/40 mb-2 block">03 / Precision</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-ink mb-2 tracking-tight">Industry Tracks</h3>
              <p className="font-light text-ink/65 text-xs leading-relaxed">Engineering German. Healthcare Japanese. We teach exact vocabulary specific to your profession.</p>
            </div>
          </motion.div>

          {/* Card 4 - Large Text Card */}
          <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:col-span-2 text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-center h-[280px] sm:h-[320px] md:h-[380px] relative overflow-hidden shadow-sm" style={{ backgroundColor: colors.ink }}>
            <img src="/images/homepage/home-0011.jpg" className="absolute inset-0 w-full h-full object-cover opacity-[0.25] mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" alt="Ecosystem" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle, ${colors.gold} 0%, transparent 60%)` }} />
            <div className="max-w-xl relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold mb-4 block">04 / Ecosystem</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 leading-[1.1] tracking-tight">Beyond the classroom walls.</h3>
              <p className="font-light text-white/60 text-xs sm:text-sm leading-relaxed">Placement support, alumni networks across Europe and Japan, and deep cultural immersion programs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * BookCTASection — dramatic editorial closing CTA with warm gradient.
 */
const CINEMATIC_TEXTS = {
  japanese: "吾輩は猫である。\n名前はまだ無い。",
  sanskrit: "कर्मण्येवाधिकारस्ते\nमा फलेषु कदाचन।",
  german: "Habe nun, ach!\nPhilosophie",
  french: "Longtemps, je me\nsuis couché",
  mandarin: "道可道，非常道。\n名可名，非常名。",
};

export function BookCTASection({ onOpenConsultation, title, subtitle, contextLabel }) {
  const displayTitle = title || "The right conversation\nstarts with one form.";
  const displaySubtitle = subtitle || "A program advisor will personally respond within one business day.";
  const displayLabel = contextLabel || "Begin";

  return (
    <section className="relative py-32 md:py-40 bg-paper overflow-hidden text-ink border-t border-ink/5">
      {/* Vibrant background glows */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.08] blur-[120px]" 
        style={{ background: `radial-gradient(circle, ${colors.blue} 0%, transparent 70%)` }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06] blur-[120px]" 
        style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 70%)` }} 
      />

      {/* Left philosophy script (Sanskrit) */}
      <div className="absolute top-10 left-0 w-[40%] hidden md:flex items-center justify-start pl-8 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[1.3] text-left text-3xl md:text-5xl lg:text-6xl"
          style={{
            color: colors.terracotta,
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            whiteSpace: 'pre-line',
          }}
        >
          {CINEMATIC_TEXTS.sanskrit}
        </motion.div>
      </div>

      {/* Right philosophy script (Japanese) */}
      <div className="absolute top-10 right-0 w-[40%] hidden md:flex items-center justify-end pr-8 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display leading-[1.3] text-right text-3xl md:text-5xl lg:text-6xl"
          style={{
            color: colors.blue,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            whiteSpace: 'pre-line',
          }}
        >
          {CINEMATIC_TEXTS.japanese}
        </motion.div>
      </div>

      {/* Bottom Left script (German) */}
      <div className="absolute bottom-10 left-0 w-[40%] hidden md:flex items-center justify-start pl-8 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display leading-[1.3] text-left text-3xl md:text-5xl lg:text-6xl"
          style={{
            color: colors.gold,
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            whiteSpace: 'pre-line',
          }}
        >
          {CINEMATIC_TEXTS.german}
        </motion.div>
      </div>

      {/* Bottom Right script (Mandarin) */}
      <div className="absolute bottom-10 right-0 w-[40%] hidden md:flex items-center justify-end pr-8 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-display leading-[1.3] text-right text-3xl md:text-5xl lg:text-6xl"
          style={{
            color: colors.brown,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            whiteSpace: 'pre-line',
          }}
        >
          {CINEMATIC_TEXTS.mandarin}
        </motion.div>
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-ink"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-site text-center relative z-10"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest font-bold block mb-6 text-terracotta">{displayLabel}</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 max-w-3xl mx-auto tracking-tight whitespace-pre-line text-ink">
          {displayTitle}
        </h2>
        <p className="font-display italic text-ink/75 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          {displaySubtitle}
        </p>
        <button onClick={onOpenConsultation} className="group inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink hover:text-white transition-all shadow-lg hover:shadow-xl mx-auto">
          Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
