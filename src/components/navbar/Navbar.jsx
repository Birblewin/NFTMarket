/* eslint-disable react/prop-types */
/** @jsxImportSource theme-ui */
// IMPORING NECESSARY MODULES

import { NavLink } from "react-router-dom";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState, useContext } from "react";
import NightlightIcon from '@mui/icons-material/Nightlight';
// import { useWallet } from '@meshsdk/react';

//  IMPORING NECESSARY COMPONENTS
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Icon } from "@iconify/react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ThemeContext } from "../../contexts/ThemeProvider";

// EXPORTING A FUNCTION THAT CREATES A NAVBAR COMPONENT
export default function Navbar(props) {
  const { open } = useWeb3Modal();
  const [mode, toggleTheme] = useContext(ThemeContext);

  // Function to connect the wallet
  const connectWallet = async () => {
    try {
      // Open the wallet modal using the open function from useWeb3Modal
      await open();
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  
  const toggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };



 return (
  <div>
    <div className="navbar flex items-center pb-[20px] h-[95px] p-[5px] pr-0 mb-[40px] w-[100%] relative transition-all duration-500 ease-in-out justify-between font-[Inter] sm:justify-between shadow-dropdown-content">
      <NavLink to="/home">
        <div className="flex justify-center items-center">
          <img src="/img/birble.png" className="w-[32px] h-auto m-[10px]" />

          <p className="ml-[-10px] mr-[30px] text-center  font-[Inter] text-[20px] font-[600] leading-normal sm:text-[24px] " >
            Birble.store
          </p>
        </div>
      </NavLink>

      <div className="small-screen-buttons flex justify-center items-center gap-[15px] sm:hidden">
        <button
          className="w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out " 
          title="search-button"
        >
          <SearchIcon
            className="text-[#706f6f] cursor-pointer"
            onClick={props.showSearchBar}
          />
        </button>


        <button 
          className='w-[45px] h-[45px] rounded-full bg-small-screen-buttons__wallet-button border-[2px] border-solid border-small-screen-buttons__wallet-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out flex justify-center items-center'
           onClick={toggleAdditionalButtons}
          title='show-wallet'

        >
          <img
            crossOrigin="anonymous"
            id=""
            src="https://static.jpgstoreapis.com/icons/wallet-outline-dark.svg"
            alt="wallet icon"
            loading="lazy"
          />
        </button>

        <button
          className="small-screen-buttons__side-panel-button w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] flex justify-center items-center flex-col"
          title="show-sidebar"
          onClick={props.showLinkSidePanel}
        >
          <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
          <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
          <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
        </button>
      </div>

          

        <div className="small-screen-buttons flex justify-center items-center gap-[15px] sm:hidden">
          <button
            className="w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out "
            title="search-button"
          >
            <SearchIcon
              className="text-[#706f6f] cursor-pointer"
              onClick={props.showSearchBar}
            />
          </button>

          <button
            className="w-[45px] h-[45px] rounded-full bg-small-screen-buttons__wallet-button border-[2px] border-solid border-small-screen-buttons__wallet-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out flex justify-center items-center"
            onClick={toggleAdditionalButtons}
            title="show-wallet"
          >
            <img
              crossOrigin="anonymous"
              id=""
              src="https://static.jpgstoreapis.com/icons/wallet-outline-dark.svg"
              alt="wallet icon"
              loading="lazy"
            />
          </button>

          <button
            className="small-screen-buttons__side-panel-button w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] flex justify-center items-center flex-col"
            title="show-sidebar"
            onClick={props.showLinkSidePanel}
          >
            <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
            <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
            <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
          </button>
        </div>

        <div className="medium-screen-buttons hidden sm:flex sm:justify-between sm:items-center sm:gap-[10px] sm:w-[100%] lg:hidden">
          <div className="hidden justify-center items-center sm:flex sm:my-0 sm:mx-auto">
            <SearchIcon className="text-[#706f6f] cursor-pointer" />

            <input
              className="py-[12px] px-[44px] ml-[-35px] w-[260px] h-[50px] rounded-[20px] border-solid border-[1px] border-[#8B919B] bg-search-bar flex justify-center items-center text-[#8B919B] font-[Inter] text-[14px] font-[400] leading-normal md:w-[356px] lg:py-[12px] lg:px-[44px] lg:ml-[-35px] lg:h-[50px] lg:rounded-[20px] lg:border-[1px] lg:border-solid lg:border-[#8B919B] lg:bg-search-bar lg:flex lg:justify-center lg:items-center"
              type="text"
              placeholder="Search collection, or NFT"
              name="searchInput"
            />
          </div>

          <div className="medium-screen-buttons__button-container sm:flex sm:justify-center sm:items-center sm:gap-[15px]">
            <button
              className="w-[45px] h-[45px] rounded-full bg-small-screen-buttons__wallet-button border-[2px] border-solid border-small-screen-buttons__wallet-button p-[4px] cursor-pointer transition-all duration-500 ease-in-out flex justify-center items-center"
              onClick={toggleAdditionalButtons}
              title="show-wallet"
            >
              <img
                crossOrigin="anonymous"
                id=""
                src="https://static.jpgstoreapis.com/icons/wallet-outline-dark.svg"
                alt="wallet icon"
                loading="lazy"
              />
            </button>

            <button
              className="small-screen-buttons__side-panel-button w-[45px] h-[45px] rounded-full bg-small-screen-buttons__search-button border-[2px] border-solid border-small-screen-buttons__search-button p-[4px] flex justify-center items-center flex-col"
              title="show-sidebar"
              onClick={props.showLinkSidePanel}
            >
              <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
              <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
              <div className="w-[20px] bg-[whitesmoke] rounded-[10px] h-[3px] my-[2px] mx-0 cursor-pointer transition-all duration-500 ease-in-out"></div>
            </button>
          </div>
        </div>

        <div className="extra-large-screen-buttons hidden lg:flex lg:justify-around">
          <div className="lg:flex lg:items-center lg:justify-center">
            <SearchIcon className="text-[#706f6f] cursor-pointer" />

            <input
              className="search-bar py-[12px] px-[44px] ml-[-35px] w-[260px] h-[50px] rounded-[20px] border-solid border-[1px] border-[#8B919B] bg-search-bar flex justify-center items-center text-[#8B919B] font-[Inter] text-[14px] font-[400] leading-normal md:w-[356px] lg:py-[12px] lg:px-[44px] lg:ml-[-35px] lg:h-[50px] lg:rounded-[20px] lg:border-[1px] lg:border-solid lg:border-[#8B919B] lg:bg-search-bar lg:flex lg:justify-center lg:items-center"
              type="text"
              placeholder="Search collection, or NFT"
              name="searchInput"
            />
          </div>

          <div className="nav-links  items-center flex my-0 mr-[10px] ml-[10.104px] p-0 pl-[0px] justify-evenly">
            <div>
              <NavLink
                className="rewards m-0 mr-[32px] text-[#FFDB24] font-[Inter] font-[400] leading-normal text-[14px]"
                to="/rewards"
              >
                Rewards
              </NavLink>
            </div>

            <div className="dropdown">
              <span className="m-0 mr-[32px]  text-[14px] font-[400] leading-normal">
                <a className="">Explore</a>

                <div className="dropdown-content hidden absolute text-[#555c69] bg-[ ] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                  {/* Dropdown links */}
                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/explore/allcollections"
                  >
                    All collections
                  </NavLink>

                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/explore/allnfts"
                  >
                    All NFTs
                  </NavLink>
                  {/* Add more links as needed */}
                </div>
              </span>
            </div>

            <div className="dropdown">
              <span className="m-0 mr-[32px]  text-[14px] font-[400] leading-normal">
                <a className="">Creators</a>
                <div className="dropdown-content hidden absolute text-[#555c69] bg-[ ] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                  {/* Dropdown links */}
                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/creators/mining"
                  >
                    Create your collection
                  </NavLink>

                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/creators/verification"
                  >
                    Verify your collection
                  </NavLink>
                  {/* Add more links as needed */}
                </div>
              </span>
            </div>

            <div className="dropdown">
              <span className="m-0 mr-[32px]  text-[14px] font-[400] leading-normal">
                <a className="">About</a>
                <div className="dropdown-content hidden absolute text-[#555c69] bg-[ ] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                  {/* Dropdown links */}
                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/about/team"
                  >
                    Our team
                  </NavLink>

                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/about/impact"
                  >
                    Our impact
                  </NavLink>
                  {/* Add more links as needed */}
                </div>
              </span>
            </div>

            <div className="dropdown">
              <span className="m-0 mr-[32px] text-[14px] font-[400] leading-normal">
                <a className="">Launchpad</a>
                <div className="dropdown-content hidden absolute text-[#555c69] bg-[ ] min-w-[160px] z-[1] rounded-[5px] ml-[-10px] shadow-dropdown-content">
                  {/* Dropdown links */}
                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/launchpad/launches"
                  >
                    Launches
                  </NavLink>

                  <NavLink
                    className=" block py-[12px] px-[16px] hover:bg-[#2a2929]"
                    to="/launchpad/apply for launchpad"
                  >
                    Apply For Launchpad
                  </NavLink>
                  {/* Add more links as needed */}
                </div>
              </span>
            </div>

            <span className="m-0 mr-[20px] text-[#FFF] text-[14px] font-[400] leading-normal">
              <button onClick={() => toggleTheme()}>
                {mode === "dark" ? (
                  <LightModeIcon className="text-[#FFDB24] cursor-pointer" />
                ) : (
                 <NightlightIcon className="text-[#9ca3af] cursor-pointer" />
                )}
              </button>
            </span>

            <span className="m-0 mr-[20px] text-[#FFF] text-[14px] font-[400] leading-normal">
              <NotificationsIcon className="text-[#9CA3AF] cursor-pointer" />
            </span>

            <div
              className="text-[#9CA3AF] text-[16px]"
              onClick={props.toggleLanguage}
            >
              EN
            </div>

            <button
              className="text-[#000000] flex text-[14px] bg-[#FFDB24] py-[8px] px-[4px] border-none rounded-[8px] m-[0px] ml-[5px] transition-all duration-500 ease-in-out cursor-pointer active:scale-[0.8] active:opacity-[0.7]"
              onClick={toggleAdditionalButtons}
            >
              <span>Connect wallet </span>
              <span>
                <KeyboardArrowDownIcon className="m-0 p-0 -ml-1" />
              </span>
            </button>
          </div>
        </div>
        {showAdditionalButtons && (
          <div className="additional-buttons absolute top-14 right-0 mt-[10px] mr-5 flex flex-col space-y-2 ">
            <button
              onClick={props.toggleCardanoModal}
              className="additional-button text-[#ffffff] text-[14px] bg-[#1864F8] py-[8px] px-[4px] border-none rounded-[8px]"
            >
              Cardano wallet
            </button>

            <button
              onClick={connectWallet}
              className="additional-button text-[#ffffff] text-[14px] bg-[#1864F8] py-[8px] px-[4px] border-none rounded-[8px]"
            >
              Etherium wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
