import { socket } from "../socket";

export default function (e, roomID, messageRef) {
  e.preventDefault();
  const text = messageRef.current.value.trim();
  if (text) {
    socket.emit("send_message", roomID.current, text);
    messageRef.current.value = "";
  }
}