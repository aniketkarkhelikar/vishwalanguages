import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe2, Target, User, Phone, CheckCircle2, ArrowRight, GraduationCap, Briefcase, Mail, Building2, ShieldCheck, MessageCircle } from 'lucide-react';
import { modalEntrance } from '@/animations/motion';
import { submitLead, openEmailFollowUp } from '@/lib/leadService';
import { site } from '@/data/site';
import { languageCatalogue } from '@/data/languages';
import { colors, healthcareColors } from '@/lib/tokens';

/**
 * ConsultationModal — primary lead capture mechanism.
 * Renders dynamically structured forms based on context:
 * - 'corporate': Custom corporate training questions
 * - 'healthcare': Nurse placement credentials
 * - 'interpretation': Language combination & event mode
 * - 'language': Level & batch preferences
 * - 'general': General inquiry selection
 *
 * On submit: sends prefilled WhatsApp message + offers email follow-up.
 */
export function ConsultationModal({ isOpen, onClose, context = { type: 'general' } }) {
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');
  const [mailtoURL, setMailtoURL]   = useState('');

  const isHealthcare = context.type === 'healthcare';
  const accentColor = isHealthcare ? healthcareColors.primary : colors.gold;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    let payload = {};

    if (context.type === 'corporate') {
      payload = {
        name: `${formData.get('contactName')} (${formData.get('orgName')})`,
        phone: formData.get('phone'),
        email: formData.get('email'),
        language: formData.get('targetLanguage'),
        goal: `Corp Training | Focus: ${formData.get('focus')} | Size: ${formData.get('batchSize')}`,
        serviceType: 'corporate',
        source: '/corporate-training',
      };
    } else if (context.type === 'healthcare') {
      payload = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        language: 'german',
        goal: `Nurse Placement | Level: ${formData.get('germanLevel')} | Degree: ${formData.get('degree')}`,
        serviceType: 'healthcare',
        source: '/healthcare-placement',
      };
    } else if (context.type === 'interpretation') {
      payload = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        language: formData.get('languagePair'),
        goal: `Mode: ${formData.get('mode')} | Client: ${formData.get('clientType')}`,
        serviceType: 'interpretation',
        source: '/interpretation-services',
      };
    } else if (context.type === 'language') {
      payload = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        language: context.data?.slug || '',
        goal: `Level: ${formData.get('level')} | Batch: ${formData.get('batchType')}`,
        serviceType: 'language',
        source: `/languages/${context.data?.slug || ''}`,
      };
    } else {
      // General
      payload = {
        name:        formData.get('name'),
        phone:       formData.get('phone'),
        language:    formData.get('language'),
        goal:        formData.get('goal'),
        serviceType: 'general',
        source:      window.location.pathname,
      };
    }

    const result = await submitLead(payload);
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
      setMailtoURL(result.mailtoURL || '');
    } else {
      setError(result.message);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSubmitted(false); setError(''); setMailtoURL(''); }, 400);
  };

  // Helper to determine headings
  const getHeaderInfo = () => {
    switch (context.type) {
      case 'corporate':
        return {
          eyebrow: 'Corporate Training',
          title: 'Request a proposal.',
          desc: 'Align your team with structured language cohorts & custom scheduling.',
        };
      case 'healthcare':
        return {
          eyebrow: 'Germany Healthcare',
          title: 'Begin pathway.',
          desc: 'Verify nursing credentials & language training to start your German contract.',
        };
      case 'interpretation':
        return {
          eyebrow: 'Interpretation Services',
          title: 'Book interpreter.',
          desc: 'Coordinate simultaneous or consecutive interpretation for your event.',
        };
      case 'language':
        return {
          eyebrow: `${context.data?.card?.title} Program`,
          title: 'Get syllabus.',
          desc: `Receive course modules and batch timings for ${context.data?.card?.title}.`,
        };
      default:
        return {
          eyebrow: 'Begin Journey',
          title: 'Book consultation.',
          desc: 'Discuss study abroad, corporate integration, or career placement with an advisor.',
        };
    }
  };

  const header = getHeaderInfo();

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
          aria-label="Request Form"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={handleClose} />

          {/* Panel */}
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
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Left — Editorial Brand Panel */}
            <div
              className="hidden md:flex md:col-span-2 relative p-12 flex-col justify-between overflow-hidden"
              style={{ backgroundColor: isHealthcare ? '#0F4F3E' : colors.ink }}
            >
              <div className="absolute -bottom-16 -right-10 font-display text-[13rem] text-white/5 leading-none select-none pointer-events-none">
                {isHealthcare ? '⚕' : '言'}
              </div>
              <div className="relative z-10">
                <span
                  className="font-display text-[10px] uppercase tracking-micro block mb-6"
                  style={{ color: accentColor }}
                >
                  {header.eyebrow}
                </span>
                <h3 className="font-display italic text-3xl md:text-4xl text-white leading-tight">
                  {header.title}
                </h3>
                <p className="text-white/50 text-sm mt-6 leading-relaxed max-w-xs font-light">
                  {header.desc}
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <div className="font-display text-3xl text-white mb-1">{site.stats.learners}</div>
                  <div className="text-[9px] uppercase tracking-micro text-white/40">Learners</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white mb-1">{site.stats.languages}</div>
                  <div className="text-[9px] uppercase tracking-micro text-white/40">Languages</div>
                </div>
              </div>
            </div>

            {/* Right — Dynamic Context Form */}
            <div className="col-span-5 md:col-span-3 p-8 md:p-12 overflow-y-auto hide-scrollbar">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-green-50">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-display text-3xl mb-4">Sent via WhatsApp!</h4>
                  <p className="text-sm opacity-60 max-w-xs leading-relaxed mb-6">
                    Your inquiry has been sent. An advisor will respond on WhatsApp shortly with customized details.
                  </p>

                  {/* Email follow-up option */}
                  {mailtoURL && (
                    <button
                      onClick={() => openEmailFollowUp(mailtoURL)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-ink/15 text-ink text-[11px] uppercase tracking-wide font-medium hover:bg-surface transition-all mb-4"
                    >
                      <Mail size={14} />
                      Also send via Email
                    </button>
                  )}

                  <button onClick={handleClose} className="mt-4 btn-ghost">
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <h3 className="font-display text-3xl mb-1">{header.title}</h3>
                    <p className="text-xs opacity-50">{header.desc}</p>
                  </div>

                  {/* 1. CORPORATE FORM */}
                  {context.type === 'corporate' && (
                    <>
                      <div>
                        <label className="field-label" htmlFor="orgName">Organization Name</label>
                        <div className="field-wrap">
                          <Building2 size={18} className="field-icon" />
                          <input id="orgName" name="orgName" type="text" required placeholder="Company Name" className="field-input" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="targetLanguage">Language Needed</label>
                          <div className="field-wrap">
                            <Globe2 size={18} className="field-icon" />
                            <select id="targetLanguage" name="targetLanguage" className="field-select" required defaultValue="">
                              <option value="" disabled>Select language</option>
                              <option value="japanese">Japanese</option>
                              <option value="german">German</option>
                              <option value="french">French</option>
                              <option value="spanish">Spanish</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="field-label" htmlFor="batchSize">Cohort Size</label>
                          <div className="field-wrap">
                            <User size={18} className="field-icon" />
                            <select id="batchSize" name="batchSize" className="field-select" required defaultValue="">
                              <option value="" disabled>Cohort size</option>
                              <option value="under-10">Fewer than 10</option>
                              <option value="10-30">10 to 30</option>
                              <option value="30-plus">More than 30</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="field-label" htmlFor="focus">Training Objective</label>
                        <div className="field-wrap">
                          <Briefcase size={18} className="field-icon" />
                          <select id="focus" name="focus" className="field-select" required defaultValue="">
                            <option value="" disabled>Select training objective</option>
                            <option value="expatriate">Expatriate Preparation (Relocation)</option>
                            <option value="business-comm">Business Communication</option>
                            <option value="cultural">Client Relations & Nuances</option>
                            <option value="technical">Technical Terminology</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="contactName">Your Name</label>
                          <div className="field-wrap">
                            <User size={18} className="field-icon" />
                            <input id="contactName" name="contactName" type="text" required placeholder="Name" className="field-input" />
                          </div>
                        </div>
                        <div>
                          <label className="field-label" htmlFor="email">Work Email</label>
                          <div className="field-wrap">
                            <Mail size={18} className="field-icon" />
                            <input id="email" name="email" type="email" required placeholder="work@company.com" className="field-input" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="field-label" htmlFor="phone">Phone / WhatsApp</label>
                        <div className="field-wrap">
                          <Phone size={18} className="field-icon" />
                          <input id="phone" name="phone" type="tel" required placeholder="Contact Number" className="field-input" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* 2. HEALTHCARE FORM */}
                  {context.type === 'healthcare' && (
                    <>
                      <div>
                        <label className="field-label" htmlFor="degree">Nursing Qualification</label>
                        <div className="field-wrap">
                          <GraduationCap size={18} className="field-icon" />
                          <select id="degree" name="degree" className="field-select" required defaultValue="">
                            <option value="" disabled>Select qualification</option>
                            <option value="bsc-nursing">B.Sc Nursing</option>
                            <option value="gnm">GNM Diploma</option>
                            <option value="msc-nursing">M.Sc Nursing</option>
                            <option value="other">Other healthcare degree</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="field-label" htmlFor="germanLevel">Current German Level</label>
                        <div className="field-wrap">
                          <User size={18} className="field-icon" />
                          <select id="germanLevel" name="germanLevel" className="field-select" required defaultValue="">
                            <option value="" disabled>Select German level</option>
                            <option value="beginner">Beginner / No Knowledge</option>
                            <option value="a1-a2">A1 / A2 Completed</option>
                            <option value="b1">B1 Completed</option>
                            <option value="b2">B2 or Higher Completed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="name">Full Name</label>
                          <div className="field-wrap">
                            <User size={18} className="field-icon" />
                            <input id="name" name="name" type="text" required placeholder="Your Name" className="field-input" />
                          </div>
                        </div>
                        <div>
                          <label className="field-label" htmlFor="phone">WhatsApp / Phone</label>
                          <div className="field-wrap">
                            <Phone size={18} className="field-icon" />
                            <input id="phone" name="phone" type="tel" required placeholder="WhatsApp Number" className="field-input" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 3. INTERPRETATION FORM */}
                  {context.type === 'interpretation' && (
                    <>
                      <div>
                        <label className="field-label" htmlFor="clientType">Client Type</label>
                        <div className="field-wrap">
                          <User size={18} className="field-icon" />
                          <select id="clientType" name="clientType" className="field-select" required defaultValue="">
                            <option value="" disabled>Select client profile</option>
                            <option value="corporate">Corporate / Company</option>
                            <option value="embassy">Consulate / Embassy</option>
                            <option value="legal">Law Firm / Court</option>
                            <option value="individual">Individual</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="languagePair">Language Combination</label>
                          <div className="field-wrap">
                            <Globe2 size={18} className="field-icon" />
                            <select id="languagePair" name="languagePair" className="field-select" required defaultValue="">
                              <option value="" disabled>Select language combination</option>
                              <option value="japanese-english">Japanese ↔ English / Hindi</option>
                              <option value="german-english">German ↔ English</option>
                              <option value="french-english">French ↔ English</option>
                              <option value="spanish-english">Spanish ↔ English</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="field-label" htmlFor="mode">Event Mode</label>
                          <div className="field-wrap">
                            <Target size={18} className="field-icon" />
                            <select id="mode" name="mode" className="field-select" required defaultValue="">
                              <option value="" disabled>Select event mode</option>
                              <option value="onsite">On-Site / In-Person</option>
                              <option value="remote">Remote Video Translation</option>
                              <option value="simultaneous">Simultaneous (Conference)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="name">Full Name / Org</label>
                          <div className="field-wrap">
                            <User size={18} className="field-icon" />
                            <input id="name" name="name" type="text" required placeholder="Name or Company" className="field-input" />
                          </div>
                        </div>
                        <div>
                          <label className="field-label" htmlFor="phone">Phone / WhatsApp</label>
                          <div className="field-wrap">
                            <Phone size={18} className="field-icon" />
                            <input id="phone" name="phone" type="tel" required placeholder="Contact Number" className="field-input" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 4. LANGUAGE FORM */}
                  {context.type === 'language' && (
                    <>
                      <div>
                        <label className="field-label">Target Language</label>
                        <div className="field-wrap">
                          <Globe2 size={18} className="field-icon opacity-60" />
                          <input type="text" readOnly value={context.data?.card?.title} className="field-input bg-ink/5 cursor-not-allowed font-medium" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="level">Target Level</label>
                          <div className="field-wrap">
                            <Target size={18} className="field-icon" />
                            <select id="level" name="level" className="field-select" required defaultValue="">
                              <option value="" disabled>Select target level</option>
                              {context.data?.levels?.map((lvl) => (
                                <option key={lvl.level} value={lvl.level}>
                                  {lvl.level} — {lvl.title}
                                </option>
                              ))}
                              <option value="all">Full Curriculum (Beginner to Advanced)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="field-label" htmlFor="batchType">Preferred Batch</label>
                          <div className="field-wrap">
                            <Target size={18} className="field-icon" />
                            <select id="batchType" name="batchType" className="field-select" required defaultValue="">
                              <option value="" disabled>Select batch mode</option>
                              <option value="weekend">Weekend (Sat & Sun)</option>
                              <option value="weekday">Weekday (Mon to Fri)</option>
                              <option value="one-on-one">One-on-One Custom</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="name">Full Name</label>
                          <div className="field-wrap">
                            <User size={18} className="field-icon" />
                            <input id="name" name="name" type="text" required placeholder="Your Name" className="field-input" />
                          </div>
                        </div>
                        <div>
                          <label className="field-label" htmlFor="phone">Phone / WhatsApp</label>
                          <div className="field-wrap">
                            <Phone size={18} className="field-icon" />
                            <input id="phone" name="phone" type="tel" required placeholder="Contact Number" className="field-input" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 5. GENERAL FORM */}
                  {context.type === 'general' && (
                    <>
                      <div>
                        <label className="field-label" htmlFor="language">Target Area</label>
                        <div className="field-wrap">
                          <Globe2 size={18} className="field-icon" />
                          <select id="language" name="language" className="field-select" required defaultValue="">
                            <option value="" disabled>Select language / service</option>
                            {languageCatalogue.map((lang) => (
                              <option key={lang.slug} value={lang.slug}>{lang.card.title}</option>
                            ))}
                            <option value="corporate">Corporate Training</option>
                            <option value="interpretation">Interpretation Services</option>
                            <option value="healthcare">German Healthcare Pathway</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="field-label" htmlFor="goal">Primary Goal</label>
                        <div className="field-wrap">
                          <Target size={18} className="field-icon" />
                          <select id="goal" name="goal" className="field-select" required defaultValue="">
                            <option value="" disabled>What are you working towards?</option>
                            <option value="work">Work internationally (Placement)</option>
                            <option value="study">Study abroad</option>
                            <option value="corporate">Train my corporate team</option>
                            <option value="healthcare">German nurse program</option>
                            <option value="culture">Personal culture & communication</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="field-label" htmlFor="name">Full Name</label>
                          <div className="field-wrap">
                            <User size={18} className="field-icon" />
                            <input id="name" name="name" type="text" required placeholder="Name" className="field-input" />
                          </div>
                        </div>
                        <div>
                          <label className="field-label" htmlFor="phone">Phone / WhatsApp</label>
                          <div className="field-wrap">
                            <Phone size={18} className="field-icon" />
                            <input id="phone" name="phone" type="tel" required placeholder="Number" className="field-input" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
                    style={isHealthcare ? { backgroundColor: healthcareColors.primary } : undefined}
                  >
                    <MessageCircle size={16} />
                    {loading ? 'Sending…' : 'Send via WhatsApp'}
                    {!loading && <ArrowRight size={16} />}
                  </button>

                  <p className="text-[10px] uppercase tracking-micro opacity-30 text-center flex justify-center items-center gap-2">
                    <ShieldCheck size={12} /> Confidential inquiry. Sent directly to our team.
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
