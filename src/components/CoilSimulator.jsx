import React, { useState } from "react";

const CoilSimulator = () => {
  const [voltage, setVoltage] = useState(5);
  const [current, setCurrent] = useState(1);

  const power = voltage * current;

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="mb-2">
        <label className="block">Voltage (V):</label>
        <input type="range" min="0" max="100" value={voltage}
          onChange={(e) => setVoltage(Number(e.target.value))} />
        <span>{voltage} V</span>
      </div>
      <div className="mb-2">
        <label className="block">Current (A):</label>
        <input type="range" min="0" max="10" value={current}
          onChange={(e) => setCurrent(Number(e.target.value))} />
        <span>{current} A</span>
      </div>
      <div>
        <strong>Power Output:</strong> {power} W
      </div>
    </div>
  );
};

export default CoilSimulator;
