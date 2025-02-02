import React, { SyntheticEvent } from 'react'
import { User } from '../../types';
import Item from '../Item/Item';


interface Props {
  userList: User[];
  route: string;
  // onChargingSessionCreate: (e: SyntheticEvent)=>void;
}

const ItemList : React.FC<Props> = ({userList, route}: Props) : JSX.Element => {
  return (
    <>
  {userList.length >0 ?(
    userList.map((result)=>{
      return <Item id ={result.name} user={result}  route={route}/>;
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