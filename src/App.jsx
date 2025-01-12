import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Players from "./components/Players";
import "./index.css";

export default function () {
  return (
    <div className="game">
      <Players></Players>
      <div className="board">
        <Canvas></Canvas>
      </div>
      <div className="chatbox">
        <ChatBox></ChatBox>
      </div>
    </div>
  );
}
