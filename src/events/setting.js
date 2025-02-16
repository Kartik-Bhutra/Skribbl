import { socket } from "../socket";

export default function (setPlayerCount, setDrawTime, setRoundCount) {
  socket.on("players", (num) => setPlayerCount(num));
  socket.on("time", (num) => setDrawTime(num));
  socket.on("rounds", (num) => setRoundCount(num));
  socket.on("words", (words) => setCustomWords(words));
  socket.on("only", (bool) => setUseCustomWords(bool));
}