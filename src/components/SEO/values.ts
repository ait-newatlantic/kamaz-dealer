export default {
    title: process.env.NEXT_PUBLIC_COMPANY_NAME,
    description: `Chuyên cung cấp xe tải, ben giá rẻ cùng nhiều ưu đãi hấp dẫn. 
    Liên hệ ${process.env.NEXT_PUBLIC_PHONE_NUMBER} (Mr. ${process.env.NEXT_PUBLIC_USER_NAME})
    Địa chỉ: ${process.env.NEXT_PUBLIC_COMPANY_ADDRESS}
    Website:${process.env.NEXT_PUBLIC_DOMAIN}
    Email: ${process.env.NEXT_PUBLIC_USER_EMAIL}
    Rất hân hạn được phục vụ quý khách hàng!
    `,
    indexable: false,
    openGraph: {
        type: 'website',
        locale: 'br_PT',
        host: process.env.NEXT_PUBLIC_DOMAIN,
        title: 'Kamaz',
        description: 'Chuyên cung cấp xe tải giá rẻ',
        image: '',
        site_name: 'Kamaz',
    },
    twitter: {
        cardType: 'summary',
        author: '',
    },
};
