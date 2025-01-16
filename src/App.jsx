import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import "./index.css";

export default function () {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="game">
        <Players></Players>
        <div className="board">
          <Canvas></Canvas>
        </div>
        <div className="chatbox">
          <ChatBox></ChatBox>
        </div>
      </div>
    </>
  );
}
