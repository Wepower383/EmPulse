import React from "react";
import CoilSimulator from "./components/CoilSimulator";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">EMPulse: Electromagnetic Coil Simulator</h1>
      <CoilSimulator />
    </div>
  );
}

export default App;
