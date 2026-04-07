import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useLocalization } from '../contexts/Language/LanguageProvider';

const BASE_URL = 'https://www.24shotclock.com';
const ALL_LANGS = ['en', 'it', 'es', 'fr'];

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const { languageCode } = useLocalization();
  const location = useLocation();

  // English pages have no lang prefix — the pathname is the page path.
  // Non-English pages start with /:lang — strip it to get the page path.
  const pagePath = languageCode === 'en'
    ? location.pathname
    : (location.pathname.slice(`/${languageCode}`.length) || '/');

  const canonical = `${BASE_URL}${location.pathname}`;

  const getLangUrl = (lang: string) => {
    if (lang === 'en') return `${BASE_URL}${pagePath}`;
    return `${BASE_URL}/${lang}${pagePath === '/' ? '' : pagePath}`;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ShotClock Pro",
    "applicationCategory": "SportsApplication",
    "operatingSystem": "Web",
    "description": "Professional basketball shot clock training application for referees, scorekeepers, and basketball enthusiasts.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Chen Gazit"
    },
    "featureList": [
      "24-second shot clock simulation",
      "14-second reset functionality",
      "Real-time operation practice",
      "Multiple language support",
      "FIBA rules compliance"
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang: languageCode }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={canonical} />
      {ALL_LANGS.map(lang => (
        <link key={lang} rel="alternate" hrefLang={lang} href={getLangUrl(lang)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={getLangUrl('en')} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
