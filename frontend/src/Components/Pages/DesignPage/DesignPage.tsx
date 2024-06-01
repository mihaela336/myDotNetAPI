import React from 'react'
import Table from '../../Table/Table'
import RatioList from '../../ItemDetailsList/ItemDetailsList'
import { StationDetails, StationKeyMetrics } from '../../../station';
import { testIncomeStatementData } from '../../Table/TestData';

interface Props {}
const tableConfig = [
    {
      label: "Market Cap",
      render: (station: any) => station.marketCapTTM,
      subTitle: "Total value of all a station's shares of stock",
    },
  ];
  const config =[
    {
      label: "id",
    render: (station:StationDetails)=>station.id,
    subTitle:"id of station"
    },
    {
      label: "name",
    render: (station:StationDetails)=>station.name,
    subTitle:"id of station"
    },
    {
      label: "status",
    render: (station:StationDetails)=>station.status,
    subTitle:"id of station"
    },
    {
      label: "adress",
    render: (station:StationDetails)=>station.adress,
    subTitle:"id of station"
    },
  
  ]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>Design page</h1>
    <h2>house various aspects of the design of the app</h2>
    <RatioList data={testIncomeStatementData} config={tableConfig} />
    <Table data= {testIncomeStatementData} config={config}/>
        

    </>

  )
}

export default DesignPage