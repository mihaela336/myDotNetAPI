import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { Outlet, Search } from 'react-router-dom'
import StationDashboard from '../../StationDashboard/StationDashboard'
import Tile from '../../Tile/Tile'

interface Props { }

function UserPage({ }: Props) {
  return (
    <>
      <div className="w-full relative flex ct-docs-disable-sidebar-content ">

        <Sidebar />
        <div>
        <StationDashboard ticker="ticker!"><Tile title="Station Name" subTitle="some string" /></StationDashboard>


        <div className="relative md:ml-64 bg-blueGray-100 w-full">
          <div className="relative pt-20 pb-32 bg-lightBlue-500">
            <div className="px-4 md:px-6 mx-auto w-full">
            <h6>User Page</h6>
            <h6>User Page</h6>
            <h6>User Page</h6>
              <h6>User Page</h6>
            </div>
          </div>
        </div>
      </div>
      </div>









    </>

  )
}

export default UserPage