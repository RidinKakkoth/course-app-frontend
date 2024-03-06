import axios from 'axios'
import { store } from "../store";


    const AxiosInstance=axios.create({
        baseURL:"http://localhost:5000/",
        timeout:100000
    })

    AxiosInstance.interceptors.request.use(config=>{
        const token=store.getState().auth.token;

        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }

        return config

        
    },

    function (error){
        return Promise.reject(error)
    }
    )
export default AxiosInstance