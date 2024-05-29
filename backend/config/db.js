const mongoose =require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const connectDB=async ()=>{
    try {
        const conn=await mongoose.connect('mongodb+srv://ashish123:ashish123@chat.e9yicgz.mongodb.net/?retryWrites=true&w=majority&appName=Chat');
        console.log('db connected');

    } catch (error) {
        console.log("error");
    }
}
module.exports=connectDB;