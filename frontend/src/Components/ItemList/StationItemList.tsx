import React, { SyntheticEvent } from 'react'
import { ChargingSession, Station } from '../../types';
import StationItem from '../Item/StationItem';


interface Props {
  stationList: Station[];
  route: string;
  // onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const StationnList : React.FC<Props> = ({stationList, route}: Props) : JSX.Element => {
  return (
    <>
  {
  
  stationList.length >0 ?(
    
    stationList.map((result)=>{
      return <StationItem  id ={result.id} station={result}  route={route}/>;
      console.log("result is", result);

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold shadow rounded-lg  text-center md:text-xl">
    No results!
  </p>
  )}</>
  )
}

export default StationnList