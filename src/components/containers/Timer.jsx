import { useEffect, useState } from "react"
import { socket } from "../../socket"

export default function () {
  const [time, setTime] = useState(0);
  useEffect(() => {
    socket.on("time", (time) => setTime(time))
  }, [])
  return (
    <div style={{
      backgroundImage: `url("/clock.gif")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {time}
    </div>
  )
}