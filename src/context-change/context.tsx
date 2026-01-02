import { createContext, useContext, useState } from "react";

type CountContextValue = {
  count: number;
  increment: () => void;
};

const CountContext = createContext<CountContextValue | null>(null);

export const SomethingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider value={{ count, increment }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCountContext = () => {
  const ctx = useContext(CountContext);
  if (!ctx) {
    throw new Error("useCountContext must be used inside SomethingProvider");
  }
  return ctx;
};
