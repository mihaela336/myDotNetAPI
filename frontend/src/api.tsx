import axios from "axios"
import { CreateStationRequestDto, StationDetails, StationKeyMetrics } from "./station"
import { ChargingSession, PaymentPlan, Transaction, User, Vehicle } from "./types";
interface SearchResponse {
    data: CreateStationRequestDto[];

}

//call get all method from api
export const getAll = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(`http://localhost:5220/api/${query}/`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(" error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured";
        }
    }
}

export const searchStations = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>('http://localhost:5220/api/station/');
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(" error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured";
        }
    }
}




export const getKeyMetrics = async(query:string)=>{
    try{
        const data = await axios.get<StationKeyMetrics[]>(`http://localhost:5220/api/station`);
        return data;

    }
    catch (error:any){
        console.log("error message: ", error.message);

    };
    
}

export const getUserById = async(query:string)=>{
    try{
        const data = await axios.get<User[]>(`http://localhost:5220/api/user/${query}`);
        return data;

    }
    catch (error:any){
        console.log("error message: ", error.message);

    };
    
}

export const getStationById = async (query: string) => {
    try {
        const data = await axios.get<StationDetails>(`http://localhost:5220/api/station/${query}`);
        return data;
    } catch (error: any) {
        console.log(" error message from API: ", error.message);
    }
}

export const getChargingSessionById = async (query: string) => {
    try {
        const data = await axios.get<ChargingSession>(`http://localhost:5220/api/chargingSession/${query}`);
        return data;
    } catch (error: any) {
        console.log(" error message from API: ", error.message);
    }
}

export const getTransactionById = async (query: string) => {
    try {
        const data = await axios.get<Transaction>(`http://localhost:5220/api/transaction/${query}`);
        return data;
    } catch (error: any) {
        console.log(" error message from API: ", error.message);
    }
}

export const getPaymentPlanById = async (query: string) => {
    try {
        const data = await axios.get<PaymentPlan>(`http://localhost:5220/api/paymentplan/${query}`);
        return data;
    } catch (error: any) {
        console.log(" error message from API: ", error.message);
    }
}

export const getVehicleById = async (query: string) => {
    try {
        const data = await axios.get<Vehicle>(`http://localhost:5220/api/vehicle/${query}`);
        return data;
    } catch (error: any) {
        console.log(" error message from API: ", error.message);
    }
}

export const getTransactions = async(query:string)=>{
    try{
        const data = await axios.get<StationDetails[]>(`http://localhost:5220/api/station`);
        return data;

    }
    catch (error:any){
        console.log("error message: ", error.message);

    };
    
}