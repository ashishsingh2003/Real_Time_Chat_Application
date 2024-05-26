const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const {chats}=require("./data");
app.get('/',(req,res)=>{
    res.send("bhej di");
})
app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id); 
    const singlechat=chats.find((c)=> c._id==req.params.id);
    res.send(singlechat);
})
const Port=process.env.Port||8080;
app.listen(Port,()=>{
    console.log("server connected");
})