import { socket } from "../socket";

export default function () {
  socket.off("recieve");
}