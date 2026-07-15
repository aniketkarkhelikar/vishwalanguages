import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { pageSlideUp, fadeUp, staggerContainer, fadeUpScale } from '@/animations/motion';
import { corporateTraining } from '@/data/services/corporate';
import { colors } from '@/lib/tokens';

/**
 * CorporateTrainingPage — Apple-inspired Enterprise Design.
 * Reimagined with a dark, high-contrast, non-sticky layout.
 * Massive typography, direct information flow.
 */
export function CorporateTrainingPage({ onOpenConsultation }) {
  const d = corporateTraining;
  const [activeStep, setActiveStep] = useState(0);

  // Set up intersection observer to detect active step on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-process-index') || '0', 10);
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Trigger when block is near center of screen
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll('[data-process-index]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="bg-ink text-white">
      
      {/* ══ MASSIVE B2B HERO ══ */}
      {/* Structural mirror to the new Healthcare Hero, but tailored for Enterprise */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pb-12 md:pb-24 pt-40 px-6 overflow-hidden bg-ink">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" className="opacity-[0.03]"><defs><pattern id="c-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#c-grid)" /></svg>
          <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20" style={{ background: `radial-gradient(circle, ${colors.gold} 0%, transparent 70%)` }} />
        </div>

        <div className="container-site relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-16">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gold block mb-6 md:mb-10"
              >
                Vishwa Enterprise Solutions
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display text-[12vw] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-white tracking-[-0.03em] mb-6 md:mb-0"
              >
                Global<br />
                <span className="italic text-white/50">fluency.</span>
              </motion.h1>
            </div>
            
            <div className="flex flex-col gap-8 pb-4">
              <p className="text-white/60 font-light text-lg md:text-xl max-w-sm leading-relaxed">
                We engineer custom language programs for modern enterprises. From expat relocations to cross-cultural sales teams, we deliver measurable ROI.
              </p>
              
              <button 
                onClick={() => onOpenConsultation({ type: 'corporate' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-gold hover:text-ink hover:bg-gold rounded-full text-white overflow-hidden transition-all duration-300 w-fit"
              >
                <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  Request a Proposal <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* THE STATS (Huge Typography right below Hero) */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: '20+', label: 'Enterprise Partners' },
              { val: '500+', label: 'Executives Trained' },
              { val: '100%', label: 'Custom Curriculums' },
              { val: '6', label: 'Languages Offered' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 + (i*0.1) }} className="flex flex-col border-l border-white/10 pl-6 md:pl-8">
                <span className="font-display text-4xl md:text-6xl text-white mb-2">{stat.val}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE FRAMEWORK (Massive Zig-Zag Blocks) ══ */}
      {/* Replaces the sticky scroll to provide immediate visual scanning */}
      <section className="py-24 md:py-32 bg-surface text-ink rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="container-site max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-6 text-terracotta">Our Core Pillars</span>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-ink tracking-tight">
              Not a generic language course. We engineer results.
            </h2>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {d.features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpScale} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: '-10%' }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Number Block */}
                <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-ink/5 rounded-3xl flex items-center justify-center p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/[0.02] transition-colors duration-500" />
                  <span className="font-display text-9xl text-ink/10 select-none group-hover:scale-110 transition-transform duration-700">0{idx + 1}</span>
                </div>
                
                {/* Text Block */}
                <div className="w-full md:w-1/2">
                  <h3 className="font-display text-3xl md:text-5xl leading-tight mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-light text-ink/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE PROCESS (Elegant Timeline) ══ */}
      {/* Scroll-based animations with sticky title */}
      <section className="py-24 md:py-32 bg-ink text-white border-t border-white/5 relative">
        <div className="container-site max-w-5xl mx-auto relative">
          
          {/* STICKY TITLE BLOCK */}
          <div className="sticky top-0 pt-24 pb-12 bg-ink z-20 -mt-24 mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 text-gold">Engagement Model</span>
              <h2 className="font-display text-5xl md:text-7xl">The Process.</h2>
            </motion.div>
          </div>
          
          <div className="space-y-0 relative border-l border-white/10 ml-6 md:ml-12 pl-8 md:pl-16">
            {d.process.map((phase, idx) => (
              <motion.div 
                key={idx} 
                data-process-index={idx}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}
                className="relative pb-24 last:pb-12 group transition-opacity duration-700"
                style={{ opacity: activeStep === idx ? 1 : 0.3 }}
              >
                {/* Timeline Dot (Lights up when active) */}
                <div 
                  className="absolute -left-[37px] md:-left-[69px] top-1 w-3 h-3 rounded-full transition-all duration-700"
                  style={{ 
                    backgroundColor: activeStep === idx ? colors.gold : 'rgba(255,255,255,0.2)',
                    transform: activeStep === idx ? 'scale(1.5)' : 'scale(1)',
                    boxShadow: activeStep === idx ? `0 0 20px ${colors.gold}` : 'none'
                  }}
                />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                  <div 
                    className="font-display text-3xl md:text-4xl shrink-0 w-16 transition-colors duration-700"
                    style={{ color: activeStep === idx ? colors.gold : 'rgba(255,255,255,0.3)' }}
                  >
                    {phase.step}
                  </div>
                  <div>
                    <h4 
                      className="font-display text-2xl md:text-4xl mb-4 transition-colors duration-700"
                      style={{ color: activeStep === idx ? colors.gold : 'white' }}
                    >
                      {phase.title}
                    </h4>
                    <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-2xl">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GRAND CTA ══ */}
      <section className="py-32 md:py-48 bg-ink text-center border-t border-white/10">
        <div className="container-site">
          <span className="text-[10px] font-mono uppercase tracking-widest block mb-8 text-gold">Corporate Partnerships</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white mb-12">
            Align your team.
          </h2>
          <button 
            onClick={() => onOpenConsultation({ type: 'corporate' })}
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-ink rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
              Request a Proposal <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </section>

    </motion.div>
  );
}
