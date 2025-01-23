import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { socket } from "../socket";
import useName from "../hooks/useName";

export default function () {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handlePlay = (e) => {
    e.preventDefault();
    socket.connect();
    socket.on("connect", () => {
      const username = name.trim() || useName();
      socket.emit("join", username);
      socket.on("joined", (roomID) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("roomID", roomID);
        navigate(`/${roomID}`);
      });
    });
    socket.on("connect_error", () => alert("connection error"));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
        gap: "10px",
      }}
    >
      <Link to="/">
        <img
          src="/logo.gif"
          alt=""
          style={{
            maxWidth: "350px",
          }}
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "350px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "250px",
            height: "20px",
            padding: "5px",
            fontSize: "1.2em",
          }}
          placeholder="Enter your name"
        />
        <div
          style={{
            textDecoration: "none",
            color: "white",
            width: "250px",
            height: "20px",
            textAlign: "center",
            backgroundColor: "blue",
            padding: "5px",
            fontSize: "1.2em",
          }}
          onClick={handlePlay}
        >
          Play!
        </div>
        <div
          style={{
            textDecoration: "none",
            color: "white",
            width: "250px",
            height: "20px",
            textAlign: "center",
            backgroundColor: "blue",
            padding: "5px",
            fontSize: "1.2em",
          }}
          onClick={handlePlay}
        >
          Create Private Room
        </div>
      </div>
    </div>
  );
}
