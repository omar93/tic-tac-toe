import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Lobby() {

  const [boardSize, setBoardSize] = useState(0)
  const navigate = useNavigate()
  
  const startGame = () => {
    navigate('/game', { state: { boardSize: boardSize } })
  }

  return (
    <div>
      <span>Board size: </span>
      <input type="number" name="boardSize" id="boardSizeInput" 
        onChange={e => setBoardSize(e.target.value)}
      />
      <br></br>
      <button onClick={startGame}>Start game</button>
    </div>
  )

}

export default Lobby