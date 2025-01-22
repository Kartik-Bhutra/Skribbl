import { useEffect, useState } from "react";
import { Link } from "react-router";
import socketIO from "socket.io-client";

export default function () {
  const [name, useName] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const socket = socketIO.connect(backendUrl, {
    autoConnect: false,
  });
  useEffect(() => {
    socket.connect();
  });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          if (e.target.value.length > 0) {
            useName(e.target.value);
          }
        }}
      />
      <Link to="/game">Join Game</Link>
    </div>
  );
}
