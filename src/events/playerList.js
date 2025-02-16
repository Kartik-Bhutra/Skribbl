import { socket } from "../socket";

export default function (setPlayers) {
  socket.on("players", (players) => setPlayers(players));
}