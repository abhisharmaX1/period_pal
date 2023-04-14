import React, { useState } from "react";

const CycleForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [flowIntensity, setFlowIntensity] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cycle = { startDate, endDate, flowIntensity };

    const response = await fetch("/api/cycles", {
      method: "POST",
      body: JSON.stringify(cycle),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setStartDate("");
      setEndDate("");
      setFlowIntensity("");
      console.log("new cycle added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Cycle</h3>

      <label>Start Date:</label>
      <input
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      />

      <label>End Date:</label>
      <input
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      />

      <label>Flow Intensity (1-5):</label>
      <input
        type="number"
        min="1"
        max="5"
        onChange={(e) => setFlowIntensity(e.target.value)}
        value={flowIntensity}
      />

      <button>Add Cycle</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CycleForm;
