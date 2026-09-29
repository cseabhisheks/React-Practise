
// DEBOUNCING
import { useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const timer = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      console.log("Function called:", e.target.value);
    }, 500);
  };

  return (
    <input
      value={text}
      onChange={handleInput}
      placeholder="Type something..."
    />
  );
}