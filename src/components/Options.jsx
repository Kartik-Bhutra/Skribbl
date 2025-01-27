import { useRef } from "react";

export default function Options({
  setClear,
  setUndo,
  setErase,
  setFill,
  setColor,
}) {
  const colors = useRef([
    [
      "ffffff",
      "c1c1c1",
      "ef130b",
      "ff7100",
      "ffe400",
      "00cc00",
      "00ff91",
      "00b2ff",
      "231fd3",
      "a300ba",
      "df69a7",
      "ffac8e",
      "a0522d",
    ],
    [
      "000000",
      "505050",
      "740b07",
      "c23800",
      "e8a200",
      "004619",
      "00785d",
      "00569e",
      "0e0865",
      "550069",
      "873554",
      "cc774d",
      "63300d",
    ],
  ]);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#f9f9f9",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {colors.current.map((set, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            {set.map((color) => (
              <button
                key={color}
                style={{
                  backgroundColor: `#${color}`,
                  width: "100%",
                  cursor: "pointer",
                  height: "100%",
                  border: "none",
                }}
                onClick={() => setColor(`#${color}`)}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        style={{
          width: "5%",
          backgroundImage: `url("/pencil.gif")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "none",
          backgroundColor: "#386895",
        }}
      ></button>
      <button
        style={{
          width: "5%",
          backgroundImage: `url("/undo.gif")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "none",
          backgroundColor: "#386895",
        }}
      ></button>
      <button
        style={{
          width: "5%",
          backgroundImage: `url("/bucket.gif")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "none",
          backgroundColor: "#386895",
        }}
      ></button>
      <button
        style={{
          width: "5%",
          backgroundImage: `url("/clear.gif")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "none",
          backgroundColor: "#386895",
        }}
      ></button>
      {/* <button onClick={() => setClear(true)}>Clear</button>
      <button onClick={() => setErase((prev) => !prev)}>Erase</button>
      <button onClick={() => setUndo(true)}>Undo</button>
      <button onClick={() => setFill(true)}>Fill</button>
       */}
    </div>
  );
}
