import { useState } from "react"
// import { socket } from "../lib/socket"

function New() {



  const [state, setState] = useState('tja')

  const joinRoom = () => {
    console.log("room we want to join:", state);
    socket.emit('join', state)
  }

  const startGame = () => {
    socket.emit('play')
  }

  return ( 
    <div>
      new game welcome
      <input type="text" 
      onChange={e => setState(e.target.value)}/>
      <br />
      <button onClick={joinRoom}>Join room</button>
      <button onClick={startGame}>Play</button>
    </div>
   );
}

export default New;