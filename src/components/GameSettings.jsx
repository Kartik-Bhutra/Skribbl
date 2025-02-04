import { useState } from "react";
export default function () {
  const [playerCount, setPlayerCount] = useState(7);
  const [drawTime, setDrawTime] = useState(80);
  const [roundCount, setRoundCount] = useState(3);
  const [useCustomWords, setUseCustomWords] = useState(false);
  const [customWords, setCustomWords] = useState("");
  const [roomType, setRoomType] = useState("public");
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
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#3b3d4a",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <label>Type</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: roomType === "public" ? "#4CAF50" : "#ff4d4d",
            padding: "6px 12px",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "0.3s",
            width: "110px",
            justifyContent: "space-between",
          }}
          onClick={() =>
            setRoomType(roomType === "public" ? "private" : "public")
          }
        >
          {roomType === "private" && <span>{roomType.toUpperCase()}</span>}
          <div
            style={{
              width: "22px",
              height: "22px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          ></div>
          {roomType === "public" && <span>{roomType.toUpperCase()}</span>}
        </div>
      </div>
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
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <label>👤 Players</label>
          <select
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
            style={{
              width: "30%",
              padding: "5px",
            }}
          >
            {[...Array(6)].map((_, i) => (
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
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <label>⏳ Drawtime</label>
          <select
            style={{
              width: "30%",
              padding: "5px",
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
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <label>🔄 Rounds</label>
          <select
            style={{
              width: "30%",
              padding: "5px",
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
          boxSizing: "border-box",
          padding: "10px",
          fontSize: "1.25rem",
          border: "none",
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
            fontSize: "18px",
            fontWeight: "bold",
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
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🔗 Invite
        </button>
      </div>
    </div>
  );
}
