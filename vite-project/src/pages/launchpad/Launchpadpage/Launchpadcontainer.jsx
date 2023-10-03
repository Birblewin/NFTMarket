import './launchpad.css'
import ProgressBar from './progressbarholder';
import { Icon } from '@iconify/react';
import CountdownTimer from './timer'

const Launchpadcontainer = () => {
  return (
    <div className="container">
      {/* Where the img is */}
      <div className="image-container">
        <h2 style={{color:'#FFFF',marginLeft:'155px'}}>Reezy cleacks collection</h2>
      <img src="../img/Railey 2.PNG" alt="Sample Image" />
    </div>

    {/*Main-Container */}
    
    <div className="container2">

      {/* Container1 with basic styling*/}
      
     <div  className='calender'>
      <div className='live'><Icon icon="tabler:live-photo" /><span style={{fontSize:'8px'}}><h1>&nbsp;Live</h1></span></div>
      <button className='button-icon'><Icon icon="uil:calender" width={30} height={30} color='#ffff'/></button>
      </div>
      
      <div className="division1" style={{ backgroundColor: '#1d2022' }}>
        
        <h2 style={{fontSize:'14px', marginTop:'-38px', paddingRight:'60px', color:'#C5B206'}}>Minting stages</h2>&nbsp;
        <div  style={{display:'flex'}}>  
        <h1 style={{fontSize:'14px', color:'#FFFF', marginTop: '10px'}}>public</h1>
        <div className='timer'>
        <CountdownTimer/>
        </div>
        </div>
    <p style={{color: '#C5B206', fontSize:'14px', marginBottom:'-30px'}}>1212.2K. 44K</p>
      </div>
     
      {/* Container2 with basic styling */}

       <div className="division2" style={{ backgroundColor: '#1d2022' }}>
         <h2 style={{fontSize:'14px', marginTop:'-38px', paddingRight:'60px', color:'#FFFF'}}>Total minted</h2>
           <ProgressBar/>
             <div className='connection'>
               <div  className='divisionh2'>
              <h2 className='h1'>Price</h2>
            &nbsp;&nbsp;&nbsp;
            <h1 style={{fontSize:'14px', marginTop:'13px'}}>₳  11490K</h1>
              </div>
                 <div className='cardano'>
                    <div>
                       <Icon icon="formkit:cardano" width={80} height={80}/>
                       </div>
                     <div className='button1'>
                   <button className='button'>connect wallet</button>
                 </div>
               </div>
        </div>
      </div>

      {/* container3 with basic styling*/}

      <div className="division3">
        <div className='gen'>
          <a href="/">
          <button className='button2'>Make offer &nbsp;<Icon icon="solar:wallet-bold" /></button>
          </a>
           <a href="/">
           <button className='button2'>Explore all NFTs</button>
           </a>
        </div>
      </div>
    </div>
 </div>

  )
}

export default Launchpadcontainer