import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Globe, Users, HeartHandshake, BookOpen } from 'lucide-react';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { colors } from '@/lib/tokens';
import { BookCTASection } from '@/components/sections/HomeSections';

export function AboutPage({ onOpenConsultation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-surface text-ink overflow-hidden">

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Full-bleed cinematic background */}
        <motion.img
          style={{ y: heroImgY }}
          src="/images/homepage/home-0001.jpg"
          alt="Vishwa Institute"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20" />

        {/* Warm ambient glow */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.06]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />

        <div className="relative z-10 container-site max-w-7xl mx-auto pb-16 md:pb-24 pt-40 md:pt-48 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.2em] block font-bold mb-6 text-terracotta">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[6.5rem] leading-[1.05] tracking-tighter text-ink mb-6">
              Connecting Cultures,<br />
              <span className="italic text-terracotta">Empowering Voices.</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 font-light leading-relaxed max-w-2xl mx-auto">
              We started with a simple mission: bringing language experts and students together on one platform to break down the barriers of global communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────── PHILOSOPHY (Vasudhaiva Kutumbakam) ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface relative">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]" style={{ background: `radial-gradient(circle, ${colors.sky} 0%, transparent 60%)` }} />

        <div className="container-site max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={fadeUpScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
                <img
                  src="/images/homepage/home-0011.jpg"
                  alt="Cultural Exchange"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-ink/10 mix-blend-overlay" />
              </div>

              {/* Floating quote card */}
              <div className="absolute -right-8 -bottom-8 bg-paper p-8 rounded-3xl shadow-xl max-w-[280px] hidden md:block">
                <Globe className="text-gold mb-4" size={24} />
                <p className="font-display italic text-ink/80 leading-relaxed text-lg">
                  "The world is one huge family, and cultural diversity makes it beautiful."
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-4">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
                Vasudhaiva <br />
                <span className="italic text-terracotta">Kutumbakam.</span>
              </h2>
              <div className="space-y-6 text-ink/70 font-light text-lg leading-relaxed">
                <p>
                  We believe that a language is a mirror of its culture. It is the greatest way to explore the world and connect with people on a profound level.
                </p>
                <p>
                  We come from a land which has taught us the ideals of <strong>"Vasudhaiva Kutumbakam"</strong> (the world is one family). We believe that languages are the connectors between cultures, countries, and people, and learning a new language opens doors to endless possibilities.
                </p>
                <p>
                  At Vishwa, we provide expertly designed courses to meet your specific requirements, helping students prepare for international certification exams and giving them the best possible learning experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ──────────────────────────── FOUNDER SECTION ──────────────────────────── */ }
      <section className="py-20 md:py-32 relative overflow-hidden bg-paper text-ink">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-[0.05]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 60%)` }} />
        
        <div className="container-site max-w-6xl mx-auto relative z-10">
          <motion.div 
            variants={fadeUpScale} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 md:p-16 lg:p-20 border border-white/10 shadow-2xl grid md:grid-cols-5 gap-12 lg:gap-16 items-center"
          >
            <div className="md:col-span-2 relative">
               <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
                  <img 
                    src="/images/homepage/home-0032.jpg" 
                    alt="Founder" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-paper flex items-center justify-center shadow-xl">
                 <div className="w-20 h-20 rounded-full border border-ink/10 flex flex-col items-center justify-center text-ink text-center p-2">
                    <span className="font-display font-bold text-sm leading-none block">Est.</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest mt-1 opacity-50">2021</span>
                 </div>
               </div>
            </div>
            
            <div className="md:col-span-3 text-ink">
               <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">Leadership</span>
               <h3 className="font-display text-4xl lg:text-5xl mb-6">A Message from the Founder</h3>
               
               <blockquote className="text-xl lg:text-2xl font-display italic text-ink/80 leading-relaxed mb-8">
                 "Language is not just about words; it's about the connection between souls across borders. Our vision at Vishwa is to build bridges that foster understanding and endless opportunities."
               </blockquote>
               
               <div>
                 <p className="font-bold text-lg mb-1 text-ink">Ketki Gorhe</p>
                 <p className="text-xs uppercase tracking-widest text-ink/50">Founder, Vishwa Languages</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookCTASection 
        onOpenConsultation={onOpenConsultation}
        contextLabel="Contact Us"
        title="Ready to join our&#10;global family?"
        subtitle="Reach out to us for any inquiries about our language programs or corporate services."
      />
    </motion.div >
  );
}
