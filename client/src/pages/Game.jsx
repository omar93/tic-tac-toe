import { useLocation } from "react-router-dom"

function Game() {

  const location = useLocation()
  const gridSize = location.state.boardSize

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