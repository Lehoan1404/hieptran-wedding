import React from "react";

const Section = ({ id, title, price, items }) => (
  <section id={id} style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 24, marginBottom: 10 }}>{title}</h2>
    <p style={{ fontSize: 20, color: "#e91e63", fontWeight: "bold" }}>{price}</p>
    <ul style={{ paddingLeft: 20 }}>
      {items.map((it, i) => (
        <li key={i} style={{ marginBottom: 6 }}>{it}</li>
      ))}
    </ul>
  </section>
);

export default function HiepTranWedding() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      {/* Container giống blog */}
      <div style={{ maxWidth: 900, margin: "auto", background: "#fff", padding: 30 }}>

        {/* Header */}
        <h1 style={{ fontSize: 32, marginBottom: 10 }}>BẢNG GIÁ TRANG TRÍ GIA TIÊN</h1>
        <p style={{ color: "gray" }}>Cập nhật mới nhất - Hiệp Trần Wedding</p>

        {/* Mục lục */}
        <div style={{ background: "#fafafa", padding: 20, marginTop: 20, border: "1px solid #eee" }}>
          <h3>Mục lục</h3>
          <ul>
            <li><a href="#goi1">Gói cơ bản</a></li>
            <li><a href="#goi2">Gói tiêu chuẩn</a></li>
            <li><a href="#goi3">Gói cao cấp</a></li>
          </ul>
        </div>

        {/* Nội dung dài giống web mẫu */}
        <div style={{ marginTop: 30 }}>
          <Section
            id="goi1"
            title="GÓI TRANG TRÍ GIA TIÊN CƠ BẢN"
            price="5.000.000đ"
            items={[
              "Cổng hoa lụa đơn giản",
              "Backdrop gia tiên",
              "Bàn thờ gia tiên",
              "Ghế ngồi hai họ",
              "Trang trí cơ bản"
            ]}
          />

          <Section
            id="goi2"
            title="GÓI TRANG TRÍ GIA TIÊN TIÊU CHUẨN"
            price="10.000.000đ"
            items={[
              "Cổng hoa lụa cao cấp",
              "Backdrop thiết kế đẹp",
              "Bàn gia tiên đầy đủ",
              "Bàn hai họ trang trí",
              "Hoa tươi trang trí",
              "Trang trí tổng thể không gian"
            ]}
          />

          <Section
            id="goi3"
            title="GÓI TRANG TRÍ GIA TIÊN CAO CẤP"
            price="20.000.000đ"
            items={[
              "Cổng hoa thiết kế riêng",
              "Backdrop cao cấp",
              "Bàn gia tiên full set",
              "Bàn hai họ sang trọng",
              "Hoa tươi cao cấp",
              "Trang trí toàn bộ không gian",
              "Setup theo concept riêng"
            ]}
          />
        </div>

        {/* CTA giống web bán hàng */}
        <div style={{ textAlign: "center", marginTop: 40, padding: 20, background: "#fde4ec" }}>
          <h3>Liên hệ ngay để được tư vấn chi tiết</h3>
          <p>Hotline: 0900 000 000</p>
          <button style={{ padding: "12px 24px", background: "#e91e63", color: "#fff", border: "none" }}>
            Nhắn Zalo ngay
          </button>
        </div>

      </div>
    </div>
  );
}
