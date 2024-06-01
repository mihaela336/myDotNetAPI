import React from 'react';
import Tile from '../Tile/Tile';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  // ticker: string;
}

const VehicleDashboard = ({children}: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
    
    <div className="relative pt-20 pb-32 bg-lightBlue-500">

      <div className="px-4 md:px-6 mx-auto w-full">

        <div className="flex flex-wrap">{children}
          <Tile title="Last registered" subTitle="User 14" />
          <Tile title="Total users" subTitle="1567" />
          <Tile title="Total stations" subTitle="20" />
          <Tile title="Total transactions" subTitle="10 568" />
          <Tile title="Total charging sessions" subTitle="10 568" />

        </div>
        <div className="flex flex-wrap items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end">
        <Link
            to="/vehicle/add">
         <button
            type="submit"
            className="p-1 px-6 text-white mr-2 bg-lightGreen rounded-lg hover:opacity-70 focus:outline-none"
          >
            Add new vehicle
          </button></Link>
          <button
            type="submit"
            className="p-1 px-6 text-white bg-orange-300 mr-2 rounded-lg hover:opacity-70 focus:outline-none"
          >
            Delete all
          </button>
        </div>


        <div className="flex flex-wrap">{<Outlet context />}


        </div>


      </div>

    </div>

  </div>
  )
}

export default VehicleDashboard