
import './App.css';
import Home from './components/Home';
import {Routes,Route, Navigate} from 'react-router-dom';
import Upload from './components/Upload';
import { UserAuthContextProvider, useUserAuth } from './components/context/userAuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Certifcategenerator from './components/Certifcategenerator';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});











function App() {

  const {user}= useUserAuth();
   console.log(user)
   const auth = localStorage.getItem('auth')

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
   
      {/* <Home/> */}
      {/* <Upload/> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/upload' element={!(user || auth)?(<Navigate to='/login'/>):(<Upload/>)}/>
          <Route path='/generatecertificate' element={<Certifcategenerator/>}/>
      </Routes>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
