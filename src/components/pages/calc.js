import React, { useState } from "react";

export default function Calc() {
  const [weightLb, setWeightLb] = useState(0);
  const [weightKg, setWeightKg] = useState(0);

  const convert = () => {
    if (Number.isNaN(weightLb)) {
      alert("Must input numbers");
    }
    setWeightKg(weightLb * 0.45);
  };

  return (
    <div className="Calc">
      <label>
        Pounds
        <input type="number" onChange={e => setWeightLb(e.target.value)} />
      </label>
      <button type="button" onClick={convert}>
        Convert to kg!
      </button>
      <div>Weight (kg): {weightKg}</div>
    </div>
  );
}
