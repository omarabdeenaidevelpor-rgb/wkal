const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Waraq & Hekaya',
  slogan: 'Ideas Into Digital Experiences',
  description: 'An AI-powered digital agency from Egypt helping brands worldwide design, build, and grow.',
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', addressCountry: 'EG' }
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
