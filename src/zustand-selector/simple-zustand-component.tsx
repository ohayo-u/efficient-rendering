import { useZustandStore } from "./store"

export const SimpleZustandComponent = () => {
  const { a } = useZustandStore()

  console.log("SimpleZustandComponent render")

  return <div>a = {a}</div>
}

