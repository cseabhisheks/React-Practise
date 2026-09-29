// Throttling
import { useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const lastTime = useRef(0);

  const handleInput = (e) => {
    setText(e.target.value);

    const currentTime = Date.now();

    if (currentTime - lastTime.current >= 2000) {
      console.log("Function called:", e.target.value);

      lastTime.current = currentTime;
    }
  };

  return (
    <input
      value={text}
      onChange={handleInput}
      placeholder="Type something..."
    />
  );
}