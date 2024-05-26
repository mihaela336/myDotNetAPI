import React, { SyntheticEvent } from 'react'
import DeleteChargingSession from '../DeleteChargingSession/DeleteChargingSession';

interface Props {
    chargingSessionValue: string;
    onChargingSessionDelete: (e: SyntheticEvent) => void;
}

const CardChargingSession = ({ chargingSessionValue, onChargingSessionDelete }: Props) => {
    return (
        <>
            <h4>{chargingSessionValue}</h4>
            < DeleteChargingSession
                onChargingSessionDelete={onChargingSessionDelete}
                chargingSessionValue={chargingSessionValue} />
        </>

    );
};

export default CardChargingSession