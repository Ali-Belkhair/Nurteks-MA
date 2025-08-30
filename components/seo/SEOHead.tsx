import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOHead({
  title = 'Nurteks - Premium Artificial Grass Solutions in Morocco',
  description = 'Transform your spaces with Nurteks premium artificial grass. Specialist in residential lawns, sports fields, and urban landscaping across Morocco.',
  image = '/images/og-image.jpg',
  url = 'https://nurteks.com',
  type = 'website'
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Nurteks" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nurteks" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nurteks',
            description: description,
            url: url,
            logo: `${url}/images/logo.png`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+212-5XX-XXXXXX',
              contactType: 'Customer Service',
              availableLanguage: ['Arabic', 'French', 'English']
            },
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'MA',
              addressLocality: 'Casablanca'
            },
            sameAs: [
              'https://facebook.com/nurteks',
              'https://instagram.com/nurteks',
              'https://linkedin.com/company/nurteks'
            ]
          })
        }}
      />
    </Head>
  );
}