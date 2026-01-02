import { useSomethingContext } from "../context";

export const Good = ({ children }: { children: React.ReactNode }) => {
  const { something, increment } = useSomethingContext();

  console.log("Good render");

  return (
    <div>
      <p>something: {something}</p>
      <button onClick={increment}>increment</button>
      {/* ✅ The children is not re-rendered when context is changed */}
      {children}
    </div>
  );
};
