import React, { useState } from 'react';
import { useCyclesContext } from '../hooks/useCyclesContext';
import { differenceInDays } from 'date-fns';

function Predict() {
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const {cycles, dispatch} = useCyclesContext();

    async function handlePrediction() {
        
        try {
            if (cycles.length < 6) {
                setError("Must have atleast 6 cycles added to make prediction");
                throw Error("Must have atleast 6 cycles added");
            }
            let ans = [];
            for (let i = 1; i < 6; i++) {
                const date1 = new Date(cycles[i].startDate);
                const date2 = new Date(cycles[i - 1].startDate);
                ans.push(Math.abs(differenceInDays(date1, date2)));  
            }
            console.log(ans);
            const response = await fetch('http://127.0.0.1:8000/ml/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // pass any necessary input data as JSON
                    "data": ans
                })
            });
            const data = await response.json();
            console.log(data);
            setPrediction(data.Prediction);
        }
        catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <button onClick={handlePrediction}>Get Prediction</button>
            </form>
            {prediction && <p>Prediction: {Math.round(prediction)} days</p>}
            {error && <div className='error'>{error}</div>}
        </div>
    );
}

export default Predict;