import { socket } from "../socket";

export default function (roomID, username, name, setIsCreated, setPlayers) {
  socket.once("created", (room_id, username) => {
    roomID.current = room_id;
    name.current = username;
    setIsCreated(true);
    setPlayers([{
      name: username,
      score: 0,
      id: socket.id
    }]);
  });
  socket.connect();
  socket.emit("create_room", username);
}