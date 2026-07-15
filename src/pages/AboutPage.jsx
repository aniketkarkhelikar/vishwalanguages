import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, fadeUpScale, pageSlideUp } from '@/animations/motion';
import { colors } from '@/lib/tokens';
import { Globe2, GraduationCap, Building2, Users2 } from 'lucide-react';

/**
 * AboutPage — "Vasudhaiva Kutumbakam"
 * Redesigned to be highly visual, avoiding text-walls.
 * Follows the grand, Apple-inspired editorial principles.
 */
export function AboutPage() {
  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="bg-paper">
      
      {/* ══ MASSIVE HERO ══ */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 px-6 overflow-hidden bg-surface">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[20%] right-[-5%] font-display text-[40vw] text-terracotta opacity-[0.02] leading-none select-none pointer-events-none">
          विश्व
        </div>

        <div className="container-site relative z-10 max-w-6xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <motion.span variants={fadeUp} className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-terracotta block">
              The Vishwa Story
            </motion.span>
            
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-[8rem] text-ink leading-[0.9] tracking-tight">
              The world is<br />
              <span className="italic" style={{ color: colors.terracotta }}>one family.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-3xl font-light text-ink/60 max-w-3xl leading-relaxed mt-6">
              "Vasudhaiva Kutumbakam." We believe languages are the ultimate bridge between cultures, opening doors to endless global possibilities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ THE MISSION (Massive Typography blocks) ══ */}
      <section className="py-24 md:py-32 bg-ink text-white overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 relative z-20">
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-6">Our Mission</span>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
                Removing language barriers.
              </h2>
              <p className="text-xl font-light text-white/60 leading-relaxed mb-12">
                We started with a simple vision: to bring world-class language experts and dedicated students onto one unified platform. We don't just teach grammar; we empower global communication.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l border-white/20 pl-6">
                  <span className="font-display text-4xl block text-terracotta mb-2">6+</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Languages</span>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <span className="font-display text-4xl block text-terracotta mb-2">100%</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Cultural Immersion</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[60vh] bg-white/[0.03] rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-noise opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/20 via-transparent to-transparent opacity-30" />
              <Globe2 size={120} className="text-white/10" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display italic text-2xl text-white/80">"A language is a mirror of its culture."</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO (Bento Grid / Icons) ══ */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container-site max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40 block mb-4">Ecosystem</span>
            <h2 className="font-display text-4xl md:text-6xl text-ink">How we connect the world.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-surface p-10 rounded-3xl border border-ink/5 hover:-translate-y-1 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-terracotta mb-8 shadow-sm">
                <GraduationCap size={28} />
              </div>
              <h3 className="font-display text-2xl mb-4">Language Academics</h3>
              <p className="text-ink/60 font-light leading-relaxed">
                Expert-led courses designed to clear official international certification exams like JLPT and Goethe-Zertifikat.
              </p>
            </motion.div>

            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface p-10 rounded-3xl border border-ink/5 hover:-translate-y-1 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-terracotta mb-8 shadow-sm">
                <Building2 size={28} />
              </div>
              <h3 className="font-display text-2xl mb-4">Enterprise & Corporate</h3>
              <p className="text-ink/60 font-light leading-relaxed">
                Bespoke language training for global workforces, alongside precision interpretation services for high-stakes environments.
              </p>
            </motion.div>

            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface p-10 rounded-3xl border border-ink/5 hover:-translate-y-1 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-terracotta mb-8 shadow-sm">
                <Users2 size={28} />
              </div>
              <h3 className="font-display text-2xl mb-4">Global Placements</h3>
              <p className="text-ink/60 font-light leading-relaxed">
                End-to-end pathways assisting qualified professionals in relocating and integrating into industries like German Healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ THE VISION (Massive closing block) ══ */}
      <section className="py-32 md:py-48 bg-surface border-t border-ink/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[100px] bg-terracotta/5 pointer-events-none" />
        <div className="container-site max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Globe2 size={48} className="mx-auto text-terracotta opacity-40 mb-10" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight text-ink mb-12">
              Learning a language opens doors to <span className="italic" style={{ color: colors.terracotta }}>endless possibilities.</span>
            </h2>
            <div className="w-12 h-px bg-ink/20 mx-auto" />
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
