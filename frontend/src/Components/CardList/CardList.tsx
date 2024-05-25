import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
        < Card stationName="Station 1" stationStatus='Available' stationAdress='Adress of station 1'/>
        < Card stationName="Station 2" stationStatus='Available' stationAdress='Adress of station 2'/>
        < Card stationName="Station 3" stationStatus='Available' stationAdress='Adress of station 3'/>
    </div>
  )
}

export default CardList