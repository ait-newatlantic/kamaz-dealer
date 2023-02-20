import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('cars').del();
    return knex('cars').insert([
        {
            id: 1,
            make: 'Xe tải tự đổ (xe Ben)',
            model: 'XE BEN KAMAZ 6540 ( 8X4 )',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE BEN KAMAZ 6540 (8X4) là một loại xe tải ben chất lượng cao được sản xuất bởi công ty KAMAZ, một trong những nhà sản xuất xe hàng đầu của Nga. Xe ben này được thiết kế để vận chuyển và vận chuyển các vật liệu nặng, đặc biệt là đất, cát, đá và các vật liệu xây dựng khác.\nXE BEN KAMAZ 6540 (8X4) được trang bị động cơ diesel Kamaz-740.50-400, có công suất tối đa lên đến 400 mã lực, giúp xe hoạt động mạnh mẽ và hiệu quả trong việc vận chuyển hàng hóa. Ngoài ra, xe cũng được trang bị hộp số cơ khí 16 cấp độ, giúp tăng tốc độ và độ bền của xe.\nVới khối lượng tải trọng lên đến 20 tấn, XE BEN KAMAZ 6540 (8X4) được trang bị hệ thống treo khí nén trên cả trục trước và sau, giúp giảm thiểu tác động của địa hình đến xe, tăng tính ổn định và giảm độ rung lắc của xe.\nNgoài ra, xe còn được trang bị nhiều tính năng tiện ích khác như hệ thống phanh ABS, điều hòa không khí, bình nhiên liệu có dung tích lớn, hệ thống âm thanh với loa đa điểm và các tính năng an toàn khác như cảm biến lùi, camera lùi và hệ thống giữ làn đường.\nVới sức mạnh, hiệu suất và tính năng tiện ích vượt trội, XE BEN KAMAZ 6540 (8X4) là một sự lựa chọn tốt cho những người kinh doanh vận chuyển hàng hóa và xây dựng công trình.',
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
                'XE BEN KAMAZ 65115 (6X4) THÙNG OVAL là một loại xe tải ben chất lượng cao được sản xuất bởi công ty KAMAZ, một trong những nhà sản xuất xe hàng đầu của Nga. Xe ben này được thiết kế để vận chuyển các vật liệu nặng, đặc biệt là đất, cát, đá và các vật liệu xây dựng khác.\nXE BEN KAMAZ 65115 (6X4) THÙNG OVAL được trang bị động cơ Kamaz-740.50-360, với công suất tối đa lên đến 360 mã lực, giúp xe vận hành mạnh mẽ và hiệu quả trong việc vận chuyển hàng hóa. Hộp số được trang bị với 16 cấp số tiến và 2 cấp số lùi, giúp tăng tốc độ và độ bền của xe.\nVới khối lượng tải trọng lên đến 15 tấn, XE BEN KAMAZ 65115 (6X4) THÙNG OVAL được trang bị hệ thống treo khí nén trên cả trục trước và sau, giúp giảm thiểu tác động của địa hình đến xe, tăng tính ổn định và giảm độ rung lắc của xe.\nThùng ben được thiết kế hình oval, giúp tăng dung tích và giảm độ cồng kềnh của xe, đồng thời giảm thiểu tối đa tình trạng rò rỉ khi vận chuyển hàng hóa. Ngoài ra, xe còn được trang bị nhiều tính năng tiện ích khác như hệ thống phanh ABS, điều hòa không khí, bình nhiên liệu có dung tích lớn, hệ thống âm thanh với loa đa điểm và các tính năng an toàn khác như cảm biến lùi, camera lùi và hệ thống giữ làn đường.\nVới sức mạnh, hiệu suất và tính năng tiện ích vượt trội, XE BEN KAMAZ 65115 (6X4) THÙNG OVAL là một sự lựa chọn tốt cho những người kinh doanh vận chuyển hàng hóa và xây dựng công trình.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/65115_oval_280_-_cam_2.jpg',
            specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
        },
        {
            id: 3,
            make: 'Xe tải thùng',
            model: 'XE TẢI THÙNG 65115 (6X4)',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE TẢI THÙNG 65115 (6X4) là một loại xe tải chất lượng cao được sản xuất bởi công ty KAMAZ, một trong những nhà sản xuất xe hàng đầu của Nga. Xe tải này được thiết kế để vận chuyển các vật liệu nặng, đặc biệt là hàng hóa trong các khu vực đô thị hoặc địa hình khó khăn.\nXE TẢI THÙNG 65115 (6X4) được trang bị động cơ Kamaz-740.50-360, với công suất tối đa lên đến 360 mã lực, giúp xe vận hành mạnh mẽ và hiệu quả trong việc vận chuyển hàng hóa. Hộp số được trang bị với 16 cấp số tiến và 2 cấp số lùi, giúp tăng tốc độ và độ bền của xe.\nVới khối lượng tải trọng lên đến 15 tấn, XE TẢI THÙNG 65115 (6X4) được trang bị hệ thống treo khí nén trên cả trục trước và sau, giúp giảm thiểu tác động của địa hình đến xe, tăng tính ổn định và giảm độ rung lắc của xe.\nThùng xe được thiết kế với kích thước rộng rãi và đa dạng để phù hợp với nhiều loại hàng hóa khác nhau. Với khối lượng hàng hóa lớn, xe có thể được trang bị với cần cẩu vận hành tự động để giúp tiết kiệm thời gian và nâng cao hiệu quả vận chuyển.\nNgoài ra, XE TẢI THÙNG 65115 (6X4) còn được trang bị nhiều tính năng tiện ích khác như hệ thống phanh ABS, điều hòa không khí, bình nhiên liệu có dung tích lớn, hệ thống âm thanh với loa đa điểm và các tính năng an toàn khác như cảm biến lùi, camera lùi và hệ thống giữ làn đường.\nVới sức mạnh, hiệu suất và tính năng tiện ích vượt trội, XE TẢI THÙNG 65115 (6X4) là một sự lựa chọn tốt cho những người kinh doanh vận chuyển hàng hóa và xây dựng công trình.',
            price: 0,
            photoUrl: 'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/6540_thung_3.jpg',
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
                'XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG là một trong những dòng sản phẩm tải chất lượng cao được sản xuất bởi hãng xe KAMAZ, một trong những nhà sản xuất hàng đầu tại Nga.\nVới thiết kế thùng đóng, xe tải này được ưu tiên cho việc vận chuyển hàng hóa có giá trị cao hoặc cần được bảo vệ trong quá trình vận chuyển. Được trang bị khối động cơ diesel Kamaz 740.31-240, XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG có công suất tối đa lên đến 240 mã lực, giúp xe vận hành mạnh mẽ và ổn định trên mọi địa hình.\nXe tải này được trang bị hộp số sàn 5 cấp và hệ thống treo khí nén trên cả trục trước và sau, giúp xe vận hành êm ái, ổn định và linh hoạt trên mọi địa hình khó khăn. Hệ thống phanh ABS cũng được trang bị trên xe, giúp tăng tính an toàn và giảm thiểu nguy cơ tai nạn.\nThùng xe được thiết kế chắc chắn với kích thước rộng rãi để phù hợp với nhiều loại hàng hóa khác nhau, bao gồm cả các loại hàng hóa khó vận chuyển và có giá trị cao. Thêm vào đó, thùng xe được trang bị các thiết bị bảo vệ như khóa an toàn và cửa hầm trượt, giúp bảo vệ hàng hóa khỏi các yếu tố môi trường và nguy cơ trộm cắp.\nNgoài ra, XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG còn được trang bị nhiều tính năng tiện ích khác như điều hòa không khí, hệ thống âm thanh với loa đa điểm, hệ thống giữ làn đường, cảm biến lùi và camera lùi. Tất cả những tính năng này giúp tăng tính an toàn và giảm thiểu nguy cơ tai nạn cho người lái xe và hàng hóa trong quá trình vận chuyển.\nVới sức mạnh, hiệu suất và tính năng tiện ích vượt trội, XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG là sự lựa chọn tốt cho các doanh nghiệp và cá nhân có nhu cầu vận chuyển hàng hóa trong nội thành và địa hình khó khăn. Với thiết kế thùng đóng chắc chắn, xe tải này là lựa chọn hoàn hảo để vận chuyển các loại hàng hóa như thiết bị điện tử, đồ gia dụng, hàng tiêu dùng, vật liệu xây dựng, máy móc công nghiệp, vật tư y tế, thực phẩm và nhiều loại hàng hóa khác.\nĐặc biệt, XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG được trang bị hệ thống treo khí nén trên cả trục trước và sau, giúp giảm thiểu va đập và rung lắc trong quá trình vận chuyển hàng hóa. Ngoài ra, hệ thống khóa an toàn và cửa hầm trượt giúp đảm bảo an toàn cho hàng hóa trong quá trình vận chuyển.\nXe tải này có thể vận hành trên mọi địa hình, đảm bảo độ ổn định và tăng độ bám đường trên đường trơn trượt hay địa hình đồi núi. Hơn nữa, hệ thống phanh ABS và EBD giúp tăng tính an toàn và độ ổn định của xe trong quá trình vận hành.\nVới động cơ mạnh mẽ và tiết kiệm nhiên liệu, XE TẢI THÙNG KAMAZ 43265 (4X4) - THÙNG ĐÓNG là sự lựa chọn hoàn hảo cho các doanh nghiệp và cá nhân có nhu cầu vận chuyển hàng hóa một cách nhanh chóng và hiệu quả.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/thumbs/840_crop_43265_4x4_thung_1_1.jpg',
            specUrl: 'https://cloud.newatlantic.vn/core/preview?fileId=12172&x=3360&y=2100&a=true',
        },
        {
            id: 5,
            make: 'Xe tải thùng',
            model: 'XE TẢI THÙNG KAMAZ 53229 (6X4) THÙNG ĐÓNG DÀI',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE TẢI THÙNG KAMAZ 53229 (6X4) THÙNG ĐÓNG DÀI là một trong những mẫu xe tải đa dụng, được thiết kế để vận chuyển hàng hóa trên những đoạn đường dài và phục vụ nhu cầu vận chuyển hàng hóa trong nhiều ngành công nghiệp khác nhau.\nXe được trang bị động cơ mạnh mẽ với dung tích lên đến 11.76L, cung cấp công suất tối đa lên đến 400 mã lực, giúp xe tải có khả năng vận hành mạnh mẽ và tiết kiệm nhiên liệu. Với hệ thống treo khí nén trên cả trục trước và sau, xe tải này giảm thiểu va đập và rung lắc trong quá trình vận chuyển hàng hóa.\nTHÙNG ĐÓNG DÀI có kích thước lớn, đảm bảo vận chuyển hàng hóa được nhiều và an toàn hơn. Kích thước thùng lên đến 7.4m, rộng 2.4m và cao 2.2m, giúp vận chuyển được nhiều loại hàng hóa khác nhau như thiết bị điện tử, đồ gia dụng, hàng tiêu dùng, vật liệu xây dựng, máy móc công nghiệp, vật tư y tế, thực phẩm và nhiều loại hàng hóa khác.\nHệ thống khóa an toàn và cửa hầm trượt giúp đảm bảo an toàn cho hàng hóa trong quá trình vận chuyển. Hệ thống phanh ABS và EBD giúp tăng tính an toàn và độ ổn định của xe trong quá trình vận hành, đồng thời giúp giảm thiểu thời gian phanh và tăng cường khả năng kiểm soát xe.\nVới những tính năng vượt trội này, XE TẢI THÙNG KAMAZ 53229 (6X4) THÙNG ĐÓNG DÀI là một trong những lựa chọn hàng đầu cho các doanh nghiệp và cá nhân có nhu cầu vận chuyển hàng hóa lớn trên những đoạn đường dài và phục vụ nhu cầu của nhiều ngành công nghiệp khác nhau.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/07_2018/thumbs/840_crop_53229_thung_dai_IMAE_2_1.jpg',
            specUrl: 'https://cloud.newatlantic.vn/core/preview?fileId=12171&x=3360&y=2100&a=true',
        },
        {
            id: 6,
            make: 'Xe tải thùng',
            model: 'XE TẢI THÙNG KAMAZ 6540 (8X4) - THÙNG ĐÓNG LONG',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE TẢI THÙNG KAMAZ 6540 (8X4) - THÙNG ĐÓNG LONG là một trong những mẫu xe tải có tải trọng lớn và được thiết kế để vận chuyển hàng hóa trên những đoạn đường dài và phục vụ nhu cầu vận chuyển hàng hóa trong nhiều ngành công nghiệp khác nhau.\nXe được trang bị động cơ mạnh mẽ với dung tích lên đến 12.5L, cung cấp công suất tối đa lên đến 400 mã lực, giúp xe tải có khả năng vận hành mạnh mẽ và tiết kiệm nhiên liệu. Hệ thống treo khí nén trên cả trục trước và sau giúp giảm thiểu va đập và rung lắc trong quá trình vận chuyển hàng hóa.\nTHÙNG ĐÓNG LONG có kích thước lớn, đảm bảo vận chuyển hàng hóa được nhiều và an toàn hơn. Kích thước thùng lên đến 9.3m, rộng 2.5m và cao 2.5m, giúp vận chuyển được nhiều loại hàng hóa khác nhau như thiết bị điện tử, đồ gia dụng, hàng tiêu dùng, vật liệu xây dựng, máy móc công nghiệp, vật tư y tế, thực phẩm và nhiều loại hàng hóa khác.\nHệ thống khóa an toàn và cửa hầm trượt giúp đảm bảo an toàn cho hàng hóa trong quá trình vận chuyển. Hệ thống phanh ABS và EBD giúp tăng tính an toàn và độ ổn định của xe trong quá trình vận hành, đồng thời giúp giảm thiểu thời gian phanh và tăng cường khả năng kiểm soát xe.\nVới những tính năng vượt trội này, XE TẢI THÙNG KAMAZ 6540 (8X4) - THÙNG ĐÓNG LONG là một trong những lựa chọn hàng đầu cho các doanh nghiệp và cá nhân có nhu cầu vận chuyển hàng hóa lớn trên những đoạn đường dài và phục vụ nhu cầu của nhiều ngành công nghiệp khác nhau.',
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
                'XE TẢI THÙNG KAMAZ 65117 (6X4) là một trong những mẫu xe tải có khả năng vận chuyển hàng hóa lớn và hiệu suất vận hành ấn tượng, được thiết kế để phục vụ nhu cầu vận chuyển hàng hóa trong nhiều ngành công nghiệp khác nhau.\nVới động cơ mạnh mẽ và tiết kiệm nhiên liệu, xe tải KAMAZ 65117 được trang bị động cơ có dung tích 10.8L, cung cấp công suất tối đa lên đến 285 mã lực, giúp xe vận hành mạnh mẽ và tăng khả năng tải hàng. Hệ thống treo khí nén trên cả trục trước và sau giúp giảm thiểu va đập và rung lắc trong quá trình vận chuyển hàng hóa.\nTHÙNG XE TẢI có kích thước lớn và đa dạng, đảm bảo vận chuyển hàng hóa được nhiều và an toàn hơn. Kích thước thùng xe lên đến 6.7m, rộng 2.4m và cao 2.3m, giúp vận chuyển được nhiều loại hàng hóa khác nhau như thiết bị điện tử, đồ gia dụng, hàng tiêu dùng, vật liệu xây dựng, máy móc công nghiệp, vật tư y tế, thực phẩm và nhiều loại hàng hóa khác.\nHệ thống khóa an toàn và cửa hầm trượt giúp đảm bảo an toàn cho hàng hóa trong quá trình vận chuyển. Hệ thống phanh ABS và EBD giúp tăng tính an toàn và độ ổn định của xe trong quá trình vận hành, đồng thời giúp giảm thiểu thời gian phanh và tăng cường khả năng kiểm soát xe.\nVới những tính năng vượt trội này, XE TẢI THÙNG KAMAZ 65117 (6X4) là một lựa chọn tuyệt vời cho các doanh nghiệp và cá nhân có nhu cầu vận chuyển hàng hóa lớn trên những đoạn đường dài và phục vụ nhu cầu của nhiều ngành công nghiệp khác nhau.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/thumbs/840_crop_1T0A1887_3.jpg',
            specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
        },
        {
            id: 8,
            make: 'Xe chuyên dụng',
            model: 'XE CỨU HỎA KAMAZ AC 5,0 - 40 43253 (4X2) 5M3',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE CỨU HỎA KAMAZ AC 5,0 - 40 43253 (4X2) 5M3 là một trong những mẫu xe chuyên dụng được sản xuất bởi hãng xe tải Kamaz của Nga. Được trang bị động cơ Kamaz 740.622-400 (Euro 4), công suất 240 mã lực và hộp số sàn 5 cấp, chiếc xe cứu hỏa này có khả năng vận hành mạnh mẽ và ổn định trên mọi địa hình.\nVới khối lượng tổng tải trọng lên đến 10.650 kg, chiều dài thùng chở lên đến 5m3, chiếc xe cứu hỏa Kamaz này có khả năng chở đầy đủ trang thiết bị, dụng cụ cứu hỏa và đội ngũ cứu hộ. Xe còn được trang bị hệ thống âm thanh và ánh sáng cảnh báo khẩn cấp, đảm bảo an toàn cho người và tài sản trong quá trình cứu hỏa.\nNgoài ra, xe cứu hỏa Kamaz AC 5,0 - 40 43253 còn được trang bị nhiều tính năng và tiện ích hỗ trợ như hệ thống điều khiển tốc độ tự động, hệ thống phanh ABS và EBD, hệ thống phanh tay điện tử, hệ thống cân bằng điện tử ESP, hệ thống giảm xóc, hệ thống điều hòa không khí và hệ thống kính điện. Tất cả những tính năng và trang thiết bị trên đã giúp chiếc xe cứu hỏa Kamaz trở thành một trong những lựa chọn hàng đầu cho các đội cứu hỏa trên toàn thế giới.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/03_12_2021/thumbs/840_crop_z2942784124023_4f197ee7045d6935efd70cbc6b331cf1.jpg',
            specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
        },
        {
            id: 9,
            make: 'Xe chuyên dụng',
            model: 'XE BỒN XĂNG DẦU KAMAZ 53229 (6X4) - 18 M3',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE BỒN XĂNG DẦU KAMAZ 53229 (6X4) - 18 M3 là một loại xe tải được thiết kế để vận chuyển nhiên liệu như xăng dầu. Xe được trang bị động cơ diesel Kamaz với dung tích xilanh 10.85L, cho công suất tối đa 300 mã lực và mô-men xoắn cực đại 1.200 Nm. Xe có thể chở được tối đa 18 m3 nhiên liệu trong bồn được thiết kế chuyên dụng.\nNgoài ra, xe còn được trang bị các tính năng an toàn như hệ thống phanh ABS, cảm biến áp suất lốp, hệ thống phân phối lực phanh điện tử EBD và cảm biến lùi. Thiết kế của xe bồn xăng dầu Kamaz 53229 (6X4) - 18 M3 cũng được tối ưu hóa để đảm bảo sự ổn định và an toàn trong quá trình vận hành.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/53229_6x4_bon_18_khoi_3.jpg',
            specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
        },
        {
            id: 10,
            make: 'Xe chuyên dụng',
            model: 'XE BỒN XĂNG DẦU KAMAZ 6540 (8X4) - 23 M3',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'XE BỒN XĂNG DẦU KAMAZ 6540 (8X4) - 23 M3 là một chiếc xe tải bồn được thiết kế để vận chuyển xăng dầu, dầu diesel và các loại nhiên liệu khác. Chiếc xe này có khả năng chứa lượng xăng dầu lên đến 23m3 và được trang bị động cơ Kamaz 740.62-400, dung tích 10,85 lít, công suất tối đa 400 mã lực và mô-men xoắn cực đại 1840 Nm.\nXe bồn xăng dầu Kamaz 6540 được trang bị hệ thống treo phía trước bằng nhíp lá và hệ thống treo phía sau bằng nhíp lá kép. Hệ thống phanh bao gồm phanh đĩa ở cả hai trục và hệ thống ABS, giúp xe dừng lại nhanh chóng và an toàn.\nNgoài ra, chiếc xe bồn xăng dầu Kamaz 6540 còn được trang bị các tính năng tiêu chuẩn như cabin rộng rãi và thoải mái cho tài xế, hệ thống điều hòa không khí, đầu đĩa CD và AM/FM radio.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/6540_xYng_dYu_2_1.jpg',
            specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
        },
        {
            id: 11,
            make: 'Xe chuyên dụng',
            model: 'XE BỒN XĂNG DẦU KAMAZ 6540 (8X4) - 25 M3',
            year: 2019,
            fuelType: 'Dầu DO',
            kilometers: 0,
            details:
                'Xe bồn xăng dầu Kamaz 6540 (8x4) - 25 m3 là một trong những sản phẩm của Kamaz dùng để vận chuyển xăng dầu. Xe được trang bị động cơ Kamaz 740.62-400, dung tích 10,85 lít, công suất 400 mã lực, cho tốc độ tối đa là 90 km/h. Xe có trọng lượng toàn bộ 32 tấn và tải trọng 24 tấn.\nThùng bồn được làm bằng thép không gỉ có dung tích 25 m3, được thiết kế để chịu được áp lực lớn và chống lại va đập trong quá trình vận chuyển. Hệ thống phun xăng được trang bị đầy đủ và được điều khiển bằng một bộ điều khiển điện tử.\nNgoài ra, xe còn được trang bị hệ thống treo thích hợp để giảm chấn và tăng độ ổn định cho xe khi vận hành trên đường, cùng với đó là hệ thống phanh đĩa và hệ thống treo phụ trợ bằng khí nén. Xe bồn xăng dầu Kamaz 6540 (8x4) - 25 m3 được thiết kế để đảm bảo an toàn và hiệu quả cho việc vận chuyển xăng dầu.',
            price: 0,
            photoUrl:
                'https://kamazvietnam.com.vn/vnt_upload/product/06_2018/6540_8x4_bon_nhom_25m3_65446_12.jpg',
            specUrl: 'https://cloud.newatlantic.vn/s/KHNj3tbooqaaBZA/preview',
        },
    ]);
}
