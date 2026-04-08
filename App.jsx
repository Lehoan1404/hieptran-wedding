import React from "react";

export default function HiepTranWedding() {
  return (
    <div style={{ fontFamily: "Arial", maxWidth: 900, margin: "auto", lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{ padding: "20px 0", borderBottom: "1px solid #ddd" }}>
        <h1>Hiệp Trần Wedding</h1>
      </header>

      {/* Title */}
      <section style={{ padding: "20px 0" }}>
        <h2 style={{ fontSize: 28 }}>BẢNG GIÁ TRANG TRÍ GIA TIÊN</h2>
        <p>Cập nhật mới nhất</p>
      </section>

      {/* Table of content */}
      <section style={{ background: "#f9f9f9", padding: 20 }}>
        <h3>Mục lục</h3>
        <ul>
          <li>Gói cơ bản</li>
          <li>Gói tiêu chuẩn</li>
          <li>Gói cao cấp</li>
        </ul>
      </section>

      {/* Package 1 */}
      <section style={{ padding: "20px 0" }}>
        <h3>GÓI TRANG TRÍ GIA TIÊN CƠ BẢN – 5.000.000đ</h3>
        <ul>
          <li>Cổng hoa đơn giản</li>
          <li>Backdrop gia tiên</li>
          <li>Bàn gia tiên đầy đủ</li>
          <li>Ghế ngồi hai họ</li>
        </ul>
      </section>

      {/* Package 2 */}
      <section style={{ padding: "20px 0" }}>
        <h3>GÓI TRANG TRÍ GIA TIÊN TIÊU CHUẨN – 10.000.000đ</h3>
        <ul>
          <li>Cổng hoa cao cấp</li>
          <li>Backdrop sang trọng</li>
          <li>Bàn gia tiên trang trí đẹp</li>
          <li>Bàn hai họ đầy đủ</li>
          <li>Hoa tươi trang trí</li>
        </ul>
      </section>

      {/* Package 3 */}
      <section style={{ padding: "20px 0" }}>
        <h3>GÓI TRANG TRÍ GIA TIÊN CAO CẤP – 20.000.000đ</h3>
        <ul>
          <li>Cổng hoa thiết kế riêng</li>
          <li>Backdrop cao cấp</li>
          <li>Bàn gia tiên full set</li>
          <li>Bàn hai họ sang trọng</li>
          <li>Hoa tươi cao cấp</li>
          <li>Trang trí toàn bộ không gian</li>
        </ul>
      </section>

      {/* Contact */}
      <section style={{ padding: "30px 0", textAlign: "center", background: "#fce4ec" }}>
        <h3>Liên hệ ngay để được tư vấn</h3>
        <p>Hotline: 0900 000 000</p>
        <button style={{ padding: "10px 20px", background: "#e91e63", color: "white", border: "none" }}>
          Nhắn Zalo
        </button>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: 20 }}>
        <p>© Hiệp Trần Wedding</p>
      </footer>
    </div>
  );
}
