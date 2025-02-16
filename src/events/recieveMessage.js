import { socket } from "../socket";

export default function (setMessages) {
  socket.on("recieve", (message) => {
    setMessages((prevState) => [message, ...prevState]);
  });
}