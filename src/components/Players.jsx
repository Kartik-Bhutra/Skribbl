export default function ({ players }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        height: "30%",
        justifyContent: "space-between",
      }}
    >
      {players.map((player, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{player.name}</div>
            <div>{player.score}</div>
          </div>
        );
      })}
    </div>
  );
}
