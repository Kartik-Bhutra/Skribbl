import { socket } from "../socket";

export default function (e, name, roomID, messageRef) {
  e.preventDefault();
  const text = messageRef.current.value.trim();
  if (text) {
    socket.emit("send_message", {
      name: name.current,
      roomID: roomID.current,
      text,
    });
    messageRef.current.value = "";
  }
}