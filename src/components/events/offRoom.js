import { socket } from "../../socket";
export default function () {
  socket.off("connect");
  socket.off("roomCreated");
}