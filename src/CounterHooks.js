import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";
export default function CounterHooks({ initialCount }) {
  //const [state, setState] = useState({ count: initialCount });
  const [count, setCount] = useState(0);
  const style = useContext(ThemeContext);
  return (
    <>
      <button
        style={style}
        onClick={() =>
          setCount((prevCount) => {
            return prevCount - 1;
          })
        }
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() =>
          setCount((prevCount) => {
            return prevCount + 1;
          })
        }
      >
        +
      </button>
    </>
  );
}
