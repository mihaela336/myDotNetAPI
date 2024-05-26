import React from 'react'
import CardChargingSession from '../CardChargingSession/CardChargingSession';

interface Props {
    chargingSessionValues: string[];
}

const ListChargingSessions = ({chargingSessionValues}: Props) => {
  return <>
  <h3>My Charging sessions</h3>
  <ul>
    {chargingSessionValues &&
    chargingSessionValues.map((chargingSessionValue)=>{
        return <CardChargingSession chargingSessionValue={chargingSessionValue}/>
    })}
  </ul>
  </>
}

export default ListChargingSessions