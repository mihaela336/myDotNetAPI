import React, { SyntheticEvent } from 'react'

interface Props {
  chargingSessionValue: string;
    onChargingSessionDelete:(e: SyntheticEvent)=> void;
}

const DeleteChargingSession = ({onChargingSessionDelete, chargingSessionValue}: Props) => {
  return (
    <div>
      <form onSubmit={onChargingSessionDelete}>
        <input hidden={true} value={chargingSessionValue}/>
        <button>x</button>
      </form>

    </div>
  )
}

export default DeleteChargingSession