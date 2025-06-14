import React from 'react';
import { Helmet } from 'react-helmet';

const SEO: React.FC = () => {
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100"
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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 