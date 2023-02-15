import NextHead from 'next/head';
import SEO_VALUES from 'components/SEO/values';

export interface SEOProps {
    title?: string;
    description?: string;
    canonicalPath?: string;
    image?: string;
}

export default function SEO({ title, description, canonicalPath, image }: SEOProps) {
    return (
        <NextHead>
            <title>{`Kamaz Việt Nam | ${title}` || SEO_VALUES.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta
                name="robots"
                content={`${SEO_VALUES.indexable === true ? 'index, follow' : 'noindex, nofollow'}`}
            />
            <meta
                name="googlebot"
                content={`${SEO_VALUES.indexable === true ? 'index, follow' : 'noindex, nofollow'}`}
            />
            <meta name="description" content={description || SEO_VALUES.description} />
            <meta name="description" content={process.env.NEXT_PUBLIC_COMPANY_ADDRESS} />
            <meta name="description" content={process.env.NEXT_PUBLIC_COMPANY_NAME} />
            <meta name="description" content={process.env.NEXT_PUBLIC_USER_NAME} />
            <meta name="description" content={process.env.NEXT_PUBLIC_PHONE_NUMBER} />
            <meta name="description" content={process.env.NEXT_PUBLIC_USER_EMAIL} />
            <meta name="twitter:card" content={SEO_VALUES.twitter.cardType} />
            <meta property="og:image" content="/thumbnail.jpeg" />
            <meta
                property="og:url"
                content={`${SEO_VALUES.openGraph.host}${canonicalPath ?? ''}`}
            />
            <meta property="og:type" content={SEO_VALUES.openGraph.type} />
            <meta property="og:title" content={title || SEO_VALUES.title} />
            <meta property="og:locale" content={SEO_VALUES.openGraph.locale} key="title" />
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            {SEO_VALUES.twitter.author && (
                <meta name="twitter:site" content={SEO_VALUES.twitter.author} />
            )}
        </NextHead>
    );
}
