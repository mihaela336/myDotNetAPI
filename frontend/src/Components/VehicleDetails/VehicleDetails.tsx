import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { Vehicle } from '../../types';
import ItemDetailsList from '../ItemDetailsList/ItemDetailsList';
import { getVehicleById } from '../../api';

interface Props {

}
const tableConfig = [
    {
        label: "Vehicle Id",
        render: (vehicle: Vehicle) => vehicle.id,
        subTitle:
          "Unique identifier of the vehicle",
      },
    {
      label: "Owner ID",
      render: (vehicle: Vehicle) => vehicle.userId,
      subTitle:
        "Unique identifyer of the vehicle who owns the vehicle",
    },
    {
        label: "Registration date",
        render: (vehicle: Vehicle) => vehicle.addedOn,
        subTitle: "Date when the vehicle was registered",
      },
      {
        label: "Producer",
        render: (vehicle: Vehicle) => vehicle.producer,
        subTitle: "",
      },
      {
        label: "Model",
        render: (vehicle: Vehicle) => vehicle.model,
        subTitle: "",
      }

  ];
  

const VehicleDetails = (props: Props) => {
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const queryString = location.search;
  
    // Remove the leading '?' if present
    const vehicleId = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  
    console.log(vehicleId);

    const [vehicleData, setVehicleData] = useState<Vehicle | undefined>();
    useEffect(()=>{
     const getVehicle = async()=>{
       const value= await getVehicleById(vehicleId);
       if (value && value.data && Array.isArray(value.data)) {
        // If the response is an array, take the first element
        if (value.data.length > 0) {
          setVehicleData(value.data[0]);
        } else {
          // Handle case where no vehicle is found
          setVehicleData(undefined);
        }
      } else {
        // Handle other cases where data may be missing or not in the expected format
        setVehicleData(value?.data as Vehicle|undefined);
      }
    //    setVehicleData(value?.data[0])//number needs to be dinamically added for vehicle id
       console.log( "value", value);
     };
     getVehicle(); 
     
    },[])
  return (
    <>
    {vehicleData? (
      <>
            <ItemDetailsList data={vehicleData} config={tableConfig}/>

            <div className="flex flex-wrap items-center md:mt-10 mb-10 space-x-4 mr-64 justify-end w-full">
          <Link
              to="/vehicle/add">
           <button
              type="submit"
              className="p-1 px-6 text-white mr-2 bg-lightGreen rounded-lg hover:opacity-70 focus:outline-none"
            >
              Update
            </button></Link>
            <button
              type="submit"
              className="p-1 px-6 text-white bg-orange-300 mr-2 rounded-lg hover:opacity-70 focus:outline-none"
            >
              Delete
            </button>
          </div>
             </>
    ):(
      <>loading...</>
    )}
    </>
  )
}

export default VehicleDetails