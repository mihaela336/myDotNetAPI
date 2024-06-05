import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { PaymentPlan } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';
import { getPaymentPlanById } from '../../api';

interface Props {

}
const tableConfig = [
    {
        label: "Id",
        render: (paymentPlan: PaymentPlan) => paymentPlan.id,
        subTitle:
          "Unique identifier",
      },
    {
      label: "Plan type",
      render: (paymentPlan: PaymentPlan) => paymentPlan.planType,
      subTitle:
        "Type of payment plan selected",
    }
  ];
  

const PaymentPlanDetails = (props: Props) => {
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const queryString = location.search;
  
    // Remove the leading '?' if present
    const paymentPlanId = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  
    console.log(paymentPlanId);

    const [paymentPlanData, setPaymentPlanData] = useState<PaymentPlan | undefined>();
    useEffect(()=>{
     const getPaymentPlan = async()=>{
       const value= await getPaymentPlanById(paymentPlanId);
       if (value && value.data && Array.isArray(value.data)) {
        // If the response is an array, take the first element
        if (value.data.length > 0) {
          setPaymentPlanData(value.data[0]);
        } else {
          // Handle case where no paymentPlan is found
          setPaymentPlanData(undefined);
        }
      } else {
        // Handle other cases where data may be missing or not in the expected format
        setPaymentPlanData(value?.data as PaymentPlan|undefined);
      }
    //    setPaymentPlanData(value?.data[0])//number needs to be dinamically added for paymentPlan id
       console.log( "value", value);
     };
     getPaymentPlan(); 
     
    },[])
  return (
    <>
    {paymentPlanData? (
      <>
            <ItemDetailsList data={paymentPlanData} config={tableConfig}/>

            <div className="flex flex-wrap items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end w-full">
          <Link
              to="/paymentPlan/add">
           <button
              type="submit"
              className="p-1 px-6 text-white mr-2 bg-lightGreen rounded-lg hover:opacity-70 focus:outline-none"
            >
              Update
            </button></Link>
            <button
              type="submit"
              className="p-1 px-6 text-white bg-orange-300 mr-2 rounded-lg hover:opacity-70 focus:outline-none"
            >
              Delete
            </button>
          </div>
             </>
    ):(
      <>loading...</>
    )}
    </>
  )
}

export default PaymentPlanDetails