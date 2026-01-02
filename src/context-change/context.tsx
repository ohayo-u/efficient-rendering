import { createContext, useContext, useState } from "react";

type SomethingContextValue = {
  something: number;
  increment: () => void;
};

const SomethingContext = createContext<SomethingContextValue | null>(null);

export const SomethingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [something, setSomething] = useState(0);

  const increment = () => {
    setSomething((prev) => prev + 1);
  };

  return (
    <SomethingContext.Provider value={{ something, increment }}>
      {children}
    </SomethingContext.Provider>
  );
};

export const useSomethingContext = () => {
  const ctx = useContext(SomethingContext);
  if (!ctx) {
    throw new Error("useSomethingContext must be used inside SomethingProvider");
  }
  return ctx;
};
