import React, { SyntheticEvent } from 'react'
import { Transaction, User } from '../../types';
import Item from '../Item/Item';
import TransactionItem from '../Item/TransactionItem';


interface Props {
  transactionList: Transaction[];
  route: string;
  // onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const TransactionItemList : React.FC<Props> = ({transactionList, route}: Props) : JSX.Element => {
  return (
    <>
  {transactionList.length >0 ?(
    transactionList.map((result)=>{
      return <TransactionItem id ={result.id} transaction={result}  route={route}/>;
      console.log("result is", result);

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold shadow rounded-lg  text-center md:text-xl">
    No results!
  </p>
  )}</>
  )
}

export default TransactionItemList