import { socket } from "../socket";

export default function (username, name, roomid, roomID, setIsJoined, setPlayers) {
  socket.once("joined", (players) => {
    roomID.current = roomid;
    name.current = players[players.length - 1].name;
    setIsJoined(true);
    setPlayers(players);
  });
  socket.once("incorrect_id", () => {
    alert("Wrong roomID");
    socket.off("joined");
  });
  if (!socket.connected) {
    socket.connect();
  }
  socket.emit("join_room", username, roomid);
}