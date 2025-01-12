import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false);
  const coordinates = useRef([]);
  const width = useRef(0);
  const height = useRef(0);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    width.current = canvas.width;
    height.current = canvas.height;
    redraw();
  };

  const redraw = () => {
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, width.current, height.current);
    for (const path of coordinates.current) {
      if (path.length === 1) {
        const [x, y] = path[0];
        ctx.fillStyle = "red";
        ctx.fillRect(
          x * width.current - 1.25,
          y * height.current - 1.25,
          2.25,
          2.25
        );
      } else {
        ctx.beginPath();
        ctx.moveTo(path[0][0] * width.current, path[0][1] * height.current);
        for (let i = 1; i < path.length; i++) {
          const [x, y] = path[i];
          ctx.lineTo(x * width.current, y * height.current);
        }
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    isDrawing.current = true;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    coordinates.current.push([
      [offsetX / width.current, offsetY / height.current],
    ]);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = ctxRef.current;
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
    const lastPath = coordinates.current[coordinates.current.length - 1];
    lastPath.push([offsetX / width.current, offsetY / height.current]);
  };

  const stopDrawing = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    ctxRef.current.closePath();
  };

  const createPoint = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.fillStyle = "red";
    ctxRef.current.fillRect(offsetX - 1.25, offsetY - 1.25, 2.25, 2.25);
    coordinates.current.push([
      [offsetX / width.current, offsetY / height.current],
    ]);
  };

  return (
    <canvas
      ref={canvasRef}
      className="canvas"
      onPointerDown={(e) => {
        startDrawing(e);
        createPoint(e);
      }}
      onPointerMove={draw}
      onPointerUp={stopDrawing}
      onPointerCancel={stopDrawing}
      onPointerLeave={stopDrawing}
    ></canvas>
  );
}
