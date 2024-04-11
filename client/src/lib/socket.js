import { io } from 'socket.io-client';

const URL = "http://localhost:5000";

export const socket = io(URL);

socket.on('new player connected', (data) => {
  console.log(data);
  console.log("new player");
});



