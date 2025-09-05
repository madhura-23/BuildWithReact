import React, { useState } from "react";
import "./App.css";

function App() {
  // Step 1: create state
  const [count, setCount] = useState(0);

  // Step 2: event handlers
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Step 3: return JSX
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Day 2: React Counter App 🔢</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
