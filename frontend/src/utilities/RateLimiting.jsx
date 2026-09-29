// RATELIMITING
import { useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const count = useRef(0);

  const handleInput = (e) => {
    setText(e.target.value);

    if (count.current < 3) {
      console.log("API call:", e.target.value);
      count.current++;
    } else {
      console.log("Request blocked");
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