import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>

    </Router>
  );
}

export default App;
