import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";
import jwtDecode from 'jwt-decode';

const api="http://localhost:5220/api/";


export const loginAPI= async (username: string, password: string)=>{
    try{
        const data =  await axios.post<UserProfileToken>(api+"account/login",{
            username: username,
            password: password,
        });
        return data;

    } catch (error){
        handleError(error);

    }
};

//add al my fieldf from registerDto
export const registerAPI= async (email: string, username: string, password: string, fullName: string, phone: string, adress: string)=>{
    try{
        const data =  await axios.post<UserProfileToken>(api+"account/register",{
            email: email,
            username: username,
            password: password,
            fullName: fullName,
            phone: phone,
            adress: adress,

        });
        return data;

    } catch (error){
        handleError(error);

    }
};