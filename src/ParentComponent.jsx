import { useState } from "react";
import MessageDisplay from "./MessageDisplay";

function ParentComponent() {
  const [message] = useState("Hello from the parent component!");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Props Example</h1>
      <MessageDisplay message={message} />
    </div>
  );
}

export default ParentComponent;