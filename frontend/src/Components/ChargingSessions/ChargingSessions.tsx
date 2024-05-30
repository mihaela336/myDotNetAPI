import React, { useEffect, useState } from 'react'
import { StationKeyMetrics } from '../../station';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../api';
import RatioList from '../RatioList/RatioList';

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (station: StationKeyMetrics) => station.id,
    subTitle: "Total value of all a station's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (station: StationKeyMetrics) => station.name,
    subTitle:
      "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (station: StationKeyMetrics) => station.status,
    subTitle:
      "Return on equity is the measure of a station's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (station: StationKeyMetrics) => station.adress,
    subTitle:
      "Return on assets is the measure of how effective a station is using its assets",
  },
  {
    label: "Free Cashflow Per Share",
    render: (station: StationKeyMetrics) => station.freeCashFlowPerShareTTM,
    subTitle:
      "Return on assets is the measure of how effective a station is using its assets",
  },
  {
    label: "Book Value Per Share TTM",
    render: (station: StationKeyMetrics) => station.bookValuePerShareTTM,
    subTitle:
      "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
  },
  {
    label: "Divdend Yield TTM",
    render: (station: StationKeyMetrics) => station.dividendYieldTTM,
    subTitle: "Shows how much a station pays each year relative to stock price",
  },
  {
    label: "Capex Per Share TTM",
    render: (station: StationKeyMetrics) => station.capexPerShareTTM,
    subTitle:
      "Capex is used by a station to aquire, upgrade, and maintain physical assets",
  },
  {
    label: "Graham Number",
    render: (station: StationKeyMetrics) => station.grahamNumberTTM,
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "PE Ratio",
    render: (station: StationKeyMetrics) => station.peRatioTTM,
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
];


const ChargingSessions = (props: Props) => {
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

export default ChargingSessions