export default function ({ messageRef }) {
  return (
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
  )
}