export default {
    title: process.env.NEXT_PUBLIC_COMPANY_NAME,
    description: `Chuyên cung cấp xe tải, ben giá rẻ | Liên hệ ${process.env.NEXT_PUBLIC_PHONE_NUMBER} (Mr. ${process.env.NEXT_PUBLIC_USER_NAME})`,
    indexable: false,
    openGraph: {
        type: 'website',
        locale: 'br_PT',
        host: process.env.NEXT_PUBLIC_DOMAIN,
        title: 'Cars',
        description: 'Search cars for sale.',
        image: '',
        site_name: 'Cars',
    },
    twitter: {
        cardType: 'summary',
        author: '',
    },
};
