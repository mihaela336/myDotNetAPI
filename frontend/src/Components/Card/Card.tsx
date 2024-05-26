import React from 'react'
import "./Card.css"
import { CreateStationRequestDto } from '../../station';

interface Props {
  id: string;
  searchResult: CreateStationRequestDto;

}

const Card: React.FC<Props> = ({id, searchResult} : Props) : JSX.Element=> {
  return (
    <div className="card">
        <img
        src='/images/route_planning.jpg'
        alt="Image"    
        />
        <div className="details">
            <h2>{searchResult.name}</h2>
            <p>{searchResult.status}</p>

        </div>
        <p className="info">{searchResult.adress}</p>
        </div>
  )
}

export default Card