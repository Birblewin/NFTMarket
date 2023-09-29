import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Navbar() {
 


  return (
    <div className='navbar'>
      <a href="/">
      <div className='nav-title'>
      <img src='../img/birble.png'/>
      <p>Birble.store</p>
      </div>
      </a>
      
        
      <SearchIcon className='search-icon'/>
      <div>
      
      <input
       className="search-bar"
        type="text"
        placeholder="Search collection, or NFT" 
        
      />
    </div>
     
      <div className="nav-links">
        <div ><a className='rewards' href="/rewards">Rewards</a></div>
        <span><a href="/explore">Explore</a></span>
        <span><a href="/creators">Creators</a></span>
        <span><a href="/about">About</a></span>
        <span><a href="/launchpad">Launchpad</a></span>
        <span><LightModeIcon className='light-mode-icon'/></span>
        <span><NotificationsIcon className='notification-icon'/></span>
        <div className='en'>EN</div>
        <button className='wallet'>Connect wallet</button>
      </div>
    
      
      
      
    </div>
  );
}

export default Navbar;
