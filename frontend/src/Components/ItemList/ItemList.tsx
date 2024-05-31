import React, { SyntheticEvent } from 'react'
import { CreateStationRequestDto } from '../../station';
import {v4 as uuidv4} from "uuid";
import { User } from '../../types';
import Item from '../Item/Item';


interface Props {
  userList: User[];
  // onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const ItemList : React.FC<Props> = ({userList}: Props) : JSX.Element => {
  return (
    <>
  {userList.length >0 ?(
    userList.map((result)=>{
      return <Item id ={result.name} user={result}  />;
      console.log("result is", result);

    })
  ):(
    <p className="mb-3 mt-3 text-xl font-semibold shadow rounded-lg  text-center md:text-xl">
    No results!
  </p>
  )}/</>
  )
}

export default ItemList