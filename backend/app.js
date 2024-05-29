const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require('cors');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {chats}=require("./data.js");
const connectDB = require("./config/db.js");
connectDB();
app.use(cors({origin:['http://localhost:5173']}));
app.get('/',(req,res)=>{
    res.send("bhej di");
})
app.get('/api/chat',(req,res)=>{
    console.log("a gya");
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id); 
    const singlechat=chats.find((c)=> c._id==req.params.id);
    res.send(singlechat);
})

app.listen('8081',()=>{
    console.log("server connected");
})