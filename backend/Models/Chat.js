const mongoose=require('mongoose');

const chatschema=mongoose.Schema({
    chatName:{
        type:String,
        trim:true
    },
    isgroup:{
        type:Boolean,
        default:false
    },
    chats:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    latest:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    },
    groupadmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }


},
{
    timestamps:true,
})

const Chat=mongoose.model('Chat',chatschema);
module.exports=Chat;