import { ShallowZustandComponent } from "./shallow-zustand-component";
import { SimpleZustandComponent } from "./simple-zustand-component";
import { useZustandStore } from "./store";

export const ZustandSelector = () => {
  const incStoreA = useZustandStore((s) => s.incA)
  const incStoreB = useZustandStore((s) => s.incB)

  return (
    <>
      <button onClick={incStoreA}>increment store a</button>
      <button onClick={incStoreB}>increment store b</button>

      <SimpleZustandComponent />
      <ShallowZustandComponent />
    </>
  )
};