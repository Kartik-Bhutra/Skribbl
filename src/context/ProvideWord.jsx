import { createContext, useState } from "react";
import useWord from "../hooks/useWord";

export const wordContext = createContext();

export default function ({ children }) {
  const [word, setWord] = useState(useWord());
  return <wordContext.Provider value={word}>{children}</wordContext.Provider>;
}
