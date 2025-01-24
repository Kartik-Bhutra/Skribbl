import { useState } from "react";
import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Panel from "./components/Panel";
import Players from "./components/Players";
import Word from "./context/ProvideWord";
import Room from "./components/Room";
import "./index.css";

export default function () {
  const [players, setPlayers] = useState([]);
  return (
    <>
      {players.length ? (
        <Word>
          <Panel />
          <div className="game">
            <Players players={players} />
            <div className="board">
              <Canvas />
            </div>
            <div className="chatbox">
              <ChatBox />
            </div>
          </div>
        </Word>
      ) : (
        <Room setPlayers={setPlayers} />
      )}
    </>
  );
}
