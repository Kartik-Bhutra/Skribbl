import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { wordContext } from "../context/ProvideWord";
import { socket } from "../socket";

export default function ({ name, roomID }) {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);
  const chatsRef = useRef(null);
  const word = useContext(wordContext);

  useEffect(() => {
    socket.on("recive_message", (message) => {
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const text = messageRef.current.value.trim();
    if (text) {
      socket.emit("send_message", {
        name: name.current,
        roomID: roomID.current,
        text,
      });
      messageRef.current.value = "";
    }
  };

  useEffect(() => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div ref={chatsRef}>
        {messages.map((message, idx) => (
          <div key={idx}>
            <strong>{message.name}</strong> : <div>{message.text}</div>
          </div>
        ))}
      </div>
      <form
        style={{
          display: "flex",
          width: "100%",
          marginTop: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          ref={messageRef}
          style={{
            width: "100%"
          }}
        />
        <button onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
