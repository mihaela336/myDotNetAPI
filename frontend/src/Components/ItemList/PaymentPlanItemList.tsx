import React, { SyntheticEvent } from 'react'

import { PaymentPlan } from '../../types';
import Item from '../Item/Item';
import PaymentPlanItem from '../Item/PaymentPlanItem';


interface Props {
  paymentPlanList: PaymentPlan[];
  route: string;
  // onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const PaymentPlanList : React.FC<Props> = ({paymentPlanList, route}: Props) : JSX.Element => {
  return (
    <>
  {paymentPlanList.length >0 ?(
    paymentPlanList.map((result)=>{
      return <PaymentPlanItem id ={result.id} paymentPlan={result}  route={route}/>;
      console.log("result is", result);

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold shadow rounded-lg  text-center md:text-xl">
    No results!
  </p>
  )}</>
  )
}

export default PaymentPlanList