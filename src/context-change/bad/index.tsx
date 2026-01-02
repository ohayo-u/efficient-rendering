import { useCountContext } from "../context";
import { Child } from "./child";

export function Bad() {
  const { count, increment } = useCountContext();

  console.log("Bad render");

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>

      {/* ❌ Re-rendered when context is changed */}
      <Child />
    </div>
  );
};
