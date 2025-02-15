import { socket } from "../../socket";

export default function (setIsConnected) {
  socket.on("connect", () => {
    setIsConnected(true);
    console.log("Socket Connected");
  })
  socket.on("disconnect", (err, disc) => {
    setIsConnected(false);
    console.log(err, disc);
  })
  socket.on("connect_error", (err) => {
    socket.disconnect();
    console.log(err.message);
  });
}