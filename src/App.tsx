import { ContextChange } from "./context-change";
import Memo from "./memo";
import { ZustandSelector } from "./zustand-selector";

function App() {
  return (
    <>
      <ContextChange />
      <ZustandSelector />
      <Memo />
    </>
  );
}

export default App;
