import { socket } from "../socket";

export default function (e, roomID, messageRef, players) {
  e.preventDefault();
  const text = messageRef.current.value.trim();
  if (text) {
    const name = players.find(player => player.id == socket.id).name;
    socket.emit("send_message", roomID.current, name, text);
    messageRef.current.value = "";
  }
}