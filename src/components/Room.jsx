import { useEffect, useState } from "react";
import { Link } from "react-router";
import { socket } from "../socket";
import Button from "./buttons/Room";
import Input from "./inputs/Room"

export default function ({ setPlayers, name, roomID }) {
  const [username, setName] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      const playerName = username.trim();
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
    return () => {
      socket.off("connect");
      socket.off("join");
      socket.off("joined");
      socket.off("connect_error");
    }
  }, []);

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
      <Input setName={setName} username={username} />
      {/* <Button /> */}
      <Button />
    </div>
  );
}