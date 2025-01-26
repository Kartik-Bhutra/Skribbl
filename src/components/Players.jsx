export default function ({ players }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff", 
        borderRadius: "8px", 
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
        overflow: "hidden", 
        width: "100%",
        maxWidth: "400px", 
        margin: "20px auto", 
      }}
    >
      {players.map((player) => {
        return (
          <div
            key={player.socketID}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px",
              gap: "20px",
              borderBottom: "1px solid #ddd", 
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
        );
      })}
    </div>
  );
}
