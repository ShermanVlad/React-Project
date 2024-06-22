import {axiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {AxiosError} from "axios";
import {IGenres} from "../../models/IGenres";

const genresService = {
    getGenres: async () => {
        try {
            const responce = await axiosInstance.get<IGenres>(urls.getGenres);
            return responce
        } catch (e) {
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting genres');
            }
        }
    }
}

export {
    genresService
}