import { motion } from 'framer-motion';
import { Building, Users, CheckCircle2, ArrowRight, BarChart3, Handshake } from 'lucide-react';
import { fadeUp, fadeUpScale, staggerContainer } from '@/animations/motion';
import { colors } from '@/lib/tokens';

/**
 * CorporateSection — homepage preview of Corporate Training.
 * Dark section with grid pattern — redesigned with proper container and improved content.
 */
export function CorporateSection({ onOpenConsultation }) {
  return (
    <section id="corporate-section" className="py-16 md:py-20 bg-paper text-ink relative overflow-hidden scroll-m-10 border-t border-ink/5">
      {/* Subtle background glow instead of grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.03]" style={{ background: `radial-gradient(circle, ${colors.terracotta} 0%, transparent 70%)` }} />
      </div>

      <div className="container-site relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta mb-6 block">
              Corporate Training
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 tracking-tight">
              Equip your teams with<br />
              <span className="italic text-terracotta">language fluency.</span>
            </h2>
            <p className="text-ink/60 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              We partner with HR leaders and L&D teams to deliver structured, measurable language programs — from expatriate preparation to business communication in Japanese, German, French, and Spanish.
            </p>

            <ul className="space-y-5 mb-12 text-sm">
              {[
                { icon: <BarChart3 size={16} className="text-terracotta" />, title: 'Measurable ROI', desc: 'Pre/post assessments with monthly progress reports to stakeholders.' },
                { icon: <Users size={16} className="text-terracotta" />, title: 'Flexible Cohorts', desc: 'On-site, remote, or hybrid. Any batch size, any schedule.' },
                { icon: <Handshake size={16} className="text-terracotta" />, title: 'Dedicated Manager', desc: 'Single point of contact for curriculum alignment and logistics.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center shrink-0 bg-surface group-hover:border-terracotta/30 transition-colors">
                    {item.icon}
                  </div>
                  <div className="leading-relaxed">
                    <span className="font-medium text-ink">{item.title}</span>
                    <span className="text-ink/50 ml-1">— {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpenConsultation({ type: 'corporate' })}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-white rounded-full overflow-hidden hover:opacity-90 transition-opacity text-sm font-semibold tracking-tight shadow-md"
            >
              Request Corporate Proposal
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right — Stunning image layout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[450px] w-full"
          >
            {/* Primary large image */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/corporate/corporate-4.jpg" 
                alt="Corporate Training" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-overlay" />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute bottom-10 left-0 w-3/5 h-2/5 rounded-[2rem] overflow-hidden shadow-xl border-4 border-paper">
              <img 
                src="/images/corporate/IMG_20220323_194021_465.webp" 
                alt="Professional Team" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Glassmorphism Stat Card */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-white shrink-0 shadow-md">
                <Building size={20} />
              </div>
              <div>
                <div className="font-display text-2xl text-ink font-bold leading-none mb-1">50+</div>
                <div className="text-[9px] uppercase tracking-widest text-ink/60 font-mono">Enterprise Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
