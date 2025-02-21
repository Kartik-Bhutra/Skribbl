import { socket } from "../socket";

export default function (playerCount, roomID) {
  socket.emit("players",playerCount, roomID);
}