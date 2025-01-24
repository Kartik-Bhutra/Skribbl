import { useState } from "react";
import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Panel from "./components/Panel";
import Players from "./components/Players";
import Word from "./context/ProvideWord";
import Room from "./components/Room";
import { socket } from "./socket";
import "./index.css";

export default function () {
  const [connected, isConnected] = useState(false);
  return (
    <>
      {connected ? (
        <Word>
          <Panel />
          <div className="game">
            <Players />
            <div className="board">
              <Canvas />
            </div>
            <div className="chatbox">
              <ChatBox />
            </div>
          </div>
        </Word>
      ) : (
        <Room isConnected={isConnected} />
      )}
    </>
  );
}
