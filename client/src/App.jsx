import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from './pages/Home'
import Game from './pages/Game'
import Lobby from "./pages/Lobby"
import Layout from "./pages/Layout"
import New from "./pages/New"
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="lobby" element={<Lobby/>} />
            <Route path="lobby/:id" element={<Game/>}/>
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
