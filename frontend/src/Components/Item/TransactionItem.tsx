import React, { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom';
import { User } from '../../types';

interface Props {
    id: string;
    user: User;
    route: string;
    //   onChargingSessionCreate: (e: SyntheticEvent)=> void;

}

const Item: React.FC<Props> = ({ id, user , route}: Props): JSX.Element => {
    return (
        <div
            className="py-3 sm:py-4"

            id={id}
        >

            {/* <li className="py-3 sm:py-4"> */}
            <div className="flex items-center space-x-4 truncate  border-b border-gray-200">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">

                        <Link to={`/${route}/details?${user.id}`} className="font-bold text-center text-veryDarkViolet md:text-left">
                            {user.name} ({user.name})
                        </Link>

                    </p>
                    <p className="text-sm text-gray-500 truncate">
                        {user.email}
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

export default Item