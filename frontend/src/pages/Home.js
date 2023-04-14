import React, { useEffect, useState } from "react";

// components
import CycleDetails from "../components/CycleDetails";
import CycleForm from "../components/CycleForm";

const Home = () => {
  const [cycles, setCycles] = useState(null);

  useEffect(() => {
    const fetchCycles = async () => {
      const response = await fetch("/api/cycles");
      const json = await response.json();

      if (response.ok) {
        setCycles(json);
      }
    };
    fetchCycles();
  }, []);

  return (
    <div className="Home">
      <div className="cycles">
        {cycles &&
          cycles.map((cycle) => <CycleDetails key={cycle._id} cycle={cycle} />)}
      </div>
      <div className="cycle-form">
        <CycleForm />
      </div>
    </div>
  );
};

export default Home;
