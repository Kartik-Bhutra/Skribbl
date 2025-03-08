import start from "../../events/start";

export default function ({roomID}) {
  return (
    <button
      onClick={() => start(roomID.current)}
      style={{
        flex: "1",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Start!
    </button>
  )
}