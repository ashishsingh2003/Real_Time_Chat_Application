import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ChatPage() {
  const [chats,setchat]=useState([]);
   const chat=async ()=>{
     const x=await axios.get('http://localhost:8081/api/chat');
     setchat(x.data);
     console.log(x.data);
   }
   useEffect(()=>{
    chat();
   },[])
  return (
    <div>
      {
             chats.map((chat)=>{
              return (
               <div key={chat._id}>{chat.chatName}</div>)
             })
      }
    </div>
  )
}

export default ChatPage