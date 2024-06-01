import React from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/useAuth';
import { Link } from 'react-router-dom';

type Props = {}
type AddTransactionInputs = {


  chargingSessionId: number;
  createdOn: string;
  kwhPrice: number;
  kwhTotal: number;
  overchargeHour: number;
  overchargeTotal: number;
  vat: number;
  total: number;
}

const validation = Yup.object().shape({


  chargingSessionId: Yup.number().required("Charging Session Id is required"),
  createdOn: Yup.string().required("Transaction date is required"),
  kwhPrice: Yup.number().required("KWh price is required"),
  kwhTotal: Yup.number().required("KWh total is required"),
  overchargeHour: Yup.number().required("Price of overcharge / hour is required"),
  overchargeTotal: Yup.number().required("Overcharge Total  is required"),
  vat: Yup.number().required("Vat value is required"),
  total: Yup.number().required("Transaction total is required"),

})

const TransactionAdd = (props: Props) => {
    const {registerUser}= useAuth();
    const {
        register,
         handleSubmit,
          formState: { errors},
        }=useForm<AddTransactionInputs>({resolver: yupResolver(validation)});
    const handleRegister= (form:AddTransactionInputs)=>{
        //api method from userContext
        // registerUser(form.email, form.userName, form.password, form.fullName, form.phone, form.adress);
    };
  return (
    
    <section className="flex flex-wrap mr-64 bg-gray-50 dark:bg-gray-900 w-full">

        <div className="flex flex-wrap w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Add New Transaction
          </h1>
          <form className=" w-full space-y-4 md:space-y-6" onSubmit={handleSubmit(handleRegister)}>


          <div>
              <label
                htmlFor="chargingSessionId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Charging session Id
              </label>
              <input
                type="text"
                id="chargingSessionId"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="add charging session id"
                // {...register("email")}
              />
              {errors.chargingSessionId ? <p>{errors.chargingSessionId.message}</p>: ""}
            </div>
           
            <div>
              <label
                htmlFor="createdOn"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Transaction date
              </label>
              <input
                type="datetime-local"
                step="1"
                id="createdOn"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // {...register("userName")}
              />
              {errors.createdOn ? <p>{errors.createdOn.message}</p>: ""}
            </div>
            <div>
              <label
                htmlFor="kwhPrice"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                KWh price
              </label>
              <input
                type="text"
                id="kwhPrice"
                placeholder="0.17"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // {...register("password")}
              />
              {errors.kwhPrice ? <p>{errors.kwhPrice.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="kwhTotal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                KWh total
              </label>
              <input
                type="text"
                id="kwhTotal"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="total KWh "
                // {...register("fullName")}
              />
              {errors.kwhTotal ? <p>{errors.kwhTotal.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="overchargeHour"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Overcharge /hour
              </label>
              <input
                type="text"
                id="overchargeHour"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5"
                // {...register("phone")}
              />
              {errors.overchargeHour ? <p>{errors.overchargeHour.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="overchargeTotal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Overcharge total
              </label>
              <input
                type="text"
                id="total"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="total overcharge"
                // {...register("adress")}
              />
              {errors.overchargeTotal ? <p>{errors.overchargeTotal.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="vat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                VAT
              </label>
              <input
                type="text"
                id="vat"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="19 %"
                // {...register("adress")}
              />
              {errors.vat ? <p>{errors.vat.message}</p>: ""}
            </div>

            <div>
              <label
                htmlFor="total"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total
              </label>
              <input
                type="text"
                id="total"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="total"
                // {...register("adress")}
              />
              {errors.total ? <p>{errors.total.message}</p>: ""}
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

export default TransactionAdd