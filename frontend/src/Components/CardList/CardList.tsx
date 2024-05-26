import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CreateStationRequestDto } from '../../station';
import {v4 as uuidv4} from "uuid";


interface Props {
  searchResults: CreateStationRequestDto[];
  onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const CardList : React.FC<Props> = ({searchResults, onChargingSessionCreate}: Props) : JSX.Element => {
  return (
    <>
  {searchResults.length >0 ?(
    searchResults.map((result)=>{
      return <Card id ={result.name} key={uuidv4()} searchResult={result} onChargingSessionCreate={onChargingSessionCreate} />;

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
    No results!
  </p>
  )}/</>
  )
}

export default CardList