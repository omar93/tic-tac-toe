import { Server } from 'socket.io'
import { createServer } from "http";
import path from 'path';

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
  io.sockets.emit('user connected', {
    name:"omar"
  });
});

server.listen(5000, () => {
  console.log('listening on http://localhost:5000');
});