import { socket } from "../socket";

export default function () {
  socket.off("new_player");
  socket.off("leave");
}