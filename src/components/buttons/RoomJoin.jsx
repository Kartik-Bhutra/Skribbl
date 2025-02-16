import joinRoom from "../../events/joinRoom";
export default function ({ roomID, username, name, roomid, setPlayers }) {
  return (
    <button
      onClick={() => joinRoom(username, name, roomid, roomID, setPlayers)}
      style={{
        padding: "12px 20px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "rgba(40, 167, 69, 0.8)",
        color: "#fff",
        cursor: "pointer",
        width: "100%",
        maxWidth: "250px",
        boxSizing: "border-box",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "rgba(40, 167, 69, 1)";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "rgba(40, 167, 69, 0.8)";
        e.target.style.transform = "scale(1)";
      }}
    >
      Join Room
    </button>
  )
}
