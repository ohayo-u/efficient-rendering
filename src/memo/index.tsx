import { memo, useState } from "react";

export default function Memo() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      {/* When the address state changes, the Greeting component does not re-render */}
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
});
