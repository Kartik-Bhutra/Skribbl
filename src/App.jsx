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
              justifyContent: "space-between",
              width: "90%",
              height: "90%",
            }}
          >
            <div
              style={{
                width: "10%",
                height: "100%",
                borderRight: "1px solid black",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <Players players={players} />
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                backgroundColor: "white",
              }}
            >
              <Canvas roomID={roomID} />
            </div>
            <div
              style={{
                width: "20%",
                height: "100%",
                borderLeft: "1px solid black",
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
