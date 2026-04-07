import React from "react";

export default function HiepTranWedding() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
      {/* Header */}
      <header style={{background:'#f8d7da', padding:'20px', textAlign:'center'}}>
        <h1>Hiệp Trần Wedding</h1>
        <p>Dịch vụ cưới hỏi trọn gói chuyên nghiệp</p>
      </header>

      {/* Banner */}
      <section style={{padding:'40px', textAlign:'center'}}>
        <h2>Tổ chức cưới hỏi trọn gói từ A-Z</h2>
        <p>Trang trí gia tiên – Mâm quả – Trang phục – Xe hoa</p>
        <button style={{padding:'10px 20px', background:'#ff4d6d', color:'#fff', border:'none'}}>Liên hệ ngay</button>
      </section>

      {/* Services */}
      <section style={{padding:'40px'}}>
        <h2>Dịch vụ của Hiệp Trần</h2>
        <ul>
          <li>Trang trí gia tiên trọn gói</li>
          <li>Mâm quả cưới hỏi (4 - 12 mâm)</li>
          <li>Cho thuê áo dài, vest</li>
          <li>Đội bưng quả chuyên nghiệp</li>
          <li>Cho thuê xe hoa</li>
        </ul>
      </section>

      {/* Pricing */}
      <section style={{padding:'40px', background:'#f1f1f1'}}>
        <h2>Bảng giá tham khảo</h2>
        <div>
          <p><strong>Gói cơ bản:</strong> 5.000.000đ</p>
          <p><strong>Gói tiêu chuẩn:</strong> 10.000.000đ</p>
          <p><strong>Gói cao cấp:</strong> 20.000.000đ</p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{padding:'40px'}}>
        <h2>Hình ảnh thực tế</h2>
        <p>(Bạn sẽ thêm ảnh thật vào đây sau)</p>
      </section>

      {/* Contact */}
      <section style={{padding:'40px', textAlign:'center'}}>
        <h2>Liên hệ</h2>
        <p>Hotline: 0900 000 000</p>
        <p>Zalo: 0900 000 000</p>
        <p>Địa chỉ: TP.HCM</p>
      </section>

      {/* Footer */}
      <footer style={{background:'#f8d7da', padding:'20px', textAlign:'center'}}>
        <p>© Hiệp Trần Wedding</p>
      </footer>
    </div>
  );
}
