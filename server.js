const express =require('express');
const cors= require('cors');
const app=express();
const port= 8080;

app.use(express.json());
app.use(cors());

app.get("/products",(req,res) =>{
    res.send({
        products : [
            {
                id:1,
                name: "유기농 순면커버 생리대",
                maker: "라엘",
                price: 4290,
                imageUrl: "./images/products/product1.jpg",
            },
            {
                id:2,
                name: "러브 오버나이트 (중형)",
                maker: "시크릿데이",
                price: 3500,
                imageUrl: "./images/products/product2.jpg",
            },
            {
                id:3,
                name: "쏘피 한결 생리대",
                maker: "쏘피",
                price: 7500,
                imageUrl: "./images/products/product3.jpg",
            },
        ],
    });
});

app.post("/products",(req, res)=>{
    const body= req.body;
    res.send({
        body: body,
    },);
});

app.listen(port, ()=> {
    console.log("바람웹서버 동작");
});