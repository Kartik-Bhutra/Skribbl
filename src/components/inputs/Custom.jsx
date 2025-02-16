export default function ({ setCustomWords, setUseCustomWords, useCustomWords, customWords }) {
  return (
    <>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <label>Use custom words only</label>
        <input
          type="checkbox"
          checked={useCustomWords}
          onChange={() => setUseCustomWords(!useCustomWords)}
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <textarea
        placeholder="Minimum of 10 words. 1-32 characters per word! Separated by a comma (,)"
        value={customWords}
        onChange={(e) => setCustomWords(e.target.value)}
        style={{
          marginTop: "10px",
          width: "100%",
          height: "100%",
          resize: "none",
          boxSizing: "border-box",
          padding: "10px",
          fontSize: "1.25rem",
          border: "none",
        }}
      />
    </>
  )
}