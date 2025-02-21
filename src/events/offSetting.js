import { socket } from "../socket";

export default function () {
  socket.off("players");
  socket.off("settings");
  socket.off("words");
  socket.off("only");
}