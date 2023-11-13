import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import NftModal from './NftModal';
import { Icon } from "@iconify/react";

import NftCard from './NftCard'

function AllNfts() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div >
      
        
          <div className=" flex px-4 ">
            <h3 className="text-2xl flex md:text-3xl ml-8">
              Explore <span className="text-blue-500  mx-2 ">All NFTs</span>
            </h3>
            <KeyboardArrowDownIcon className="text-blue-500 mt-2 " />
          </div>

          <div className=" px-4 lg:hidden sticky top-2 justify-between" >
            <div className="flex items-center rounded-lg  border-2 border-gray-600 ">
              <div className="flex-1">
                <div className="relative ">
                  <input
                    type="text"
                  
                    name="searchInput"
                    className="form-input rounded-lg    border-none p-1  custom-placeholder"
                    placeholder="Search collection or NFT"
                   
                  />
                  <div className="absolute inset-y-0 left-0 pl-0  flex items-center pointer-events-none">
                    <SearchIcon className="text-gray-400 ml-48" />
                  </div>
                </div>
               
              </div>
              <div className="vertical-line h-14 py-0 mr-3 w-0.5 bg-slate-400 "></div>
              
              <div className="cursor-pointer" onClick={toggleModal}>
                <div className="flex items-center relative ">
                  <TuneIcon className="text-blue-500" />
                  <span className="ml-2 text-blue-500" >Filter</span>
                </div>
              </div>
              
            </div>
            {isModalOpen && <NftModal closeModal={closeModal} />}
          </div>
        
      

            <div className="filter-bar-container sticky top-2 hidden lg:block">
              <div className="filter-bar h-20 w-11/12 m-auto border-solid border-2 border-gray-600 mb-2 mt-5 flex justify-between rounded-xl items-center">
                <div className="flex">
                  <div className="flex items-center pl-3 pr-4">
                    <span className="font-bold pr-2 "><FilterAltOutlinedIcon /></span>
                    <span className="font-bold ">Collections</span>
                  </div>
                  <div className="flex items-center pr-4">
                    <span className="font-bold pr-2 "><BlurOnOutlinedIcon /></span>
                    <span className="font-bold ">All prices</span>
                  </div>
                  <div className="flex items-center pr-4">
                    <span className="font-bold pr-2">
                      <Icon
                        icon="tabler:caret-up-down"
                        color="white"
                      />
                    </span>
                    <span className="font-bold ">Price: Low to High</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold ">Sale Type</span>
                    <span className="font-bold  pl-2"><KeyboardArrowDownIcon /></span>
                  </div>
                </div>

                <div className="flex">
                  <div className="search-area flex">
                    <div className="search-area-bar flex items-center border-b border-slate-400 max-w-max p-1 w-60">
                      <input
                        className="coll-search-bar  bg-transparent p-1 w-11/12 rounded-lg "
                        type="text"
                        placeholder="Search collection or NFT"
                        name="searchInput"
                      />
                      <SearchIcon className="coll-search-icon text-slate-400 " />
                    </div>
                   
                    <div className="lg:ml-3 mt-3 sm:ml-0">
                    <div className="vertical-line absolute h-20 py-0 mx-0 top-0  w-0.5  bg-slate-400 "></div>
                      <span className="verified flex justify-center text-center items-center  font-bold m-1">
                        Verified Only
                        <Icon icon="fluent:checkmark-starburst-16-filled" color="#75a8f9" width="16" height="16" />
                        <span className="drop ml-1">
                          <Icon icon="mingcute:down-line" color="#ccd1de" width="15" height="15" hFlip={true} />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      <div className="render-cards">
        <NftCard />
      </div>
    </div>
  );
}

export default AllNfts;


