import './launchpad.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ProgressBar from './progressbarholder';
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
      <button className='button-icon'><CalendarMonthIcon/></button>
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
          <h1 style={{fontSize:'14px'}}>₳  11490K</h1>
          </div>
          <div className='button1'>
          {/* <CurrencyBitcoinIcon/> */}
          <button style={{backgroundColor:'#FFDB24', color: '#363636', borderRadius:'20px',fontSize:'14px'}}>connect wallet</button>
          </div>
        </div>
      </div>

      {/* container3 with basic styling*/}

      <div className="division3" style={{ backgroundColor: '#1d2022'}}>
        <button style={{backgroundColor:'#2a2a24',padding:'18px',paddingLeft:'30px',paddingRight:'30px', borderRadius:'30px',marginLeft:'25%', fontSize:'14px'}}>Make offer</button><button style={{backgroundColor:'#2a2a24',padding:'18px',paddingLeft:'30px',paddingRight:'30px', borderRadius:'30px',fontSize:'14px'}}>Explore all NFTs</button>
      </div>
    </div>
    
 </div>

  )
}

export default Launchpadcontainer