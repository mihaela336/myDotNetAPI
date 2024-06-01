import React from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/useAuth';

type Props = {}
type RegisterFormsInputs = {
    id: string;
    email: string;
    userName: string;
    password: string;
    fullName:string;
    phone:string;
    adress:string;
}
const validation = Yup.object().shape({
    id: Yup.string().required("Id is required"),
    email: Yup.string().required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    fullName: Yup.string().required("Full Name is required"),
    phone: Yup.string().required("Phone is required"),
    adress: Yup.string().required("adress is required"),

})

const StationEdit = (props: Props) => {
    const {registerUser}= useAuth();
    const {
        register,
         handleSubmit,
          formState: { errors},
        }=useForm<RegisterFormsInputs>({resolver: yupResolver(validation)});
    const handleRegister= (form:RegisterFormsInputs)=>{
        //api method from userContext
        registerUser(form.email, form.userName, form.password, form.fullName, form.phone, form.adress);
    };
  return (
    <section className="flex flex-wrap mr-64 bg-gray-50 dark:bg-gray-900 w-full">

    <div className="flex flex-wrap w-full p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Edit user
      </h1>
      <form className=" w-full space-y-4 md:space-y-6" onSubmit={handleSubmit(handleRegister)}>

      <div>
              <label
                htmlFor="id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ID
              </label>
              <input
                type="text"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ID"
                {...register("id")}
              />
              {errors.id ? <p>{errors.id.message}</p>: ""}
            </div>
       
      <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p>: ""}
        </div>
       
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Username"
            {...register("userName")}
          />
          {errors.userName ? <p>{errors.userName.message}</p>: ""}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p>: ""}
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Full Name"
            {...register("fullName")}
          />
          {errors.fullName ? <p>{errors.fullName.message}</p>: ""}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            {...register("phone")}
          />
          {errors.phone ? <p>{errors.phone.message}</p>: ""}
        </div>

        <div>
          <label
            htmlFor="adress"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adress
          </label>
          <input
            type="text"
            id="Adress"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Adress"
            {...register("adress")}
          />
          {errors.adress ? <p>{errors.adress.message}</p>: ""}
        </div>
        <div className="flex items-center justify-between">

        </div>
        <button
          type="submit"
          className="w-full text-white bg-lightGreen hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add user
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

export default StationEdit