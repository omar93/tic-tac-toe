import { useEffect } from "react"
import { socket } from "../lib/socket.js"
import { useLocation, useParams } from "react-router-dom"

function Game() {

  const location = useLocation()
  const gridSize = location.state.boardSize
  const { id } = useParams();

  console.log("grid:", gridSize, " id:", id);

  socket.emit('playGame', {
    gridSize:gridSize, 
    room:id
  })

  
  useEffect(() => {
    socket.on('boardSize', data => {
      console.log("got board from opponent:", data);
    })

    socket.on('welcome', data => {
      console.log(data)
    })
  }, [socket])

  const tileStyle = {
    border: "1px solid black",
    color: "black"
  }

  const grid = () => {
    let content = []
    for (let i = 1; i < gridSize*gridSize+1; i++) {
      content.push(
        <div 
          style={tileStyle}
          id={`tile${i}`}
          row={Math.ceil(i/gridSize)}
          column={i%gridSize === 0 ? gridSize : i%gridSize}
          tile={i}
          key={i}>
            {i}
        </div>
      )
    }
    return content
  }

  const gridBoardStyle = {
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "repeat("+gridSize+",1fr)",
    gridTemplateRows: "repeat("+gridSize+",1fr)",
    width: "800px",
    height: "800px"
  }
  
  return (

    <div id="gridBoard" style={gridBoardStyle}>
      {grid()}
    </div>



   )
}

export default Game