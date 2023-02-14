import NextHead from 'next/head'
import SEO_VALUES from 'components/SEO/values'
import { data } from 'data'

export interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  image?: string
}

export default function SEO({
  title,
  description,
  canonicalPath,
  image,
}: SEOProps) {
  return (
    <NextHead>
      <title>{`Kamaz | ${title}` || SEO_VALUES.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta
        name="robots"
        content={`${
          SEO_VALUES.indexable === true ? 'index, follow' : 'noindex, nofollow'
        }`}
      />
      <meta
        name="googlebot"
        content={`${
          SEO_VALUES.indexable === true ? 'index, follow' : 'noindex, nofollow'
        }`}
      />
      <meta
        name="description"
        content={description || SEO_VALUES.description}
      />
      <meta
        property="og:url"
        content={`${SEO_VALUES.openGraph.host}${canonicalPath ?? ''}`}
      />
      <meta property="og:type" content={SEO_VALUES.openGraph.type} />
      <meta property="og:title" content={title || SEO_VALUES.title} />
      <meta
        property="og:locale"
        content={SEO_VALUES.openGraph.locale}
        key="title"
      />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta name="description" content={data.address} />
      <meta name="description" content={data.branch_name} />
      <meta name="description" content={data.name} />
      <meta name="description" content={data.phone_number} />
      <meta name="description" content={data.email} />
      <meta name="twitter:card" content={SEO_VALUES.twitter.cardType} />
      {SEO_VALUES.twitter.author && (
        <meta name="twitter:site" content={SEO_VALUES.twitter.author} />
      )}
    </NextHead>
  )
}
