import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img
        src='/images/route_planning.jpg'
        alt="Image"    
        />
        <div className="details">
            <h2>Station</h2>
            <p>status</p>
        </div>
        <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate dicta incidunt esse corporis rerum natus quia velit quis neque. Maiores optio, consequatur excepturi totam mollitia laboriosam. Esse, et hic?</p>
        </div>
  )
}

export default Card