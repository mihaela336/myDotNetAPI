import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CreateStationRequestDto } from './station';
import { searchStations } from './api';



function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CreateStationRequestDto[]>([]);
  const [serverError, setServerError] = useState<string | null>(null) ;

  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
  }

  const onChargingSessionCreate =(e: SyntheticEvent)=>{
    e.preventDefault();
    console.log(e);
  }

  const onClick = async (e: SyntheticEvent) =>{
    const result = await  searchStations(search);
    if (typeof result === "string"){
      setServerError(result);

    } else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log(setSearchResult);

  };
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList searchResults = {searchResult} onChargingSessionCreate={onChargingSessionCreate}/>
      {serverError &&<div>{serverError}</div>}

    </div>
  );
}

export default App;
