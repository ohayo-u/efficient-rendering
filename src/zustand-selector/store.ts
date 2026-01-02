import { create } from "zustand"

interface State {
  a: number
  b: number
  incA: () => void
  incB: () => void
}

export const useZustandStore = create<State>((set) => ({
  a: 0,
  b: 0,
  incA: () => set((s) => ({ a: s.a + 1 })),
  incB: () => set((s) => ({ b: s.b + 1 })),
}))