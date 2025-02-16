import { socket } from "../socket";

export default function (username) {
  socket.connect();
  socket.emit("create_room", username);
}