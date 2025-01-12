import { useState } from "react";
import { players as dummy } from "../assets/dummyPlayers";

export default function () {
  const [players, setPlayers] = useState(dummy);
  return (
    <>
      <div>
        {players.map((player, idx) => {
          return (
            <div key={idx}>
              <div>{player.rank}</div>
              <div>
                <div>{player.name}</div>
                <div>{player.score}</div>
              </div>
              <div>{player.avatar}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
