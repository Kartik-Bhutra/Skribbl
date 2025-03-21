import { socket } from "../socket";
import Timer from "./containers/Timer";
export default function ({ setPlayers, roomID, setIsPainter, setCanAccess, setIsStarted }) {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
      }}>
      <div style={{
        display: "flex",
        width: "10%",
        height: "100%",
      }}>
        <Timer />
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          ROUND
        </div>
      </div>
      <div style={{
        display: "flex",
        width: "30%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {roomID.current}
      </div>
      <div style={{
        display: "flex",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "10%",
      }}>
        <button style={{
          padding: "10px",
        }}
          onClick={() => {
            socket.off("players");
            socket.emit("leave", roomID.current);
            socket.disconnect();
            setCanAccess(false);
            setIsPainter(false);
            setIsStarted(false);
            setPlayers([]);
          }
          }
        >
          exit
        </button>
      </div>
    </div>
  );
}
