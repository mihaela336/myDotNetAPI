import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { Transaction } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';
import { getTransactionById } from '../../api';

interface Props {

}
const tableConfig = [
    {
        label: "Id",
        render: (transaction: Transaction) => transaction.id,
        subTitle:
          "Unique identifier",
      },
    {
      label: "Charging session Id",
      render: (transaction: Transaction) => transaction.chargingSessionId,
      subTitle:
        "Related charging session ID",
    },
    {
        label: "Date",
        render: (transaction: Transaction) => transaction.createdOn,
        subTitle: "Date of the transaction",
      },
      {
        label: "KWh price",
        render: (transaction: Transaction) => transaction.kwhPrice,
        subTitle: "Price per kilowatt-hour",
      },
      {
        label: "KWh total",
        render: (transaction: Transaction) => transaction.kwhTotal,
        subTitle: "Total energy delivered in kilowatt-hours",
      },
      {
        label: "Overcharge hour",
        render: (transaction: Transaction) => transaction.overchargeHour,
        subTitle: "Additional charge per hour (after charging for longer than 4 hours",
      },
      {
        label: "Overcharge total",
        render: (transaction: Transaction) => transaction.overchargeTotal,
        subTitle: "Total overcharge amount",
      },
      {
        label: "VAT",
        render: (transaction: Transaction) => transaction.vat,
        subTitle: "Value-added tax amount",
      },
      {
        label: "Total",
        render: (transaction: Transaction) => transaction.total,
        subTitle: "Total amount of the transaction",
      }

  ];
  

const TransactionDetails = (props: Props) => {
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const queryString = location.search;
  
    // Remove the leading '?' if present
    const transactionId = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  
    console.log(transactionId);

    const [transactionData, setTransactionData] = useState<Transaction | undefined>();
    useEffect(()=>{
     const getTransaction = async()=>{
       const value= await getTransactionById(transactionId);
       if (value && value.data && Array.isArray(value.data)) {
        // If the response is an array, take the first element
        if (value.data.length > 0) {
          setTransactionData(value.data[0]);
        } else {
          // Handle case where no transaction is found
          setTransactionData(undefined);
        }
      } else {
        // Handle other cases where data may be missing or not in the expected format
        setTransactionData(value?.data as Transaction|undefined);
      }
    //    setTransactionData(value?.data[0])//number needs to be dinamically added for transaction id
       console.log( "value", value);
     };
     getTransaction(); 
     
    },[])
  return (
    <>
    {transactionData? (
      <>
            <ItemDetailsList data={transactionData} config={tableConfig}/>

            <div className="flex flex-wrap items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end w-full">
          <Link
              to="/transaction/add">
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

export default TransactionDetails