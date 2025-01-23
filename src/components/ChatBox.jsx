import { useEffect, useRef, useState } from "react";
import { messages as dummy } from "../assets/dummyMessages";
import { useContext } from "react";
import { wordContext } from "../context/ProvideWord";

export default function () {
  const [messages, setMessages] = useState(dummy);
  const messageRef = useRef(null);
  const chatsRef = useRef(null);
  const word = useContext(wordContext);

  const sendMessage = (e) => {
    e.preventDefault();
    const message = messageRef.current.value.trim();
    if (message) {
      setMessages((prevState) => [
        ...prevState,
        {
          name: "You",
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
