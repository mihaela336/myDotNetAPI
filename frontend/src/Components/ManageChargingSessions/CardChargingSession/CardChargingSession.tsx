import React, { SyntheticEvent } from 'react'
import DeleteChargingSession from '../DeleteChargingSession/DeleteChargingSession';

interface Props {
    chargingSessionValue: string;
    onChargingSessionDelete: (e: SyntheticEvent) => void;
}

const CardChargingSession = ({ chargingSessionValue, onChargingSessionDelete }: Props) => {
    return (
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <p className="pt-6 text-xl font-bold">{chargingSessionValue}</p>
        <DeleteChargingSession
          chargingSessionValue={chargingSessionValue}
          onChargingSessionDelete={onChargingSessionDelete}
          />
      </div>

    );
};

export default CardChargingSession