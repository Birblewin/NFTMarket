/* eslint-disable react/prop-types */
// IMPORING NECESSARY MODULES
import { NavLink } from 'react-router-dom';

//  IMPORING NECESSARY COMPONENTS
import './Navbar.css'; // Import your CSS file for styling
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';

// EXPORTING A FUNCTION THAT CREATES A NAVBAR COMPONENT
export default function Navbar(props) {
  return (
    <div className='navbar'>
      <NavLink to="/">
        <div className='nav-title'>
          <img src='../img/birble.png'/>
          <p>Birble.store</p>
        </div>
      </NavLink>
      
      <SearchIcon className='search-icon'/>

      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search collection, or NFT"
          name="searchInput"
          // eslint-disable-next-line react/prop-types
         /*  value={props.searchData.searchInput || "Search collection, or NFT"}
          onChange={props.handleSearchData} */
        />
      </div>
     
      <div className="nav-links">
        <div>
          <NavLink className='rewards' to="/rewards">Rewards</NavLink>
        </div>

       <div className='dropdown'>
        <span>
          <a>Explore</a>
          
          <div className="dropdown-content">
            {/* Dropdown links */}
            <NavLink to="/allcollections">All collections</NavLink>
            <NavLink to="/allnfts">All NFTs</NavLink>
            {/* Add more links as needed */}
          </div>
        </span>
      </div>

      <div className='dropdown'>
        <span>
          <a >Creators</a>
          <div className="dropdown-content">
            {/* Dropdown links */}
            <NavLink href="#">Create your collection</NavLink>
            <NavLink href="#">Verify your collection</NavLink>
            {/* Add more links as needed */}
          </div>
        </span>
      </div>

      <div className='dropdown'>
        <span>
          <a >About</a>
          <div className="dropdown-content">
            {/* Dropdown links */}
            <NavLink to="#">Our team</NavLink>
            <NavLink to="#">Our impact</NavLink>
            {/* Add more links as needed */}
          </div>
        </span>
      </div>

      <div className='dropdown'>
        <span>
          <a >Launchpad</a>
          <div className="dropdown-content">
            {/* Dropdown links */}
            <NavLink to="/launchpad/launches">Launches</NavLink>
            <NavLink to="#">Apply For Launchpad</NavLink>
            {/* Add more links as needed */}
          </div>
        </span>
      </div>

      <span>
        <LightModeIcon className='light-mode-icon'/>
      </span>

      <span>
        <NotificationsIcon className='notification-icon'/>
      </span>

      <div className='en'>EN</div>
      
      <button 
        className='wallet'
        onClick={props.showWalletSidePanel}
      >Connect wallet</button>
    </div>  
  </div>
  );
}