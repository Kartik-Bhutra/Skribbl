import sendMessage from "../../events/sendMessage"

export default function ({ name, roomID, messageRef }) {
  return (
    <button
      onClick={(e) => sendMessage(e, name, roomID, messageRef)}
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
  )
}