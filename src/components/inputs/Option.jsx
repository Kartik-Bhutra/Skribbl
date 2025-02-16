export default function ({ fieldAttr, setAttr, optionAttr, type }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <label> {type} </label>
      <select
        value={fieldAttr}
        onChange={(e) => setAttr(e.target.value)}
        style={{
          width: "30%",
          padding: "5px",
        }}
      >
        {optionAttr.map((num) => <option key={num} value={num}>
          {num}
        </option>
        )}
      </select>
    </div>
  )
}