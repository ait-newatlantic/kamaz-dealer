import { data } from 'data'

export const Footer = () => {
  return (
    <>
      <div className="flex justify-between mb-3 px-10">
        <div className="space-y-1 text-sm">
          <p className="uppercase font-bold">Liên hệ với chúng tôi</p>
          <p>CÔNG TY CỔ PHẦN KAMAZ VIỆT NAM</p>
          <p>
            Trụ sở chính KAMAZ: 156 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1,
            Thành phố Hồ Chí Minh.{' '}
          </p>
          <p>{data.address}</p>
          <p>
            Hotline (24/24): {data.phone_number} (Mr. {data.name})
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="font-bold">TRAO HÀNG TẬN NƠI</p>
            <p>Đảm bảo giao xe đúng nơi với thời gian nhanh lẹ</p>
          </div>
          <div>
            <p className="font-bold">CAM KẾT CHẤT LƯỢNG</p>
            <p>Chúng tôi cam kết chất lượng xe tốt nhất</p>
          </div>
          <div>
            <p className="font-bold">GIÁ THÀNH HỢP LÝ</p>
            <p>Chúng tôi luôn đảm bảo giá xe luôn hợp lý và ổn định</p>
          </div>
          <div>
            <p className="font-bold">CHO VAY NHANH GỌN</p>
            <p>Hỗ trợ vốn ngân hàng nhanh gọn</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 text-center text-white p-2 text-sm">
        Copyright ©{new Date().getFullYear()} - HÃNG XE TẢI KAMAZ VIỆT NAM
      </div>
    </>
  )
}
