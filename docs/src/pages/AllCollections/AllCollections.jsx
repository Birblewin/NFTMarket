import React, { useState } from "react";
import Cards from "./Cards";
import FilterBar from "./FilterBar";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { useMediaQuery } from 'react-responsive';
import { Icon } from "@iconify/react";

import CollectionModal from "./CollectionModal";

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
          <div className="flex justify-between p-4 bg-gray-800">
            <h3 className="text-white text-3xl">Explore <span className="text-blue-400">All Collections</span></h3>
            <KeyboardArrowDown className="text-blue-400 text-3xl" />
          </div>
          <div className="flex justify-between items-center bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-400 text-white w-64 pl-8"
                  type="text"
                  placeholder="Search collections"
                  name="searchInput"
                />
                <SearchIcon className="text-blue-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="bg-blue-400 text-white px-4 py-2 cursor-pointer" onClick={toggleModal}>
                <span><TuneIcon className="text-2xl" /></span>
                <span>Filter</span>
              </div>
              {isModalOpen && <CollectionModal closeModal={closeModal} />}
            </div>
          </div>
          <Cards />
        </>
      ) : (
        <div className="bg-gray-800 p-4">
          <div className="text-3xl font-bold text-white mb-8">
            Explore <span className="text-blue-400">All Collections</span>
          </div>
          <div className="flex flex-col">
            <FilterBar />
            <Cards />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCollections;
