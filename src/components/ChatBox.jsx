import { useEffect, useRef, useState } from "react";
import Message from "./containers/Message";
import Chat from "./inputs/Chat";
import Send from "./buttons/Send";
import recieveMessage from "../events/recieveMessage";
import offMessage from "../events/offMessage";
export default function ({ roomID, players }) {
  const [messages, setMessages] = useState([{ name: "", text: `Room Admin is ${players[0].name}` }]);
  const messageRef = useRef(null);
  const chatsRef = useRef(null);
  useEffect(() => {
    recieveMessage(setMessages);
    return () => offMessage();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#f4f4f9",
        flexDirection: "column",
      }}
    >
      <div
        ref={chatsRef}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column-reverse",
          overflowY: "scroll",
          height: "100%",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {messages.map((message, idx) => (
          <Message key={idx} idx={idx} message={message} />
        ))}
      </div>
      <form
        style={{
          display: "flex",
          width: "100%",
          marginTop: "auto",
          borderTop: "1px solid #ccc",
          backgroundColor: "#ffffff",
          boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Chat messageRef={messageRef} />
        <Send messageRef={messageRef} roomID={roomID} players={players} />
      </form>
    </div>
  );
}
