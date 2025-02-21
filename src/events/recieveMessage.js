import { socket } from "../socket";

export default function (setMessages) {
  socket.on("recieve", (name, text) => {
    setMessages((prevState) => [{
      name,
      text
    }, ...prevState]);
  });
}