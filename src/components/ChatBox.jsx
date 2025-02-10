import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { socket } from "../socket";
export default function ({ name, roomID }) {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);
  const chatsRef = useRef(null);
  useEffect(() => {
    socket.on("recive_message", (message) => {
      setMessages((prevState) => [message, ...prevState]);
    });
    return () => socket.off("recive_message")
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
          <div
            key={idx}
            style={{
              padding: "8px",
              fontSize: "1.125rem",
              wordWrap: "break-word",
              wordBreak: "break-word",
              backgroundColor: idx % 2 === 0 ? "#e6f7ff" : "#ffffff",
              borderRadius: "8px",
              margin: "4px 0",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <strong
                style={{
                  color: "#007bff",
                  fontWeight: "bold",
                }}
              >
                {message.name}
              </strong>
              :&nbsp;
              <span
                style={{
                  color: "#333",
                }}
              >
                {message.text}
              </span>
            </div>
          </div>
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
        <input
          type="text"
          placeholder="Type your message"
          ref={messageRef}
          style={{
            width: "100%",
            padding: "8px",
            outline: "none",
            border: "1px solid black",
            fontSize: "1rem",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        />
        <button
          onClick={sendMessage}
          type="submit"
          style={{
            padding: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "40%",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
