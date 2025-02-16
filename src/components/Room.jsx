import { useEffect, useState } from "react";
import { Link } from "react-router";
import JoinButton from "./buttons/RoomJoin";
import CreateButton from "./buttons/RoomCreate";
import Input from "./inputs/Room";
import connect from "../events/connect";
import off from "../events/offRoom";

export default function ({ name, roomID, setPlayers }) {
  const [username, setName] = useState("");
  const [roomid, setRoomid] = useState("");
  useEffect(() => {
    connect(roomID, name, setPlayers);
    return () => off()
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
      <Input setAttr={setName} fieldAttr={username} type={"Enter your name"} />
      <Input setAttr={setRoomid} fieldAttr={roomid} type={"Enter RoomID"} />
      <JoinButton
        roomID={roomID}
        username={username}
        name={name}
        roomid={roomid}
        setPlayers={setPlayers}
      />
      <CreateButton
        roomID={roomID}
        username={username}
        name={name}
        setPlayers={setPlayers}
      />
    </div>
  );
}