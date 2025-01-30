import { useRef } from "react";

export default function ({ setClear, setUndo, setErase, setFill, setColor }) {
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
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
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
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <button
          style={{
            width: "100%",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            style={{
              filter: "brightness(0)",
              backgroundImage: `url("/size.gif")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
            }}
          ></div>
        </button>
        <button
          style={{
            width: "100%",
            backgroundImage: `url("/pencil.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            backgroundColor: "white",
          }}
          onClick={() => {
            setFill(false);
            setErase(false);
          }}
        ></button>
        <button
          style={{
            width: "100%",
            backgroundImage: `url("/bucket.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            backgroundColor: "white",
          }}
          onClick={() => {
            setFill(true);
            setErase(false);
          }}
        ></button>
        <button
          style={{
            width: "100%",
            backgroundImage: `url("/pencil.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            backgroundColor: "white",
          }}
          onClick={() => {
            setErase(true);
            setFill(false);
          }}
        ></button>
        <button
          style={{
            width: "100%",
            backgroundImage: `url("/undo.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            backgroundColor: "white",
          }}
          onClick={() => setUndo(true)}
        ></button>
        <button
          style={{
            width: "100%",
            backgroundImage: `url("/clear.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            backgroundColor: "white",
          }}
          onClick={() => setClear(true)}
        ></button>
      </div>
    </div>
  );
}
