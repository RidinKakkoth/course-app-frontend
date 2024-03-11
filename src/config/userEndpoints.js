import AxiosInstance from "./axios";

const register =async(userName,email,password)=>{

    try {
        let {data}=await AxiosInstance.post(`register`,{userName,email,password})
       
        return data
        
    } catch (error) {
        console.error('Error occurred while registering:', error);
        throw error;
    }
}

const userLogin=async(email,password)=>{
    try {
console.log(email,password,"dddddddddddddd");
        let {data}=await AxiosInstance.post('login',{email,password})
        return data
    } catch (error) {
        console.error('Error occurred while Login:', error);
        throw error;
    }
}

export{register,userLogin}