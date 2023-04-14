import React from 'react'

const CycleDetails = ({cycle}) => {
  return (
    <div className='cycle-details'>
        <p><strong>Start Date: </strong>{cycle.startDate.substr(0, 10)}</p>
        <p><strong>End Date: </strong>{cycle.endDate.substr(0, 10)}</p>
        <p>Flow Intensity: {cycle.flowIntensity}</p>
    </div>
  )
}

export default CycleDetails;