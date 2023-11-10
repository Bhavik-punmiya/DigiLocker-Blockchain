
import './App.css';
import Home from './components/Home';
import {Routes,Route, Navigate} from 'react-router-dom';
import Upload from './components/Upload';
import { UserAuthContextProvider, useUserAuth } from './components/context/userAuthContext';
import Login from './components/Login';
import Signup from './components/Signup';











function App() {

  const {user}= useUserAuth();
   console.log(user)
   const auth = localStorage.getItem('auth')

  return (
    <div className="App">

      {/* <Home/> */}
      {/* <Upload/> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/upload' element={!(user || auth)?(<Navigate to='/login'/>):(<Upload/>)}/>
      </Routes>
    </div>
  );
}

export default App;
