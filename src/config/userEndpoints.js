import AxiosInstance from "./axios";

const register =async(userName,email,password)=>{

    try {
console.log(userName,email,password,"vvvvvvv");
        let {data}=await AxiosInstance.post(`register`,{userName,email,password})
       
        return data
        
    } catch (error) {
        console.error('Error occurred while registering:', error);
        throw error;
    }
}

export{register}