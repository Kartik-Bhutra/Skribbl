import { socket } from "../../socket";

export default function (setPlayers) {
  socket.on("leave", (id) => {
    console.log(id);
    setPlayers((prevState) => {
      console.log(prevState);
      return prevState.filter((player) => player.id != id);
    });
  })
}