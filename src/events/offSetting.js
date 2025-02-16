import { socket } from "../socket";

export default function () {
  socket.off("players");
  socket.off("time");
  socket.off("rounds");
  socket.off("words");
  socket.off("only");
}