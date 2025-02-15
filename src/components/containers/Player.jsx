export default function Player({ player,idx }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        gap: "20px",
        borderTop: idx ? "1px solid #ddd" : "",
        alignItems: "center",
        fontSize: "1.1rem",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {player.name}
      </div>
      <div
        style={{
          fontWeight: "bold",
          color: "#007bff",
          fontSize: "1.2rem",
        }}
      >
        {player.score}
      </div>
    </div>
  )
}
