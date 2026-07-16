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
const INTERPRETATION_IMAGES = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop', // tech
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop', // medical
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop', // legal
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'  // corporate
];

const MODE_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588196749597-9ff046fe6d5b?q=80&w=1200&auto=format&fit=crop'
];

export function InterpretationPage({ onOpenConsultation }) {
  const d = interpretation;

  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="bg-ink text-white">
      
      {/* ══ MASSIVE HERO (Art Gallery Aesthetic) ══ */}
      <section className="relative min-h-[95vh] flex flex-col justify-end pb-12 md:pb-24 pt-40 px-6 overflow-hidden bg-ink">
        {/* Cinematic image overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Interpretation Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        </div>
        
        {/* Abstract sage gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full translate-x-1/3 -translate-y-1/3 mix-blend-screen opacity-30" 
            style={{ background: `radial-gradient(circle, ${colors.sage} 0%, transparent 60%)` }} 
          />
          <div className="absolute top-[35%] left-0 w-full flex justify-center text-center font-display text-[14vw] leading-none opacity-[0.04] select-none whitespace-nowrap text-white">
            Translation
          </div>
        </div>

        <div className="container-site relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-16">
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
                className="font-display text-[12vw] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-white tracking-[-0.03em] mb-6 md:mb-0"
              >
                Zero<br />
                <span className="italic" style={{ color: colors.sage }}>compromise.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col gap-8 pb-4"
            >
              <p className="text-white/70 font-light text-lg md:text-xl max-w-sm leading-relaxed">
                Precision communication. We deploy specialized interpreters for legal, medical, and high-stakes corporate environments.
              </p>
              <button 
                onClick={() => onOpenConsultation({ type: 'interpretation' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white hover:text-ink hover:bg-white rounded-full text-white overflow-hidden transition-all duration-300 w-fit"
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
      <section className="py-12 bg-ink overflow-hidden border-b border-white/5">
        <div className="flex gap-16 whitespace-nowrap overflow-hidden py-4 opacity-40">
          {[...d.languages, ...d.languages, ...d.languages, ...d.languages].map((lang, i) => (
            <span key={i} className="font-display text-2xl md:text-4xl text-white tracking-tight animate-pulse">{lang}</span>
          ))}
        </div>
      </section>

      {/* ══ USE CASES (Soulful Image Layout) ══ */}
      <section className="py-32 md:py-48 bg-paper text-ink rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="container-site max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-6 text-ink/40">Contextual Mastery</span>
            <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight mb-8">
              Fluency isn't enough.
            </h2>
            <p className="text-xl font-light text-ink/60 leading-relaxed">
              When dealing with engineering specifications, legal arbitration, or medical diagnoses, context is everything. We provide specialists who understand the terminology of your industry.
            </p>
          </div>
          
          <div className="space-y-24 md:space-y-40">
            {d.useCases.map((uc, i) => (
              <motion.div 
                key={i} variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Block */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                    <img 
                      src={INTERPRETATION_IMAGES[i % INTERPRETATION_IMAGES.length]} 
                      alt={uc.label} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  {/* Floating Number */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 !== 0 ? '-right-6 md:-right-16' : '-left-6 md:-left-16'} font-display text-[8rem] md:text-[14rem] leading-none text-white opacity-95 drop-shadow-2xl z-10 pointer-events-none select-none mix-blend-exclusion`}>
                    0{i+1}
                  </div>
                </div>
                
                {/* Text Block */}
                <div className="w-full md:w-1/2">
                  <span className="font-mono text-[10px] uppercase tracking-widest block mb-4" style={{ color: colors.sage }}>Specialty 0{i+1}</span>
                  <h3 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                    {uc.label}
                  </h3>
                  <p className="text-xl md:text-2xl font-light text-ink/65 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DELIVERY MODES (Minimal Typographic Grid) ══ */}
      <section className="py-24 md:py-32 bg-surface text-ink">
        <div className="container-site max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4" style={{ color: colors.sage }}>
              Agile Deployment
            </span>
            <h2 className="font-display text-4xl md:text-6xl mb-6 tracking-tight">Formats of delivery.</h2>
            <p className="text-ink/50 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">Flexible interpretation modes tailored to your operational constraints.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {d.modes.map((mode, i) => (
              <motion.div 
                key={i} variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="p-8 md:p-10 flex flex-col justify-between border-t border-ink/10 hover:border-ink/30 transition-colors duration-500 min-h-[320px] bg-white group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center mb-10 group-hover:bg-surface transition-colors" style={{ color: colors.sage }}>
                    <Globe2 size={16} />
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl mb-4 text-ink">{mode.mode}</h4>
                </div>
                <p className="text-sm md:text-base font-light text-ink/60 leading-relaxed">{mode.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GRAND CTA (Cinematic & Soulful) ══ */}
      <section className="py-32 md:py-48 text-center relative overflow-hidden" style={{ backgroundColor: colors.sage }}>
        {/* Cinematic background image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 mix-blend-multiply" alt="Global interpretation" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent mix-blend-overlay" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-20 shadow-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-6 text-white/80 drop-shadow-md">Coordinate Services</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight text-white mb-6 drop-shadow-lg">
              Request interpretation proposal.
            </h2>
            <p className="font-display italic text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Specify dates, duration, language pair, and context parameters.
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'interpretation' })}
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-ink rounded-full overflow-hidden shadow-xl"
            >
            <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-4 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
              Request a Quote <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
