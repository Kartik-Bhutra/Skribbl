import { socket } from "../socket";

export default function (roomID, name, setPlayers) {
  socket.on("connect", () => {
    console.log("Socket Connected");
  })
  socket.on("disconnect", (err, disc) => {
    console.log(err, disc);
  })
  socket.on("connect_error", (err) => {
    socket.disconnect();
    console.log(err.message);
  });
  socket.once("created", (room_id, username) => {
    roomID.current = room_id;
    name.current = username;
    setPlayers([{
      name: username,
      score: 0,
      id: socket.id
    }]);
  });
  socket.on("joined", (players,roomid) => {
    roomID.current = roomid;
    name.current = players[players.length - 1].name;
    setPlayers(players);
  });
  socket.on("incorrect", () => {
    alert("Wrong roomID");
  });
  socket.on("full", () => {
    alert("Room is full");
  });
}