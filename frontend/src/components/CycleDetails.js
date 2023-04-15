import React from 'react'
import { useCyclesContext } from '../hooks/useCyclesContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CycleDetails = ({cycle}) => {
  const {dispatch} = useCyclesContext();

  const handleClick = async () => {
    const response = await fetch('api/cycles/' + cycle._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({
        type: 'DELETE_CYCLE',
        payload: json
      })
    }
  }

  return (
    <div className='cycle-details'>
        <p><strong>Start Date: </strong>{cycle.startDate.substr(0, 10)}</p>
        <p><strong>End Date: </strong>{cycle.endDate.substr(0, 10)}</p>
        <p>Flow Intensity: {cycle.flowIntensity}</p>
        <p>{formatDistanceToNow(new Date(cycle.createdAt), { addSuffix: true })}</p>
        <span>
          <button className="material-symbols-outlined" onClick={handleClick}>delete</button>
        </span>
    </div>
  )
}

export default CycleDetails;