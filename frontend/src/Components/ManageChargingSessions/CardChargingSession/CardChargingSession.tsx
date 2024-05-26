import React from 'react'

interface Props {
    chargingSessionValue: string;
}

const CardChargingSession = ({chargingSessionValue}: Props) => {
  return (
    <>
        <h4>{chargingSessionValue}</h4>
    <button>x</button>
    </>

  );
};

export default CardChargingSession