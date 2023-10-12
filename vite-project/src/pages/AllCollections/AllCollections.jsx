import {React, useState} from "react";
import Cards from "./Cards";
import FilterBar from "./FilterBar";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { useMediaQuery } from 'react-responsive'
import { Icon } from "@iconify/react";
import "./styles.css";
import '../AllNFTS/NFTCard.css'
import CollectionModal from "./collectionModal";

const AllCollections = () => {
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
            
            <h3 className='title'>Explore    <span>All Collections</span></h3> <KeyboardArrowDown className='arrow-down'/>
          </div>
          <div className='filter-bar-container'>
          <div className='filter-bar'>
          <div className="search-area">
          <div className="search-area-bar">
            <input
              className="coll-search-bar"
              type="text"
              placeholder="Search collections"
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
      {isModalOpen && <CollectionModal closeModal={closeModal}/>}
          </div >
          </div>
          <Cards  className="main-content"/>
      </>
    ):(
       <div className="all-collections">
       <div className="explore">
         <h1>Explore</h1>
         <span className="coll-drop">
           All Collections
           <Icon
             icon="ep:arrow-down-bold"
             color="#75a8f9"
             width="34"
             height="34"
           />
         </span>
       </div>
       <div className="main-content">
         <FilterBar />
 
         <Cards />
       </div>
     </div>
    )}
   </div>
  );
};

export default AllCollections;
