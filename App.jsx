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
  },
  {
    name: "Cổng hoa cưới",
    price: "8.000.000đ",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf"
  },
  {
    name: "Bàn gallery cưới",
    price: "5.000.000đ",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
  },
  {
    name: "Trang trí gia tiên",
    price: "10.000.000đ",
    img: "https://images.unsplash.com/photo-1521336575822-6da63fb45455"
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

      {/* GRID */}
      <div style={{
        maxWidth: 1100,
        margin: "40px auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: 20
      }}>

        {products.map((p, i) => (
          <div key={i} style={{
            background: "#fff",
            borderRadius: 15,
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
          }}>

            {/* IMAGE */}
            <img src={p.img} alt=""
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />

            {/* CONTENT */}
            <div style={{ padding: 15 }}>
              <h3 style={{ fontSize: 18 }}>{p.name}</h3>
              <p style={{
                color: "#e91e63",
                fontWeight: "bold",
                fontSize: 16
              }}>
                {p.price}
              </p>

              <button style={{
                marginTop: 10,
                width: "100%",
                padding: 10,
                background: "#e91e63",
                color: "#fff",
                border: "none",
                borderRadius: 8
              }}>
                Liên hệ
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
