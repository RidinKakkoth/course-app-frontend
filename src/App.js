// import './App.css';
// import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Home from './Pages/Home';
// import { useSelector } from 'react-redux';
// import Navbar from './Components/Navbar';

// function App() {

//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated); 
  
//   return (
//     <Router>
//       {isAuthenticated && <Navbar />}
//       <Routes>
//       <Route exact path="/" element={<Home/>}>
                    
//                 </Route>
//         <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
//         <Route path='/register' element={isAuthenticated ? <Navigate to="/" /> :<Register/>} />
//       </Routes>

//     </Router>
//   );
// }

// export default App;
// App.js// App.js// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Route/ProtectedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
<Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Use ProtectedRoute for routes that require authentication */}
       <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
       </Route>
      </Routes>
    </Router>
  );
};

export default App;
