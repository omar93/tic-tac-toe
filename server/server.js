import { Server } from 'socket.io'
import { createServer } from "http"
import path from 'path'

const __dirname = path.resolve();

const server = createServer()
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname) + '/public/index.html');
// });

let rooms = []

io.on('connection', (socket) => {

  console.log("this person connected:",socket.id);


  socket.on('create-game', gridSize => {
    socket.join("room1")
  })

  socket.on('playGame', data => {
    socket.join(data.room)
    if(!hasDuplicateRoom(data.room)) {
      rooms.push(data)
    }
  })

  socket.on('join', roomID => {
    let room = rooms.find(room => room.room === roomID)
    socket.join(room)
    io.to(socket.id).emit('response', room)
  })

  socket.on('play', data => {
    console.log(socket);
  })

});

function hasDuplicateRoom(room) {
  return rooms.some(item => item.room === room);
}

server.listen(5000, () => {
  console.log('listening on http://localhost:5000');
});