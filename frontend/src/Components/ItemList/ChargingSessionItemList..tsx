import React, { SyntheticEvent } from 'react'
import { ChargingSession } from '../../types';
import ChargingSessionItem from '../Item/ChargingSessionItem';


interface Props {
  chargingSessionList: ChargingSession[];
  route: string;
  // onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const ItemList : React.FC<Props> = ({chargingSessionList, route}: Props) : JSX.Element => {
  return (
    <>
  {
  
  chargingSessionList.length >0 ?(
    
    chargingSessionList.map((result)=>{
      return <ChargingSessionItem  id ={result.id} chargingSession={result}  route={route}/>;
      console.log("result is", result);

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold shadow rounded-lg  text-center md:text-xl">
    No results!
  </p>
  )}/</>
  )
}

export default ItemList