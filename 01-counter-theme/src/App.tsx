import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <div className={`app ${theme}`}>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        {theme === "light" ? "Dark" : "Light"} {theme}
      </button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c - 1)}>−</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
