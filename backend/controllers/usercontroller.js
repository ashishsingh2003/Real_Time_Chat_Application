const asyncHandler=require('express-async-handler')
const User=require('../Models/User');
const generatetoken=require('../config/generatetoken');
const bcrypt=require('bcrypt');
const registeruser=asyncHandler(async (req,res)=>{
        const {name,email,password,pic}=req.body;
          console.log(req.body.password);
  const userexist=await User.findOne({email});
  if(userexist)
    {
        res.status(400);
        throw new Error("user already exist");
    }
 
   const hashpassword=await bcrypt.hash(password,10);
    const user=await User.create({
        name,
        email,
        password:hashpassword,
        pic,
      
    });
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            password:user.password,
            pic:user.pic,
            token:generatetoken(user._id),
        })
    }
    else{
        res.status(400)
        throw new Error("user can not be created");
    }
})
//for handling error in this we installed express package express-async-handler
const authuser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    
    const user=await User.findOne({email});
    if(user)
        {
            bcrypt.compare(password,user.password,(err,result)=>{if(result){
                res.json({
                    _id:user.id,
                    name:user.name,
                    email:user.email,
                    pic:user.pic,
                    token:generatetoken(user._id),
                });}
                else{
                    res.json({msg:"invalid"})
                }})
           
        }
        else{
            res.status(401);
            throw new Error("invalid email or password");
        }
})
module.exports={registeruser,authuser};