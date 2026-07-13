import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { pageSlideUp, fadeUp, staggerContainer } from '@/animations/motion';
import { interpretation } from '@/data/services/interpretation';
import { colors } from '@/lib/tokens';
import interpretationHero from '@/assets/images/interpretation_hero.png';

export function InterpretationPage({ onOpenConsultation }) {
  const d = interpretation;

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

      {/* Hero: Split-screen Editorial */}
      <section className="relative pt-40 pb-20 md:py-28 overflow-hidden bg-surface border-b" style={{ borderColor: colors.line }}>
        <div className="container-site relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-micro font-semibold block mb-6 tracking-[0.2em] text-sage">{d.hero.eyebrow}</span>
            <h1 className="font-display text-h1 leading-tight mb-8">
              Precision communication.<br />
              <span className="italic text-sage">Zero compromise.</span>
            </h1>
            <p className="font-display italic text-ink/70 text-lg md:text-xl mb-10 leading-relaxed font-light">
              {d.hero.subtitle}
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'interpretation' })}
              className="btn-primary" 
              style={{ backgroundColor: colors.sage }}
            >
              Request Interpretation Quote <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-lift border" style={{ borderColor: colors.line }}>
            <img 
              src={interpretationHero} 
              alt="Professional interpretation" 
              className="w-full h-full object-cover"
            />
            {/* Absolute watermark inside hero */}
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border text-[10px] uppercase tracking-wider font-semibold opacity-85">
              Simultaneous & Consecutive
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases: 3-column text grid */}
      <section className="py-24 md:py-32 relative border-b bg-paper" style={{ borderColor: colors.line }}>
        <div className="container-site">
          <div className="mb-16">
            <span className="text-micro opacity-50 block mb-3">Industries & Contexts</span>
            <h2 className="font-display text-3xl md:text-4xl">Where precision is required.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {d.useCases.map((uc, i) => (
              <motion.div
                key={uc.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 border bg-surface/30 rounded-2xl hover:bg-surface transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: colors.line }}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: colors.sage }} />
                <span className="text-micro opacity-40 block mb-6">Context 0{i + 1}</span>
                <h4 className="font-display text-2xl mb-4">{uc.label}</h4>
                <p className="text-sm text-ink/60 leading-relaxed font-light">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Large watermark background */}
        <div 
          className="absolute -bottom-6 right-12 font-display font-bold text-[18rem] md:text-[24rem] leading-none pointer-events-none select-none z-0"
          style={{ color: colors.sage, opacity: 0.22 }}
        >
          言
        </div>
      </section>

      {/* Modes: High contrast styled cards */}
      <section className="py-24 md:py-32 bg-surface border-b" style={{ borderColor: colors.line }}>
        <div className="container-site">
          <div className="mb-16">
            <span className="text-micro opacity-50 block mb-3">Delivery Modes</span>
            <h2 className="font-display text-3xl md:text-4xl">Tailored to your framework.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {d.modes.map((m, i) => (
              <motion.div 
                key={m.mode} 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                className="p-8 md:p-10 border bg-paper rounded-2xl shadow-card hover:shadow-lift transition-all duration-500"
                style={{ borderColor: colors.line }}
              >
                <span className="text-xs uppercase tracking-wider text-sage font-semibold mb-4 block">Mode {i+1}</span>
                <h4 className="font-display text-2xl mb-3">{m.mode}</h4>
                <p className="text-ink/60 leading-relaxed font-light">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section triggering the modal */}
      <section className="py-28 md:py-36 bg-paper relative overflow-hidden">
        <div className="container-site max-w-prose text-center relative z-10">
          <span className="text-micro text-sage font-medium block mb-4">Coordinate Services</span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Request interpretation proposal.</h2>
          <p className="font-display italic text-ink/60 text-lg md:text-xl mb-10 leading-relaxed">
            Specify dates, duration, language pair, and context parameters.
          </p>
          <button 
            onClick={() => onOpenConsultation({ type: 'interpretation' })}
            className="btn-primary mx-auto"
            style={{ backgroundColor: colors.sage }}
          >
            Open Request Form <ArrowRight size={16} />
          </button>
          
          <p className="text-[10px] uppercase tracking-wider text-ink/30 mt-8 flex justify-center items-center gap-2">
            <ShieldCheck size={12} /> Privacy assured. Direct response within 4 business hours.
          </p>
        </div>
      </section>

    </motion.div>
  );
}
