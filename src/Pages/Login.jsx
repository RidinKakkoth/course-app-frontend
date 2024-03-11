// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const { email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/api/auth/login', {
//                 email,
//                 password
//             });
//             console.log(res.data); 
//         } catch (err) {
//             console.error(err.response.data); 
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
//             </div>

//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     <form className="space-y-6" onSubmit={onSubmit}>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//                             <div className="mt-1">
//                                 <input id="email" name="email" type="email"  required value={email} onChange={onChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-indigo-500 sm:text-sm" />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                             <div className="mt-1">
//                                 <input id="password" name="password" type="password"  required value={password} onChange={onChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500  sm:text-sm" />
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="text-sm">
//                                 <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                     New here?
//                                 </a>
//                             </div>
//                         </div>
  

//                         <div>
//                             <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                                 Log in
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import React from 'react';
import { userLogin } from '../config/userEndpoints';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const validationSchema=Yup.object({
        email:Yup.string().email("Invalid email address").required('Email is required'),
        password:Yup.string().required("Password required")
    })

    const initialValues={
        email:"",
        password:""
    }

    const onSubmit=async(values)=>{

        try {
            const response=await userLogin(values.email,values.password)
            const token=response.userLogin.token
            const user=response.userLogin.name

            dispatch({type:"SET_TOKEN",payload:token})
            dispatch({type:"SET_USER",payload:user})
            navigate('/')


        } catch (err) {
            console.error(err.response.data.msg); 
            toast.error(err.response.data.msg)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>

                   {({errors,touched})=>(

                       <Form className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <div className="mt-1">
                                <Field id="email" name="email" type="email"  required  className={`appearance-none block w-full px-3 py-2 border ${touched.email&&errors.email?'border-red-500': 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-indigo-500 sm:text-sm`} />
                            </div>
                            <ErrorMessage name='email' component="div" className='text-red-500 text-sm mt-1'/>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <Field id="password" name="password" type="password"  required  className={`appearance-none block w-full px-3 py-2 border ${touched.password&&errors.password?'border-red-500': 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500  sm:text-sm `}/>
                            </div>
                            <ErrorMessage name='password' component="div" className='text-red-500 text-sm mt-1'/>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    New here?
                                </a>
                            </div>
                        </div>
  

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Log in
                            </button>
                        </div>
                    </Form>
                        )
                    }
                </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
