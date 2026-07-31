import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, name, type, keywords, schema }) {
  const siteName = "Vishwa Languages";
  const defaultDescription = "Vishwa Languages offers career-focused Japanese, German, French and Spanish programs, corporate language training, interpretation services, and German healthcare placement.";
  const finalTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{finalTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "Language learning, Japanese classes in Nashik, German classes in Nashik, French classes, Spanish classes, IELTS preparation, foreign languages"} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      
      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
