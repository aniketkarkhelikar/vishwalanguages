import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { fadeUp } from '@/animations/motion';
import { site } from '@/data/site';

export function ContactPage({ onOpenConsultation }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="min-h-screen bg-surface pt-40 pb-32">
      <div className="container-site max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta mb-4 block">Connect</span>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-tight text-ink">Get in touch.</h1>
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are looking to start your language journey, train your corporate team, or need interpretation services, we are here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-paper p-12 rounded-[2rem] border border-ink/5 shadow-sm text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-display text-3xl mb-3 text-ink">Email Us</h3>
            <p className="text-ink/60 mb-8 font-light text-sm md:text-base">We aim to respond to all inquiries within one business day.</p>
            <a href={`mailto:${site.contact.email}`} className="text-terracotta font-bold text-lg hover:underline transition-all hover:text-ink">{site.contact.email}</a>
          </div>

          <div className="bg-paper p-12 rounded-[2rem] border border-ink/5 shadow-sm text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
              <Phone size={24} />
            </div>
            <h3 className="font-display text-3xl mb-3 text-ink">Call Us</h3>
            <p className="text-ink/60 mb-8 font-light text-sm md:text-base">Available Monday through Saturday, 9am to 6pm IST.</p>
            <a href={`tel:${site.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-gold font-bold text-lg hover:underline transition-all hover:text-ink">{site.contact.phone}</a>
          </div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="text-center">
          <button onClick={() => onOpenConsultation({ type: 'general' })} className="group inline-flex items-center gap-3 bg-ink text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-terracotta hover:shadow-xl hover:-translate-y-1">
            Book Free Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
