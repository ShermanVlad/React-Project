import {axiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {IMoviePaginated} from "../../models/IMoviePaginated";
import {AxiosError} from "axios";

const moviesService = {
    getMovies: async (page: number): Promise<IMoviePaginated | null> => {
        try {
            const {data} = await axiosInstance.get<IMoviePaginated>(urls.getAllMovies, {params: {page: page}});
            return data;
        } catch (e) {
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting movies');
            }
        }

        return null
    },
    getSearchedMovies: async (query: string, page: number): Promise<IMoviePaginated | null> => {
        try {
            const {data} = await axiosInstance.get<IMoviePaginated>(urls.getSearchedMovies, {
                params: {
                    query,
                    page
                }
            })

            return data
        } catch (e) {
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting movies you search', error)
            }
        }

        return null
    }
}
export {
    moviesService
}