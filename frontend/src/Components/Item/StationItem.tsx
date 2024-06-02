import React, { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom';
import { Station } from '../../types';

interface Props {
    id: number;
    station: Station;
    route: string;
}

const StationItem: React.FC<Props> = ({ id, station, route }: Props): JSX.Element => {
    const idAsString: string = id.toString();
    return (
        <div
            className="py-3 sm:py-4"
            id={idAsString}
        >
            <div className="flex items-center space-x-4 truncate  border-b border-gray-200">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">


                        <Link to={`/${route}/details?${station.id}`} className="font-bold text-center text-veryDarkViolet md:text-left">
                             {station.name}
                        </Link>

                    </p>
                    <p className="text-sm mt-2 text-gray-500 truncate">

                        <span className="font-bold mr-2">Charging session length:
                        </span>
                        {station.status}
                    </p>
                    <p className="text-sm mt-2 text-gray-500 truncate">

                        <span className="font-bold mr-2">KWh Delivered:
                        </span>
                        {station.adress}
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

export default StationItem