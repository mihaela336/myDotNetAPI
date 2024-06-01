import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics, getUserById } from '../../api';
import RatioList from '../RatioList/RatioList';
import { User } from '../../types';

type Props = {}
const tableConfig = [
    
    {
      label: "Full Name",
      render: (user: User) => user.name,
      subTitle:
        "The user's complete legal name.",
    },
    {
        label: "Email",
        render: (user: User) => user.email,
        subTitle: "The user's primary email address for contact",
      },
      {
        label: "Phone",
        render: (user: User) => user.phone,
        subTitle: "The user's primary contact number",
      },
      {
        label: "Address",
        render: (user: User) => user.adress,
        subTitle: "The user's residential or mailing address",
      }

  ];
  

const UserDetalis = (props: Props) => {
    const ticker= useOutletContext<string>();
    //store charging session data from api
    const [userData, setUserData] = useState<User>();
    useEffect(()=>{
     const getUser = async()=>{
       const value= await getUserById(ticker);
       setUserData(value?.data[0])//number needs to be dinamically added for user id
     };
     getUser(); 
     
    },[])
  return (
    <>
    {userData? (
      <>
            <RatioList data={userData} config={tableConfig}/>
             </>
    ):(
      <>loading...</>
    )}
    </>
  )
}

export default UserDetalis