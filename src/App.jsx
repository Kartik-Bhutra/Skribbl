import Canvas from "./components/Canvas";

function App() {
  const app = import.meta.env.VITE_IP_ADDRESS;
  return <Canvas />;
}
export default App;
