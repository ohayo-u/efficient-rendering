import { ContextChange } from "./context-change";
import Memo from "./memo";
import { ZustandSelector } from "./zustand-selector";

function App() {
  return (
    <ol style={{ display: "grid", gap: "1rem", padding: "1rem", margin: "1rem" }}>
      <li>Pass component as a child </li>
      <ContextChange />
      <li>Use zustand with explicit selector</li>
      <ZustandSelector />
      <li>Memoization with React.memo</li>
      <Memo />
    </ol>
  );
}

export default App;
