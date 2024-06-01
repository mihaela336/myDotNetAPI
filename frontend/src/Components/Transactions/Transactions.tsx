import React, { useEffect, useState } from 'react'
import { StationDetails } from '../../station'
import { useOutlet, useOutletContext } from 'react-router-dom'
import { getTransactions } from '../../api'
import RatioList from '../ItemDetailsList/ItemDetailsList'
import Table from '../Table/Table'

interface Props {}
//replace station table with transactions stuff
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

const Transactions = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [transactions, setTransactions] = useState<StationDetails[]>();
  useEffect(()=>{
    const getStationTransactions = async()=>{
      const value = await getTransactions(ticker!);
      setTransactions(value!.data)
    };
    getStationTransactions();
  },[])
  
  return(
    <>
    {transactions? (
      <>
            <Table config={config} data={transactions}/>
             </>
    ):(
      <>loading...</>
      // <Spinner/>
    )}
    </>
  )
}

export default Transactions