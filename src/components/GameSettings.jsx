import { useEffect, useState } from "react";
import Start from "./buttons/Start";
import Option from "./inputs/Option";
import Custom from "./inputs/Custom";
import setting from "../events/setting";
import offSetting from "../events/offSetting";
export default function () {
  const [playerCount, setPlayerCount] = useState(7);
  const [drawTime, setDrawTime] = useState(80);
  const [roundCount, setRoundCount] = useState(3);
  const [useCustomWords, setUseCustomWords] = useState(false);
  const [customWords, setCustomWords] = useState("");
  useEffect(() => {
    setting(setPlayerCount, setDrawTime, setRoundCount, setCustomWords, setUseCustomWords);
    return () => offSetting();
  }, [])
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#2d2f3b",
        color: "white",
        height: "100%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <Option fieldAttr={playerCount} setAttr={setPlayerCount} optionAttr={[2, 3, 4, 5]} type={"Players"} />
        <Option fieldAttr={drawTime} setAttr={setDrawTime} optionAttr={[30, 60, 80, 100]} type={"Draw Time"} />
        <Option fieldAttr={roundCount} setAttr={setRoundCount} optionAttr={[1, 2, 3]} type={"Rounds"} />
      </div>
      <Custom setCustomWords={setCustomWords} setUseCustomWords={setUseCustomWords} customWords={customWords} useCustomWords={useCustomWords} />
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          gap: "10px",
          height: "10%",
        }}
      >
        <Start />
      </div>
    </div>
  );
}
