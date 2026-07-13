import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Users, Target, Globe2 } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/animations/motion';
import { colors } from '@/lib/tokens';

// Moments from the field — landscape image marquee
const MOMENT_IMAGES = [
  { img: 'https://images.unsplash.com/photo-1542051812-be2069b61db0?q=80&w=600&auto=format&fit=crop', title: 'Tokyo Placements', pill: 'Japan' },
  { img: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=600&auto=format&fit=crop', title: 'Munich Engineers', pill: 'Germany' },
  { img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop', title: 'Paris Network', pill: 'France' },
  { img: 'https://images.unsplash.com/photo-1539037116277-4db20202d084?q=80&w=600&auto=format&fit=crop', title: 'Madrid Cohort', pill: 'Spain' },
  { img: 'https://images.unsplash.com/photo-1522850655385-06beedbc5c92?q=80&w=600&auto=format&fit=crop', title: 'Cultural Exchange', pill: 'Global' },
];

/**
 * MomentsStrip — redesigned: continuous scrolling landscape images with edge pills.
 */
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
          <h3 className="font-display text-3xl md:text-4xl">Moments from the field.</h3>
        </div>
        <Link to="/languages" className="hidden md:flex items-center gap-2 text-micro opacity-50 hover:opacity-100 transition-opacity group">
          See all programs <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>

      <div className="marquee-row">
        <div className="marquee-track flex gap-5 w-max px-6">
          {[...MOMENT_IMAGES, ...MOMENT_IMAGES, ...MOMENT_IMAGES].map((m, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden group cursor-default shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="font-display text-white text-xl">{m.title}</span>
                <span className="text-[9px] uppercase tracking-wide font-bold px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                  {m.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * WhyVishwaSection — sleek editorial layout, sticky scroll, no bulky bento box.
 */
/**
 * WhyVishwaSection — Asymmetrical, premium grid with imagery and deep contrast.
 */
export function WhyVishwaSection() {
  return (
    <section className="py-24 md:py-32 bg-paper overflow-hidden relative" style={{ borderTop: `1px solid ${colors.line}` }}>
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E4D5C4] rounded-full blur-[120px] opacity-30 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6E7D64] rounded-full blur-[140px] opacity-20 -z-10 pointer-events-none" />

      <div className="container-site max-w-7xl mx-auto">
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest uppercase mb-6 block text-terracotta">
              The Vishwa Difference
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink tracking-tight">
              We don't just teach.<br />
              <span className="italic text-terracotta">We build careers.</span>
            </h2>
          </div>
          <p className="text-ink/60 font-light max-w-sm text-sm md:text-base leading-relaxed">
            Language is the bridge, but your career is the destination. Our methodology is strictly designed to prepare you for the global professional stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Card 1 - Large Image Card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 relative h-[380px] md:h-[460px] rounded-3xl overflow-hidden group shadow-sm border border-ink/5">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Students in discussion" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-3 block">01 / Methodology</span>
              <h3 className="text-white font-display text-3xl md:text-4xl mb-3 tracking-tight">Career-First Curriculum</h3>
              <p className="text-white/80 font-light max-w-md text-sm leading-relaxed">Every syllabus is mapped to a real professional outcome, not just a generic certificate. Learn what actually matters in the workspace.</p>
            </div>
          </motion.div>

          {/* Card 2 - Accent Color Card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#6E7D64] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between h-[380px] md:h-[460px] relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.15]">
              <span className="font-display text-8xl">15</span>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <Users size={20} />
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-3 block">02 / Focus</span>
              <h3 className="font-display text-3xl md:text-4xl mb-3 tracking-tight">Intimate Batches</h3>
              <p className="font-light text-white/80 text-sm leading-relaxed">Max 15 students per batch. Unmatched personalized attention from expert faculties ensures you are actively speaking.</p>
            </div>
          </motion.div>

          {/* Card 3 - Minimal Card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface border border-ink/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between h-[380px] md:h-[460px] group shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#4C6478]/10 text-[#4C6478] flex items-center justify-center">
              <Target size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink/40 mb-3 block">03 / Precision</span>
              <h3 className="font-display text-3xl md:text-4xl text-ink mb-3 tracking-tight">Industry Tracks</h3>
              <p className="font-light text-ink/60 text-sm leading-relaxed">Engineering German. Healthcare Japanese. We teach exact vocabulary and etiquette specific to your profession.</p>
            </div>
          </motion.div>

          {/* Card 4 - Large Text Card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:col-span-2 bg-ink text-white rounded-3xl p-8 md:p-12 flex flex-col justify-center h-[380px] md:h-[460px] relative overflow-hidden shadow-sm">
            <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none">
              <Globe2 size={500} />
            </div>
            <div className="max-w-xl relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-5 block">04 / Ecosystem</span>
              <h3 className="font-display text-4xl md:text-5xl mb-6 leading-[1.1] tracking-tight">Beyond the classroom walls.</h3>
              <p className="font-light text-white/60 text-base md:text-lg leading-relaxed">We don't stop at teaching. We provide robust placement support, strong alumni networks across Europe and Japan, and deep cultural immersion.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * BookCTASection — dramatic editorial closing CTA with large background character.
 */
export function BookCTASection({ onOpenConsultation }) {
  return (
    <section className="relative py-32 md:py-40 bg-ink overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] text-white/[0.03] leading-none">始める</span>
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.4"/></pattern></defs>
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
        <span className="text-micro font-medium block mb-6" style={{ color: colors.gold }}>Begin</span>
        <h2 className="font-display text-h2 leading-tight mb-8 max-w-3xl mx-auto text-white">
          The right conversation<br />starts with one form.
        </h2>
        <p className="font-display italic text-white/50 text-xl max-w-md mx-auto mb-12 leading-relaxed">
          A program advisor will personally respond within one business day.
        </p>
        <button onClick={onOpenConsultation} className="btn-primary mx-auto">
          Book Free Consultation <ArrowRight size={16} />
        </button>
      </motion.div>
    </section>
  );
}
