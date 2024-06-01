import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreateStationRequestDto, StationDetails } from '../../../station';
import { getStationDetails } from '../../../api';
import Sidebar from '../../Sidebar/Sidebar';
import StationDashboard from '../../StationDashboard/StationDashboard';
import Tile from '../../Tile/Tile';

interface Props {}

const StationPage = (props: Props) => {
  //fetch data before page laods
 let {ticker} = useParams();

// const stationId:string = "1";
const [station, setStation] = useState<StationDetails | null>(null);

  useEffect(()=>{
    const getDetailsInit = async ()=>{
      const result = await getStationDetails(ticker!);
      //setStation(result?.data[0]);
      if (result && result.data) {
        setStation(result?.data); // Update state directly with response data
        console.log(result?.data);
        
      } else {
        console.warn('Data is undefined or null');
      }

      
    }
    getDetailsInit();


  },[])

  return <>
  {

  station?(

    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

         <Sidebar/>
         <StationDashboard ticker={ticker!}><Tile title="Viewing" subTitle={station.name}/></StationDashboard>



        </div>

  ):(
    <div>Station not found</div>
  ) }
  </>;
};

export default StationPage