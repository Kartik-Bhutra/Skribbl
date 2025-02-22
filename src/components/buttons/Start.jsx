export default function ({ setIsStarted }) {
  return (
    <button
      onClick={() => setIsStarted(true)}
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