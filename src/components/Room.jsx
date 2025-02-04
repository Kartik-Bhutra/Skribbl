import { useState } from "react";
import { Link } from "react-router";
import { socket } from "../socket";

export default function ({ setPlayers, name, roomID }) {
  const [username, setName] = useState("");
  const handlePlay = (e) => {
    socket.connect();
    socket.on("connect", () => {
      const playerName = username.trim() || "player";
      socket.emit("join", playerName);
      socket.on("joined", (room) => {
        socket.on("players", (players) => setPlayers(players));
        name.current = playerName;
        roomID.current = room;
      });
    });
    socket.on("connect_error", () => {
      socket.disconnect();
      alert("connection error");
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "20px",
        padding: "20px",
        boxSizing: "border-box",
        textAlign: "center",
        color: "#333",
        fontFamily: "'Roboto', sans-serif",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Link to="/">
        <img
          src="/logo.gif"
          alt="Logo"
          style={{
            maxWidth: "100%",
            width: "250px",
            height: "auto",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Link>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "12px 15px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "2px solid #ffffff",
          width: "100%",
          maxWidth: "400px",
          boxSizing: "border-box",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          color: "#333",
          outline: "none",
          transition: "box-shadow 0.3s ease",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onFocus={(e) =>
          (e.target.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)")
        }
        onBlur={(e) =>
          (e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)")
        }
      />
      {/* <button
        onClick={handlePlay}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "rgba(0, 123, 255, 0.8)",
          color: "#fff",
          cursor: "pointer",
          width: "100%",
          maxWidth: "250px",
          boxSizing: "border-box",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "rgba(0, 123, 255, 1)";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "rgba(0, 123, 255, 0.8)";
          e.target.style.transform = "scale(1)";
        }}
      >
        Play
      </button> */}
      <button
        onClick={handlePlay}
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
        Create Room
      </button>
    </div>
  );
}
