import { useState } from "react";
export default function GameSettings() {
  const [playerCount, setPlayerCount] = useState(8);
  const [drawTime, setDrawTime] = useState(80);
  const [roundCount, setRoundCount] = useState(3);
  const [useCustomWords, setUseCustomWords] = useState(false);
  const [customWords, setCustomWords] = useState("");
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#2d2f3b",
        color: "white",
        height: "100%",
        padding: "0.25rem",
        boxSizing :"border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <label>👤 Players</label>
          <select
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
            style={{
              width: "30%",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i + 2}>
                {i + 2}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label>⏳ Drawtime</label>
          <select
            style={{
              width: "30%",
            }}
            value={drawTime}
            onChange={(e) => setDrawTime(e.target.value)}
          >
            {[30, 60, 80, 100].map((time) => (
              <option key={time} value={time}>
                {time} sec
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label>🔄 Rounds</label>
          <select
            style={{
              width: "30%",
            }}
            value={roundCount}
            onChange={(e) => setRoundCount(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((round) => (
              <option key={round} value={round}>
                {round}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <label>Use custom words only</label>
        <input
          type="checkbox"
          checked={useCustomWords}
          onChange={() => setUseCustomWords(!useCustomWords)}
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <textarea
        placeholder="Minimum of 10 words. 1-32 characters per word! Separated by a comma (,)"
        value={customWords}
        onChange={(e) => setCustomWords(e.target.value)}
        style={{
          marginTop: "10px",
          width: "100%",
          height: "100%",
          resize: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          gap: "10px",
          height: "10%",
        }}
      >
        <button
          style={{
            flex: "1",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Start!
        </button>
        <button
          style={{
            flex: "1",
            backgroundColor: "#2196F3",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          🔗 Invite
        </button>
      </div>
    </div>
  );
}
