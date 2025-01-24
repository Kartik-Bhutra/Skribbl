export default function ({ players }) {
  return (
    <>
      <div className="players">
        {players.map((player, idx) => {
          return (
            <div key={idx} className="player">
              <div className="name">{player.name}</div>
              <div className="score">{player.score} points</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
