import React, { useEffect, useState } from 'react'
import {  Vehicle } from '../../types';
import { getAll } from '../../api';
import VehicleItemList from '../ItemList/VehicleItemList';

type Props = {}

const VehicleList = (props: Props) => {
      //declare search param to use in search function -to be removed
  const [item, setItem] = useState<string>("vehicle");
  //to save aray retrieved from api
  const [getAllResult, setGetAllResult] = useState<Vehicle[]>([]);
  //to save server error to display on page
  const [serverError, setServerError] = useState<string | null>(null);




  useEffect(() => {
    const getAllVehicles = async () => {
      //  setSearch("search string from searchPage");
      const result = await getAll(item);
      //setStation(result?.data[0]);
      if (typeof result === "string") {
        setServerError(result);

      } else if (Array.isArray(result.data)) {
        setGetAllResult(result.data);
        //forTesting only needs to be moved
        console.log("result data ", result.data);

      }

    };
    getAllVehicles();


  }, [item]);


  useEffect(() => {
    console.log("get all result is: ", getAllResult);
  }, [getAllResult]); // Add getAllResult as a dependency

  return (
    <>

      <div className="w-full flex flex-wrap md:mr-64">



{/* add user List */}


            <div className="  shadow rounded-lg px-4 ml-4 mt 4 mb-4 p-4 sm:p-6 h-full w-full">
              <VehicleItemList
                vehicleList={getAllResult} route ={item}/>
              {serverError && <div>{serverError}</div>}

            </div>
          </div>

 
  </>
  )
}

export default VehicleList