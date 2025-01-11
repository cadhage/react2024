import { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";

export function Timer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button color="auto" onClick={() => setCount((count) => count + 1)}>
        Button
      </button>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}
export function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export function List() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((x) => <li key={x}>{x}</li>);
  return <ul>{listItems}</ul>;
}

export function ExpCal({ num = 2 }) {
  const compute = useMemo(() => num * 2, [num]);
  return <h1>Result: {compute}</h1>;
}
