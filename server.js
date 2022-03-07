const express =require('express');
const cors= require('cors');
const app=express();
const port= 8080;

app.use(express.json());
app.use(cors());

app.get("/products",(req,res) =>{
    res.send("업로드 된 상품 입니다.");
});

app.post("/products",(req, res)=>{
    res.send("상품이 등록되었습니다.");
});

app.listen(port, ()=> {
    console.log("바람웹서버 동작");
});