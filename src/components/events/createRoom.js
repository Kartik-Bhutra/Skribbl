import { socket } from "../../socket";

export default function (roomID, username, name, setIsCreated, setPlayers) {
  socket.once("connect", () => socket.emit("create_room", username));
  socket.once("created", (room_id, username) => {
    roomID.current = room_id;
    name.current = username;
    setIsCreated(true);
    setPlayers([{ name: username, score: 0 }]);
  });
  socket.once("error_creating", () => {
    alert("error");
    socket.off("created");
  });
  socket.connect();
}