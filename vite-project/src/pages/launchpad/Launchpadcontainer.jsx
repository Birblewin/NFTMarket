import React from 'react'
import './launchpad.css'
import ProgressBar from './progressbarholder';
const Launchpadcontainer = () => {
  return (
    <div className="container">
      {/* Where the img is */}
      <div className="image-container">
        <h2 style={{color:'#FFFF',marginLeft:'155px'}}>Reezy cleacks collection</h2>
      <img src="../img/Railey 2.PNG" alt="Sample Image" />
    </div>

    {/*Main-Container */}
    
    <div className="paragraph-container">

      {/* Container1 with basic styling*/}

      <div className="paragraph" style={{ backgroundColor: '#18191B' }}>
        <h2 style={{fontSize:'10px', marginTop:'-38px', paddingRight:'60px', color:'#C5B206'}}>Minting stages</h2>&nbsp;
        <h1 style={{fontSize:'10px', color:'#FFFF'}}>public</h1>
      </div>

      {/* Container2 with basic styling */}

      <div className="paragraph" style={{ backgroundColor: '#18191B' }}>
      <h2 style={{fontSize:'10px', marginTop:'-38px', paddingRight:'60px', color:'#FFFF'}}>Total minted</h2>
        <ProgressBar/>
      </div>

      {/* container3 with basic styling*/}

      <div className="paragraph" style={{ backgroundColor: '#18191B'}}>
        <button style={{backgroundColor:'#131313',padding:'18px',paddingLeft:'30px',paddingRight:'30px', borderRadius:'30px',marginLeft:'100px'}}>Make offer</button><button style={{backgroundColor:'#131313',padding:'18px',paddingLeft:'30px',paddingRight:'30px', borderRadius:'30px'}}>collections</button>
      </div>
    </div>

 </div>
  )
}

export default Launchpadcontainer