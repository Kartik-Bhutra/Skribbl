import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { wordContext } from "../context/ProvideWord";
import { socket } from "../socket";

export default function () {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);
  const chatsRef = useRef(null);
  const word = useContext(wordContext);

  useEffect(() => {
    socket.on("recive_message", (message) => {
      console.log(message);
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const message = messageRef.current.value.trim();
    const name = sessionStorage.getItem("username");
    if (message) {
      socket.emit("send_message", { name, text: message });
      messageRef.current.value = "";
    }
  };

  useEffect(() => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      <div ref={chatsRef} className="chats">
        {messages.map((message, idx) => (
          <div key={idx} className="message">
            <strong>{message.name}</strong> : <div>{message.text}</div>
          </div>
        ))}
      </div>
      <form className="text">
        <input
          type="text"
          placeholder="Type your message..."
          ref={messageRef}
        />
        <button onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
    </>
  );
}
