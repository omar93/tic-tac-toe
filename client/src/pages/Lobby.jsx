import { useState } from "react"
import { socket } from "../lib/socket.js"

function Lobby() {

  const [boardSize, setBoardSize] = useState(0)
  const startGame = () => {
    console.log(boardSize);
    socket.emit('game', boardSize)
  }

  return (
    <div>
      <span>Board size: </span>
      <input type="number" name="boardSize" id="boardSizeInput" 
      onChange={e => setBoardSize(e.target.value)}/>
      <button onClick={startGame}>Start game</button>
    </div>
  )

}

export default Lobby