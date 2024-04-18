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

io.on('connection', (socket) => {

  console.log("this person connected:",socket.id);


  socket.on('create-game', gridSize => {
    socket.join("room1")

  })

  socket.on('playGame', boardSize => {
    socket.emit("boardSize",boardSize)
  })

  socket.on('join', roomID => {
    console.log("player -", socket.client.id, ' is now joining:', roomID);
    socket.join(roomID)
  })

  socket.on('play', data => {
    console.log(socket);
  })

});

server.listen(5000, () => {
  console.log('listening on http://localhost:5000');
});