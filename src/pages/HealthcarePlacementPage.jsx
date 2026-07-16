import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { pageSlideUp, fadeUp, fadeUpScale, staggerContainer } from '@/animations/motion';
import { healthcarePlacement } from '@/data/services/healthcare';
import { healthcareColors } from '@/lib/tokens';

/**
 * HealthcarePlacementPage — Redesigned with a Grand Apple-inspired Bento Grid layout.
 * Features the deeply immersive dark hero and highly scannable visual process grid.
 */
export function HealthcarePlacementPage({ onOpenConsultation }) {
  const d = healthcarePlacement;
  const hc = healthcareColors;
  
  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="bg-paper">
      
      {/* ══ MASSIVE IMMERSIVE HERO ══ */}
      <section className="relative min-h-[95vh] flex flex-col justify-end pb-12 md:pb-24 pt-40 px-6 overflow-hidden" style={{ backgroundColor: hc.primary }}>
        {/* Cinematic Photography Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Healthcare Germany" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F4F3E] via-[#0F4F3E]/80 to-transparent" />
        </div>

        {/* Abstract Medical Graphic (Grand, subtle) */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] rounded-full opacity-[0.25] mix-blend-overlay gpu-accelerated" style={{ background: `radial-gradient(circle, ${hc.accent} 0%, transparent 60%)` }} />
          <div className="absolute top-[20%] right-[10%] font-display text-[40vw] text-white opacity-[0.03] leading-none select-none">⚕</div>
        </div>

        <div className="container-site relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-16">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70 block mb-6 md:mb-10"
              >
                Exclusive Pathway for Indian Nurses
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display text-[12vw] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-white tracking-[-0.03em] mb-6 md:mb-0"
              >
                Germany<br />
                <span className="italic text-white/80">awaits you.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col gap-8 pb-4"
            >
              <p className="text-white/70 font-light text-lg md:text-xl max-w-sm leading-relaxed">
                A complete, end-to-end program. From zero German knowledge to a verified contract in a German hospital.
              </p>
              
              <button 
                onClick={() => onOpenConsultation({ type: 'healthcare' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white hover:text-health hover:bg-white rounded-full text-white overflow-hidden transition-all duration-300 w-fit"
              >
                <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  Consult an Advisor <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* THE STATS (Huge Typography right below Hero, integrated for flow) */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: 'B2', label: 'German Level' },
              { val: '100%', label: 'Visa Support' },
              { val: 'Direct', label: 'Hospital Interviews' },
              { val: 'Zero', label: 'Hidden Fees' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 + (i*0.1) }} className="flex flex-col border-l border-white/10 pl-6 md:pl-8">
                <span className="font-display text-4xl md:text-6xl text-white mb-2">{stat.val}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE PATHWAY (Bento Grid) ══ */}
      {/* Visual, non-scrolling, instantly scannable architecture */}
      <section className="py-24 md:py-32 bg-surface rounded-t-[3rem] md:rounded-t-[5rem] -mt-8 relative z-20">
        <div className="container-site max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-6" style={{ color: hc.primary }}>The Pathway</span>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-ink tracking-tight">
              A seamless transition orchestrated by experts.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Phase 1 & 2 - Top Row */}
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-7 bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-ink/5 relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 opacity-50" style={{ background: 'radial-gradient(circle, rgba(15, 79, 62, 0.1) 0%, transparent 70%)' }} />
              <span className="relative z-10 text-[10px] font-mono uppercase tracking-widest mb-6 block text-ink/30">Phase 01 — {d.roadmap[0].duration}</span>
              <h3 className="relative z-10 font-display text-3xl md:text-4xl text-ink leading-tight mb-4">{d.roadmap[0].title}</h3>
              <p className="relative z-10 text-ink/60 font-light text-lg leading-relaxed">{d.roadmap[0].desc}</p>
            </motion.div>
            
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-5 bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-ink/5 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 rounded-bl-full opacity-10" style={{ backgroundColor: hc.primary }} />
              <span className="text-[10px] font-mono uppercase tracking-widest mb-6 block text-ink/30">Phase 02 — {d.roadmap[1].duration}</span>
              <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">{d.roadmap[1].title}</h3>
              <p className="text-ink/60 font-light text-lg leading-relaxed">{d.roadmap[1].desc}</p>
            </motion.div>

            {/* Phase 3 - Full Width Banner */}
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-12 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12" style={{ backgroundColor: hc.primary }}>
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" alt="Hospital Pathway" />
              <div className="relative z-10 max-w-2xl text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest mb-6 block text-white/50">Phase 03 — {d.roadmap[2].duration}</span>
                <h3 className="font-display text-4xl md:text-5xl leading-tight mb-4">{d.roadmap[2].title}</h3>
                <p className="text-white/80 font-light text-xl leading-relaxed">{d.roadmap[2].desc}</p>
              </div>
              <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 backdrop-blur-md">
                <span className="font-display text-4xl text-white">03</span>
              </div>
            </motion.div>

            {/* Phase 4 & 5 - Bottom Row */}
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-5 bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-ink/5">
              <span className="text-[10px] font-mono uppercase tracking-widest mb-6 block text-ink/30">Phase 04 — {d.roadmap[3].duration}</span>
              <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">{d.roadmap[3].title}</h3>
              <p className="text-ink/60 font-light text-lg leading-relaxed">{d.roadmap[3].desc}</p>
            </motion.div>

            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-7 bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-ink/5 relative overflow-hidden group">
              <div className="absolute -left-12 -bottom-12 w-48 h-48 opacity-50" style={{ background: 'radial-gradient(circle, rgba(15, 79, 62, 0.15) 0%, transparent 70%)' }} />
              <span className="relative z-10 text-[10px] font-mono uppercase tracking-widest mb-6 block text-ink/30">Phase 05 — {d.roadmap[4].duration}</span>
              <h3 className="relative z-10 font-display text-3xl md:text-4xl text-ink leading-tight mb-4">{d.roadmap[4].title}</h3>
              <p className="relative z-10 text-ink/60 font-light text-lg leading-relaxed">{d.roadmap[4].desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY (Checklist Dashboard Style) ══ */}
      <section className="py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Image Block */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Dedicated Nursing Professional" />
              <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
            </motion.div>
            
            {/* Content */}
            <div className="py-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-[10px] font-mono uppercase tracking-widest block mb-6" style={{ color: hc.primary }}>The Profile</span>
                <h2 className="font-display text-5xl md:text-6xl leading-none tracking-tight mb-8">Who is this for?</h2>
                <p className="text-ink/50 text-xl font-light leading-relaxed mb-12">
                  We are highly selective. This program is tailored for dedicated nursing professionals fully committed to building a new life and career in Europe.
                </p>
              </motion.div>
              
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                {d.eligibility.map((req, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl bg-surface border border-ink/5">
                    <CheckCircle2 size={24} className="shrink-0 mt-0.5" style={{ color: hc.primary }} />
                    <span className="text-lg text-ink/80 font-medium">{req}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GRAND CTA (Cinematic & Soulful) ══ */}
      <section className="py-32 md:py-48 relative overflow-hidden text-center" style={{ backgroundColor: healthcareColors.primary }}>
        {/* Cinematic background image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Healthcare professionals" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 mix-blend-overlay" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-20 shadow-2xl">
            <span className="text-[10px] uppercase tracking-widest block mb-6 text-white/80 font-mono drop-shadow-md">German Hospital Placement</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-none text-white tracking-tight mb-8 drop-shadow-lg">
              Begin your placement pathway.
            </h2>
            <p className="font-display italic text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Submit your qualification credentials to begin structured CEFR German language prep and recruitment.
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'healthcare' })}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-ink rounded-full overflow-hidden shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-ink/80 group-hover:text-ink transition-colors">
                Begin Pathway Registration <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
