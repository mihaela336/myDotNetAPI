import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { Outlet, Search } from 'react-router-dom'
import StationDashboard from '../../StationDashboard/StationDashboard'
import Tile from '../../Tile/Tile'
import { User } from '../../../types'
import ItemList from '../../ItemList/ItemList'
import { getAll } from '../../../api'


interface Props { }
const tableConfig = [
  {
    label: (user: User) => user.name,
    subTitle: (user: User) => user.email,
  },]

function UserPage({ }: Props) {
  //declare search param to use in search function -to be removed
  const [item, setItem] = useState<string>("user");
  //to save aray retrieved from api
  const [getAllResult, setGetAllResult] = useState<User[]>([]);
  const [userData, setUserData] = useState<User>();
  //to save server error to display on page
  const [serverError, setServerError] = useState<string | null>(null);




  useEffect(() => {
    const getAllUsers = async () => {
      //  setSearch("search string from searchPage");
      const result = await getAll(item);
      //setStation(result?.data[0]);
      if (typeof result === "string") {
        setServerError(result);

      } else if (Array.isArray(result.data)) {
        setGetAllResult(result.data);
        //forTesting only needs to be moved
        setUserData(result?.data[3]);
        console.log("result data ", result.data);
        console.log("userData", userData);
      }

    };
    getAllUsers();


  }, [item]);


  useEffect(() => {
    console.log("get all result is: ", getAllResult);
  }, [getAllResult]); // Add getAllResult as a dependency

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);
  return (
    <>
      <div className="w-full relative flex ct-docs-disable-sidebar-content ">

        <Sidebar />
        <div className="w-full flex flex-wrap md:mr-64">

{/* add tiles */}
            <div className="w-full relative flex md:ml-64  bg-blueGray-100 ">
            <div className="w-full relative flex flex-wrap pb-32 bg-lightBlue-500">
              <div className=" px-4 ml-4 mt 4 mb-4 p-4 sm:p-6 h-full w-full">
              <Tile title="Total Users" subTitle="some string" />

              </div>
            </div>
          </div>

{/* add user List */}
          <div className="w-full relative flex md:ml-64  bg-blueGray-100 ">
            <div className="w-full relative flex flex-wrap pb-32 bg-lightBlue-500">
              <div className="  shadow rounded-lg px-4 ml-4 mt 4 mb-4 p-4 sm:p-6 h-full w-full">
                <ItemList
                  userList={getAllResult} />
                {serverError && <div>{serverError}</div>}

              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default UserPage