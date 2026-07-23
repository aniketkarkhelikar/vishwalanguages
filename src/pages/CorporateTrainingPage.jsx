import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import { ArrowRight, Globe, Target, BarChart3, Briefcase, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { colors } from '@/lib/tokens';

export function CorporateTrainingPage({ onOpenConsultation }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             const idx = parseInt(entry.target.getAttribute('data-process-index'), 10);
             setActiveStep(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    const stepEls = document.querySelectorAll('[data-process-index]');
    stepEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="bg-paper text-ink" ref={containerRef}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-surface">
        {/* Floating Collage */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
           <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="absolute top-[10%] left-[2%] w-[18vw] h-[22vw] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
              <img src="/images/corporate/corporate-1.jpg" className="w-full h-full object-cover" alt="Corporate training 1" />
           </motion.div>
           <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="absolute bottom-[5%] left-[12%] w-[20vw] h-[16vw] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
              <img src="/images/corporate/corporate-2.jpg" className="w-full h-full object-cover" alt="Corporate training 2" />
           </motion.div>
           <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="absolute top-[8%] right-[5%] w-[16vw] h-[24vw] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
              <img src="/images/corporate/corporate-3.jpg" className="w-full h-full object-cover" alt="Corporate training 3" />
           </motion.div>
           <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-[10%] right-[12%] w-[22vw] h-[18vw] rounded-3xl overflow-hidden shadow-2xl hidden md:block">
              <img src="/images/corporate/corporate-5.jpg" className="w-full h-full object-cover" alt="Corporate training 5" />
           </motion.div>
           <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 1 }} className="absolute top-[45%] left-[2%] w-[12vw] h-[12vw] rounded-full overflow-hidden shadow-2xl hidden md:block border-4 border-surface">
              <img src="/images/corporate/IMG_20220429_140223_660.webp" className="w-full h-full object-cover" alt="Corporate training 6" />
           </motion.div>
           <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute top-[40%] right-[1%] w-[10vw] h-[10vw] rounded-full overflow-hidden shadow-2xl hidden md:block border-4 border-surface">
              <img src="/images/corporate/IMG_20220323_194021_465.webp" className="w-full h-full object-cover" alt="Corporate training 7" />
           </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-surface/60 backdrop-blur-[2px] z-10" />

        <div className="container-site max-w-7xl mx-auto relative z-20 px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-terracotta/20 bg-terracotta/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold">Enterprise Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight mb-8 text-ink"
            >
              Elevate your <span className="italic text-terracotta relative">
                workforce
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-terracotta/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span><br />
              for a global stage.
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-lg md:text-2xl text-ink/60 font-light max-w-2xl mb-12 leading-relaxed"
            >
              Bespoke language and cross-cultural training designed exclusively for high-performing corporate teams.
            </motion.p>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onClick={() => onOpenConsultation({ type: 'corporate' })}
              className="group flex items-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-surface hover:text-ink hover:shadow-xl hover:-translate-y-1"
            >
              Request a Proposal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* --- STATEMENT / METRICS STRIP --- */}
      <section className="py-12 border-y border-ink/5 bg-paper relative z-20 shadow-sm">
        <div className="container-site max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
          {[
            { n: '50+', l: 'Enterprise Clients' },
            { n: '2000+', l: 'Professionals Trained' },
            { n: '98%', l: 'Success Rate' }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="font-display text-4xl md:text-5xl text-gold mb-1">{stat.n}</div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-ink/50">{stat.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BENTO BOX FEATURES --- */}
      <section className="py-24 md:py-32 bg-surface flex items-center shadow-2xl border-t border-ink/5 relative">
        <div className="container-site max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              The Vishwa <span className="italic text-terracotta">Advantage.</span>
            </h2>
            <p className="text-ink/60 text-lg max-w-2xl mx-auto font-light">
              We do not just teach languages. We integrate cultural intelligence into your corporate DNA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            
            {/* Feature 1 (Large Image) */}
            <motion.div 
              variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="md:col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group"
            >
              <img src="/images/corporate/corporate-4.jpg" alt="Corporate Team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 md:p-12 w-full text-white">
                <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center mb-6">
                  <Globe size={20} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">Global Readiness</h3>
                <p className="text-white/70 text-base md:text-lg max-w-md font-light leading-relaxed">
                  Bridge communication gaps across borders. We train your executives to negotiate, present, and lead in foreign markets with absolute confidence.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 (Image Card) */}
            <motion.div 
              variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-[2rem] bg-paper p-8 flex flex-col justify-between border border-ink/5 hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <img src="/images/corporate/corporate-3.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-[0.15] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />
              
              <div className="relative z-10 w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                <Target size={20} />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl mb-3 text-ink">Tailored Curriculum</h3>
                <p className="text-ink/60 text-sm font-light leading-relaxed">
                  No generic textbooks. We build industry-specific modules—from IT terminologies to manufacturing protocols—ensuring immediate relevance to your daily operations.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 (Image Card) */}
            <motion.div 
              variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-[2rem] bg-surface p-8 flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <img src="/images/corporate/corporate-5.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-[0.15] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />

              <div className="relative z-10 w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl mb-3 text-ink">Measurable ROI</h3>
                <p className="text-ink/60 text-sm font-light leading-relaxed">
                  Track your team's progress with robust pre- and post-assessments. We provide HR leaders with monthly analytics on attendance, fluency gains, and engagement.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ THE PROCESS (Elegant Timeline) ══ */}
      {/* Scroll-based animations with sticky title */}
      <section className="py-24 md:py-32 bg-paper text-ink border-t border-ink/5 relative">
        <div className="container-site max-w-6xl mx-auto relative">
          
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start relative">
            
            {/* Left Column: Title + Steps (7 cols) */}
            <div className="md:col-span-7">
              {/* TITLE BLOCK */}
              <div className="mb-16">
                <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 text-terracotta">Engagement Model</span>
                <h2 className="font-display text-5xl md:text-7xl">The Process.</h2>
              </div>
              
              <div className="space-y-0 relative border-l border-ink/10 ml-4 pl-8 md:pl-12">
                {[
                  { step: '01', title: 'Consultation', desc: 'We align with your L&D objectives and map out the language gaps in your workforce.' },
                  { step: '02', title: 'Design', desc: 'Our academic team creates a bespoke curriculum tailored to your industry terminology.' },
                  { step: '03', title: 'Delivery', desc: 'Expert native-level trainers conduct sessions—online, on-site, or hybrid.' },
                  { step: '04', title: 'Certification', desc: 'Final assessments provide internationally recognized certifications for your team.' }
                ].map((phase, idx) => (
                  <motion.div 
                    key={idx} 
                    data-process-index={idx}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-20%' }}
                    className="relative pb-32 last:pb-12 group transition-opacity duration-500"
                    style={{ opacity: activeStep === idx ? 1 : 0.25 }}
                  >
                    {/* Timeline Dot */}
                    <div 
                      className="absolute -left-[37px] md:-left-[49px] top-2.5 w-3 h-3 rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: activeStep === idx ? colors.terracotta : 'rgba(24,24,26,0.15)',
                        transform: activeStep === idx ? 'scale(1.5)' : 'scale(1)',
                        boxShadow: activeStep === idx ? `0 0 20px rgba(184,92,56,0.4)` : 'none'
                      }}
                    />
                    
                    <div className="flex gap-6 items-start">
                      <div 
                        className="font-display text-2xl md:text-3xl shrink-0 w-12 transition-colors duration-500"
                        style={{ color: activeStep === idx ? colors.terracotta : 'rgba(24,24,26,0.3)' }}
                      >
                        {phase.step}
                      </div>
                      <div>
                        <h4 className="font-display text-2xl md:text-3xl mb-3 text-ink">
                          {phase.title}
                        </h4>
                        <p className="text-base md:text-lg font-light text-ink/70 leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>

                    {/* Mobile-only inline image */}
                    <div className="md:hidden mt-6 w-full h-48 rounded-[2rem] overflow-hidden shadow-sm border border-ink/5">
                      <img 
                        src={['/images/corporate/corporate-1.jpg', '/images/corporate/corporate-2.jpg', '/images/corporate/corporate-4.jpg', '/images/corporate/IMG_20220323_194021_465.webp'][idx]} 
                        className="w-full h-full object-cover" 
                        alt={phase.title} 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Sticky Image Container (5 cols) */}
            <div className="hidden md:block md:col-span-5 sticky top-32 h-[450px]">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-ink/5 bg-surface relative">
                {['/images/corporate/corporate-1.jpg', '/images/corporate/corporate-2.jpg', '/images/corporate/corporate-4.jpg', '/images/corporate/IMG_20220323_194021_465.webp'].map((imgSrc, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeStep === idx ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    <img 
                      src={imgSrc} 
                      className="w-full h-full object-cover" 
                      alt={`Step ${idx + 1}`} 
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- IMAGE MOSAIC + CTA PRE-CTA --- */}
      <section className="py-24 md:py-32 bg-surface text-ink relative overflow-hidden flex items-center shadow-lg border-t border-ink/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container-site max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                Ready to upscale your<br />
                <span className="italic text-terracotta">corporate communication?</span>
              </h2>
              <p className="text-ink/60 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-md">
                Join industry leaders who trust Vishwa Languages to bridge their cultural divides and empower their global teams.
              </p>
              <ul className="space-y-4 mb-12">
                {['Dedicated Account Manager', 'Customized Billing & Reporting', 'Flexible Batch Timings'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-ink/80 font-light">
                    <CheckCircle2 size={18} className="text-terracotta" /> {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onOpenConsultation({ type: 'corporate' })}
                className="group flex items-center justify-center gap-3 w-full md:w-auto bg-terracotta text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-ink hover:text-white hover:shadow-xl"
              >
                Book a Strategy Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[500px] hidden md:block">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-[2rem] overflow-hidden border border-ink/10 shadow-2xl">
                <img src="/images/corporate/IMG_20220323_194021_465.webp" alt="Corporate" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-[2rem] overflow-hidden border-4 border-surface shadow-2xl z-10">
                <img src="/images/corporate/IMG_20220429_140223_660.webp" alt="Training" className="w-full h-full object-cover" />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/80 backdrop-blur-xl border border-ink/10 p-5 rounded-2xl z-20 flex items-center gap-4 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="text-ink font-bold mb-1 leading-none">Tailored for B2B</div>
                  <div className="text-[9px] uppercase tracking-widest text-ink/50 font-mono">Any Industry</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


    </motion.div>
  );
}
