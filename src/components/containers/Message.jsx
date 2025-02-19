export default function ({ idx, message }) {
  return (
    <div
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
  )
}