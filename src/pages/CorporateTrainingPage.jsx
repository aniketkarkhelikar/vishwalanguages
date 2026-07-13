import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { pageSlideUp, fadeUp, staggerContainer } from '@/animations/motion';
import { corporateTraining } from '@/data/services/corporate';
import { colors } from '@/lib/tokens';
import corporateTrainingHero from '@/assets/images/corporate_training_hero.png';

export function CorporateTrainingPage({ onOpenConsultation }) {
  const d = corporateTraining;

  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="relative">
      
      {/* Editorial layout lines */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <div className="container-site h-full grid grid-cols-4 gap-0">
          <div className="border-r border-ink/[0.04] h-full" />
          <div className="border-r border-ink/[0.04] h-full" />
          <div className="border-r border-ink/[0.04] h-full" />
          <div className="h-full" />
        </div>
      </div>

      {/* Hero: Split Screen Dark Hero */}
      <section className="relative pt-40 pb-20 md:py-28 bg-ink text-white overflow-hidden border-b" style={{ borderColor: colors.line }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="corp-grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#corp-grid-hero)" />
          </svg>
        </div>

        <div className="container-site relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-micro text-gold font-medium block mb-6 tracking-[0.2em]">{d.hero.eyebrow}</span>
            <h1 className="font-display text-h1 leading-tight mb-8">
              Corporate language training.<br />
              <span className="italic text-gold">Engineered for growth.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10">
              {d.hero.subtitle}
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'corporate' })}
              className="btn-corporate"
            >
              {d.hero.cta} <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-lift border border-white/10">
            <img 
              src={corporateTrainingHero} 
              alt="Corporate Training in Tokyo" 
              className="w-full h-full object-cover"
            />
            {/* Absolute badge inside hero */}
            <div className="absolute bottom-4 right-4 bg-ink/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-wider font-semibold text-gold">
              Expat relos & business teams
            </div>
          </div>
        </div>
      </section>

      {/* Features: Card Grid layout */}
      <section className="py-24 md:py-32 bg-surface border-b" style={{ borderColor: colors.line }}>
        <div className="container-site">
          <div className="mb-16">
            <span className="text-micro opacity-50 block mb-3">Enterprise Framework</span>
            <h2 className="font-display text-3xl md:text-4xl">What we deliver</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 border bg-paper rounded-2xl shadow-sm hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: colors.line }}
              >
                <span className="text-micro text-gold opacity-80 block mb-6">Service 0{i + 1}</span>
                <h4 className="font-display text-xl mb-3">{f.title}</h4>
                <p className="text-sm text-ink/60 leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process: Timelines */}
      <section className="py-24 md:py-32 border-b bg-paper relative overflow-hidden" style={{ borderColor: colors.line }}>
        <div className="container-site relative z-10">
          <div className="mb-16">
            <span className="text-micro opacity-50 block mb-3">Execution Roadmap</span>
            <h2 className="font-display text-3xl md:text-4xl">Our integration workflow</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 md:p-10 rounded-3xl bg-surface border flex flex-col justify-between min-h-[320px] hover:bg-paper hover:shadow-card transition-all duration-500 group"
                style={{ borderColor: colors.line }}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: colors.gold }}>
                      Phase 0{i + 1}
                    </span>
                    <span className="font-display text-5xl opacity-[0.04] group-hover:opacity-[0.15] group-hover:-translate-y-1 transition-all duration-500" style={{ color: colors.gold }}>
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl mb-4">{p.title}</h4>
                  <p className="text-ink/60 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
                
                {/* Visual node progression */}
                <div className="w-full h-1 bg-ink/5 rounded-full overflow-hidden mt-10">
                  <div className="h-full transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100" style={{ backgroundColor: colors.gold }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backdrop watermark */}
        <div 
          className="absolute top-[30%] right-10 font-display font-bold text-[18rem] md:text-[25rem] leading-none pointer-events-none select-none z-0"
          style={{ color: colors.gold, opacity: 0.22 }}
        >
          社
        </div>
      </section>

      {/* Stats row & CTA */}
      <section className="py-28 md:py-36 bg-paper relative overflow-hidden">
        <div className="container-site max-w-prose text-center relative z-10">
          <span className="text-micro text-gold font-medium block mb-4">Partner with Vishwa</span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Coordinate training cohorts.</h2>
          <p className="font-display italic text-ink/60 text-lg md:text-xl mb-10 leading-relaxed">
            Get structured curriculum alignment, batch sizes, and progress metrics for your corporate team.
          </p>
          <button 
            onClick={() => onOpenConsultation({ type: 'corporate' })}
            className="btn-primary mx-auto"
            style={{ backgroundColor: colors.blue }}
          >
            Open Proposal Request <ArrowRight size={16} />
          </button>
          
          <p className="text-[10px] uppercase tracking-wider text-ink/30 mt-8 flex justify-center items-center gap-2">
            <ShieldCheck size={12} /> Confidential. Corporate coordinator responds within 12 business hours.
          </p>
        </div>
      </section>

    </motion.div>
  );
}
