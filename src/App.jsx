import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import "./App.css";

export default function () {
  return (
    <div className="game">
      <Canvas />
      <ChatBox />
    </div>
  );
}
