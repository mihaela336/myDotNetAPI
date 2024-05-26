import axios from "axios"
import { CreateStationRequestDto } from "./station"
interface SearchResponse {
    data: CreateStationRequestDto [];
}

export const searchStations = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>('http://localhost:5220/api/station/');
        return data;
    } catch (error){
        if(axios.isAxiosError(error)){
            console.log(" error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured";
        }
    }
}