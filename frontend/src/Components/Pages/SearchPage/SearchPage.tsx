import React, { SyntheticEvent, useState } from 'react'
import Search from '../../Search/Search'
import { CreateStationRequestDto } from '../../../station';
import { searchStations } from '../../../api';
import ListChargingSessions from '../../ManageChargingSessions/ListChargingSessions/ListChargingSessions';
import CardList from '../../CardList/CardList';
import Sidebar from '../../Sidebar/Sidebar';

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [chargingSessionValues, setChargingSessionValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CreateStationRequestDto[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onChargingSessionCreate = (e: any) => {
    e.preventDefault();
    const exists = chargingSessionValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updateChargingSession = [...chargingSessionValues, e.target[0].value];
    setChargingSessionValues(updateChargingSession);
  };

  const onChargingSessionDelete = (e: any) => {
    e.preventDefault();
    const removed = chargingSessionValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setChargingSessionValues(removed);

  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchStations(search);
    if (typeof result === "string") {
      setServerError(result);

    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(setSearchResult);

  };


  return (
    <>
          <div className="w-full relative flex ct-docs-disable-sidebar-content ">

<Sidebar />
<div>
  
{/* <StationDashboard ticker="ticker!"><Tile title="Station Name" subTitle="some string" /></StationDashboard> */}
<div className="relative md:ml-64 bg-blueGray-100 w-full">
  <div className="relative bg-lightBlue-500">
    <div className="px-4 md:px-6 mx-auto w-full">
    <Search
      onSearchSubmit={onSearchSubmit}
      search={search}
      handleSearchChange={handleSearchChange} />
    </div>
  </div>
</div>

<div className="relative md:ml-64 bg-blueGray-100 w-full">
  <div className="relative pt-20 pb-32 bg-lightBlue-500">
    <div className="px-4 md:px-6 mx-auto w-full">
    <ListChargingSessions
      chargingSessionValues={chargingSessionValues}
      onChargingSessionDelete={onChargingSessionDelete} />
    <CardList
      searchResults={searchResult}
      onChargingSessionCreate={onChargingSessionCreate} />
    {serverError && <div>{serverError}</div>}
    </div>
  </div>
</div>
</div>
</div>

    </>
  )
}

export default SearchPage