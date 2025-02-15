import { socket } from "../../socket";

export default function (roomID, username, name) {
  socket.connect();
  const createRoom = () => {
    socket.emit("create_room", username);
    socket.on("roomCreated", (room_id, username) => {
      roomID.current = room_id;
      name.current = username;
    })
  };
  socket.on("connect", createRoom);
}