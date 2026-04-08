import React from "react";

export default function HiepTranWedding() {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", borderBottom: "1px solid #eee" }}>
        <h2>Hiệp Trần Wedding</h2>
        <nav>
          <a href="#" style={{ margin: 10 }}>Trang chủ</a>
          <a href="#" style={{ margin: 10 }}>Dịch vụ</a>
          <a href="#" style={{ margin: 10 }}>Bảng giá</a>
          <a href="#" style={{ margin: 10 }}>Liên hệ</a>
        </nav>
      </header>

      {/* Banner */}
      <section style={{ background: "#fce4ec", padding: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: 36 }}>Dịch vụ cưới hỏi trọn gói</h1>
        <p>Trang trí gia tiên – Mâm quả – Áo dài – Xe hoa</p>
        <button style={{ marginTop: 20, padding: "12px 24px", background: "#e91e63", color: "white", border: "none" }}>
          Tư vấn ngay
        </button>
      </section>

      {/* Services */}
      <section style={{ padding: 40 }}>
        <h2 style={{ textAlign: "center" }}>Dịch vụ nổi bật</h2>
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {["Trang trí gia tiên", "Mâm quả cưới", "Trang phục cưới"].map((item, i) => (
            <div key={i} style={{ flex: 1, border: "1px solid #ddd", padding: 20 }}>
              <h3>{item}</h3>
              <p>Dịch vụ chuyên nghiệp – giá tốt – nhiều mẫu đẹp</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: 40, background: "#fafafa" }}>
        <h2 style={{ textAlign: "center" }}>Bảng giá dịch vụ</h2>
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {[{
            name: "Cơ bản", price: "5.000.000đ"
          }, {
            name: "Tiêu chuẩn", price: "10.000.000đ"
          }, {
            name: "Cao cấp", price: "20.000.000đ"
          }].map((p, i) => (
            <div key={i} style={{ flex: 1, border: "1px solid #ddd", padding: 20, textAlign: "center" }}>
              <h3>{p.name}</h3>
              <p style={{ fontSize: 24 }}>{p.price}</p>
              <button>Chọn gói</button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: 40 }}>
        <h2 style={{ textAlign: "center" }}>Hình ảnh thực tế</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 20 }}>
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} style={{ background: "#ddd", height: 120 }}></div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: 40, textAlign: "center", background: "#fce4ec" }}>
        <h2>Liên hệ ngay</h2>
        <p>Hotline: 0900 000 000</p>
        <p>Zalo: 0900 000 000</p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: 20 }}>
        <p>© Hiệp Trần Wedding</p>
      </footer>
    </div>
  );
}
