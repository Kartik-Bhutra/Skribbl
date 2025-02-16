import { useEffect } from "react";
import Player from "./containers/Player";
import offPlayer from "../events/offPlayer";
import playerList from "../events/playerList";
export default function ({ players, setPlayers }) {
  useEffect(() => {
    playerList(setPlayers);
    return () => offPlayer();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      {players.map((player, idx) => <Player player={player} key={idx} idx={idx} />)}
    </div>
  );
}
