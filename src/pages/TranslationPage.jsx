import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, FileText, Globe, ShieldCheck, Languages, Clock, Award, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { colors } from '@/lib/tokens';
import { BookCTASection } from '@/components/sections/HomeSections';

export function TranslationPage({ onOpenConsultation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-surface text-ink">
      
      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end overflow-hidden">
        <motion.img
          style={{ y: heroImgY }}
          src="/images/homepage/home-0004.jpg"
          alt="Translation Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.05]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />

        <div className="relative z-10 container-site max-w-7xl mx-auto pb-16 md:pb-24 pt-40 md:pt-48">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] block font-bold mb-6" style={{ color: colors.gold }}>
              Professional Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tighter text-white mb-6">
              Flawless Translation<br />
              <span style={{ color: colors.gold }}>for a Global World.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl mb-10">
              In today's interconnected world, effective communication is the key to global success. Our expert Translation Services bridge the gap and ensure your message is clear, accurate, and culturally appropriate.
            </p>
            <button 
              onClick={() => onOpenConsultation({ type: 'translation' })}
              className="group flex items-center justify-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:text-ink hover:shadow-xl"
            >
              Get a Free Quote Today! <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────── SERVICES ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.03]" style={{ background: `radial-gradient(circle, ${colors.gold} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 md:mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">What We Offer</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                Beyond simple<br />
                <span className="italic text-terracotta">word conversion.</span>
              </h2>
              <p className="text-ink/50 font-light max-w-sm text-sm leading-relaxed">
                Translation is about conveying meaning, tone, and context. Our team of certified translators specializes in a wide range of fields.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <FileText size={24} />,
                title: 'Document Translation',
                desc: 'From legal contracts and financial reports to academic papers and technical manuals, we handle it all with industry expertise.',
                img: '/images/homepage/home-0007.jpg',
              },
              {
                icon: <Globe size={24} />,
                title: 'Website & App Localization',
                desc: 'Expand your digital footprint globally. We translate content to resonate with local audiences and ensure a seamless user experience.',
                img: '/images/homepage/home-0016.jpg',
              },
              {
                icon: <ShieldCheck size={24} />,
                title: 'Certified & Notarized',
                desc: 'Official document translations — birth certificates, academic transcripts, legal papers — accepted by government bodies worldwide.',
                img: '/images/homepage/home-0018.jpg',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUpScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[450px] flex flex-col justify-end shadow-lg"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90" />
                
                <div className="absolute top-6 left-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/80">
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

      {/* ──────────────────────────── INDUSTRIES + IMAGE COLLAGE ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface relative overflow-hidden" style={{ borderTop: `1px solid ${colors.line}` }}>
        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8 tracking-tight">
                Industries<br />
                <span className="italic text-terracotta">we serve.</span>
              </h2>
              <ul className="space-y-4 text-base font-light text-ink/80">
                {[
                  { label: 'Legal', desc: 'Contracts, patents, court documents.' },
                  { label: 'Medical', desc: 'Patient records, medical reports.' },
                  { label: 'Technical', desc: 'User manuals, engineering documents.' },
                  { label: 'Business', desc: 'Financial reports, marketing materials.' },
                  { label: 'Academic', desc: 'Research papers, transcripts.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-terracotta rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <span><strong>{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-7 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-56">
                  <img src="/images/homepage/home-0014.jpg" alt="Legal translation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-56 mt-8">
                  <img src="/images/homepage/home-0032.jpg" alt="Medical translation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-48 col-span-2 -mt-4">
                  <img src="/images/homepage/home-0044.jpg" alt="Technical translation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── WHY CHOOSE US ──────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-ink text-white">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full pointer-events-none opacity-[0.05]" style={{ background: `radial-gradient(circle, ${colors.gold} 0%, transparent 60%)` }} />
        <div className="absolute bottom-0 left-0 w-[25vw] h-[25vw] rounded-full pointer-events-none opacity-[0.04]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4" style={{ color: colors.gold }}>Our Promise</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">
              Why choose<br />
              <span className="italic" style={{ color: colors.gold }}>Vishwa?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Award size={20} />, title: 'Qualified Experts', desc: 'Fluent in languages and deeply knowledgeable about cultural nuances and industry-specific terminology.' },
              { icon: <CheckCircle2 size={20} />, title: 'Uncompromising Quality', desc: 'Rigorous quality assurance process, including proofreading and editing by a second linguist.' },
              { icon: <ShieldCheck size={20} />, title: 'Confidentiality Guaranteed', desc: 'We understand the sensitive nature of your documents. All translators are bound by strict NDAs.' },
              { icon: <Clock size={20} />, title: 'Timely Delivery', desc: 'We respect your deadlines. Efficient project management ensures timely delivery without compromise.' },
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
        contextLabel="Translation Services"
        title="Ready to speak to&#10;the world?"
        subtitle="Get a quick, free estimate for your translation project from our certified experts."
      />
    </motion.div>
  );
}
