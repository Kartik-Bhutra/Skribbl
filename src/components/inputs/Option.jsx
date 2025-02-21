import playerNO from "../../events/playerCount";
export default function ({ playerCount, setPlayerCount, roomID, startingIndex }) {
  const optionAttr = [2, 3, 4, 5, 6, 7].filter(num => num >= startingIndex);
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
      <label> Players </label>
      <select
        value={playerCount}
        onChange={(e) => {
          setPlayerCount(e.target.value);
          playerNO(e.target.value, roomID.current);
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