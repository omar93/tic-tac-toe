import { Server } from 'socket.io'
import { createServer } from "http"
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

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

  let newRoom = uuidv4()
  console.log("a new player connected", socket.client.id);

  socket.join(newRoom)

  io.sockets.emit('new player', {
    name:"omar"
  });

  socket.on('game', data => {
    console.log(data)
    console.log(socket.client.id)
  })

});

server.listen(5000, () => {
  console.log('listening on http://localhost:5000');
});