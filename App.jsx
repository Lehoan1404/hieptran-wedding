import React from "react";

const packages = [
  {
    id: "goi1",
    title: "GÓI CƠ BẢN",
    price: "5.000.000đ",
    items: ["Cổng hoa đơn giản", "Backdrop gia tiên", "Bàn thờ", "Ghế hai họ"]
  },
  {
    id: "goi2",
    title: "GÓI TIÊU CHUẨN",
    price: "10.000.000đ",
    items: ["Cổng hoa cao cấp", "Backdrop đẹp", "Bàn gia tiên", "Hoa tươi"]
  },
  {
    id: "goi3",
    title: "GÓI CAO CẤP",
    price: "20.000.000đ",
    items: ["Cổng thiết kế", "Backdrop cao cấp", "Full trang trí", "Concept riêng"]
  }
];

export default function HiepTranWedding() {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#f4f6f8" }}>
      <div style={{ maxWidth: 1100, margin: "auto", padding: 20 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <h1 style={{ fontSize: 36, color: "#e91e63" }}>Hiệp Trần Wedding</h1>
          <p style={{ color: "#555" }}>Trang trí gia tiên - Dịch vụ cưới hỏi trọn gói</p>
        </div>

        {/* Layout */}
        <div style={{ display: "flex", gap: 20 }}>

          {/* Main */}
          <div style={{ flex: 3, background: "#fff", padding: 25, borderRadius: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>

            <h2 style={{ fontSize: 28 }}>Bảng giá trang trí gia tiên</h2>

            {/* TOC */}
            <div style={{ marginTop: 20, padding: 15, background: "#fafafa", borderRadius: 8 }}>
              <b>Mục lục</b>
              <ul>
                {packages.map(p => (
                  <li key={p.id}><a href={`#${p.id}`}>{p.title}</a></li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            {packages.map(p => (
              <div key={p.id} id={p.id} style={{ marginTop: 30 }}>
                <h3 style={{ color: "#333" }}>{p.title}</h3>
                <p style={{ color: "#e91e63", fontSize: 20, fontWeight: "bold" }}>{p.price}</p>
                <ul>
                  {p.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA */}
            <div style={{ marginTop: 40, padding: 20, background: "#ffe4ec", textAlign: "center", borderRadius: 10 }}>
              <h3>Liên hệ ngay để được tư vấn</h3>
              <p>0900 000 000</p>
              <button style={{ background: "#e91e63", color: "#fff", padding: "10px 20px", border: "none", borderRadius: 6 }}>
                Nhắn Zalo
              </button>
            </div>

          </div>

          {/* Sidebar */}
          <div style={{ flex: 1 }}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <h3>Liên hệ nhanh</h3>
              <p>📞 0900 000 000</p>
              <p>💬 Zalo</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
