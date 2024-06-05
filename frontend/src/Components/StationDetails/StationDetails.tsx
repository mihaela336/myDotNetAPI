import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { Station } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';
import { getStationById } from '../../api';

interface Props {

}
const tableConfig = [
    {
        label: "Id",
        render: (station: Station) => station.id,
        subTitle:
          "Unique identifier",
      },
    {
      label: "Name",
      render: (station: Station) => station.name,
      subTitle:"Name of curently selected station",

    },
    {
        label: "Status",
        render: (station: Station) => station.status,
        subTitle: "Current operational status",
      },
      {
        label: "Address",
        render: (station: Station) => station.adress,
        subTitle: "Location of the station",
      }

  ];
  

const TransactionDetails = (props: Props) => {
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const queryString = location.search;
  
    // Remove the leading '?' if present
    const stationId = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  
    console.log(stationId);

    const [stationData, setStationData] = useState<Station | undefined>();
    useEffect(()=>{
     const getStation = async()=>{
       const value= await getStationById(stationId);
       if (value && value.data && Array.isArray(value.data)) {
        // If the response is an array, take the first element
        if (value.data.length > 0) {
          setStationData(value.data[0]);
        } else {
          // Handle case where no user is found
          setStationData(undefined);
        }
      } else {
        // Handle other cases where data may be missing or not in the expected format
        setStationData(value?.data as Station|undefined);
      }
    //    setStationData(value?.data[0])//number needs to be dinamically added for user id
       console.log( "value", value);
     };
     getStation(); 
     
    },[])
  return (
    <>
    {stationData? (
      <>
            <ItemDetailsList data={stationData} config={tableConfig}/>

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

export default TransactionDetails