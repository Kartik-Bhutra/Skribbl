import { socket } from "../../socket";

export default function (roomID, username, name, setIsCreated) {
  socket.on("connect", () => socket.emit("create_room", username));
  socket.on("roomCreated", (room_id, username) => {
    roomID.current = room_id;
    name.current = username;
    setIsCreated(true);
  })
  socket.connect();
}