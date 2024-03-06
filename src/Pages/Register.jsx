// import React, { useState } from 'react';
// import { register } from '../config/userEndpoints';
// import { toast } from 'react-toastify';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         userName:'',
//         email: '',
//         password: ''
//     });

//     const {userName, email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async(e) => {
        
//         e.preventDefault();
//         try {
//             const response = await register(userName, email, password);
//             console.log(response.msg);
//             toast.success(response.msg)
//         } catch (err) {
//             console.error(err.response.data.msg); 
//             toast.error(err.response.data.msg)
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
//             </div>

//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     <form className="space-y-6" onSubmit={onSubmit}>
                        
//                         <div>
//                             <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
//                             <div className="mt-1">
//                                 <input id="userName" name="userName" type="text"  required value={userName} onChange={onChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-indigo-500 sm:text-sm" />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//                             <div className="mt-1">
//                                 <input id="email" name="email" type="email"  required value={email} onChange={onChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-indigo-500 sm:text-sm" />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                             <div className="mt-1">
//                                 <input id="password" name="password" type="password"  required value={password} onChange={onChange} minLength="6" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-indigo-500 sm:text-sm" />
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="text-sm">
//                                 <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                     Already have an account?
//                                 </a>
//                             </div>
//                         </div>

//                         <div>
//                             <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
//                                 Register
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // import useFormik hook
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { register } from '../config/userEndpoints';

const Register = () => {

  const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const initialValues = {
    userName: '',
    email: '',
    password: ''
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
   
    try {
                    const response = await register(values.userName, values.email, values.password);
                    console.log(response.msg);
                    toast.success(response.msg)
                    resetForm();
                } catch (err) {
                    console.error(err.response.data.msg); 
                    toast.error(err.response.data.msg)
                }
    finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                  <Field
                    id="userName"
                    name="userName"
                    type="text"
                    className={`appearance-none block w-full px-3 py-2 border ${touched.userName && errors.userName ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm`}
                  />
                  <ErrorMessage name="userName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className={`appearance-none block w-full px-3 py-2 border ${
                      touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex items-center justify-between">

                                <div className="text-sm">
                                    <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Already have an account?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                    Register
                                </button>
                            </div>
                        </Form>)}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Register;
