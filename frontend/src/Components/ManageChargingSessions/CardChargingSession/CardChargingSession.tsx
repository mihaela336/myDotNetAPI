import React, { SyntheticEvent } from 'react'
import DeleteChargingSession from '../DeleteChargingSession/DeleteChargingSession';
import { Link } from 'react-router-dom';

interface Props {
    chargingSessionValue: string;
    onChargingSessionDelete: (e: SyntheticEvent) => void;
}

const CardChargingSession = ({ chargingSessionValue, onChargingSessionDelete }: Props) => {
    return (
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <Link to={'/station/${chargingSessionValue}'} className="pt-6 text-xl font-bold">{chargingSessionValue}</Link>
        <DeleteChargingSession
          chargingSessionValue={chargingSessionValue}
          onChargingSessionDelete={onChargingSessionDelete}
          />
      </div>

    );
};

export default CardChargingSession