import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, HeartPulse, GraduationCap, Plane, CheckCircle2, Award, Building2, Shield, Clock } from 'lucide-react';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { healthcareColors, colors } from '@/lib/tokens';
import { BookCTASection } from '@/components/sections/HomeSections';

export function HealthcarePlacementPage({ onOpenConsultation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-surface text-ink">
      
      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end overflow-hidden">
        {/* Full-bleed cinematic background */}
        <motion.img
          style={{ y: heroImgY }}
          src="/images/healthcare/healthcare-4.jpg"
          alt="Nurses in Germany"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        
        {/* Warm ambient glow */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.08]" style={{ background: `radial-gradient(circle, ${healthcareColors.accent} 0%, transparent 60%)` }} />

        <div className="relative z-10 container-site max-w-7xl mx-auto pb-16 md:pb-24 pt-40 md:pt-48">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <span
              className="text-xs font-mono uppercase tracking-[0.2em] block font-bold mb-6"
              style={{ color: healthcareColors.accent }}
            >
              Healthcare Placements
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tighter text-white mb-6">
              Your gateway to a<br />
              <span style={{ color: healthcareColors.accent }}>nursing career</span> in Germany.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl mb-10">
              An exclusive end-to-end pathway for Indian nursing graduates to build a fulfilling and lucrative career in Germany's world-class healthcare system.
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'healthcare' })}
              className="group flex items-center justify-center gap-3 bg-[#0284C7] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:text-[#0284C7] hover:shadow-xl"
            >
              Check Eligibility <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────── PATHWAY ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.04]" style={{ background: `radial-gradient(circle, ${healthcareColors.primary} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 md:mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4" style={{ color: healthcareColors.primary }}>The Process</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                Your pathway<br />
                <span className="italic" style={{ color: healthcareColors.primary }}>to Germany.</span>
              </h2>
              <p className="text-ink/50 font-light max-w-sm text-sm leading-relaxed">
                We guide you through every step — from language training in India to your placement in a top German hospital.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <GraduationCap size={24} />,
                step: '01',
                title: 'Language & Prep',
                desc: 'Comprehensive German language training from A1 to B2 level, specifically tailored for healthcare professionals and medical terminology.',
                color: healthcareColors.primary,
                img: '/images/healthcare/healthcare-1.jpg',
              },
              {
                icon: <Award size={24} />,
                step: '02',
                title: 'Credential Recognition',
                desc: 'We handle the complex paperwork. From degree translations to getting your nursing qualifications officially recognized by German authorities.',
                color: healthcareColors.gold,
                img: '/images/healthcare/healthcare-2.jpg',
              },
              {
                icon: <Plane size={24} />,
                step: '03',
                title: 'Placement & Relocation',
                desc: 'Direct interviews with partner hospitals in Germany. We assist with visa processing, flight arrangements, and initial accommodation.',
                color: healthcareColors.accent,
                img: '/images/healthcare/healthcare-3.jpg',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUpScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[450px] flex flex-col justify-end shadow-lg"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90" />
                
                {/* Step number + icon */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">{item.step}</span>
                </div>

                <div className="relative z-10 p-8 text-white">
                  <h3 className="font-display text-2xl md:text-3xl mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/70 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── IMAGE COLLAGE + WHY GERMANY ──────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#0369A1] text-white">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.08]" style={{ background: `radial-gradient(circle, ${healthcareColors.accent} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image mosaic */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-56">
                  <img src="/images/healthcare/healthcare-5.jpg" alt="Hospital in Germany" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-56 mt-8">
                  <img src="/images/healthcare/healthcare-3.jpg" alt="Healthcare team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-48 col-span-2 -mt-4">
                  <img src="/images/healthcare/healthcare-1.jpg" alt="Training session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest block mb-4" style={{ color: healthcareColors.accent }}>Opportunities</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8 tracking-tight">
                Why choose<br />
                <span className="italic" style={{ color: healthcareColors.accent }}>Germany?</span>
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-10 text-lg">
                Germany offers one of the most stable, well-funded, and respected healthcare systems in the world. As an Indian nurse, you are highly valued.
              </p>
              <ul className="space-y-5">
                {[
                  { icon: <Clock size={18} />, text: 'Excellent work-life balance and regulated hours.' },
                  { icon: <Building2 size={18} />, text: 'Competitive salaries with social security benefits.' },
                  { icon: <Shield size={18} />, text: 'Clear pathways for permanent residency and citizenship.' },
                  { icon: <HeartPulse size={18} />, text: 'Advanced medical facilities and continuous learning.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center shrink-0 text-white/60 group-hover:border-white/30 transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      {item.icon}
                    </div>
                    <span className="text-white/80 font-light leading-relaxed pt-1.5">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── STATS STRIP ──────────────────────────── */}
      <section className="py-16 bg-paper border-t" style={{ borderColor: colors.line }}>
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '500+', label: 'Nurses Placed' },
              { number: '30+', label: 'Partner Hospitals' },
              { number: '98%', label: 'Visa Success Rate' },
              { number: '18mo', label: 'Average Timeline' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl tracking-tight mb-2" style={{ color: healthcareColors.primary }}>{stat.number}</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-ink/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookCTASection 
        onOpenConsultation={onOpenConsultation}
        contextLabel="Healthcare Placements"
        title="Your German nursing career&#10;starts here."
        subtitle="Speak to our healthcare placement advisors to check your eligibility."
      />
    </motion.div>
  );
}
