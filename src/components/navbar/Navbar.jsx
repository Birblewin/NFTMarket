/* eslint-disable react/prop-types */
// IMPORING NECESSARY MODULES
import { NavLink } from 'react-router-dom';

// connect wallet functionality by mkrs
import { useWeb3Modal } from '@web3modal/react'; // Import the useWeb3Modal hook

//  IMPORING NECESSARY COMPONENTS
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';

// EXPORTING A FUNCTION THAT CREATES A NAVBAR COMPONENT
export default function Navbar(props) {
// Use the useWeb3Modal hook to access the open and close functions
const { open } = useWeb3Modal();

// Function to connect the wallet
const connectWallet = async () => {
  try {
    // Open the wallet modal using the open function from useWeb3Modal
    await open();
  } catch (error) {
    console.error('Error connecting to wallet:', error);
  }

  
};

  return (
    <div className='navbar flex items-center bg-[#111111] text-white pb-[20px] h-[95px] p-[10px] mb-[40px] w-[100%] relative transition-all duration-500 ease-in-out justify-between font-[Inter] sm:justify-between'>
      <NavLink to="/home">
        <div className='flex justify-center items-center'>
          <img 
            src='/img/birble.png'
            className='w-[32px] h-auto m-[10px]'
          />

          <p className='ml-[-10px] mr-[30px] text-center text-[#FFF] font-[Inter] text-[20px] font-[600] leading-normal sm:text-[24px]'>Birble.store</p>
        </div>
      </NavLink>

      <div className='small-screen-buttons flex justify-center items-center gap-[15px] sm:hidden'>
        <button 
          className='w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out text-[#706f6f]'
          title='search-button'
        >
          <SearchIcon 
            className='text-[#706f6f] cursor-pointer'
            onClick={props.showSearchBar}
          />
        </button>

        <button 
          className='w-[45px] h-[45px] rounded-full bg-small-screen-buttons__wallet-button border-[2px] border-solid border-small-screen-buttons__wallet-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out flex justify-center items-center'
          onClick={props.showWalletSidePanel}
          title='show-wallet'
        >
          <img 
            crossOrigin="anonymous" 
            id="" 
            src="https://static.jpgstoreapis.com/icons/wallet-outline-dark.svg" 
            alt="wallet icon"
            loading='lazy'
          />
        </button>
        
        <button 
          className='small-screen-buttons__side-panel-button w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] flex justify-center items-center flex-col'
          title='show-sidebar'
          onClick={props.showLinkSidePanel}
        >
          <div className='w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out'></div>
          <div className='w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out'></div>
          <div className='w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out'></div>
        </button>
      </div>
      
      <div className="medium-screen-buttons hidden sm:flex sm:justify-between sm:items-center sm:gap-[10px] sm:w-[100%] lg:hidden">
        <div className='hidden justify-center items-center sm:flex sm:my-0 sm:mx-auto'>
          <SearchIcon className='text-[#706f6f] cursor-pointer'/>
          
          <input
            className="py-[12px] px-[44px] ml-[-35px] w-[260px] h-[50px] rounded-[20px] border-solid border-[1px] border-[#8B919B] bg-search-bar flex justify-center items-center text-[#8B919B] font-[Inter] text-[14px] font-[400] leading-normal md:w-[356px] lg:py-[12px] lg:px-[44px] lg:ml-[-35px] lg:h-[50px] lg:rounded-[20px] lg:border-[1px] lg:border-solid lg:border-[#8B919B] lg:bg-search-bar lg:flex lg:justify-center lg:items-center"
            type="text"
            placeholder="Search collection, or NFT"
            name="searchInput"
          />
        </div>

        <div className='medium-screen-buttons__button-container sm:flex sm:justify-center sm:items-center sm:gap-[15px]'>
          <button 
            className='w-[45px] h-[45px] rounded-full bg-small-screen-buttons__wallet-button border-[2px] border-solid border-small-screen-buttons__wallet-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out flex justify-center items-center'
            // onClick={props.showWalletSidePanel}
            title='show-wallet'
          >
            <img 
              crossOrigin="anonymous" 
              id="" 
              src="https://static.jpgstoreapis.com/icons/wallet-outline-dark.svg" 
              alt="wallet icon"
              loading='lazy'
            />
          </button>
          
          <button 
            className='small-screen-buttons__side-panel-button w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] flex justify-center items-center flex-col'
            title='show-sidebar'
             onClick={props.showLinkSidePanel}
          >
            <div className='w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out'></div>
            <div className='w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out'></div>
            <div className='w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out'></div>
          </button>
        </div>
      </div>

      <div className="extra-large-screen-buttons hidden lg:flex lg:justify-around">
        <div className='lg:flex lg:items-center lg:justify-center'>
          <SearchIcon className='text-[#706f6f] cursor-pointer'/>

          <input
            className="search-bar py-[12px] px-[44px] ml-[-35px] w-[260px] h-[50px] rounded-[20px] border-solid border-[1px] border-[#8B919B] bg-search-bar flex justify-center items-center text-[#8B919B] font-[Inter] text-[14px] font-[400] leading-normal md:w-[356px] lg:py-[12px] lg:px-[44px] lg:ml-[-35px] lg:h-[50px] lg:rounded-[20px] lg:border-[1px] lg:border-solid lg:border-[#8B919B] lg:bg-search-bar lg:flex lg:justify-center lg:items-center"
            type="text"
            placeholder="Search collection, or NFT"
            name="searchInput"
          />
        </div>

        <div className="nav-links items-center flex my-0 mr-[10px] ml-[10.104px] p-0 pl-[0px] justify-evenly">
          <div>
            <NavLink className='rewards m-0 mr-[32px] text-[#FFDB24] font-[Inter] font-[400] leading-normal text-[14px]' to="/rewards">Rewards</NavLink>
          </div>

          <div className='dropdown'>
            <span className='m-0 mr-[32px] text-[#FFF] text-[14px] font-[400] leading-normal'>
              <a className='text-white'>Explore</a>
              
              <div className="dropdown-content hidden absolute text-[#555c69] bg-[#18191b] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                {/* Dropdown links */}
                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="/allcollections"
                >All collections</NavLink>

                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="/allnfts"
                >All NFTs</NavLink>
                {/* Add more links as needed */}
              </div>
            </span>
          </div>

          <div className='dropdown'>
            <span className='m-0 mr-[32px] text-[#FFF] text-[14px] font-[400] leading-normal'>
              <a className='text-white'>Creators</a>
              <div className="dropdown-content hidden absolute text-[#555c69] bg-[#18191b] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                {/* Dropdown links */}
                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="#"
                >Create your collection</NavLink>

                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="#"
                >Verify your collection</NavLink>
                {/* Add more links as needed */}
              </div>
            </span>
          </div>

          <div className='dropdown'>
            <span className='m-0 mr-[32px] text-[#FFF] text-[14px] font-[400] leading-normal'>
              <a className='text-white'>About</a>
              <div className="dropdown-content hidden absolute text-[#555c69] bg-[#18191b] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                {/* Dropdown links */}
                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="#"
                >Our team</NavLink>
                
                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="#"
                >Our impact</NavLink>
                {/* Add more links as needed */}
              </div>
            </span>
          </div>

          <div className='dropdown'>
            <span className='m-0 mr-[32px] text-[#FFF] text-[14px] font-[400] leading-normal'>
              <a className='text-white'>Launchpad</a>
              <div className="dropdown-content hidden absolute text-[#555c69] bg-[#18191b] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                {/* Dropdown links */}
                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="/launchpad/launches"
                >Launches</NavLink>

                <NavLink 
                  className='text-[#fff] block py-[12px] px-[16px] hover:bg-[#2a2929]' 
                  to="#"
                >Apply For Launchpad</NavLink>
                {/* Add more links as needed */}
              </div>
            </span>
          </div>

          <span className='m-0 mr-[20px] text-[#FFF] text-[14px] font-[400] leading-normal'>
            <LightModeIcon className='text-[#FFDB24] cursor-pointer'/>
          </span>

          <span className='m-0 mr-[20px] text-[#FFF] text-[14px] font-[400] leading-normal'>
            <NotificationsIcon className='text-[#9CA3AF] cursor-pointer'/>
          </span>

          <div className='text-[#9CA3AF] text-[16px]'>EN</div>
          
          <button 
            className='text-[#000000] text-[14px] bg-[#FFDB24] py-[12px] px-[8px] border-none rounded-[10px] m-[10px] ml-[25px] transition-all duration-500 ease-in-out cursor-pointer active:scale-[0.8] active:opacity-[0.7]'
            onClick={connectWallet}
          >Connect wallet</button>
      </div>  
    </div>
  </div>
  );
}