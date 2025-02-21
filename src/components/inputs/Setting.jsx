import gameData from "../../events/gameData"

export default function ({ gameSettings, setGameSettings, optionAttr, type, roomID }) {
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
        value={gameSettings[type]}
        onChange={(e) => {
          const settings = { ...gameSettings, [type]: e.target.value };
          setGameSettings(settings)
          gameData(settings, roomID.current);
        }}
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