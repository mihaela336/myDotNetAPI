import React, { SyntheticEvent } from 'react'
import { User, Vehicle } from '../../types';
import Item from '../Item/Item';
import VehicleItem from '../Item/VehicleItem';


interface Props {
  vehicleList: Vehicle[];
  route: string;
}

const ItemList : React.FC<Props> = ({vehicleList, route}: Props) : JSX.Element => {
  return (
    <>
  {vehicleList.length >0 ?(
    vehicleList.map((result)=>{
      return <VehicleItem id ={result.id} vehicle={result}  route={route}/>;
      console.log("result is", result);

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold shadow rounded-lg  text-center md:text-xl">
    No results!
  </p>
  )}</>
  )
}

export default ItemList