import React from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/useAuth';
import { Link } from 'react-router-dom';

type Props = {}
type AddChargingSessionFormsInputs = {

  stationId: number;
  userId: string;
  sessionStart:string;
  sessionEnd: string;
  chargingTime: string;
  kwhDelivered: number;
}

const validation = Yup.object().shape({

    stationId: Yup.number().required("Station Id is required"),
    userId: Yup.string().required("User id is required"),
    sessionStart: Yup.string().required("Session start time is required"),
    sessionEnd: Yup.string().required("Session end time is required"),
    chargingTime: Yup.string().required("Charging time is required"),
    kwhDelivered: Yup.number().required("Kwh delivered is required"),

})

const ChargingSessionAdd = (props: Props) => {
    const {registerUser}= useAuth();
    const {
        register,
         handleSubmit,
          formState: { errors},
        }=useForm<AddChargingSessionFormsInputs>({resolver: yupResolver(validation)});
    const handleRegister= (form:AddChargingSessionFormsInputs)=>{
        //api method from userContext
        // registerUser(form.email, form.userName, form.password, form.fullName, form.phone, form.adress);
    };
  return (
    
    <section className="flex flex-wrap mr-64 bg-gray-50 dark:bg-gray-900 w-full">

        <div className="flex flex-wrap w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Add New Charging Session
          </h1>
          <form className=" w-full space-y-4 md:space-y-6" onSubmit={handleSubmit(handleRegister)}>


          <div>
              <label
                htmlFor="stationId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Station Id
              </label>
              <input
                type="text"
                id="stationId"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Station Id"
                // {...register("email")} Todo:replace with add session method
              />
              {errors.stationId ? <p>{errors.stationId.message}</p>: ""}
            </div>
           
            <div>
              <label
                htmlFor="userId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Id
              </label>
              <input
                type="text"
                id="userId"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="User Id"
                // {...register("userName")}
              />
              {errors.userId ? <p>{errors.userId.message}</p>: ""}
            </div>
            <div>
              <label
                htmlFor="sessionStart"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Start of session
              </label>
              <input
                type="datetime-local"
                step="1"
                id="sessionStart"
                placeholder="Session Start"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // {...register("password")}
              />
              {errors.sessionStart ? <p>{errors.sessionStart.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="sessionEnd"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                End of session
              </label>
              <input
                type="datetime-local"
                step="1"
                id="sessionEnd"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Session End"
                // {...register("fullName")}
              />
              {errors.sessionEnd ? <p>{errors.sessionEnd.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="chargingTime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Charging session duration
              </label>
              <input
                type="time"
                step="1"
                id="chargingTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Charging session duration"
                // {...register("phone")}
              />
              {errors.chargingTime? <p>{errors.chargingTime.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="kwhDelivered"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                KWh Delivered
              </label>
              <input
                type="text"
                id="kwhDelivered"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="total KWH delivered"
                // {...register("adress")}
              />
              {errors.kwhDelivered ? <p>{errors.kwhDelivered.message}</p>: ""}
            </div>
            <div className="flex items-center justify-between">

            </div>
            <button
              type="submit"
              className="w-full text-white bg-lightGreen hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add
            </button>
            {/* <Link */}
              {/* to="/user"> */}
            <button
              type="submit"
              className="w-full text-white bg-orange-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Cancel
            </button>
            {/* </Link> */}

          </form>

    </div>
  </section>
  );
}

export default ChargingSessionAdd