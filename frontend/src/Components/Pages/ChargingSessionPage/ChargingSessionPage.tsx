import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { Outlet, Search, useParams } from 'react-router-dom'
import Tile from '../../Tile/Tile'
import ChargingSessionDashboard from '../../ChargingSessionDashboard/ChargingSessionDashboard'

interface Props {}

const ChargingSessionPage = (props: Props) => {
  const [item, setItem] = useState<string>("chargingsession");
  //fetch data(which data ? user route?) before page loada
  let {ticker} = useParams();
  return (
    <div className="w-full relative flex ct-docs-disable-sidebar-content ">

    <Sidebar />
    <ChargingSessionDashboard ><Tile title="Viewing" subTitle="Charging Sessions"/></ChargingSessionDashboard>


     </div>
  )
}

export default ChargingSessionPage