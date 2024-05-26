import React, { SyntheticEvent } from 'react'
import "./Card.css"
import { CreateStationRequestDto } from '../../station';
import AddChargingSession from '../ManageChargingSessions/AddChargingSession/AddChargingSession';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  searchResult: CreateStationRequestDto;
  onChargingSessionCreate: (e: SyntheticEvent)=> void;

}

const Card: React.FC<Props> = ({id, searchResult, onChargingSessionCreate} : Props) : JSX.Element=> {
  return (
    <div
    className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
    key={id}
    id={id}
  >
    <Link to="/station/${searchResult.name}" className="font-bold text-center text-veryDarkViolet md:text-left">
      {searchResult.name} ({searchResult.name})
    </Link>
    <p className="text-veryDarkBlue">{searchResult.status}</p>
    <p className="font-bold text-veryDarkBlue">
    
          {searchResult.adress}
          </p>
          <AddChargingSession onChargingSessionCreate={onChargingSessionCreate} name ={searchResult.name}/>
        </div>
  );
};

export default Card