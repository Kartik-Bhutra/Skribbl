import { socket } from "../socket";
export default function () {
  socket.off("connect");
  socket.off("created");
  socket.off("joined");
  socket.off("incorrect_id");
}