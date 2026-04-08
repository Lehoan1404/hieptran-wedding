import React from "react";

const packages = [
  {
    id: "goi1",
    title: "GÓI TRANG TRÍ GIA TIÊN CƠ BẢN",
    price: "5.000.000đ",
    items: [
      "Cổng hoa lụa đơn giản",
      "Backdrop gia tiên",
      "Bàn thờ gia tiên",
      "Ghế ngồi hai họ",
      "Trang trí cơ bản"
    ]
  },
  {
    id: "goi2",
    title: "GÓI TRANG TRÍ GIA TIÊN TIÊU CHUẨN",
    price: "10.000.000đ",
    items: [
      "Cổng hoa lụa cao cấp",
      "Backdrop thiết kế đẹp",
      "Bàn gia tiên đầy đủ",
      "Bàn hai họ trang trí",
      "Hoa tươi trang trí",
      "Trang trí tổng thể không gian"
    ]
  },
  {
    id: "goi3",
    title: "GÓI TRANG TRÍ GIA TIÊN CAO CẤP",
    price: "20.000.000đ",
    items: [
      "Cổng hoa thiết kế riêng",
      "Backdrop cao cấp",
      "Bàn gia tiên full set",
      "Bàn hai họ sang trọng",
      "Hoa tươi cao cấp",
      "Trang trí toàn bộ không gian",
      "Setup theo concept riêng"
    ]
  }
];

export default function HiepTranWedding() {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#f1f1f1" }}>
      <div style={{ maxWidth: 1100, margin: "auto", display: "flex", gap: 30 }}>

        {/* MAIN CONTENT */}
        <div style={{ flex: 3, background: "#fff", padding: 30 }}>

          <h1 style={{ fontSize: 34 }}>BẢNG GIÁ TRANG TRÍ GIA TIÊN</h1>
          <p style={{ color: "#777" }}>Dịch vụ cưới hỏi Hiệp Trần Wedding</p>

          {/* TOC */}
          <div style={{ border: "1px solid #ddd", padding: 20, marginTop: 20, background: "#fafafa" }}>
            <strong>Mục lục</strong>
            <ul>
              {packages.map(p => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>{p.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTENT */}
          {packages.map(p => (
            <div key={p.id} id={p.id} style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 26 }}>{p.title}</h2>
              <p style={{ fontSize: 22, color: "#d81b60", fontWeight: "bold" }}>{p.price}</p>
              <ul>
                {p.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 50, padding: 30, textAlign: "center", background: "#fde4ec" }}>
            <h3>Liên hệ ngay để được tư vấn</h3>
            <p>Hotline: 0900 000 000</p>
            <button style={{ padding: "12px 25px", background: "#e91e63", color: "white", border: "none", borderRadius: 4 }}>
              Nhắn Zalo
            </button>
          </div>

        </div>

        {/* SIDEBAR giống blog */}
        <div style={{ flex: 1 }}>
          <div style={{ background: "#fff", padding: 20, marginBottom: 20 }}>
            <h3>Dịch vụ nổi bật</h3>
            <ul>
              <li>Trang trí gia tiên</li>
              <li>Mâm quả cưới</li>
              <li>Áo dài cưới</li>
            </ul>
          </div>

          <div style={{ background: "#fff", padding: 20 }}>
            <h3>Liên hệ</h3>
            <p>0900 000 000</p>
          </div>
        </div>

      </div>
    </div>
  );
}
