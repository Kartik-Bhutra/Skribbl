import { useEffect, useRef, useState } from "react";
import Options from "./Options";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false);
  const coordinates = useRef([]);
  const width = useRef(0);
  const height = useRef(0);
  const [clear, setClear] = useState(false);
  const [undo, setUndo] = useState(false);
  const [erase, setErase] = useState(false);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    let { width: canvasWidth, height: canvasHeight } =
      window.getComputedStyle(canvas);
    canvasWidth = parseFloat(canvasWidth);
    canvasHeight = parseFloat(canvasHeight);
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    width.current = canvasWidth;
    height.current = canvasHeight;
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

  useEffect(() => {
    if (clear) {
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, width.current, height.current);
      coordinates.current = [];
      setClear(false);
    }
    if (undo) {
      coordinates.current.pop();
      redraw();
      setUndo(false);
    }
  }, [clear, undo]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    isDrawing.current = true;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    if (!erase) {
      coordinates.current.push([
        [offsetX / width.current, offsetY / height.current],
      ]);
    }
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = ctxRef.current;

    if (erase) {
      ctx.clearRect(offsetX - 5, offsetY - 5, 10, 10);
    } else {
      ctx.lineTo(offsetX, offsetY);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();
      const lastPath = coordinates.current[coordinates.current.length - 1];
      lastPath.push([offsetX / width.current, offsetY / height.current]);
    }
  };

  const stopDrawing = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    ctxRef.current.closePath();
  };

  const createPoint = (e) => {
    if (erase) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.fillStyle = "red";
    ctxRef.current.fillRect(offsetX - 1.25, offsetY - 1.25, 2.25, 2.25);
    coordinates.current.push([
      [offsetX / width.current, offsetY / height.current],
    ]);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          startDrawing(e);
          createPoint(e);
        }}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
        onPointerLeave={stopDrawing}
      ></canvas>
      <Options setClear={setClear} setUndo={setUndo} setErase={setErase} />
    </>
  );
}
