import React, { useState } from "react";
import { useCyclesContext } from "../hooks/useCyclesContext";

const CycleForm = () => {
  const { dispatch } = useCyclesContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [flowIntensity, setFlowIntensity] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      dispatch({
        type: "CREATE_CYCLE",
        payload: json,
      });
      setError(null);
      setStartDate("");
      setEndDate("");
      setFlowIntensity("");
      setEmptyFields([]);
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
        className={emptyFields.includes('Start Date') ? 'error' : ''}
      />

      <label>End Date:</label>
      <input
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
        className={emptyFields.includes('End Date') ? 'error' : ''}
      />

      <label>Flow Intensity (1-5):</label>
      <input
        type="number"
        min="1"
        max="5"
        onChange={(e) => setFlowIntensity(e.target.value)}
        value={flowIntensity}
        className={emptyFields.includes('Flow Intensity') ? 'error' : ''}
      />

      <button>Add Cycle</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CycleForm;
