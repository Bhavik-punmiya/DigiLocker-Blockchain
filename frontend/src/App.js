
import './App.css';
import Home from './components/Home';
import {Routes,Route, Navigate} from 'react-router-dom';
import Upload from './components/Upload';
import { UserAuthContextProvider, useUserAuth } from './components/context/userAuthContext';
import Login from './components/Login';
import Signup from './components/Signup';











function App() {

  const {user}= useUserAuth();


  return (
    <div className="App">

      {/* <Home/> */}
      {/* <Upload/> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={!(user)?(<Upload/>):(<Navigate to='/login'/>)}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
