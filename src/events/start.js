import { socket } from "../socket";

export default function (roomID) {
  socket.emit("start", roomID);
}