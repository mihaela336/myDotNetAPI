import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Tile from '../../Tile/Tile'
import TransactionDashboard from '../../TransactionDashboard/TransactionDashboard'

interface Props {}

const TransactionPage = (props: Props) => {
  return (
    <div className="w-full relative flex ct-docs-disable-sidebar-content ">
  
    <Sidebar />
    <TransactionDashboard ><Tile title="Viewing" subTitle="Charging Sessions"/></TransactionDashboard>


     </div>
  )
}

export default TransactionPage