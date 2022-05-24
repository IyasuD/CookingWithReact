import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");
  console.log("render App");
  // const el = document.createElement("h1");
  // el.innerText("Hello World");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={10} />
      <button
        onClick={() => {
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          });
        }}
      >
        ToggleTheme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
