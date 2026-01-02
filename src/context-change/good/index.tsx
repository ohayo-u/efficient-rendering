import { useCountContext } from "../context";

export const Good = ({ children }: { children: React.ReactNode }) => {
  const { count, increment } = useCountContext();

  console.log("Good render");

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      {/* ✅ The children is not re-rendered when context is changed */}
      {children}
    </div>
  );
};
