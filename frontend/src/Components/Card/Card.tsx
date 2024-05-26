import React, { SyntheticEvent } from 'react'
import "./Card.css"
import { CreateStationRequestDto } from '../../station';
import AddChargingSession from '../ManageStations/AddChargingSession/AddChargingSession';

interface Props {
  id: string;
  searchResult: CreateStationRequestDto;
  onChargingSessionCreate: (e: SyntheticEvent)=> void;

}

const Card: React.FC<Props> = ({id, searchResult, onChargingSessionCreate} : Props) : JSX.Element=> {
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
        <p className="info">
          {searchResult.adress}
          </p>
          <AddChargingSession onChargingSessionCreate={onChargingSessionCreate} name ={searchResult.name}/>
        </div>
  )
}

export default Card