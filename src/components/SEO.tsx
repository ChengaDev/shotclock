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

  const isHome = pagePath === '/';

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ShotClock Pro",
    "url": "https://www.24shotclock.com",
    "applicationCategory": "SportsApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "description": "Free online basketball shot clock — start, stop, reset, and practice with a real buzzer. Works on any device, no installation needed.",
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
      "14-second offensive rebound reset",
      "Real-time operation practice",
      "Real-time buzzer sound",
      "Blind-clock training mode",
      "Multiple language support"
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
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(webAppSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
