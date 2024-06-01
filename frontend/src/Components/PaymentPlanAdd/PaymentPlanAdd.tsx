import React from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/useAuth';
import { Link } from 'react-router-dom';

type Props = {}
type AddPaymentPlanFormsInputs = {

    planType: string;
}

const validation = Yup.object().shape({

    planType: Yup.string().required("Email is required"),


})

const PaymentPlanAdd = (props: Props) => {
    const {registerUser}= useAuth();
    const {
        register,
         handleSubmit,
          formState: { errors},
        }=useForm<AddPaymentPlanFormsInputs>({resolver: yupResolver(validation)});
    const handleRegister= (form:AddPaymentPlanFormsInputs)=>{
        //api method from userContext
        // registerUser(form.email, form.userName, form.password, form.fullName, form.phone, form.adress);
    };
  return (
    
    <section className="flex flex-wrap mr-64 bg-gray-50 dark:bg-gray-900 w-full">

        <div className="flex flex-wrap w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Add New Payment Plan
          </h1>
          <form className=" w-full space-y-4 md:space-y-6" onSubmit={handleSubmit(handleRegister)}>


          <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Payment plan type
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Payment plan type"
                // {...register("email")}
              />
              {errors.planType ? <p>{errors.planType.message}</p>: ""}
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

export default PaymentPlanAdd