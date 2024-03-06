import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Flip, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Flip}
/>
      <App />
    </PersistGate>
  </Provider>
  
);


