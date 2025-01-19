import { useContext } from "react";
import { wordContext } from "../context/ProvideWord";

export default function () {
  const word = useContext(wordContext);
  console.log(word);    
  return (
    <div>{word}</div>
  );
}
