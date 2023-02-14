/* eslint-disable react/no-unescaped-entities */
import SEO from 'components/SEO'

export default function Introduction() {
  return (
    <>
      <SEO
        title={'Giới thiệu'}
        description={'Tin tức quốc tế | Xe tải Kamaz giá rẻ'}
        canonicalPath={`/news`}
      />
      <div className="text-3xl text-center font-bold mt-20">
        <h1>Lời ngỏ</h1>
      </div>
      <div className="m-24">
        <div className="space-y-2 font-semibold">
          <p>
            Lời đầu tiên, thay mặt Công ty Cổ phần Kamaz Việt Nam tôi xin gứi
            tới Quý Khách hàng lời chào trân trọng nhất cùng lời chúc sức khỏe,
            thành công và thịnh vượng!
          </p>
          <p>
            Với nhiều năm kinh nghiệm trong lĩnh vực hoạt động cùng với đội ngũ
            cán bộ nhân viên chuyên nghiệp, trình độ cao và trang thiết bị đa
            dạng số lượng lớn, Chúng tôi tự hào là nhà phân phối uy tín và tin
            cậy tại Việt Nam của hãng xe Kamaz (hãng xe tải lớn nhất Nga và lớn
            thứ 8 trên thế giới). Kamaz đã vào Việt Nam từ những năm 1978 với
            mục đích cung cấp xe phục vụ quốc phòng và thương mại. Kế thừa thành
            tựu và kinh nghiệm của hãng, Kamaz Việt Nam ra đời với mục đích phát
            triển thị trường Việt Nam. Với bề dày kinh nghiệm, các dòng xe
            thương mại, xe quân sự Kamaz đã chiếm được lòng tin của nhiều đối
            tác lớn ở Việt Nam như: Bộ Quốc Phòng, Tập đoàn Trung Nam, Donacoop,
            Đá Hóa An,....
          </p>
          <p>
            {' '}
            Trong suốt chiều dài hoạt động của mình, Chúng tôi đã, đang và sẽ
            luôn đồng hành phát triển cùng với Quý Khách hàng với mục tiêu tối
            thượng là 'mang đến cho Khách hàng các sản phẩm và dịch vụ có chất
            lượng tốt nhất với giá cả cạnh tranh nhất". Chúng tôi tin rằng sẽ
            làm hài lòng và đem đến những giá trị thiết thực nhất cho Quý Khách
            hàng. Từ đó, Chúng tôi và Quý vị cùng nhau đóng góp nhiều giá trị
            tốt đẹp hơn nữa cho cộng đồng và xã hội.
          </p>
          <p>
            Một lần nữa, thay mặt Công ty tôi xin chân thành cảm ơn Quý Khách
            hàng đã tín nhiệm và hợp tác với Chúng tôi trong thời gian qua và hy
            vọng Kamaz Việt Nam sẽ tiếp tục được đóng góp một phần nhỏ vào sự
            thành công của Quý vị!
          </p>
          <div className="pt-10 text-center space-y-1">
            <p>TRÂN TRỌNG!</p>
            <p>ĐẠI DIỆN CÔNG TY</p>
            <img
              className="h-20 mx-auto"
              src="/img/signature.jpg"
              alt="signature"
            />
            <p>NGUYỄN BẢO QUỐC THUẤN</p>
            <p>(Tổng Giám Đốc)</p>
          </div>
        </div>
      </div>
    </>
  )
}
