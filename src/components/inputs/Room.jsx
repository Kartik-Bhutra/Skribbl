export default function ({setName, username}) {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      value={username}
      onChange={(e) => setName(e.target.value)}
      style={{
        padding: "12px 15px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "2px solid #ffffff",
        width: "100%",
        maxWidth: "400px",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        color: "#333",
        outline: "none",
        transition: "box-shadow 0.3s ease",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      onFocus={(e) =>
        (e.target.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)")
      }
      onBlur={(e) =>
        (e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)")
      }
    />
  )
}
