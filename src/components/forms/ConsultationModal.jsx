import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe2, Target, User, Phone, CheckCircle2, ArrowRight, GraduationCap, Briefcase, Mail, Building2, ShieldCheck, FileText } from 'lucide-react';
import { modalEntrance } from '@/animations/motion';
import { submitLead } from '@/lib/leadService';
import { site } from '@/data/site';
import { languageCatalogue } from '@/data/languages';
import { colors } from '@/lib/tokens';

const CINEMATIC_TEXTS = {
  japanese: "吾輩は猫である。\n名前はまだ無い。\nどこで生れたか\nとんと見当がつかぬ。",
  german: "Habe nun, ach!\nPhilosophie,\nJuristerei und Medizin,\nUnd leider auch Theologie!",
  french: "Longtemps, je me\nsuis couché de bonne heure.\nParfois, à peine\nma bougie éteinte...",
  spanish: "En un lugar\nde la Mancha,\nde cuyo nombre no\nquiero acordarme...",
  mandarin: "道可道，非常道。\n名可名，非常名。\n无名天地之始；\n有名万物之母。",
  korean: "나 보기가 역겨워\n가실 때에는\n말없이 고이 보내\n드리오리다.",
  english: "To be, or not to be,\nthat is the question:\nWhether 'tis nobler\nin the mind...",
  ielts: "The limits of my\nlanguage mean the\nlimits of my world.",
  sanskrit: "कर्मण्येवाधिकारस्ते\nमा फलेषु कदाचन।\nमा कर्मफलहेतुर्भू\nर्मा ते सङ्गोऽस्त्वकर्मणि॥",
};

const FORM_SCHEMAS = {
  corporate: [
    { name: 'orgName', label: 'Organization Name', type: 'text', icon: Building2, placeholder: 'Company Name', required: true, fullWidth: true },
    { name: 'targetLanguage', label: 'Language Needed', type: 'select', icon: Globe2, required: true, options: [
      { value: 'japanese', label: 'Japanese' }, { value: 'german', label: 'German' }, { value: 'french', label: 'French' }, { value: 'spanish', label: 'Spanish' },
      { value: 'mandarin', label: 'Mandarin' }, { value: 'korean', label: 'Korean' }, { value: 'english', label: 'English' },
      { value: 'sanskrit', label: 'Sanskrit' }, { value: 'multiple', label: 'Multiple / Custom' }
    ]},
    { name: 'batchSize', label: 'Cohort Size', type: 'select', icon: User, required: true, options: [
      { value: 'under-10', label: 'Fewer than 10' }, { value: '10-30', label: '10 to 30' }, { value: '30-plus', label: 'More than 30' }
    ]},
    { name: 'focus', label: 'Training Objective', type: 'select', icon: Briefcase, required: true, fullWidth: true, options: [
      { value: 'expatriate', label: 'Expatriate Preparation (Relocation)' }, { value: 'business-comm', label: 'Business Communication' },
      { value: 'cultural', label: 'Client Relations & Nuances' }, { value: 'technical', label: 'Technical Terminology' }
    ]},
    { name: 'contactName', label: 'Your Name', type: 'text', icon: User, placeholder: 'Name', required: true },
    { name: 'email', label: 'Work Email', type: 'email', icon: Mail, placeholder: 'work@company.com', required: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', icon: Phone, placeholder: 'Contact Number', required: true, fullWidth: true },
  ],
  healthcare: [
    { name: 'degree', label: 'Nursing Qualification', type: 'select', icon: GraduationCap, required: true, fullWidth: true, options: [
      { value: 'bsc-nursing', label: 'B.Sc Nursing' }, { value: 'gnm', label: 'GNM Diploma' }, { value: 'msc-nursing', label: 'M.Sc Nursing' }, { value: 'other', label: 'Other healthcare degree' }
    ]},
    { name: 'germanLevel', label: 'Current German Level', type: 'select', icon: User, required: true, fullWidth: true, options: [
      { value: 'beginner', label: 'Beginner / No Knowledge' }, { value: 'a1-a2', label: 'A1 / A2 Completed' }, { value: 'b1', label: 'B1 Completed' }, { value: 'b2', label: 'B2 or Higher Completed' }
    ]},
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Your Name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'name@email.com', required: true, fullWidth: true },
    { name: 'phone', label: 'WhatsApp / Phone', type: 'tel', icon: Phone, placeholder: 'WhatsApp Number', required: true },
  ],
  interpretation: [
    { name: 'clientType', label: 'Client Type', type: 'select', icon: User, required: true, fullWidth: true, options: [
      { value: 'corporate', label: 'Corporate / Company' }, { value: 'embassy', label: 'Consulate / Embassy' }, { value: 'legal', label: 'Law Firm / Court' }, { value: 'individual', label: 'Individual' }
    ]},
    { name: 'languagePair', label: 'Language Combination', type: 'select', icon: Globe2, required: true, options: [
      { value: 'japanese-english', label: 'Japanese ↔ English / Hindi' }, { value: 'german-english', label: 'German ↔ English' },
      { value: 'french-english', label: 'French ↔ English' }, { value: 'spanish-english', label: 'Spanish ↔ English' }
    ]},
    { name: 'mode', label: 'Event Mode', type: 'select', icon: Target, required: true, options: [
      { value: 'onsite', label: 'On-Site / In-Person' }, { value: 'remote', label: 'Remote Video Translation' }, { value: 'simultaneous', label: 'Simultaneous (Conference)' }
    ]},
    { name: 'name', label: 'Full Name / Org', type: 'text', icon: User, placeholder: 'Name or Company', required: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'name@email.com', required: true, fullWidth: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', icon: Phone, placeholder: 'Contact Number', required: true },
  ],
  translation: [
    { name: 'documentType', label: 'Document Type', type: 'select', icon: FileText, required: true, fullWidth: true, options: [
      { value: 'legal', label: 'Legal Document' }, { value: 'medical', label: 'Medical Document' }, { value: 'technical', label: 'Technical Manual' }, { value: 'website', label: 'Website / App' }, { value: 'other', label: 'Other' }
    ]},
    { name: 'sourceLanguage', label: 'Source Language', type: 'text', icon: Globe2, placeholder: 'e.g. English', required: true },
    { name: 'targetLanguage', label: 'Target Language', type: 'text', icon: Globe2, placeholder: 'e.g. German', required: true },
    { name: 'wordCount', label: 'Est. Word Count', type: 'text', icon: FileText, placeholder: 'e.g. 5000', required: true },
    { name: 'name', label: 'Full Name / Org', type: 'text', icon: User, placeholder: 'Name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'name@email.com', required: true, fullWidth: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', icon: Phone, placeholder: 'Contact Number', required: true },
  ],
  language: [
    { name: 'targetLanguage', label: 'Target Language', type: 'text', icon: Globe2, required: true, fullWidth: true, readOnly: true },
    { name: 'level', label: 'Target Level', type: 'select', icon: Target, required: true, options: [] }, // Options injected dynamically based on context.data
    { name: 'batchType', label: 'Preferred Batch', type: 'select', icon: Target, required: true, options: [
      { value: 'weekend', label: 'Weekend (Sat & Sun)' }, { value: 'weekday', label: 'Weekday (Mon to Fri)' }, { value: 'one-on-one', label: 'One-on-One Custom' }
    ]},
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Your Name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'name@email.com', required: true, fullWidth: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', icon: Phone, placeholder: 'Contact Number', required: true },
  ],
  general: [
    { name: 'language', label: 'Target Area', type: 'select', icon: Globe2, required: true, fullWidth: true, options: [
      ...languageCatalogue.map(lang => ({ value: lang.slug, label: lang.card.title })),
      { value: 'corporate', label: 'Corporate Training' }, { value: 'interpretation', label: 'Interpretation Services' }, { value: 'healthcare', label: 'German Healthcare Pathway' }
    ]},
    { name: 'goal', label: 'Primary Goal', type: 'select', icon: Target, required: true, fullWidth: true, options: [
      { value: 'work', label: 'Work internationally (Placement)' }, { value: 'study', label: 'Study abroad' }, { value: 'corporate', label: 'Train my corporate team' },
      { value: 'healthcare', label: 'German nurse program' }, { value: 'culture', label: 'Personal culture & communication' }
    ]},
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'name@email.com', required: true, fullWidth: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', icon: Phone, placeholder: 'Number', required: true },
  ]
};

export function ConsultationModal({ isOpen, onClose, context = { type: 'general' } }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  
  // Dynamic form state
  const [formData, setFormData]   = useState({});

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      const initialData = {};
      if (context.type === 'language' && context.data?.card?.title) {
        initialData.targetLanguage = context.data.card.title;
      }
      setFormData(initialData);
    }
  }, [isOpen, context]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    let payload = { 
      serviceType: context.type || 'general', 
      source: window.location.pathname,
      email: formData.email
    };

    switch (context.type) {
      case 'corporate':
        payload.name = `${formData.contactName} (${formData.orgName})`;
        payload.phone = formData.phone;
        payload.language = formData.targetLanguage;
        payload.goal = `Corp Training | Focus: ${formData.focus} | Size: ${formData.batchSize} | Email: ${formData.email}`;
        break;
      case 'healthcare':
        payload.name = formData.name;
        payload.phone = formData.phone;
        payload.language = 'german';
        payload.goal = `Nurse Placement | Level: ${formData.germanLevel} | Degree: ${formData.degree}`;
        break;
      case 'interpretation':
        payload.name = formData.name;
        payload.phone = formData.phone;
        payload.language = formData.languagePair;
        payload.goal = `Mode: ${formData.mode} | Client: ${formData.clientType}`;
        break;
      case 'translation':
        payload.name = formData.name;
        payload.phone = formData.phone;
        payload.language = `${formData.sourceLanguage} to ${formData.targetLanguage}`;
        payload.goal = `Doc: ${formData.documentType} | Words: ${formData.wordCount}`;
        break;
      case 'language':
        payload.name = formData.name;
        payload.phone = formData.phone;
        payload.language = context.data?.slug || formData.targetLanguage;
        payload.goal = `Level: ${formData.level} | Batch: ${formData.batchType}`;
        break;
      default:
        payload.name = formData.name;
        payload.phone = formData.phone;
        payload.language = formData.language;
        payload.goal = formData.goal;
        break;
    }

    const result = await submitLead(payload);
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSubmitted(false); setError(''); setFormData({}); }, 400);
  };

  const getHeaderInfo = () => {
    switch (context.type) {
      case 'corporate':
        return { eyebrow: 'Corporate Training', title: 'Request a proposal.', desc: 'Align your team with structured language cohorts.' };
      case 'healthcare':
        return { eyebrow: 'Germany Healthcare', title: 'Begin pathway.', desc: 'Verify nursing credentials & language training.' };
      case 'interpretation':
        return { eyebrow: 'Interpretation Services', title: 'Book interpreter.', desc: 'Simultaneous or consecutive interpretation.' };
      case 'translation':
        return { eyebrow: 'Translation Services', title: 'Request translation.', desc: 'Certified and professional document translation.' };
      case 'language':
        return { eyebrow: `${context.data?.card?.title} Program`, title: 'Book free session.', desc: `Course modules and batch timings for ${context.data?.card?.title}.` };
      default:
        return { eyebrow: 'Begin Journey', title: 'Book consultation.', desc: 'Discuss your goals with a language advisor.' };
    }
  };

  const header = getHeaderInfo();
  let schema = FORM_SCHEMAS[context.type] || FORM_SCHEMAS.general;

  // Inject dynamic levels if it's a language form
  if (context.type === 'language') {
    schema = schema.map(field => {
      if (field.name === 'level') {
        const dynamicOptions = context.data?.levels?.map(lvl => ({ value: lvl.level, label: `${lvl.level} — ${lvl.title}` })) || [];
        return { ...field, options: [...dynamicOptions, { value: 'all', label: 'Full Curriculum (Beginner to Advanced)' }] };
      }
      return field;
    });
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={handleClose} />

          <motion.div
            variants={modalEntrance}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl bg-paper shadow-modal rounded-2xl overflow-hidden flex flex-col md:grid md:grid-cols-5 max-h-[90vh] md:max-h-[85vh]"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 p-2 opacity-50 hover:opacity-100 transition-all hover:bg-black/5 rounded-full text-ink"
            >
              <X size={18} />
            </button>

            {/* Left Panel */}
            <div className="hidden md:flex md:col-span-2 relative p-12 flex-col justify-between overflow-hidden bg-surface border-r border-ink/5">
              {/* Dynamic Glow backdrop */}
              <div 
                className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-25 blur-[60px]"
                style={{
                  background: `radial-gradient(circle, ${
                    (context.type === 'language' && context.data?.color) || colors.terracotta
                  } 0%, transparent 70%)`
                }}
              />

              {/* Dynamic philosophy script backdrop with opacity gradient */}
              <div className="absolute inset-y-0 right-0 w-[60%] flex items-center justify-end pr-4 overflow-hidden pointer-events-none select-none">
                <motion.div
                  key={context.type === 'language' ? context.data?.slug : 'sanskrit'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 0.25, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-display leading-[1.2] text-right text-3xl md:text-5xl"
                  style={{
                    color: (context.type === 'language' && context.data?.color) || colors.terracotta,
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {CINEMATIC_TEXTS[context.type === 'language' ? context.data?.slug : 'sanskrit'] || CINEMATIC_TEXTS.sanskrit}
                </motion.div>
              </div>

              <div className="relative z-10">
                <span className="font-display text-[10px] uppercase tracking-micro text-terracotta block mb-6 font-bold">
                  {header.eyebrow}
                </span>
                <h3 className="font-display italic text-3xl md:text-4xl text-ink leading-tight">
                  {header.title}
                </h3>
                <p className="text-ink/60 text-sm mt-6 leading-relaxed max-w-xs font-light">
                  {header.desc}
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
                <div>
                  <div className="font-display text-3xl text-ink mb-1">{site.stats.learners}</div>
                  <div className="text-[9px] uppercase tracking-micro text-ink/40">Learners</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-ink mb-1">{site.stats.languages}</div>
                  <div className="text-[9px] uppercase tracking-micro text-ink/40">Languages</div>
                </div>
              </div>
            </div>

            {/* Right Panel (Form) */}
            <div className="col-span-5 md:col-span-3 p-6 md:p-12 overflow-y-auto hide-scrollbar">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-green-50">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-display text-3xl mb-4 text-ink">Request received.</h4>
                  <p className="text-sm opacity-60 max-w-xs leading-relaxed text-ink">
                    An advisor will reach out on WhatsApp shortly with customized session details, timings, and program parameters.
                  </p>
                  <button onClick={handleClose} className="mt-8 px-6 py-2.5 rounded-full border border-ink/20 text-xs uppercase font-bold tracking-widest hover:bg-ink hover:text-white transition-colors text-ink">
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  <div className="mb-2">
                    <h3 className="font-display text-3xl mb-1 text-ink">{header.title}</h3>
                    <p className="text-xs text-ink/50 font-light">{header.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {schema.map((field) => (
                      <div key={field.name} className={field.fullWidth ? "sm:col-span-2" : "col-span-1"}>
                        <label className="field-label" htmlFor={field.name}>{field.label}</label>
                        <div className="field-wrap relative flex items-center">
                          <field.icon size={18} className="absolute left-4 text-ink/40 pointer-events-none" />
                          
                          {field.type === 'select' ? (
                            <select 
                              id={field.name} 
                              name={field.name} 
                              required={field.required} 
                              value={formData[field.name] || ''}
                              onChange={handleChange}
                              className="w-full bg-surface border border-ink/10 rounded-xl h-12 pl-12 pr-4 text-sm outline-none focus:border-terracotta/50 focus:ring-1 focus:ring-terracotta/50 transition-all appearance-none cursor-pointer"
                            >
                              <option value="" disabled>Select {field.label.toLowerCase()}</option>
                              {field.options.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                              ))}
                            </select>
                          ) : (
                            <input 
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              required={field.required}
                              readOnly={field.readOnly}
                              placeholder={field.placeholder}
                              value={formData[field.name] || ''}
                              onChange={handleChange}
                              className={`w-full bg-surface border border-ink/10 rounded-xl h-12 pl-12 pr-4 text-sm outline-none focus:border-terracotta/50 focus:ring-1 focus:ring-terracotta/50 transition-all ${field.readOnly ? 'bg-ink/5 cursor-not-allowed opacity-70' : ''}`}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-xl bg-ink text-white font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 mt-4 hover:bg-terracotta hover:shadow-lg transition-all disabled:opacity-60 disabled:hover:bg-ink disabled:hover:shadow-none"
                  >
                    {loading ? 'Submitting…' : 'Submit Request'}
                    {!loading && <ArrowRight size={16} />}
                  </button>

                  <p className="text-[10px] uppercase tracking-widest opacity-40 text-center flex justify-center items-center gap-2 text-ink mt-2">
                    <ShieldCheck size={14} /> Confidential inquiry. No spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
