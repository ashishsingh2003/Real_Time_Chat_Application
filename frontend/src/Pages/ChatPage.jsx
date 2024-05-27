import React, { useEffect } from 'react'
import axios from 'axios';
function ChatPage() {
   const chat=async ()=>{
     const x=await axios.get('http://localhost:8081/api/chat');
     console.log(x);
   }
   useEffect(()=>{
    chat();
   },[])
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage