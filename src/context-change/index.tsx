import { Bad } from "./bad"
import { SomethingProvider } from "./context"
import { Good } from "./good"
import { Child } from "./good/child"

export function ContextChange() {
  
  return (
    <SomethingProvider>
      <Good><Child /></Good>
      <Bad />
    </SomethingProvider>
  )
}