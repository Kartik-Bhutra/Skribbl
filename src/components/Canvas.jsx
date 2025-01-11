import { useEffect, useRef } from "react";
import "../styles/canvas.css";
export default function () {

  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvas.ctx = ctx;
  }, []);

  const startDrawing = (e) => {
    isDrawing.current = true;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    lastPos.current = { x, y };
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.ctx;
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
    lastPos.current = { x, y };
  };

  const createPoint = (e) => {
    const { offsetX: X, offsetY: Y } = e.nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.ctx;
    ctx.fillStyle = "red";
    ctx.fillRect(X - 1.25, Y - 1.25, 2.25, 2.25);
  };
  
  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerLeave={stopDrawing}
        onClick={createPoint}
      ></canvas>
    </div>
  );
}
