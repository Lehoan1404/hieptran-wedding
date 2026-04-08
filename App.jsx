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
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f8f9fb" }}>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg,#e91e63,#ff758c)", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>Hiệp Trần Wedding</h1>
        <p style={{ fontSize: 18 }}>Trang trí gia tiên - Dịch vụ cưới hỏi trọn gói</p>
      </div>

      <div style={{ maxWidth: 1100, margin: "-40px auto 0", padding: 20 }}>

        <div style={{ display: "flex", gap: 25, alignItems: "flex-start" }}>

          {/* MAIN */}
          <div style={{ flex: 3 }}>

            <div style={{ background: "#fff", padding: 30, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <h2 style={{ fontSize: 30, marginBottom: 10 }}>Bảng giá trang trí gia tiên</h2>

              {/* TOC */}
              <div style={{ marginTop: 20, padding: 20, background: "#f1f3f6", borderRadius: 12 }}>
                <b>Mục lục</b>
                <ul>
                  {packages.map(p => (
                    <li key={p.id} style={{ marginTop: 5 }}>
                      <a href={`#${p.id}`} style={{ color: "#e91e63", textDecoration: "none" }}>{p.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PACKAGES */}
              {packages.map(p => (
                <div key={p.id} id={p.id} style={{ marginTop: 40, paddingBottom: 20, borderBottom: "1px solid #eee" }}>
                  <h3 style={{ fontSize: 22 }}>{p.title}</h3>
                  <p style={{ color: "#e91e63", fontSize: 22, fontWeight: "bold" }}>{p.price}</p>
                  <ul style={{ marginTop: 10 }}>
                    {p.items.map((it, i) => (
                      <li key={i} style={{ marginBottom: 6 }}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* CTA */}
              <div style={{ marginTop: 40, padding: 30, background: "linear-gradient(135deg,#ffe4ec,#fff)", textAlign: "center", borderRadius: 16 }}>
                <h3>Liên hệ ngay để được tư vấn</h3>
                <p>0900 000 000</p>
                <button style={{ marginTop: 10, background: "#e91e63", color: "#fff", padding: "12px 25px", border: "none", borderRadius: 8, fontSize: 16 }}>
                  Nhắn Zalo
                </button>
              </div>

            </div>

          </div>

          {/* SIDEBAR */}
          <div style={{ flex: 1 }}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.08)", position: "sticky", top: 20 }}>
              <h3>Liên hệ nhanh</h3>
              <p style={{ marginTop: 10 }}>📞 0900 000 000</p>
              <button style={{ marginTop: 10, width: "100%", background: "#25D366", color: "#fff", padding: 10, border: "none", borderRadius: 8 }}>
                Chat Zalo
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
