import NextHead from 'next/head';
import SEO_VALUES from 'components/SEO/values';
import { NextSeo } from 'next-seo';

export interface SEOProps {
    title?: string;
    description?: string;
    canonicalPath?: string;
    image?: string;
}

export default function SEO({ title, description, canonicalPath, image }: SEOProps) {
    return (
        <>
            <NextHead>
                <title>{`${title}` || SEO_VALUES.title}</title>
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
                <meta name="theme-color" content="#4285f4" />
                <meta name="description" content={description || SEO_VALUES.description} />
                <meta name="twitter:card" content={SEO_VALUES.twitter.cardType} />
                <meta property="og:image" content="/thumbnail.jpg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
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
            <NextSeo
                title={`${process.env.NEXT_PUBLIC_COMPANY_NAME}`}
                description="Chuyên cung cấp các mặt hàng xe tải giá rẻ cùng với nhiều ưu đãi hấp dẫn."
                openGraph={{
                    title: `${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
                    description: `Chuyên cung cấp xe tải KAMAZ giá rẻ, khuyến mãi lớn | Liên hệ ${process.env.NEXT_PUBLIC_PHONE_NUMBER} (Mr. ${process.env.NEXT_PUBLIC_USER_NAME})`,
                    url: process.env.NEXT_PUBLIC_DOMAIN || '' + { canonicalPath },
                    site_name: process.env.NEXT_PUBLIC_COMPANY_NAME,
                    type: 'website',
                    images: [
                        {
                            url: '/thumbnail.jpg',
                            alt: 'KAMAZ',
                        },
                    ],
                }}
            />
        </>
    );
}
