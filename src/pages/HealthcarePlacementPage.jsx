import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, HeartHandshake, GraduationCap } from 'lucide-react';
import { pageSlideUp, fadeUp, staggerContainer } from '@/animations/motion';
import { healthcarePlacement } from '@/data/services/healthcare';
import { colors } from '@/lib/tokens';

export function HealthcarePlacementPage({ onOpenConsultation }) {
  const d = healthcarePlacement;

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

      {/* Hero: Bold and Grid Backdrops */}
      <section className="relative pt-44 pb-28 md:pb-36 bg-ink text-white overflow-hidden">
        {/* Fine grid pattern in bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="health-grid-layout" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#health-grid-layout)" />
          </svg>
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <span className="text-micro font-semibold block mb-6 tracking-[0.2em] text-gold">{d.hero.eyebrow}</span>
            <h1 className="font-display text-h1 leading-tight mb-8">
              From India to Germany.<br />
              <span className="italic text-gold">A structured pathway.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              {d.hero.subtitle}
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'healthcare' })}
              className="btn-corporate"
            >
              {d.hero.cta} <ArrowRight size={16} />
            </button>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-6 mt-20 border-t border-white/10 pt-12 max-w-xl"
          >
            {d.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="font-display text-4xl text-gold mb-1">{s.value}</div>
                <div className="text-[9px] uppercase tracking-micro text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility: Elegant Cards */}
      <section className="py-24 md:py-32 border-b bg-surface" style={{ borderColor: colors.line }}>
        <div className="container-site">
          <div className="mb-16">
            <span className="text-micro opacity-40 block mb-3">Requirements</span>
            <h2 className="font-display text-3xl md:text-4xl">Candidate Eligibility</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.eligibility.map((e, i) => (
              <div 
                key={i} 
                className="p-8 border bg-paper rounded-2xl flex flex-col justify-between hover:shadow-lift transition-shadow duration-300"
                style={{ borderColor: colors.line }}
              >
                {i === 0 ? <GraduationCap size={28} className="text-blue mb-6" /> : 
                 i === 1 ? <Award size={28} className="text-blue mb-6" /> : 
                           <HeartHandshake size={28} className="text-blue mb-6" />}
                <p className="text-ink/80 text-base leading-relaxed font-light">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-24 md:py-32 border-b bg-paper relative overflow-hidden" style={{ borderColor: colors.line }}>
        <div className="container-site relative z-10">
          <div className="mb-16">
            <span className="text-micro opacity-50 block mb-3">Structured Timeline</span>
            <h2 className="font-display text-3xl md:text-4xl">Your German Roadmap</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[5%] top-0 bottom-0 w-px bg-ink/10" />

            <div className="space-y-0">
              {d.roadmap.map((phase, idx) => (
                <motion.div
                  key={phase.phase}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="grid md:grid-cols-4 gap-8 border-b py-12 group hover:bg-surface transition-colors px-6 -mx-6"
                  style={{ borderColor: colors.line }}
                >
                  <div className="md:col-span-1 flex flex-col justify-center">
                    <span className="font-display italic text-2xl text-blue">{phase.phase}</span>
                    <div className="text-micro opacity-40 mt-1">{phase.duration}</div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-display text-2xl mb-3">{phase.title}</h4>
                    <p className="text-ink/60 leading-relaxed font-light">{phase.desc}</p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-center">
                    <span className="text-[10px] uppercase tracking-wider text-blue/80 bg-blue/5 border border-blue/15 px-3 py-1 rounded-full">
                      Step {idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Big backdrop '德' watermark with 0.22 opacity */}
        <div 
          className="absolute top-[20%] right-10 font-display font-bold text-[18rem] md:text-[25rem] leading-none pointer-events-none select-none z-0"
          style={{ color: colors.blue, opacity: 0.22 }}
        >
          德
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-surface/50 border-b" style={{ borderColor: colors.line }}>
        <div className="container-site">
          <div className="mb-16">
            <span className="text-micro opacity-50 block mb-3">Questions & Answers</span>
            <h2 className="font-display text-3xl md:text-4xl">Common Inquiries</h2>
          </div>
          <div className="max-w-3xl">
            {d.faq.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                className="border-b py-8" 
                style={{ borderColor: colors.line }}
              >
                <p className="font-display text-xl mb-4 text-ink/90">{item.q}</p>
                <p className="text-ink/60 leading-relaxed font-light">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section triggers the modal */}
      <section className="py-28 md:py-36 bg-paper relative overflow-hidden">
        <div className="container-site max-w-prose text-center relative z-10">
          <span className="text-micro text-blue font-medium block mb-4">German Hospital Placement</span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Begin your placement pathway.</h2>
          <p className="font-display italic text-ink/60 text-lg md:text-xl mb-10 leading-relaxed">
            Submit your qualification credentials to begin structured CEFR German language prep and recruitment.
          </p>
          <button 
            onClick={() => onOpenConsultation({ type: 'healthcare' })}
            className="btn-primary mx-auto"
            style={{ backgroundColor: colors.blue }}
          >
            Start Pathway Registration <ArrowRight size={16} />
          </button>
          
          <p className="text-[10px] uppercase tracking-wider text-ink/30 mt-8 flex justify-center items-center gap-2">
            <ShieldCheck size={12} /> Privacy assured. Direct hospital partnerships.
          </p>
        </div>
      </section>

    </motion.div>
  );
}
