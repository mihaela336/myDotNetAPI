import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { User } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';
import { getUserById } from '../../api';

interface Props {

}
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
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const queryString = location.search;
  
    // Remove the leading '?' if present
    const userId = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  
    console.log(userId);

    const [userData, setUserData] = useState<User | undefined>();
    useEffect(()=>{
     const getUser = async()=>{
       const value= await getUserById(userId);
       if (value && value.data && Array.isArray(value.data)) {
        // If the response is an array, take the first element
        if (value.data.length > 0) {
          setUserData(value.data[0]);
        } else {
          // Handle case where no user is found
          setUserData(undefined);
        }
      } else {
        // Handle other cases where data may be missing or not in the expected format
        setUserData(value?.data as User|undefined);
      }
    //    setUserData(value?.data[0])//number needs to be dinamically added for user id
       console.log( "value", value);
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