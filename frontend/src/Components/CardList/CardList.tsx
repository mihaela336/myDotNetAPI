import React from 'react'
import Card from '../Card/Card'
import { CreateStationRequestDto } from '../../station';
import {v4 as uuidv4} from "uuid";


interface Props {
  searchResults: CreateStationRequestDto[];
}

const CardList : React.FC<Props> = ({searchResults}: Props) : JSX.Element => {
  return (
    <>
  {searchResults.length >0 ?(
    searchResults.map((result)=>{
      return <Card id ={result.name} key={uuidv4()} searchResult={result} />;

    })
  ):(
    <h1>No result</h1>
  )}/</>
  )
}

export default CardList