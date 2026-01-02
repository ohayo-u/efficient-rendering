import { useSomethingContext } from "../context";
import { Child } from "./child";

export function Bad() {
  const { something, increment } = useSomethingContext();

  console.log("Bad render");

  return (
    <div>
      <p>something: {something}</p>
      <button onClick={increment}>increment</button>

      {/* ❌ Re-rendered when context is changed */}
      <Child />
    </div>
  );
};
