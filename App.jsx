import React from "react";

const products = [
  {
    name: "Backdrop hoa tươi",
    price: "12.000.000đ",
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485"
  },
  {
    name: "Lối đi hoa cưới",
    price: "6.000.000đ",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    name: "Trang trí sân khấu",
    price: "15.000.000đ",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
  }
];

export default function App() {
  return (
    <div style={{ fontFamily: "Segoe UI", background: "#f5f6fa" }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg,#e91e63,#ff758c)",
        color: "#fff",
        padding: 40,
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: 40 }}>Hiệp Trần Wedding</h1>
        <p>Dịch vụ trang trí cưới hỏi chuyên nghiệp</p>
      </div>

      <div style={{ maxWidth: 1200, margin: "30px auto", display: "flex", gap: 20 }}>

        {/* SIDEBAR DANH MỤC */}
        <div style={{ width: 280, background: "#fff", padding: 20, borderRadius: 10 }}>
          <h3 style={{ marginBottom: 15 }}>DANH MỤC SẢN PHẨM</h3>

          <div style={{ borderTop: "1px solid #eee" }}>
            <p>TRANG TRÍ NHÀ THỜ</p>
            <p>TRANG TRÍ GIA TIÊN HOA LỤA</p>
            <p>TRANG TRÍ GIA TIÊN HOA TƯƠI</p>

            <p style={{ color: "#e91e63", fontWeight: "bold" }}>
              TRANG TRÍ TIỆC CƯỚI HOA TƯƠI
            </p>

            <ul style={{ marginLeft: 15 }}>
              <li>Backdrop Hoa Tươi</li>
              <li>Gallery Hoa Tươi</li>
              <li>Lối Đi Hoa Tươi</li>
              <li>Sân Khấu Hoa Tươi</li>
            </ul>

            <p>MÂM QUẢ - LONG PHỤNG</p>
            <p>XE HOA + XE KHÁCH</p>
            <p>RẠP + BÀN TIỆC</p>
            <p>HOA TƯƠI CẦM TAY + CÀI ÁO</p>
            <p>TRANG TRÍ SỰ KIỆN - SINH NHẬT</p>
            <p>ĐÈN CÂY LONG PHỤNG + PHỤ KIỆN</p>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div style={{ flex: 1 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 20
          }}>

            {products.map((p, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
              }}>

                <img src={p.img} alt="" style={{ width: "100%", height: 200, objectFit: "cover" }} />

                <div style={{ padding: 15 }}>
                  <h3>{p.name}</h3>
                  <p style={{ color: "#e91e63", fontWeight: "bold" }}>{p.price}</p>

                  <button style={{
                    marginTop: 10,
                    width: "100%",
                    padding: 10,
                    background: "#e91e63",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6
                  }}>
                    Liên hệ
                  </button>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
}
