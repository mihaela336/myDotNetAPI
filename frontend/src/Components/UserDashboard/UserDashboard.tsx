import React from 'react'
import { Outlet } from 'react-router-dom';
import Tile from '../Tile/Tile';

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const UserDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">

      <div className="relative pt-20 pb-32 bg-lightBlue-500">

        <div className="px-4 md:px-6 mx-auto w-full">

          <div className="flex flex-wrap">{children}
            <Tile title="Add user" subTitle="{User.name}" />
            <Tile title="Station Name" subTitle="{User.name}" />
            <Tile title="Station Name" subTitle="{User.name}" />
            <Tile title="Station Name" subTitle="{User.name}" />
            <Tile title="Station Name" subTitle="{User.name}" />

          </div>
          <div className="flex items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end">
            <button
              type="submit"
              className="p-1 px-6 text-white mr-2 bg-lightGreen rounded-lg hover:opacity-70 focus:outline-none"
            >
              Add User
            </button>
            <button
              type="submit"
              className="p-1 px-6 text-white bg-orange-300 mr-2 rounded-lg hover:opacity-70 focus:outline-none"
            >
              Delete all
            </button>
          </div>


          <div className="flex flex-wrap">{<Outlet context={ticker} />}


          </div>


        </div>

      </div>

    </div>


  )
}

export default UserDashboard