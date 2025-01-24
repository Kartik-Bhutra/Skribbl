import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Room from "./components/Room.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Room />} /> */}
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
