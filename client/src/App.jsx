// import { socket } from './lib/socket'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Home from './pages/Home'
import Game from './pages/Game'
import Lobby from "./pages/Lobby"
import Layout from "./pages/Layout"
import './App.css'

function App() {
  const [ingame, setIngame] = useState(false)
  const createLobby = () => {
    setIngame(true)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App
