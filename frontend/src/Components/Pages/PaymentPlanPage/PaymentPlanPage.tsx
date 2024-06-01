import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import PaymentPlanDashboard from '../../PaymentPlanDashboard/PaymentPlanDashboard'
import Tile from '../../Tile/Tile'

interface Props {}

const PaymentPlanPage = (props: Props) => {
  return (

      <div className="w-full relative flex ct-docs-disable-sidebar-content ">
  
      <Sidebar />
      <PaymentPlanDashboard ><Tile title="Viewing" subTitle="Charging Sessions"/></PaymentPlanDashboard>
  
  
       </div>
    )
  
}

export default PaymentPlanPage