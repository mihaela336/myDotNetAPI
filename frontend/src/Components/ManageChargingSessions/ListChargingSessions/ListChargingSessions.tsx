import React, { SyntheticEvent } from 'react'
import CardChargingSession from '../CardChargingSession/CardChargingSession';

interface Props {
    chargingSessionValues: string[];
    onChargingSessionDelete: (e: SyntheticEvent)=>void;
}

const ListChargingSessions = ({chargingSessionValues, onChargingSessionDelete}: Props) => {
  return <>
  <h3>My Charging sessions</h3>
  <ul>
    {chargingSessionValues &&
    chargingSessionValues.map((chargingSessionValue)=>{
        return <CardChargingSession chargingSessionValue={chargingSessionValue} onChargingSessionDelete= {onChargingSessionDelete}/>
    })}
  </ul>
  </>
}

export default ListChargingSessions