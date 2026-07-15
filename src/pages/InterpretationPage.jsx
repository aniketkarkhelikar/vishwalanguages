import { motion } from 'framer-motion';
import { ArrowRight, Globe2 } from 'lucide-react';
import { pageSlideUp, fadeUp, staggerContainer, fadeUpScale } from '@/animations/motion';
import { interpretation } from '@/data/services/interpretation';
import { colors } from '@/lib/tokens';

/**
 * InterpretationPage — Grand Editorial Design.
 * High aesthetic value, massive typography, elegant use of the sage accent.
 * Reimagined to feel less "bland" with high-contrast sections and interactive lists.
 */
export function InterpretationPage({ onOpenConsultation }) {
  const d = interpretation;

  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="bg-paper">
      
      {/* ══ MASSIVE HERO (Art Gallery Aesthetic) ══ */}
      <section className="relative min-h-[95vh] flex flex-col justify-end pb-12 md:pb-24 pt-40 px-6 overflow-hidden bg-surface">
        {/* Abstract sage gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3" style={{ background: colors.sage }} />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-10 -translate-x-1/3 translate-y-1/3" style={{ background: colors.sage }} />
          <div className="absolute top-[20%] left-[-5%] font-display text-[40vw] leading-none opacity-[0.02] select-none whitespace-nowrap" style={{ color: colors.sage }}>
            Translate
          </div>
        </div>

        <div className="container-site relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-ink/10 pb-16">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] md:text-xs font-mono uppercase tracking-widest block mb-6 md:mb-10"
                style={{ color: colors.sage }}
              >
                Translation & Interpretation
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display text-[12vw] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-ink tracking-[-0.03em] mb-6 md:mb-0"
              >
                Zero<br />
                <span className="italic" style={{ color: colors.sage }}>compromise.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col gap-8 pb-4"
            >
              <p className="text-ink/60 font-light text-lg md:text-xl max-w-sm leading-relaxed">
                Precision communication. We deploy specialized interpreters for legal, medical, and high-stakes corporate environments.
              </p>
              <button 
                onClick={() => onOpenConsultation({ type: 'interpretation' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-ink/20 hover:border-ink hover:text-white hover:bg-ink rounded-full text-ink overflow-hidden transition-all duration-300 w-fit"
              >
                <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  Request a Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ LANGUAGES TICKER ══ */}
      <section className="py-12 bg-surface overflow-hidden border-b border-ink/5">
        <div className="flex gap-16 whitespace-nowrap overflow-hidden py-4 opacity-40">
          {[...d.languages, ...d.languages, ...d.languages, ...d.languages].map((lang, i) => (
            <span key={i} className="font-display text-2xl md:text-4xl text-ink tracking-tight animate-pulse">{lang}</span>
          ))}
        </div>
      </section>

      {/* ══ USE CASES (Interactive Editorial List) ══ */}
      <section className="py-32 md:py-48 bg-paper">
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-24">
            
            {/* Left Sticky Header */}
            <div className="md:col-span-5 relative">
              <div className="sticky top-32">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40 block mb-6">Contextual Mastery</span>
                <motion.h2 
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="font-display text-5xl md:text-7xl leading-tight mb-8"
                >
                  Fluency isn't enough.
                </motion.h2>
                <motion.p 
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="text-xl font-light text-ink/60 leading-relaxed mb-12"
                >
                  When dealing with engineering specifications, legal arbitration, or medical diagnoses, context is everything. We provide specialists who understand the terminology of your industry.
                </motion.p>
              </div>
            </div>
            
            {/* Right List */}
            <div className="md:col-span-7">
              <div className="border-t border-ink/10">
                {d.useCases.map((uc, i) => (
                  <motion.div 
                    key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}
                    className="group border-b border-ink/10 py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-default hover:bg-ink/[0.02] transition-colors px-4 -mx-4 rounded-2xl"
                  >
                    <div className="flex items-start gap-8">
                      <span className="font-mono text-sm text-ink/20 group-hover:text-ink/40 transition-colors">0{i+1}</span>
                      <div>
                        <h4 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-ink transition-colors" style={{ color: colors.sage }}>
                          {uc.label}
                        </h4>
                        <p className="text-lg font-light text-ink/50 max-w-sm group-hover:text-ink/70 transition-colors">{uc.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ DELIVERY MODES (Massive High-Contrast Cards) ══ */}
      <section className="py-32 md:py-48 bg-ink text-white">
        <div className="container-site max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-7xl mb-6">Formats of delivery.</h2>
            <p className="text-white/50 text-xl font-light">Flexible interpretation modes tailored to your operational constraints.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {d.modes.map((mode, i) => (
              <motion.div 
                key={i} variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="bg-white/[0.03] border border-white/10 p-12 md:p-16 rounded-[2rem] flex flex-col justify-between aspect-[4/3] group hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500" style={{ color: colors.sage }}>
                  <Globe2 size={24} />
                </div>
                <div>
                  <h4 className="font-display text-4xl md:text-5xl mb-4 text-white group-hover:text-white transition-colors duration-500">{mode.mode}</h4>
                  <p className="text-xl font-light text-white/50 group-hover:text-white/70 transition-colors duration-500">{mode.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GRAND CTA ══ */}
      <section className="py-32 md:py-48 text-center" style={{ backgroundColor: colors.sage }}>
        <div className="container-site">
          <span className="text-[10px] font-mono uppercase tracking-widest block mb-8 text-white/60">Ready?</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white mb-12">
            Secure an interpreter.
          </h2>
          <button 
            onClick={() => onOpenConsultation({ type: 'interpretation' })}
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-ink rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-4 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
              Request a Quote <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </section>

    </motion.div>
  );
}
