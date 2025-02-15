import { socket } from "../socket";
export default function ({ setPlayers, roomID , setIsCreated}) {
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
        <div style={{
          backgroundImage: `url("/clock.gif")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          00:00
        </div>
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
        WORD
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
            socket.emit("leave_room", roomID.current);
            socket.disconnect();
            setPlayers([]);
            setIsCreated(false);
          }
          }
        >
          exit
        </button>
      </div>
    </div>
  );
}
