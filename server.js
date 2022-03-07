const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  res.send({
    products: [
      {
        name: "유기농 순면커버 생리대",
        maker: "라엘",
        price: 4290,
        imageUrl: "./images/products/product1.jpg",
        ranking: 1,
      },
      {
        name: "러브 오버나이트 (중형)",
        maker: "시크릿 데이",
        price: 3500,
        imageUrl: "./images/products/product2.jpg",
        ranking: 2,
      },
      {
        name: "쏘피 한결 생리대",
        maker: "쏘피",
        price: 7500,
        imageUrl: "./images/products/product3.jpg",
        ranking: 3,
      },
    ],
  });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  res.send(`id가 ${id}인 상품의 상세정보를 받아오는 중입니다.`);
});

app.listen(port, () => {
  console.log("바람 웹서버 동작");
});
