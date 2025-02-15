import { useEffect } from "react";
import Player from "./containers/Player";
import playerJoined from "./events/playerJoined";
import playerLeave from "./events/playerLeave";
export default function ({ players, setPlayers }) {
  useEffect(() => {
    playerJoined(setPlayers);
    playerLeave(setPlayers);
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
