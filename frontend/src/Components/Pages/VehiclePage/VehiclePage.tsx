import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Tile from '../../Tile/Tile'
import VehicleDashboard from '../../VehicleDashboard/VehicleDashboard'

type Props = {}

const VehiclePage = (props: Props) => {
  return (
    <div className="w-full relative flex ct-docs-disable-sidebar-content ">
  
    <Sidebar />
    <VehicleDashboard ><Tile title="Viewing" subTitle="Charging Sessions"/></VehicleDashboard>


     </div>
  )
}

export default VehiclePage