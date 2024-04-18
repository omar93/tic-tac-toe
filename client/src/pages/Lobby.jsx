import { useState } from "react"
import { useNavigate, Outlet  } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

function Lobby() {

  const [boardSize, setBoardSize] = useState(0)
  const [playing, setPlaying] = useState(false)

  const navigate = useNavigate ();
  
  const startGame = () => {
    setPlaying(true)
    navigate(`/lobby/${uuidv4()}`, { state: { boardSize: boardSize } })
  }
  
  return (
    <>
      {playing ? (
        <Outlet />
      ) : (
        <div>
          <span>Board size: </span>
          <input 
            type="number" 
            name="boardSize" 
            id="boardSizeInput" 
            onChange={e => setBoardSize(parseInt(e.target.value))}
          />
          <br />
          <br />
          <button onClick={startGame}>Start game</button>
          <button onClick={() => navigate(-1)}>back</button>
        </div>
      )}
    </>
  );

}

export default Lobby