import { useShallow } from "zustand/react/shallow"
import { useZustandStore } from "./store"

export const ShallowZustandComponent = () => {
  const [a] = useZustandStore(
    useShallow((state) => [state.a])
  )

  console.log("ShallowZustandComponent render")

  return <div>a = {a}</div>
}
