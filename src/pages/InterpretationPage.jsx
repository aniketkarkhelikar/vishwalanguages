import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mic, Users, Briefcase, Headphones, Globe2, ShieldCheck, Award, Languages } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { colors } from '@/lib/tokens';
import { BookCTASection } from '@/components/sections/HomeSections';

export function InterpretationPage({ onOpenConsultation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-surface text-ink">
      <SEO 
        title="Interpretation Services in Nashik - Japanese, German, French" 
        description="Professional interpretation services in Nashik for Japanese, German, French, and Spanish. We offer real-time simultaneous and consecutive interpretation for conferences and corporate meetings."
        keywords="Interpretation services, Japanese interpretation, German interpretation, French interpretation, Corporate interpretation"
      />
      
      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end overflow-hidden">
        <motion.img
          style={{ y: heroImgY }}
          src="/images/interpretation/interp-2.jpg"
          alt="Interpretation Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.06]" style={{ background: `radial-gradient(circle, ${colors.sage} 0%, transparent 60%)` }} />

        <div className="relative z-10 container-site max-w-7xl mx-auto pb-16 md:pb-24 pt-40 md:pt-48">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] block font-bold mb-6" style={{ color: colors.gold }}>
              Live Communication
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tighter text-white mb-6">
              Expert Interpretation<br />
              <span style={{ color: colors.gold }}>Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl mb-10">
              Interpretation requires instant and precise communication in real-time. Our highly skilled professionals facilitate seamless conversations in any setting, breaking down cultural boundaries effortlessly.
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'interpretation' })}
              className="group flex items-center justify-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:text-ink hover:shadow-xl"
            >
              Get a Free Quote Today! <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────── INTERPRETATION MODELS ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 md:mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">Our Models</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                Tailored for every<br />
                <span className="italic text-terracotta">setting.</span>
              </h2>
              <p className="text-ink/50 font-light max-w-sm text-sm leading-relaxed">
                From global conferences to intimate business negotiations — we provide the right interpreter for every scenario.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Mic size={24} />,
                title: 'Simultaneous Interpretation',
                desc: 'Ideal for large conferences, seminars, and events. The interpreter translates in real-time as the speaker talks, ensuring smooth flow.',
                img: '/images/interpretation/interp-4.jpg',
                color: colors.terracotta,
              },
              {
                icon: <Users size={24} />,
                title: 'Consecutive Interpretation',
                desc: 'Perfect for business meetings, negotiations, and interviews. The interpreter translates after each segment for back-and-forth dialogue.',
                img: '/images/interpretation/interp-1.jpg',
                color: colors.sage,
              },
              {
                icon: <Briefcase size={24} />,
                title: 'Liaison Interpretation',
                desc: 'Interpreters who act as a cultural bridge between two parties — from factory tours to casual business lunches and beyond.',
                img: '/images/interpretation/interp-3.jpg',
                color: colors.gold,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUpScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[480px] flex flex-col justify-end shadow-lg"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90" />
                
                {/* Floating icon with accent color */}
                <div className="absolute top-6 left-6 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                  {item.icon}
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

      {/* ──────────────────────────── IMAGE COLLAGE + LANGUAGES ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface relative overflow-hidden" style={{ borderTop: `1px solid ${colors.line}` }}>
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image mosaic */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 rounded-[2rem] overflow-hidden shadow-xl h-64">
                  <img src="/images/interpretation/interp-2.jpg" alt="Conference interpretation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
                <div className="col-span-2 rounded-[2rem] overflow-hidden shadow-xl h-64 mt-6">
                  <img src="/images/interpretation/interp-3.jpg" alt="Business interpretation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
                <div className="col-span-5 rounded-[2rem] overflow-hidden shadow-xl h-48 -mt-4">
                  <img src="/images/interpretation/interp-1.jpg" alt="Team with interpreter" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">Languages</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8 tracking-tight">
                We speak<br />
                <span className="italic text-terracotta">your language.</span>
              </h2>
              <p className="text-ink/60 font-light leading-relaxed mb-8 text-base">
                Our interpreters cover all major global languages, with deep cultural understanding that goes beyond mere word-for-word translation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Japanese', 'German', 'French', 'Spanish', 'Mandarin', 'Korean', 'Italian', 'Portuguese'].map((lang) => (
                  <div key={lang} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-paper border border-ink/5 group hover:border-terracotta/20 transition-colors">
                    <div className="w-2 h-2 bg-terracotta rounded-full group-hover:scale-125 transition-transform" />
                    <span className="font-medium text-sm">{lang}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── WHY PARTNER WITH US ──────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-ink text-white">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full pointer-events-none opacity-[0.05]" style={{ background: `radial-gradient(circle, ${colors.gold} 0%, transparent 60%)` }} />
        <div className="absolute bottom-0 left-0 w-[25vw] h-[25vw] rounded-full pointer-events-none opacity-[0.04]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4" style={{ color: colors.gold }}>Our Promise</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">
              Why partner<br />
              <span className="italic" style={{ color: colors.gold }}>with us?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Award size={20} />, title: 'Qualified Experts', desc: 'Deeply knowledgeable about cultural nuances, idioms, and industry-specific terminology.' },
              { icon: <ShieldCheck size={20} />, title: 'Confidentiality Guaranteed', desc: 'Sensitive conversations remain secure. Our interpreters are bound by strict non-disclosure agreements.' },
              { icon: <Languages size={20} />, title: 'Wide Range of Languages', desc: 'Services for all major languages, including Spanish, French, German, Mandarin, Japanese, and more.' },
              { icon: <Headphones size={20} />, title: 'Uncompromising Quality', desc: 'Professional, courteous, and accurate representation of your brand in every interaction.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUpScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-[2rem] border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mb-6 group-hover:border-gold/30 transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: colors.gold }}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookCTASection 
        onOpenConsultation={onOpenConsultation}
        contextLabel="Interpretation Services"
        title="Ensure your message&#10;is never lost in translation."
        subtitle="Book a highly skilled interpreter for your next global meeting or conference."
      />
    </motion.div>
  );
}
