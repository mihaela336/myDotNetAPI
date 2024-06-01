import React from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/useAuth';
import { Link } from 'react-router-dom';

type Props = {}
type AddVehicleFormsInputs = {

    userId: string;
    addedOn: string;
    producer:string;
    model:string;
}

const validation = Yup.object().shape({

  userId: Yup.string().required("Email is required"),
  addedOn: Yup.string().required("Username is required"),
  producer: Yup.string().required("Password is required"),
  model: Yup.string().required("Full Name is required"),
})

const VehicleAdd = (props: Props) => {
    const {registerUser}= useAuth();
    const {
        register,
         handleSubmit,
          formState: { errors},
        }=useForm<AddVehicleFormsInputs>({resolver: yupResolver(validation)});
    const handleRegister= (form:AddVehicleFormsInputs)=>{
        //api method from userContext
        // registerUser(form.email, form.userName, form.password, form.fullName, form.phone, form.adress);
    };
  return (
    
    <section className="flex flex-wrap mr-64 bg-gray-50 dark:bg-gray-900 w-full">

        <div className="flex flex-wrap w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Add New Vehicle
          </h1>
          <form className=" w-full space-y-4 md:space-y-6" onSubmit={handleSubmit(handleRegister)}>


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
                // {...register("email")}
              />
              {errors.userId ? <p>{errors.userId.message}</p>: ""}
            </div>
           
            <div>
              <label
                htmlFor="addedOn"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date added
              </label>
              <input
                type="datetime-local"
                step="1"
                id="addedOn"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // {...register("userName")}
              />
              {errors.addedOn ? <p>{errors.addedOn.message}</p>: ""}
            </div>
            <div>
              <label
                htmlFor="producer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Producer
              </label>
              <input
                type="text"
                id="producer"
                placeholder="Producer name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // {...register("password")}
              />
              {errors.producer ? <p>{errors.producer.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="model"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Model
              </label>
              <input
                type="text"
                id="model"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Model"
                // {...register("fullName")}
              />
              {errors.model ? <p>{errors.model.message}</p>: ""}
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

export default VehicleAdd