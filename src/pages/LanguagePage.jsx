import { useParams, Navigate } from 'react-router-dom';
import { getLanguage } from '@/data/languages';
import { LanguageTemplate } from '@/components/templates/LanguageTemplate';
import { SEO, LANGUAGE_SEO, breadcrumbSchema, faqSchema, ratingSchema } from '@/components/SEO';

/**
 * LanguagePage — route handler for /languages/:slug
 * Looks up language data by slug, renders via LanguageTemplate.
 * No per-language code needed.
 */
export function LanguagePage({ onOpenConsultation }) {
  const { slug } = useParams();
  const language = getLanguage(slug);

  // Unknown slug → 404
  if (!language) return <Navigate to="/languages" replace />;

  // Pull hyper-targeted SEO from the per-language map, or fall back to generic
  const seo = LANGUAGE_SEO[slug] || {};

  // Build structured data schemas
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Languages", path: "/languages" },
      { name: language.card.title, path: `/languages/${slug}` }
    ]),
    ratingSchema({ name: `${language.card.title} Classes at Vishwa Languages` }),
    ...(seo.faqs ? [faqSchema(seo.faqs)] : [])
  ];

  return (
    <>
      <SEO 
        title={seo.title || `Best ${language.card.title} Language Classes in Nashik`}
        description={seo.description || `Learn ${language.card.title} in Nashik with expert trainers at Vishwa Languages. Beginner to advanced courses available online and offline.`}
        keywords={seo.keywords || `Best ${language.card.title} classes in Nashik, ${language.card.title} classes near me, ${language.card.title} language course`}
        canonicalPath={`/languages/${slug}`}
        schemas={schemas}
      />
      <LanguageTemplate
        language={language}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
}
