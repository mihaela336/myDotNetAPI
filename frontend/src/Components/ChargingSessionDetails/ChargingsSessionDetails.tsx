import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { ChargingSession } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';
import { getChargingSessionById } from '../../api';

interface Props {

}
const tableConfig = [
    {
        label: "Id",
        render: (chargingSession: ChargingSession) => chargingSession.id,
        subTitle:
          "Unique identifier",
      },
    {
      label: "Station Id",
      render: (chargingSession: ChargingSession) => chargingSession.stationId,
      subTitle:
        "Id of station where vehicle was charged",
    },
      {
        label: "Session Start",
        render: (chargingSession: ChargingSession) => chargingSession.sessionStart,
        subTitle: "Session began at",
      },
      {
        label: "Session end",
        render: (chargingSession: ChargingSession) => chargingSession.sessionEnd,
        subTitle: "Session completed at",
      },
      {
        label: "Charging time",
        render: (chargingSession: ChargingSession) => chargingSession.chargingTime,
        subTitle: "Charging session length",
      },
      {
        label: "KWh Delivered",
        render: (chargingSession: ChargingSession) => chargingSession.kwhDelivered,
        subTitle: "Energy delivered during the session",
      }

  ];
  

const ChargingSessionDetails = (props: Props) => {
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const queryString = location.search;
  
    // Remove the leading '?' if present
    const chargingSessionId = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  
    console.log(chargingSessionId);

    const [chargingSessionData, setChargingSessionData] = useState<ChargingSession | undefined>();
    useEffect(()=>{
     const getChargingSession = async()=>{
       const value= await getChargingSessionById(chargingSessionId);
       if (value && value.data && Array.isArray(value.data)) {
        // If the response is an array, take the first element
        if (value.data.length > 0) {
          setChargingSessionData(value.data[0]);
        } else {
          // Handle case where no chargingSession is found
          setChargingSessionData(undefined);
        }
      } else {
        // Handle other cases where data may be missing or not in the expected format
        setChargingSessionData(value?.data as ChargingSession|undefined);
      }
    //    setChargingSessionData(value?.data[0])//number needs to be dinamically added for chargingSession id
       console.log( "value", value);
     };
     getChargingSession(); 
     
    },[])
  return (
    <>
    {chargingSessionData? (
      <>
            <ItemDetailsList data={chargingSessionData} config={tableConfig}/>

            <div className="flex flex-wrap items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end w-full">
          <Link
              to="/chargingSession/add">
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

export default ChargingSessionDetails