import React, { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom';
import { ChargingSession } from '../../types';

interface Props {
    id: number;
    chargingSession: ChargingSession;
    route: string;
}

const ChargingSessionItem: React.FC<Props> = ({ id, chargingSession, route }: Props): JSX.Element => {
    const idAsString: string = id.toString();
    return (
        <div
            className="py-3 sm:py-4"

            id={idAsString}
        >

            <div className="flex items-center space-x-4 truncate  border-b border-gray-200">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">


                        <Link to={`/${route}/details?${chargingSession.id}`} className="font-bold text-center text-veryDarkViolet md:text-left">
                            <span className="mr-2">Charging session id:</span> {chargingSession.id}
                        </Link>

                    </p>
                    <p className="text-sm mt-2 text-gray-500 truncate">

                        <span className="font-bold mr-2">Charging session length:
                        </span>
                        {chargingSession.chargingTime}
                    </p>
                    <p className="text-sm mt-2 text-gray-500 truncate">

                        <span className="font-bold mr-2">KWh Delivered:
                        </span>
                        {chargingSession.kwhDelivered}
                    </p>

                </div>



                <div className="inline-flex items-center text-base">
                    <Link to={`/${route}/update`}>
                        <button
                            type="submit"
                            className="p-1 px-8 text-white mr-2 bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
                        >
                            Update
                        </button> </Link>
                    <button
                        type="submit"
                        className="p-1 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
            {/* </li> */}
        </div>



    );
};

export default ChargingSessionItem