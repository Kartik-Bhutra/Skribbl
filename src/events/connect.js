import { socket } from "../socket";

export default function (roomID, setPlayers, setGameSettings, setPlayerCount) {
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
    setPlayers([{
      name: username,
      score: 0,
      id: socket.id
    }]);
  });
  socket.on("joined", (players, roomid, playerCount, settings) => {
    roomID.current = roomid;
    setPlayers(players);
    setGameSettings(settings);
    setPlayerCount(playerCount);
  });
  socket.on("incorrect", () => {
    alert("Wrong roomID");
  });
  socket.on("full", () => {
    alert("Room is full");
  });
}