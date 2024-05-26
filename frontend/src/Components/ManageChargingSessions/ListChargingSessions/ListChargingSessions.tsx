import React, { SyntheticEvent } from 'react'
import CardChargingSession from '../CardChargingSession/CardChargingSession';

interface Props {
    chargingSessionValues: string[];
    onChargingSessionDelete: (e: SyntheticEvent)=>void;
}

const ListChargingSessions = ({chargingSessionValues, onChargingSessionDelete}: Props) => {
  return( 
    <section id="portfolio">
    <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
      My Portfolio
    </h2>
    <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
      <>
        {chargingSessionValues.length > 0 ? (
          chargingSessionValues.map((chargingSessionValue) => {
            return (
              <CardChargingSession
              chargingSessionValue={chargingSessionValue}
              onChargingSessionDelete={onChargingSessionDelete}
              />
            );
          })
        ) : (
          <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            Your portfolio is empty.
          </h3>
        )}
      </>
    </div>
  </section>
  );


}

export default ListChargingSessions