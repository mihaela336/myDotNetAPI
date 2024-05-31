import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { Outlet, Search } from 'react-router-dom'
import StationDashboard from '../../StationDashboard/StationDashboard'
import Tile from '../../Tile/Tile'
import { getStationDetails, searchStations } from '../../../api'
import { CreateStationRequestDto } from '../../../station'

interface Props { }

function UserPage({ }: Props) {
  //declare search param to use in search function -to be removed
  const [search, setSearch] = useState<string>("");

  const [chargingSessionValues, setChargingSessionValues] = useState<string[]>([]);
  //to save aray retrieved from api
  const [searchResult, setSearchResult] = useState<CreateStationRequestDto[]>([]);
  //to save server error to display on page
  const [serverError, setServerError] = useState<string | null>(null);


  

  useEffect(()=>{
    const getAllUsers = async ()=>{
      setSearch("search string from searchPage");
      const result = await searchStations(search);
      //setStation(result?.data[0]);
      if (typeof result === "string") {
        setServerError(result);
  
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(setSearchResult);
  
    };
    getAllUsers();


  },[])
  return (
    <>
      <div className="w-full relative flex ct-docs-disable-sidebar-content ">

        <Sidebar />
        <div>
        <StationDashboard ticker="ticker!"><Tile title="Station Name" subTitle="some string" /></StationDashboard>


        <div className="relative md:ml-64 bg-blueGray-100 w-full">
          <div className="relative pb-32 bg-lightBlue-500">
            <div className="px-4 md:px-6 mx-auto w-full">
            <h6>Add list of users here</h6>


            </div>
          </div>
        </div>
      </div>
      </div>









    </>

  )
}

export default UserPage