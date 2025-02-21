import { socket } from "../socket";

export default function (gameSettings, roomID) {
  socket.emit("settings", gameSettings, roomID);
}