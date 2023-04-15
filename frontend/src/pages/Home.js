import React, { useEffect } from "react";

// components
import CycleDetails from "../components/CycleDetails";
import CycleForm from "../components/CycleForm";
import { useCyclesContext } from "../hooks/useCyclesContext";

const Home = () => {
  // const [cycles, setCycles] = useState(null);
  const {cycles, dispatch} = useCyclesContext();

  useEffect(() => {
    const fetchCycles = async () => {
      const response = await fetch("/api/cycles");
      const json = await response.json();

      if (response.ok) {
        // setCycles(json);
        dispatch({
          type: 'SET_CYCLES',
          payload: json
        })
      }
    };
    fetchCycles();
  }, [dispatch]);

  return (
    <div className="home">
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
