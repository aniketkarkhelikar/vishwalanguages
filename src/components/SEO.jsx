import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = "Vishwa Languages";
const SITE_URL = "https://vishwalanguages.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION = "Vishwa Languages is Nashik's top-rated language institute offering expert-led German, Japanese, French, English, and Spanish classes. We provide online & offline courses, IELTS coaching, corporate language training, interpretation, translation services, and German healthcare placement for nurses.";

// ─── Schema Helpers ───────────────────────────────────────────────────────────

/** Generate a BreadcrumbList schema */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`
    }))
  };
}

/** Generate a FAQPage schema from an array of { question, answer } */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/** Generate an AggregateRating schema */
export function ratingSchema({ ratingValue = 4.8, reviewCount = 320, name = "Vishwa Languages" } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": reviewCount
    }
  };
}

// ─── Per-Language SEO Data (keywords + FAQs) ──────────────────────────────────

export const LANGUAGE_SEO = {
  german: {
    title: "Best German Language Classes in Nashik – Vishwa Languages",
    description: "Learn German in Nashik with certified trainers at Vishwa Languages. We offer Goethe-certified A1 to C1 German language courses online & offline. Ideal for students, professionals, and nurses seeking German healthcare placement. Affordable fees, flexible batches on College Road, Nashik.",
    keywords: "Best German classes in Nashik, German language classes in Nashik, German classes near me, German language course, German classes in College road Nashik, German classes in Nashik fees, German language classes near me, Certified German language courses, German speaking classes near me, Learn German in Nashik, German language classes near me for kids, German language classes near nashik road nashik, German classes in nashik road, Best german language course in Nashik, Best german language classes near me, Best german language classes in Nashik, Best german classes in Nashik, German French Japanese classes in Nashik",
    faqs: [
      { question: "What are the fees for German language classes in Nashik?", answer: "Vishwa Languages offers affordable German courses starting from ₹8,000 per level. We have flexible batch timings and EMI options available. Contact us for the latest fee structure." },
      { question: "Do you offer online German classes?", answer: "Yes! We offer both online and offline German language classes. Our online classes are live interactive sessions with the same certified trainers, perfect for students who can't visit our College Road, Nashik campus." },
      { question: "What levels of German do you teach (A1 to C1)?", answer: "We offer all levels from A1 (beginner) through B1, B2, and up to C1 (advanced). Our courses follow the Goethe-Institut curriculum and prepare you for official Goethe certification exams." },
      { question: "Is learning German useful for healthcare placement in Germany?", answer: "Absolutely! Germany has a massive demand for qualified nurses. Vishwa Languages provides a complete pathway — German language training from A1 to B2 plus credential recognition (Anerkennung) and direct hospital placement in Germany." },
      { question: "How long does it take to learn German from scratch?", answer: "Each level (A1, A2, B1) typically takes 2-3 months with regular classes. Most students reach B1 level (conversational fluency) within 6-9 months of starting from scratch." }
    ]
  },
  japanese: {
    title: "Best Japanese Language Classes in Nashik – JLPT Preparation",
    description: "Learn Japanese in Nashik with expert trainers at Vishwa Languages. JLPT N5 to N2 preparation courses available online & offline. Whether you want to study in Japan, work in a Japanese company, or explore anime culture — our structured courses on College Road, Nashik will get you there.",
    keywords: "Best Japanese classes in Nashik, Best Japanese language classes in Nashik, Japanese language classes in Nashik, Japanese language classes near me, Japanese language course, Japanese language course near me, Japanese classes in Nashik fees, Japanese language classes in Nashik fees, JLPT preparation course online, Japanese language course fees, Japanese language course near Nashik Maharashtra, Japanese language course online, Japanese language course fees in India",
    faqs: [
      { question: "What are the fees for Japanese language classes in Nashik?", answer: "Our Japanese language courses start from ₹8,000 per level. We offer JLPT-focused batches (N5 through N2) with flexible morning, evening, and weekend timings. Contact us for detailed pricing." },
      { question: "Do you offer JLPT preparation courses?", answer: "Yes! Our Japanese courses are specifically structured around JLPT (Japanese Language Proficiency Test) levels N5 to N2. We provide mock tests, study materials, and exam strategies to help you pass." },
      { question: "Can I learn Japanese online from Nashik?", answer: "Absolutely. We offer live online Japanese classes with expert trainers. You get the same quality of instruction as our offline batches at our College Road campus." },
      { question: "Is Japanese useful for career opportunities?", answer: "Yes! Japan is India's largest investor. Japanese companies like Toyota, Honda, Suzuki, and many IT firms actively hire Japanese-speaking candidates. JLPT N3/N2 certification can significantly boost your salary and career prospects." },
      { question: "How long does it take to pass JLPT N5?", answer: "With regular classes (3-4 hours per week), most students are ready for JLPT N5 within 3-4 months. Our structured curriculum covers Hiragana, Katakana, basic Kanji, grammar, and conversation." }
    ]
  },
  french: {
    title: "Best French Language Classes in Nashik – Vishwa Languages",
    description: "Learn French in Nashik with expert trainers at Vishwa Languages. We offer beginner to advanced French classes online & offline, perfect for students, travelers, and professionals. Structured curriculum with interactive sessions and flexible batches on College Road, Nashik.",
    keywords: "Best french language classes in nashik, Best french language schools in nashik, French classes in Nashik, French language classes in Nashik, French classes near me for students, French learning classes Nashik, French language classes in nashik fees, French language schools in nashik fees, Online french language classes in nashik, Free french language classes in nashik, French classes Nashik",
    faqs: [
      { question: "What are the fees for French classes in Nashik?", answer: "French language courses at Vishwa Languages start from ₹7,000 per level. We offer beginner to advanced levels with flexible batch timings. Contact us for the latest fee details and discounts." },
      { question: "Do you offer online French language classes?", answer: "Yes, we offer both online and offline French classes. Our online sessions are live and interactive with the same experienced trainers who teach at our Nashik campus." },
      { question: "Is French useful for career and study abroad?", answer: "French is spoken in 29 countries and is an official language of the UN, EU, and NATO. It opens doors for careers in diplomacy, international business, tourism, hospitality, and higher education in France, Canada, and Switzerland." },
      { question: "What levels of French do you offer?", answer: "We offer A1 (beginner) through B2 (upper intermediate) levels following the DELF/DALF framework. Our courses prepare you for official French certification exams." }
    ]
  },
  spanish: {
    title: "Best Spanish Language Classes in Nashik – Vishwa Languages",
    description: "Learn Spanish in Nashik with expert trainers at Vishwa Languages. Interactive beginner to advanced Spanish classes online & offline. Perfect for travel, work, or academic goals. Join our College Road, Nashik campus or learn from home.",
    keywords: "Spanish classes in Nashik, Spanish classes near Nashik Maharashtra, Spanish language course, Spanish Teacher Nashik, Spanish Class Nashik, Best Spanish classes in Nashik",
    faqs: [
      { question: "Do you offer Spanish classes in Nashik?", answer: "Yes! Vishwa Languages offers beginner to advanced Spanish language courses in Nashik. Both online and offline batches are available with expert trainers." },
      { question: "What are the fees for Spanish language classes?", answer: "Our Spanish courses are competitively priced starting from ₹7,000 per level. Contact us for the latest pricing and batch schedules." },
      { question: "Is Spanish useful for career growth?", answer: "Spanish is the world's second most spoken native language with over 500 million speakers. It's invaluable for careers in international business, tourism, diplomacy, and working with Latin American markets." }
    ]
  },
  english: {
    title: "Best English Speaking Classes in Nashik – Fluency Guaranteed",
    description: "Improve your English fluency, grammar, and confidence with Vishwa Languages' professional spoken English classes in Nashik. Expert trainers, interactive sessions, and flexible batches for students, adults, kids, and working professionals. Online & offline options available.",
    keywords: "Best english speaking classes in Nashik, Best english speaking classes near me, English speaking classes in Nashik, English speaking Classes in Nashik fees, English speaking classes in College Road Nashik, English speaking classes in Nashik for adults, English speaking classes near me, English speaking classes near me for adults, English speaking classes near me for kids, English speaking classes near me with fees, English speaking course Nashik, Online English speaking Classes in Nashik, Top 10 English speaking class in Nashik, Spoken English, English language tutorial classes in Nashik",
    faqs: [
      { question: "What are the fees for English speaking classes in Nashik?", answer: "Our spoken English courses start from ₹5,000. We have specialized batches for students, working professionals, and kids with flexible morning, evening, and weekend timings." },
      { question: "Do you offer English speaking classes for adults?", answer: "Yes! We have dedicated batches for adults and working professionals who want to improve their spoken English, business communication, and presentation skills." },
      { question: "Are online English speaking classes available?", answer: "Absolutely. Our online spoken English classes are live and interactive. You can learn from home with the same expert trainers and personalized attention." },
      { question: "How long does it take to become fluent in English?", answer: "Most students see significant improvement in fluency and confidence within 2-3 months of regular classes. Our course includes grammar, vocabulary, pronunciation, and real-world conversation practice." },
      { question: "Do you offer English classes for kids?", answer: "Yes, we have specially designed English classes for children that focus on building vocabulary, grammar fundamentals, reading skills, and speaking confidence through fun, interactive activities." }
    ]
  },
  ielts: {
    title: "Best IELTS Coaching in Nashik – Online & Offline Batches",
    description: "Get expert IELTS coaching at Vishwa Languages in Nashik. Achieve your target band score with personalized guidance, practice tests, and proven strategies. Both online and offline batches available with flexible timings.",
    keywords: "Best ielts classes in Nashik, Best ielts preparation in Nashik, IELTS classes in Nashik, IELTS coaching in Nashik Fees, Ielts preparation in Nashik fees, IELTS classes near me, IELTS Online Offline Batches Nashik, ielts institute in Nashik",
    faqs: [
      { question: "What are the fees for IELTS coaching in Nashik?", answer: "IELTS preparation at Vishwa Languages starts from ₹10,000. This includes study materials, practice tests, and personalized coaching for all four modules — Listening, Reading, Writing, and Speaking." },
      { question: "Do you offer online IELTS preparation?", answer: "Yes, we offer both online and offline IELTS coaching. Online students get the same quality of instruction, mock tests, and feedback as our in-person batches." },
      { question: "What IELTS band score can I achieve?", answer: "Our students consistently achieve band scores of 6.5 to 8.0. We provide targeted strategies for each module and regular mock tests to track your progress." },
      { question: "How long is the IELTS preparation course?", answer: "Our standard IELTS course is 6-8 weeks with classes 3-4 times per week. We also offer intensive crash courses for students with upcoming test dates." }
    ]
  },
  mandarin: {
    title: "Mandarin Chinese Classes in Nashik – Vishwa Languages",
    description: "Learn Mandarin Chinese in Nashik with expert instructors at Vishwa Languages. Our classes cover speaking, reading, and writing for beginners to advanced learners. Perfect for business, travel, or academics.",
    keywords: "Mandarin classes in Nashik, Mandarin classes in Nashik fees, Mandarin classes in Nashik near me, Mandarin language classes Nashik, Mandarin Language course Nashik",
    faqs: [
      { question: "Do you offer Mandarin Chinese classes in Nashik?", answer: "Yes! Vishwa Languages offers Mandarin Chinese courses for beginners to advanced learners. Our classes cover speaking, reading, writing, and HSK exam preparation." },
      { question: "Is Mandarin useful for career growth?", answer: "Mandarin is the world's most spoken language. With China being a major business partner of India, Mandarin skills are highly valued in international trade, IT, manufacturing, and diplomacy." }
    ]
  },
  korean: {
    title: "Korean Language Classes in Nashik – Vishwa Languages",
    description: "Explore K-culture and career opportunities with Korean language classes at Vishwa Languages in Nashik. Learn Hangul, grammar, and conversational Korean with expert trainers.",
    keywords: "Korean language classes in Nashik, Korean class Nashik, Korean Language Nashik, Learn Korean in Nashik",
    faqs: [
      { question: "Do you offer Korean language classes in Nashik?", answer: "Yes! We offer beginner to intermediate Korean classes covering Hangul script, grammar, vocabulary, and conversational Korean. Perfect for K-culture enthusiasts and professionals." },
      { question: "Is Korean useful for jobs?", answer: "Yes! Korean companies like Samsung, LG, Hyundai, and Kia have a significant presence in India. TOPIK certification can help you land jobs in these companies or pursue studies in South Korea." }
    ]
  },
  sanskrit: {
    title: "Sanskrit Language Classes in Nashik – Vishwa Languages",
    description: "Learn Sanskrit, the ancient language of India, with expert trainers at Vishwa Languages in Nashik. Explore scriptures, grammar, and conversational Sanskrit.",
    keywords: "Sanskrit classes in Nashik, Learn Sanskrit Nashik, Sanskrit language course",
    faqs: [
      { question: "Do you offer Sanskrit classes in Nashik?", answer: "Yes, Vishwa Languages offers Sanskrit language courses that cover Vedic and Classical Sanskrit, grammar (Vyakarana), scripture reading, and conversational Sanskrit." }
    ]
  }
};

// ─── Page-Specific FAQ Data ───────────────────────────────────────────────────

export const PAGE_FAQS = {
  home: [
    { question: "What languages can I learn at Vishwa Languages in Nashik?", answer: "We offer expert-led courses in German, Japanese, French, Spanish, English, IELTS, Mandarin Chinese, Korean, and Sanskrit. Both online and offline batches are available." },
    { question: "Where is Vishwa Languages located in Nashik?", answer: "We are located at 1, Ritesh Apartment, College Road, near Kathiyawad Showroom, D'souza Colony, Nashik, Maharashtra 422005. We also offer online classes for students who can't visit in person." },
    { question: "Do you offer online language classes?", answer: "Yes! All our language courses are available in both online and offline formats. Online classes are live, interactive sessions with the same expert trainers." },
    { question: "What are the fees for language classes at Vishwa Languages?", answer: "Our courses are affordably priced starting from ₹5,000 depending on the language and level. We offer flexible payment options. Contact us at +91 75887 06961 for detailed pricing." },
    { question: "Do you provide placement assistance after language training?", answer: "Yes! We offer exclusive German healthcare placement for nursing graduates, corporate placement support, and career guidance for students completing JLPT, Goethe, and DELF certifications." }
  ],
  corporateTraining: [
    { question: "What languages do you offer for corporate training?", answer: "We offer corporate training in English (spoken English, business communication), German, Japanese, French, and Spanish. Programs are tailored to your organization's specific needs." },
    { question: "Do you provide on-site corporate language training?", answer: "Yes, we offer both on-site training at your office and online training for remote teams. Our trainers can travel to your location in Nashik or conduct live virtual sessions." },
    { question: "What is the minimum batch size for corporate training?", answer: "We can accommodate batches as small as 5 employees. Larger batches can also be arranged with customized scheduling and curriculum." },
    { question: "Do you offer personality development and soft skills training?", answer: "Yes! Our corporate programs include personality development, presentation skills, email writing, business etiquette, and cross-cultural communication alongside language training." }
  ],
  healthcarePlacement: [
    { question: "What is the process for healthcare placement in Germany through Vishwa Languages?", answer: "Our end-to-end process includes: German language training (A1 to B2), document preparation, credential recognition (Anerkennung), visa assistance, and direct placement in German hospitals. We guide you through every step." },
    { question: "What level of German is required for nursing in Germany?", answer: "You need a minimum of B1 level German for the visa application and B2 level for professional registration. Our course takes you from zero to B2 with focused healthcare vocabulary." },
    { question: "How long does the entire Germany healthcare placement process take?", answer: "The typical timeline is 12-18 months from starting German classes to arriving in Germany. This includes language training (8-10 months), document processing (2-3 months), and visa processing (2-3 months)." },
    { question: "Do you help with visa and relocation to Germany?", answer: "Yes! We provide complete support including document authentication, Anerkennung (credential recognition), visa application guidance, pre-departure orientation, and relocation assistance." }
  ],
  translation: [
    { question: "What types of documents do you translate?", answer: "We translate legal documents, medical records, academic transcripts, corporate contracts, technical manuals, websites, and marketing materials in German, Japanese, French, and Spanish." },
    { question: "Are your translations certified?", answer: "Yes, we provide certified translations accepted by embassies, courts, universities, and government bodies. Our translators are qualified professionals with domain expertise." },
    { question: "How long does a typical translation take?", answer: "Standard document translations are completed within 2-5 business days depending on length and complexity. Rush services are available for urgent requirements." }
  ],
  interpretation: [
    { question: "What types of interpretation services do you offer?", answer: "We offer simultaneous interpretation (for conferences and large events), consecutive interpretation (for meetings and negotiations), and liaison interpretation (for business visits and factory tours) in Japanese, German, French, and Spanish." },
    { question: "Do your interpreters sign NDAs?", answer: "Yes, all our interpreters sign Non-Disclosure Agreements (NDAs) to ensure complete confidentiality of your business discussions and proprietary information." },
    { question: "Can you provide interpreters outside Nashik?", answer: "Absolutely. Our interpreters are available pan-India and internationally. We have served clients in Mumbai, Pune, Delhi, Chennai, Bangalore, and globally via video conferencing." }
  ]
};

// ─── SEO Component ────────────────────────────────────────────────────────────

export function SEO({ title, description, name, type, keywords, schemas, canonicalPath }) {
  const finalTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Best Language Classes in Nashik`;
  const finalDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || "Best language classes in Nashik, German classes in Nashik, Japanese classes in Nashik, French classes in Nashik, English speaking classes in Nashik, IELTS preparation Nashik, foreign language courses, corporate language training, interpretation services, translation services, language institute Nashik"} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* OpenGraph tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      
      {/* Structured Data — multiple schemas supported */}
      {schemas && schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
