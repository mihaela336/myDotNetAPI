import axios from "axios"
import { CreateStationRequestDto, StationDetails, StationKeyMetrics } from "./station"
import { User } from "./types";
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

export const getStationDetails = async (query: string) => {
    try {
        const data = await axios.get<StationDetails>(`http://localhost:5220/api/station/${query}`);
        return data;
    } catch (error: any) {
        console.log(" error message from API: ", error.message);
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
        const data = await axios.get<User[]>(`http://localhost:5220/api/station`);
        return data;

    }
    catch (error:any){
        console.log("error message: ", error.message);

    };
    
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