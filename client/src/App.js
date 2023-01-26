import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className='app'>
    <Router>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </Router>
    </div>   
  );
}

export default App;
