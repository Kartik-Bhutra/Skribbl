import { useEffect } from "react";
import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Panel from "./components/Panel";
import Players from "./components/Players";
import Word from "./context/ProvideWord";
import "./index.css";

export default function () {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("roomID");
      sessionStorage.removeItem("username");
    });
    window.addEventListener("load", () => {
      if (
        !sessionStorage.getItem("roomID") &&
        !sessionStorage.getItem("username")
      ) {
        const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
        window.location.href = frontendUrl;
      }
    });
    return () => {
      window.removeEventListener("beforeunload");
    };
  });
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
