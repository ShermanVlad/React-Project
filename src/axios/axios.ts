import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use(request=>{
    request.headers.Authorization='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzk3NTViZDI3YzhkM2FiY2VkNmNjYTE4ODM1NDA3MSIsInN1YiI6IjY2NzAzMzhiOTM3ZGQwNzYzMjk4MmJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bUIuHW8tzn8cr42zzsql4sCCaj7dv1l_g-rkKK85-_0'
    return request
})

export {
    axiosInstance
}
