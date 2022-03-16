const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const mysql = require('mysql');
const db =require("./database.js");

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  db.query('select * from productInfo', function(error, results, fields){
    if (error) {console.log(error);}
    else{res.send({products: results,})};
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
