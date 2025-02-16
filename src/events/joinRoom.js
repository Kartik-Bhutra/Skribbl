import { socket } from "../socket";

export default function (username, roomid) {
  if (!socket.connected) {
    socket.connect();
  }
  socket.emit("join_room", username, roomid);
}