import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Panel from "./components/Panel";
import Players from "./components/Players";
import Word from "./context/ProvideWord";
import "./index.css";

export default function () {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="game">
        <Players />
        <div className="board">
          <Canvas />
        </div>
        <Word>
          <Panel />
          <div className="chatbox">
            <ChatBox />
          </div>
        </Word>
      </div>
    </>
  );
}
