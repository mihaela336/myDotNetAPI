import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import { getKeyMetrics, getUserById } from '../../api';
import RatioList from '../ItemDetailsList/ItemDetailsList';
import { User } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';

type Props = {}
const tableConfig = [
    {
        label: "Id",
        render: (user: User) => user.id,
        subTitle:
          "Unique identifier",
      },
    {
      label: "Full Name",
      render: (user: User) => user.name,
      subTitle:
        "Complete legal name.",
    },
    {
        label: "Email",
        render: (user: User) => user.email,
        subTitle: "Primary email address for contact",
      },
      {
        label: "Phone",
        render: (user: User) => user.phone,
        subTitle: "Primary contact number",
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
            <ItemDetailsList data={userData} config={tableConfig}/>

            <div className="flex flex-wrap items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end w-full">
          <Link
              to="/user/add">
           <button
              type="submit"
              className="p-1 px-6 text-white mr-2 bg-lightGreen rounded-lg hover:opacity-70 focus:outline-none"
            >
              Update
            </button></Link>
            <button
              type="submit"
              className="p-1 px-6 text-white bg-orange-300 mr-2 rounded-lg hover:opacity-70 focus:outline-none"
            >
              Delete
            </button>
          </div>
             </>
    ):(
      <>loading...</>
    )}
    </>
  )
}

export default UserDetalis