const jwt=require('jsonwebtoken');


const generatetoken=(id)=>{
    return jwt.sign({id},"ashish",{
        expiresIn:"30d",
    })
}
module.exports=generatetoken;