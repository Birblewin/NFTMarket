import NftCard from './NftCard'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import './NftCard.css'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Icon } from "@iconify/react";
import SearchIcon from "@mui/icons-material/Search";
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import { useMediaQuery } from 'react-responsive'
import TuneIcon from '@mui/icons-material/Tune';
import React, { useState } from 'react';
import NftModal from './NftModal';



function AllNfts() {
  const isMobile = useMediaQuery({ maxWidth: '768px' });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false)
  }


  return (
    <div>
        {isMobile ? (
            <>
             <div className='collection'>
            
            <h3 className='title'>Explore    <span>All NFTs</span></h3> <KeyboardArrowDown className='arrow-down'/>
          </div>
          <div className='filter-bar-container'>
          <div className='filter-bar'>
          <div className="search-area">
          <div className="search-area-bar">
            <input
              className="coll-search-bar"
              type="text"
              placeholder="Search collection or NFT"
              name="searchInput"
            />
            <SearchIcon className="coll-search-icon" />
            
          </div>
         
          <div className="vertical-line"></div>
         
        </div>
       <div className='tune-icon' onClick={toggleModal}>
        <span><TuneIcon /></span>
        <span>Filter</span>
      </div>
      {isModalOpen && <NftModal closeModal={closeModal}/>}
          </div>
          </div>
         
            </>
        ): (
          <>
          <div className='collection'>
            
            <h3 className='title'>Explore    <span>All NFTs</span></h3> <KeyboardArrowDown className='arrow-down'/>
          </div>
            
            <div className='filter-bar-container'>
              
          <div className='filter-bar'>
              <div className='flex'>
              <div className='items'>
                <span className='filter-icon'><FilterAltOutlinedIcon/></span>
                <span className='filter-text'>Collections</span>
              </div>

              <div className='items'>
                <span className='filter-icon'><BlurOnOutlinedIcon/></span>
                <span className='filter-text'>All prices</span>
              </div>

              <div className='items'>
                <span className='filter-icon'> <Icon
                  icon="tabler:caret-up-down"
                  color="white"
                /></span>
                <span className='filter-text'>Price:Low to High</span>
              </div>

              <div className='items'>
                <span className='filter-icon'>Sale Type</span>
                <span className='filter-text'><KeyboardArrowDown/></span>
              </div>
          
          </div>
       

       <div>
       <div className="search-area">
          <div className="search-area-bar">
            <input
              className="coll-search-bar"
              type="text"
              placeholder="Search collection or NFT"
              name="searchInput"
            />
            <SearchIcon className="coll-search-icon" />
            
          </div>
         
          <div className="vertical-line"></div>
          <div>
            <span className="verified">Verified Only
            <Icon icon="fluent:checkmark-starburst-16-filled" color="#75a8f9" width="16" height="16" /> <span className="drop"><Icon icon="mingcute:down-line" color="#ccd1de" width="15" height="15" hFlip={true} /></span></span>
            
          </div>
        </div>
       </div>

          </div>
            </div>
          </>
        )}
       
           
     <div className='render-cards'>
     < NftCard />
     </div>
    </div>
  )
}

export default AllNfts