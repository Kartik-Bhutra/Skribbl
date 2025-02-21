export default function ({ idx, message }) {
  const { name, text } = message;
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
        {name ? (
          <>
            <strong>{name}</strong>: {text}
          </>
        ) : (
          text
        )}
      </div>
    </div>
  )
}