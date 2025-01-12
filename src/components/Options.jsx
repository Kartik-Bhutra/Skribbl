export default function Options({ setClear, setUndo, setErase }) {
    return (
      <div className="options">
        <button onClick={() => setClear(true)}>Clear</button>
        <button onClick={() => setErase((prev) => !prev)}>Erase</button>
        <button onClick={() => setUndo(true)}>Undo</button>
      </div>
    );
  }
  