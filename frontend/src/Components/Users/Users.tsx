import React, { useEffect, useState } from 'react'
import { StationKeyMetrics } from '../../station'
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../api';
import RatioList from '../ItemDetailsList/ItemDetailsList';

interface Props {}

const tableConfig = [
    {
      label: "Market Cap",
      render: (station: StationKeyMetrics) => station.id,
      subTitle: "Total value of all a station's shares of stock",
    },
]

const Users = (props: Props) => {
    const ticker= useOutletContext<string>();
    //store charging session data from api
    const [chargingSessionData, setChargingSessionData] = useState<StationKeyMetrics>();
    useEffect(()=>{
     const getStationKeyMetrics = async()=>{
       const value= await getKeyMetrics(ticker);
       setChargingSessionData(value?.data[0])//number needs to be dinamically added for station id
     };
     getStationKeyMetrics(); 
     
    },[])
    return(
       <>
       {chargingSessionData? (
         <>
               <RatioList data={chargingSessionData} config={tableConfig}/>
                </>
       ):(
         <>loading...</>
       )}
       </>
     )
}

export default Users