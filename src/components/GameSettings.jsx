import { useEffect, useState } from "react";
import Start from "./buttons/Start";
import Option from "./inputs/Option";
import Custom from "./inputs/Custom";
import setting from "../events/setting";
import offSetting from "../events/offSetting";
import Setting from "./inputs/Setting";
export default function ({ gameSettings, setGameSettings, roomID }) {
  const [playerCount, setPlayerCount] = useState(7);
  const [useCustomWords, setUseCustomWords] = useState(false);
  const [customWords, setCustomWords] = useState("");
  useEffect(() => {
    setting(setPlayerCount, setGameSettings, setCustomWords, setUseCustomWords);
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
        <Option playerCount={playerCount} setPlayerCount={setPlayerCount} roomID={roomID} />
        <Setting gameSettings={gameSettings} setGameSettings={setGameSettings} optionAttr={[30, 60, 80, 100]} type={"drawTime"} roomID={roomID} />
        <Setting gameSettings={gameSettings} setGameSettings={setGameSettings} optionAttr={[1, 2, 3]} type={"roundCount"} roomID={roomID} />
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
