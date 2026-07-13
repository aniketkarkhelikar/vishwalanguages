import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/animations/motion';
import { colors } from '@/lib/tokens';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-paper pt-32 pb-24"
    >
      <div className="container-site max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12 md:gap-20"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center">
            <span className="text-xs uppercase tracking-widest font-mono mb-4 block text-terracotta">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-ink leading-tight mb-8">
              Vasudhaiva Kutumbakam.
            </h1>
            <div className="w-16 h-px bg-ink/20 mx-auto" />
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="prose prose-lg md:prose-xl text-ink/80 font-light leading-relaxed mx-auto">
            <p className="first-letter:text-6xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-terracotta">
              Vishwa Institute started with a mission of bringing language experts and students throughout the globe onto one unified platform. We are looking forward to empowering our students by enhancing their communication skills and removing the language barriers in communication.
            </p>
            <p>
              We believe that a language is a mirror of its culture and that languages are a great way to explore the world and connect with different people. At Vishwa, we provide courses for various languages tailored to your requirements and actively help students prepare for international certification exams.
            </p>
            <p>
              We strive to give you the best possible learning experience with our expert faculties. We come from a land that has taught us the ideals of <strong>“Vasudhaiva Kutumbakam”</strong> — we believe that the world (“Vishwa”) is one huge family and that cultural diversity makes the world even more beautiful.
            </p>
            <p>
              Languages are the essential connectors between cultures, countries, and its people. Learning a new language can open doors to endless possibilities.
            </p>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div variants={fadeUp} className="w-full h-64 md:h-96 bg-surface mt-8 rounded-3xl overflow-hidden relative border border-ink/5 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1522850655385-06beedbc5c92?q=80&w=1200&auto=format&fit=crop" alt="Global connections" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="font-display text-8xl md:text-[12rem] text-terracotta/20 select-none">
              विश्व
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
