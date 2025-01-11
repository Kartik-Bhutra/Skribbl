import { useEffect, useRef, useState } from "react";
import { messages as dummyMessages } from "../../public/dummyMessages";
import "../styles/chatbox.css";

export default function ChatBox() {
  const [messages, setMessages] = useState(dummyMessages);
  const messageRef = useRef(null);
  const chatsRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    const message = messageRef.current.value.trim();
    if (message) {
      setMessages((prevState) => [
        ...prevState,
        {
          user: "You",
          text: message,
        },
      ]);
      messageRef.current.value = "";
    }
  };

  useEffect(() => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chats" ref={chatsRef}>
        {messages.map((message, idx) => (
          <div className="message" key={idx}>
            <strong>{message.user}</strong> : {message.text}
          </div>
        ))}
      </div>
      <form className="input-container">
        <input
          type="text"
          className="enter-text"
          placeholder="Type your message..."
          ref={messageRef}
        />
        <button className="send-button" onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
