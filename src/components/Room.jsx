import { useEffect, useState } from "react";
import { Link } from "react-router";
import socketIO from "socket.io-client";
import useName from "../hooks/useName";

export default function () {
  const [name, setName] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const socket = socketIO.connect(backendUrl, {
    autoConnect: false,
  });
  useEffect(() => {
    socket.connect();
  });

  const handlePlay = () => {
    const username = name.trim() || useName();
    console.log(username);
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
        <Link
          to="/game"
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
        </Link>
        <Link
          to="/game"
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
        </Link>
      </div>
    </div>
  );
}
