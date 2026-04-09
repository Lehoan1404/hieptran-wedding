<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop Tài Khoản Instagram</title>
  <style>
    body { font-family: Arial; margin: 0; background: #f5f5f5; }
    header { background: #833ab4; color: white; padding: 15px; text-align: center; }
    .container { padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .card { background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .card h3 { margin: 0 0 10px; }
    .price { color: green; font-weight: bold; }
    button { background: #833ab4; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; }
    button:hover { opacity: 0.9; }
  </style>
</head>
<body>

<header>
  <h1>Shop Tài Khoản Instagram</h1>
</header>

<div class="container" id="product-list"></div>

<script>
  const products = [
    { id: 1, name: "Acc 1k follow", price: 50000 },
    { id: 2, name: "Acc 5k follow", price: 150000 },
    { id: 3, name: "Acc 10k follow", price: 300000 }
  ];

  const container = document.getElementById('product-list');

  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p class="price">${p.price.toLocaleString()} VND</p>
      <button onclick="buy(${p.id})">Mua ngay</button>
    `;
    container.appendChild(div);
  });

  function buy(id) {
    alert('Bạn đã chọn mua tài khoản ID: ' + id);
  }
</script>

</body>
</html>
