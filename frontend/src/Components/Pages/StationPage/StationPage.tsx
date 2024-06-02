import React, { useEffect, useState } from 'react'
import { CreateStationRequestDto, StationDetails } from '../../../station';
import Sidebar from '../../Sidebar/Sidebar';
import StationDashboard from '../../StationDashboard/StationDashboard';
import Tile from '../../Tile/Tile';

interface Props { }

const StationPage = (props: Props) => {
  //fetch data before page laods
  const [item, setItem] = useState<string>("station");

  // const stationId:string = "1";
  const [station, setStation] = useState<StationDetails | null>(null);

  return <>
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
      <Sidebar />
      <StationDashboard ><Tile title="Viewing" subTitle="Stations" /></StationDashboard>
    </div>
  </>;
};

export default StationPage