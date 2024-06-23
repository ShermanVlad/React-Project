import {axiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {AxiosError, AxiosResponse} from "axios";
import {IGenres} from "../../models/IGenres";

const genresService = {
    getGenres: async ():Promise<IGenres | null> => {
        try {
            const {data}=await axiosInstance.get<IGenres>(urls.getGenres);
            return data
        } catch (e) {
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting genres');
            }
        }

        return null
    }
}

export {
    genresService
}