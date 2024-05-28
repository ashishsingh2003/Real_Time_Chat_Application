import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import ChatPage from './Pages/ChatPage'
import "./App.css"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/chats" element={<ChatPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
