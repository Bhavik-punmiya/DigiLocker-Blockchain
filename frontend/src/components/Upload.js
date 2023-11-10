import React from 'react';
import { Link } from "react-router-dom";
import './css/upload.css'
import sideimg from './img/Scene_BluePurpleGold_Link.png'
import { useUserAuth } from './context/userAuthContext';
import TextField from '@mui/material/TextField';

function Upload() {
  const {logout}= useUserAuth()
  const handlelogout=async ()=>{
    await logout();
    await localStorage.removeItem('auth')
 }

  return (
    <div className='upload'>
<head>
    <title>File Uploader</title>
    <meta name="description" content="file uploader"></meta>                
</head>
<main>

<div className='uploadmenu'>
  <Link href="/schemes">
    <p className='schemes'> View Schemes </p>
  </Link>
  <div className='leftuploadmenu'>
  <Link href="/generatecertificate">
    <p className='schemes'> Generate Certificates </p>
  </Link>
  <button className="signout-btn" onClick={handlelogout}>Sign Out</button>
  </div>
</div>

<div className='mainsection'> 
<div className='sideimg'>
    <img src={sideimg}/>
    </div>
    <div className='uploadsection'>     
       <h1 className="titles">Upload Your Files</h1>
    <div className="container">
            <form action="">
            <TextField id="outlined-basic" label="Form Name" variant="outlined" /><br/>              
                <input type="file"/>
                <br/>
                 <button className='button-29'>Submit</button>
                  
                 <button className='button-29'>View Documents</button>
            </form>
           
    </div> 
    </div>       
    </div>
</main>


      
    </div>
  )
}

export default Upload
