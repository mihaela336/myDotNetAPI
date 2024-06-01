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
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>

    </div>
  )
}

export default DeleteChargingSession