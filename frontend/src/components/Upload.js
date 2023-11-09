import React from 'react';
import { Link } from "react-router-dom";
import './css/upload.css'
import sideimg from './img/Scene_BluePurpleGold_Link.png'

function Upload() {
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
  <Link href="/certifcategen">
    <p className='schemes'> Generate Certificates </p>
  </Link>
  <button className="signout-btn" onClick={''}>Sign Out</button>
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
              <input minLength="3" name="form-name"   id="form-name" type="text" placeholder='Form-Name' required></input><br/>
                <input minLength="3" name="form-id"   id="form-id" type="text" placeholder='Form-ID' required></input><br/>
                
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
