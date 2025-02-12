import { useEffect, useRef, useState } from "react";
import Canvas from "./components/Canvas";
import ChatBox from "./components/ChatBox";
import Players from "./components/Players";
import GameSettings from "./components/GameSettings";
import Panel from "./components/Panel";
import Room from "./components/Room";
import { socket } from "./socket";

export default function () {
  const [players, setPlayers] = useState([]);
  const name = useRef("");
  const roomID = useRef("");
  const [width, setWidth] = useState(window.innerWidth);
  const [roomType, setRoomType] = useState("public");
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("beforeunload", (e) => {
      socket.emit("leave_room", roomID.current, roomType);
    });
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {players.length ? (
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}>
          <div style={{
            width: "100%",
            height: "8%",
            display: "flex",
            justifyContent: "center",
          }}>
            <Panel setPlayers={setPlayers} roomID={roomID} roomType={roomType} />
          </div>
          <div
            style={{
              width: "100%",
              height: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: width >= 800 ? "90%" : "100%",
                height: "100%",
                gap: width >= 800 ? "0.25rem" : "0",
                flexDirection: width >= 800 ? "row" : "column",
              }}
            >
              {width >= 800 && (
                <div
                  style={{
                    width: "20%",
                    height: "100%",
                  }}
                >
                  <Players players={players} />
                </div>
              )}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <GameSettings name={name} roomID={roomID} setRoomType={setRoomType} roomType={roomType} />
                {/* <Canvas roomID={roomID} /> */}
              </div>
              {width >= 800 ? (
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
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                    }}
                  >
                    <Players players={players} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ChatBox name={name} roomID={roomID} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Room setPlayers={setPlayers} name={name} roomID={roomID} />
      )}
    </>
  );
}
