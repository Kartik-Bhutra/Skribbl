import { socket } from "../socket";

export default function (setPlayers) {
  socket.on("new_player", (name, id) => {
    setPlayers((prevState) => [...prevState, {
      name,
      score: 0,
      id
    }]);
  });
}