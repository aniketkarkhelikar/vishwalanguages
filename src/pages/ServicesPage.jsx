import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mic, HeartPulse, FileText, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEO, breadcrumbSchema, faqSchema, ratingSchema, PAGE_FAQS } from '@/components/SEO';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { colors, healthcareColors } from '@/lib/tokens';

export function ServicesPage({ onOpenConsultation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-surface text-ink">
      <SEO 
        title="Professional Language Services – Translation, Interpretation & Healthcare Placement" 
        description="Vishwa Languages offers certified translation services, professional simultaneous and consecutive interpretation for corporate and legal settings, and an exclusive healthcare placement pathway from India to Germany for nursing graduates. Based in Nashik, serving clients globally."
        keywords="Language Translation services Nashik, Interpretation services Nashik, Healthcare Placements Germany, Learn German for healthcare professionals, Document translation, Legal translation, Corporate interpretation, German nurse placement India to Germany"
        canonicalPath="/services"
        schemas={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
          ratingSchema()
        ]}
      />
      
      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end overflow-hidden">
        <motion.img
          style={{ y: heroImgY }}
          src="/images/homepage/home-0004.jpg"
          alt="Professional Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.06]" style={{ background: `radial-gradient(circle, ${colors.blue} 0%, transparent 60%)` }} />

        <div className="relative z-10 container-site max-w-7xl mx-auto pb-16 md:pb-24 pt-40 md:pt-48">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] block font-bold mb-6 text-gold">
              Professional Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tighter text-white mb-6">
              Global Communication &<br />
              <span className="text-gold">Career Mobility.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl mb-10">
              Beyond our core language programs, we offer specialized translation, interpretation, and exclusive healthcare placement pathways to Germany.
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'general' })}
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-terracotta hover:bg-brown"
            >
              Get a Free Quote <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────── TRANSLATION & INTERPRETATION ──────────────────────────── */}
      <section id="translation-interpretation" className="py-20 md:py-28 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 md:mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">Linguistic Services</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                Translation &<br />
                <span className="italic text-terracotta">Interpretation.</span>
              </h2>
              <p className="text-ink/50 font-light max-w-sm text-sm leading-relaxed">
                Precision communication for high-stakes environments. We provide experts for legal, medical, and corporate settings in all major languages.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Translation */}
            <motion.div
              variants={fadeUpScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[480px] flex flex-col justify-end shadow-lg"
            >
              <img src="/images/homepage/home-0014.jpg" alt="Translation Services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90" />
              
              <div className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white bg-terracotta/90 backdrop-blur-md">
                <FileText size={20} />
              </div>

              <div className="relative z-10 p-8 text-white">
                <h3 className="font-display text-2xl md:text-3xl mb-3 tracking-tight">Translation Services</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                  Document translation, website localization, and certified legal translations. We ensure cultural accuracy and technical precision.
                </p>
                <button onClick={() => onOpenConsultation({ type: 'translation' })} className="text-xs uppercase font-bold tracking-widest text-gold hover:text-white transition-colors flex items-center gap-2">
                  Request Quote <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Interpretation */}
            <motion.div
              variants={fadeUpScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[480px] flex flex-col justify-end shadow-lg"
            >
              <img src="/images/interpretation/interp-2.jpg" alt="Interpretation Services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90" />
              
              <div className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white bg-brown/90 backdrop-blur-md">
                <Mic size={20} />
              </div>

              <div className="relative z-10 p-8 text-white">
                <h3 className="font-display text-2xl md:text-3xl mb-3 tracking-tight">Interpretation</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                  Real-time simultaneous and consecutive interpretation for conferences, corporate meetings, and liaison events globally.
                </p>
                <button onClick={() => onOpenConsultation({ type: 'interpretation' })} className="text-xs uppercase font-bold tracking-widest text-gold hover:text-white transition-colors flex items-center gap-2">
                  Request Quote <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── HEALTHCARE PLACEMENT ──────────────────────────── */}
      <section id="healthcare-placement" className="py-20 md:py-28 relative overflow-hidden bg-[#E8F5F0]">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.05]" style={{ background: `radial-gradient(circle, ${healthcareColors.accent} 0%, transparent 60%)` }} />
        
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-ink">
              <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 text-[#14705A]">Healthcare Placements</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8 tracking-tight text-ink">
                An exclusive pathway<br />
                <span className="italic text-[#1B8A6B]">from India to Germany.</span>
              </h2>
              <p className="text-ink/70 font-light leading-relaxed mb-10 text-lg">
                For nursing graduates: We handle A1-B2 language training, credential recognition, and hospital matching in Germany's world-class healthcare system.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  { icon: <CheckCircle2 size={18} />, text: 'Comprehensive German language training tailored for medical terminology.' },
                  { icon: <Globe size={18} />, text: 'Full assistance with degree translations and credential recognition.' },
                  { icon: <HeartPulse size={18} />, text: 'Direct interviews with partner hospitals in Germany.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[#1B8A6B] bg-[#1B8A6B]/10 group-hover:bg-[#1B8A6B]/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-ink/90 font-light leading-relaxed pt-1.5">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onOpenConsultation({ type: 'healthcare' })}
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#1B8A6B] hover:bg-[#14705A]"
              >
                Check Eligibility <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Right - Image mosaic */}
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center">
                {/* Column 1 */}
                <div className="space-y-4 md:space-y-6 md:translate-y-12">
                  <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-48 md:h-64 relative group md:-rotate-2 hover:rotate-0 hover:z-10 transition-all duration-500">
                    <img src="/images/healthcare/healthcare-1.jpg" alt="Healthcare Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  </div>
                  <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-40 md:h-56 relative group md:rotate-3 hover:rotate-0 hover:z-10 transition-all duration-500">
                    <img src="/images/healthcare/healthcare-4.jpg" alt="German Hospital" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  </div>
                </div>
                {/* Column 2 */}
                <div className="space-y-4 md:space-y-6 md:-translate-y-6">
                  <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-72 md:h-[420px] relative group hover:z-10 transition-all duration-500">
                    <img src="/images/healthcare/healthcare-2.jpg" alt="Nursing in Germany" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  </div>
                </div>
                {/* Column 3 */}
                <div className="hidden md:block space-y-4 md:space-y-6 md:translate-y-20">
                  <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-44 md:h-56 relative group md:rotate-2 hover:rotate-0 hover:z-10 transition-all duration-500">
                    <img src="/images/healthcare/healthcare-3.jpg" alt="Medical professional" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  </div>
                  <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-52 md:h-64 relative group md:-rotate-3 hover:rotate-0 hover:z-10 transition-all duration-500">
                    <img src="/images/healthcare/healthcare-5.jpg" alt="Healthcare team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── WHY PARTNER WITH US ──────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-surface border-t border-ink/5">
        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 text-terracotta">Our Promise</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
              Why partner with Vishwa?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <ShieldCheck size={24} />, title: 'Confidentiality Guaranteed', desc: 'Sensitive conversations remain secure. Our interpreters are bound by strict non-disclosure agreements.' },
              { icon: <Globe size={24} />, title: 'Qualified Experts', desc: 'Deeply knowledgeable about cultural nuances, idioms, and industry-specific terminology.' },
              { icon: <CheckCircle2 size={24} />, title: 'Uncompromising Quality', desc: 'Professional, courteous, and accurate representation of your brand in every interaction.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUpScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-paper border border-ink/5 hover:border-terracotta/30 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-full border border-terracotta/20 flex items-center justify-center mb-6 bg-terracotta/10 text-terracotta group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-medium mb-3 text-ink">{item.title}</h4>
                <p className="text-ink/60 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
}
