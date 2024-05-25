import React from 'react'
import "./Card.css"

interface Props {
  stationName: string;
  stationStatus: string;
  stationAdress: string;
}

const Card: React.FC<Props> = ({stationName, stationStatus, stationAdress} : Props) : JSX.Element=> {
  return (
    <div className="card">
        <img
        src='/images/route_planning.jpg'
        alt="Image"    
        />
        <div className="details">
            <h2>{stationName}</h2>
            <p>{stationStatus}</p>
            <p>{stationAdress}</p>
        </div>
        <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate dicta incidunt esse corporis rerum natus quia velit quis neque. Maiores optio, consequatur excepturi totam mollitia laboriosam. Esse, et hic?</p>
        </div>
  )
}

export default Card