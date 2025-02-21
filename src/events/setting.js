import { socket } from "../socket";

export default function (setPlayerCount, setGameSettings, setCustomWords, setUseCustomWords) {
  socket.on("no_players", (num) => setPlayerCount(num));
  socket.on("settings", (settings) => setGameSettings(settings));
  socket.on("words", (words) => setCustomWords(words));
  socket.on("only", (bool) => setUseCustomWords(bool));
}