import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CreateStationRequestDto } from './station';
import { searchStations } from './api';
import ListChargingSessions from './Components/ManageChargingSessions/ListChargingSessions/ListChargingSessions';



function App() {
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
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListChargingSessions
        chargingSessionValues={chargingSessionValues}
        onChargingSessionDelete={onChargingSessionDelete} />
      <CardList
        searchResults={searchResult}
        onChargingSessionCreate={onChargingSessionCreate} />
      {serverError && <div>{serverError}</div>}

    </div>
  );
}

export default App;
