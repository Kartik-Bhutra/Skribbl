import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";
import { socket } from "../socket";

export default function ({ roomID }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const coordinates = useRef([]);
  const width = useRef(0);
  const height = useRef(0);
  const [clear, setClear] = useState(false);
  const [undo, setUndo] = useState(false);
  const [erase, setErase] = useState(false);
  const [fill, setFill] = useState(false);
  const [color, setColor] = useState("#000000");

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    let { width: canvasWidth, height: canvasHeight } =
      window.getComputedStyle(canvas);
    canvas.width = parseFloat(canvasWidth);
    canvas.height = parseFloat(canvasHeight);
    width.current = canvas.width;
    height.current = canvas.height;
    redraw();
  };

  const createLine = ({ path, lineWidth, color }) => {
    const ctx = ctxRef.current;
    ctx.beginPath();
    ctx.moveTo(path[0][0] * width.current, path[0][1] * height.current);
    path.forEach(([x, y]) => {
      const canvasX = x * width.current;
      const canvasY = y * height.current;
      ctx.lineTo(canvasX, canvasY);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(canvasX, canvasY, lineWidth / 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(canvasX, canvasY);
    });
    ctx.closePath();
  };

  const redraw = () => {
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, width.current, height.current);
    coordinates.current.forEach((portion) => {
      if (portion.type === "path") {
        createLine(portion);
      } else if (portion.type === "fill") {
        fillColor(
          Math.floor(portion.x * width.current),
          Math.floor(portion.y * height.current),
          portion.color
        );
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    socket.on("recieve_drawing", (canvasData) => {
      coordinates.current = canvasData;
      resizeCanvas();
    });
    socket.on("undo", () => {
      coordinates.current.pop();
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, width.current, height.current);
      redraw();
    });
    socket.on("fill", (fillData) => {
      coordinates.current.push(fillData);
      fillColor(
        Math.floor(fillData.x * width.current),
        Math.floor(fillData.y * height.current),
        fillData.color
      );
    });
    socket.on("path", (pathIdx, pathData) => {
      coordinates.current[pathIdx] = pathData;
      createLine(pathData);
    });
    socket.on("clear", () => {
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, width.current, height.current);
    });
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      socket.emit("leave_room", roomID.current);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (clear) {
      ctxRef.current.clearRect(0, 0, width.current, height.current);
      coordinates.current = [];
      socket.emit("clear", roomID.current);
      setClear(false);
    }
    if (undo) {
      coordinates.current.pop();
      socket.emit("undo", roomID.current);
      redraw();
      setUndo(false);
    }
    setFill(false);
    setErase(false);
  }, [clear, undo]);

  const handlePointerDown = (e) => {
    if (
      coordinates.current.length &&
      coordinates.current[coordinates.current.length - 1].type == "path" &&
      coordinates.current[coordinates.current.length - 1].path.length === 1
    ) {
      coordinates.current.pop();
    }
    const { offsetX, offsetY } = e.nativeEvent;
    if (fill) {
      const fillData = {
        type: "fill",
        x: offsetX / width.current,
        y: offsetY / height.current,
        color,
      };
      coordinates.current.push(fillData);
      socket.emit("fill", fillData, roomID.current);
      fillColor(Math.floor(offsetX), Math.floor(offsetY), color);
      return;
    }
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    coordinates.current.push({
      type: "path",
      path: [[offsetX / width.current, offsetY / height.current]],
      color: erase ? "white" : color,
      lineWidth: 12,
    });
  };

  const handlePointerMove = (e) => {
    if (e.buttons !== 1) return;
    if (fill) {
      return;
    }
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = ctxRef.current;
    if (erase) {
      ctx.clearRect(offsetX - 5, offsetY - 5, 10, 10);
    } else {
      ctx.lineTo(offsetX, offsetY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 12;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(offsetX, offsetY, 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    }
    if (coordinates.current[coordinates.current.length - 1].type === "path") {
      coordinates.current[coordinates.current.length - 1].path.push([
        offsetX / width.current,
        offsetY / height.current,
      ]);
    }
    socket.emit(
      "path",
      coordinates.current.length,
      coordinates.current[coordinates.current.length - 1],
      roomID.current
    );
  };

  const fillColor = (startX, startY, fillColor) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const width = canvas.width;
    const height = canvas.height;

    const targetColor = {
      r: parseInt(fillColor.slice(1, 3), 16),
      g: parseInt(fillColor.slice(3, 5), 16),
      b: parseInt(fillColor.slice(5, 7), 16),
      a: 255,
    };

    const startIndex = (startY * width + startX) * 4;
    const startColor = {
      r: data[startIndex],
      g: data[startIndex + 1],
      b: data[startIndex + 2],
      a: data[startIndex + 3],
    };

    const tolerance = 40;
    const visited = new Uint8Array(width * height);

    const colorMatch = (index) => {
      return (
        Math.abs(data[index] - startColor.r) <= tolerance &&
        Math.abs(data[index + 1] - startColor.g) <= tolerance &&
        Math.abs(data[index + 2] - startColor.b) <= tolerance &&
        Math.abs(data[index + 3] - startColor.a) <= tolerance
      );
    };

    const setColor = (index) => {
      data[index] = targetColor.r;
      data[index + 1] = targetColor.g;
      data[index + 2] = targetColor.b;
      data[index + 3] = targetColor.a;
    };

    const queue = [[startX, startY]];

    while (queue.length) {
      const [x, y] = queue.shift();
      const index = (y * width + x) * 4;

      if (visited[y * width + x] === 0 && colorMatch(index)) {
        setColor(index);
        visited[y * width + x] = 1;

        if (x > 0) queue.push([x - 1, y]);
        if (x < width - 1) queue.push([x + 1, y]);
        if (y > 0) queue.push([x, y - 1]);
        if (y < height - 1) queue.push([x, y + 1]);

        if (x > 0 && y > 0) queue.push([x - 1, y - 1]);
        if (x < width - 1 && y > 0) queue.push([x + 1, y - 1]);
        if (x > 0 && y < height - 1) queue.push([x - 1, y + 1]);
        if (x < width - 1 && y < height - 1) queue.push([x + 1, y + 1]);
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "90%",
          backgroundColor: "white",
          border: "1px solid black",
        }}
      >
        <canvas
          style={{ width: "100%", height: "100%", touchAction: "none" }}
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        ></canvas>
      </div>
      <div style={{ width: "100%", height: "10%" }}>
        <Toolbar
          setClear={setClear}
          setUndo={setUndo}
          setErase={setErase}
          setFill={setFill}
          setColor={setColor}
        />
      </div>
    </>
  );
}
