import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('cars').del()
  return knex('cars').insert([
    {
      id: 1,
      make: 'Xe tải tự đổ (xe Ben)',
      model: 'XE BEN KAMAZ 6540 ( 8X4 )',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'http://kamazvietnam.com.vn/vnt_upload/product/06_2018/thumbs/840_crop_6540_ben_nhap_vang_5.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
    {
      id: 2,
      make: 'Xe tải tự đổ (xe Ben)',
      model: 'XE BEN KAMAZ 65115 (6X4) THÙNG OVAL',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/65115_oval_280_-_cam_2.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
    {
      id: 3,
      make: 'Xe tải thùng',
      model: '65115 (6x4)',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/6540_thung_3.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
    {
      id: 4,
      make: 'Xe tải thùng',
      model: 'XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/thumbs/840_crop_43265_4x4_thung_1_1.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
    {
      id: 5,
      make: 'Xe tải thùng',
      model: 'XE TẢI THÙNG KAMAZ 53229 (6X4) THÙNG ĐÓNG DÀI',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/thumbs/840_crop_53229_thung_dai_IMAE_2_1.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
    {
      id: 6,
      make: 'Xe tải thùng',
      model: 'XE TẢI THÙNG KAMAZ 6540 (8X4) - THÙNG ĐÓNG LONG',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/thumbs/840_crop_6540_8x4_long_II_3.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
    {
      id: 7,
      make: 'Xe tải thùng',
      model: 'XE TẢI THÙNG KAMAZ 65117 (6X4)',
      year: 2019,
      fuelType: 'Dầu DO',
      kilometers: 0,
      details:
        'Với động cơ V8 - tích hợp 2 turbo - giảm tiêu ham nhiên liệu hơn so với các dòng Kamaz trước đây. Thùng xe đúc nguyên khối - tải trọng cho phép trên giấy tờ 17,2 Tấn (Tải trọng cao nhất các hãng). Thể tích thực thùng 15 khối (cơi lên được 17 khối). Tỉ số truyền 6.6 - cầu chậm - khoảng sáng gầm cao - đặc biệt chinh phục các cung đường xấu, đường gồ ghề',
      price: 0,
      photoUrl:
        'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/thumbs/840_crop_1T0A1887_3.jpg',
      specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
    },
  ])
}
