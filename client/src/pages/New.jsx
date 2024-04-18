import { useState, useEffect } from "react"
import { socket } from "../lib/socket"
import { useNavigate } from "react-router-dom";

function New() {

  const [room, setRoom] = useState('tja')
  const navigate = useNavigate ();

  const joinRoom = () => {
    socket.emit('join', room)
    // navigate(`/lobby/${room}`, { state: { boardSize: boardSize } })
  }

  useEffect(() => {
    socket.on('hi', data => {
      console.log(data)
    })

    socket.on('response', data => {
      console.log(data);
    })
  }, [socket])


  return ( 
    <div>
      Lobby ID:
      <input type="text" 
      onChange={e => setRoom(e.target.value)}/>
      <br />
      <button onClick={joinRoom}>Join room</button>
    </div>
   );
}

export default New;