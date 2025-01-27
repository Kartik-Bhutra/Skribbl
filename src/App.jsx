import { useRef, useState } from "react";
import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Panel from "./components/Panel";
import Players from "./components/Players";
import Word from "./context/ProvideWord";
import Room from "./components/Room";
import "./index.css";

export default function () {
  const [players, setPlayers] = useState([]);
  const name = useRef("");
  const roomID = useRef("");
  return (
    <>
      {players.length ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              height: "90%",
              gap: "0.25rem",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "100%",
              }}
            >
              <Players players={players} />
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Canvas roomID={roomID} />
            </div>
            <div
              style={{
                width: "30%",
                height: "100%",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                backgroundColor: "white",
              }}
            >
              <ChatBox name={name} roomID={roomID} />
            </div>
          </div>
        </div>
      ) : (
        <Room setPlayers={setPlayers} name={name} roomID={roomID} />
      )}
    </>
  );
}
