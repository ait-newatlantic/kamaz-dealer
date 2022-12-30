import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('faq').del();
    return knex('faq').insert([
        {
            id: 1,
            question: 'Địa chỉ',
            answer: '60 Đ. Phú Thuận, Phú Thuận, Quận 7, Thành phố Hồ Chí Minh',
            createDate: new Date(),
        },
        {
            id: 2,
            question: 'Phụ trách kinh doanh',
            answer: '0926 62 6568 - Mr.Thuấn',
            createDate: new Date(),
        },
        {
            id: 3,
            question: 'Phụ trách kỹ thuật',
            answer: '0989 75 9498 - Mr.Thịnh | 0972 95 9889 - Mr.Hai',
            createDate: new Date(),
        },
        {
            id: 4,
            question: 'Chăm sóc khách hàng',
            answer: '028 3873 3486',
            createDate: new Date(),
        },
        {
            id: 5,
            question: 'Phụ tùng',
            answer: '0913 14 6752',
            createDate: new Date(),
        },
    ]);
}
