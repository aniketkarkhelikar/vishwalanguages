import { motion } from 'framer-motion';
import { Building, Users, CheckCircle2, ArrowRight, BarChart3, Handshake } from 'lucide-react';
import { corporateTraining } from '@/data/services/corporate';
import { fadeUp, fadeUpScale, staggerContainer } from '@/animations/motion';
import { colors } from '@/lib/tokens';

/**
 * CorporateSection — homepage preview of Corporate Training.
 * Dark section with grid pattern — redesigned with proper container and improved content.
 */
export function CorporateSection({ onOpenConsultation }) {
  const d = corporateTraining;

  return (
    <section id="corporate-section" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden scroll-m-10">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="corp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corp-grid)" />
        </svg>
      </div>

      <div className="container-site relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-micro font-medium opacity-50 block mb-6" style={{ color: colors.gold }}>
              {d.hero.eyebrow}
            </span>
            <h2 className="font-display text-h2 leading-tight mb-6">
              Equip your teams with<br />
              <span className="italic" style={{ color: colors.gold }}>language fluency.</span>
            </h2>
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              We partner with HR leaders and L&D teams to deliver structured, measurable language programs — from expatriate preparation to business communication in Japanese, German, French, and Spanish.
            </p>

            <ul className="space-y-5 mb-12 text-sm">
              {[
                { icon: <BarChart3 size={16} style={{ color: colors.gold }} />, title: 'Measurable ROI', desc: 'Pre/post assessments with monthly progress reports to stakeholders.' },
                { icon: <Users size={16} style={{ color: colors.gold }} />, title: 'Flexible Cohorts', desc: 'On-site, remote, or hybrid. Any batch size, any schedule.' },
                { icon: <Handshake size={16} style={{ color: colors.gold }} />, title: 'Dedicated Manager', desc: 'Single point of contact for curriculum alignment and logistics.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center shrink-0 bg-white/5 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div className="leading-relaxed">
                    <span className="font-medium text-white">{item.title}</span>
                    <span className="text-white/50 ml-1">— {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpenConsultation({ type: 'corporate' })}
              className="btn-corporate group"
            >
              Request Corporate Proposal
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {d.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUpScale}
                className={`card-stat ${i === 1 ? 'mt-8' : ''} group hover:bg-white/10 transition-colors duration-500`}
              >
                {i === 0 ? <Building className="mb-6 opacity-80 group-hover:scale-110 transition-transform" size={32} style={{ color: colors.gold }} />
                         : <Users    className="mb-6 opacity-80 group-hover:scale-110 transition-transform" size={32} style={{ color: colors.gold }} />}
                <h4 className="font-display text-3xl mb-2">{stat.value}</h4>
                <p className="text-xs uppercase tracking-wider opacity-50">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
