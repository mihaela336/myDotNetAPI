import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { Outlet, Search, useParams } from 'react-router-dom'
import Tile from '../../Tile/Tile'
import UserDashboard from '../../UserDashboard/UserDashboard'


interface Props { }


function UserPage(props: Props) {
  const [item, setItem] = useState<string>("user");
  //fetch data(which data ? user route?) before page loada
  let {ticker} = useParams();

  return (
    <>
     
     <div className="w-full relative flex ct-docs-disable-sidebar-content ">

     <Sidebar />
     <UserDashboard ticker={item!}><Tile title="Viewing" subTitle="Users"/></UserDashboard>


      </div>

    </>




  )
}

export default UserPage