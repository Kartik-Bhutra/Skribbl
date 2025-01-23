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
    </>
  );
}
