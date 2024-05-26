import "./styles.css";
import { useMemo, useState } from "react";
import useCustomMemo from "../public/utils/useCustomMemo";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  const squaredValue = (value) => {
    console.log("some Expensive calculations");
    return count1 * count1;
  };

  const value = useCustomMemo(squaredValue, [count1]);

  return (
    <div className="App">
      <h1>Counter1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <h1>SquaredValue: {value}</h1>
      <h1>Counter2: {count2}</h1>
      <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
    </div>
  );
}
