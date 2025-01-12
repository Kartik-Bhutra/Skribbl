import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Players from "./components/Players";

export default function () {
  return (
    <div className="game">
      <div className="player-section">
        <Players></Players>
      </div>
      <div className="canvas-container">
        <Canvas></Canvas>
      </div>
      <div className="chatbox">
        <ChatBox></ChatBox>
      </div>
    </div>
  );
}
