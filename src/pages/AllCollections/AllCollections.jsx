import { useState } from "react";
import Cards from "./Cards";
import FilterBar from "./FilterBar";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';


import CollectionModal from "./Modal";

const AllCollections = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className=" min-h-screen mt-[-40px]">
      
        <>
          <div className="flex justify-between p-4 ">
            <h3 className=" text-3xl collections-title mt-[20px]">Explore <span className="text-blue-400">All Collections
            <KeyboardArrowDown className="text-blue-400" />
            </span></h3>
           
          </div>

          <div className="flex justify-between items-center  mx-6 sticky top-2 md:hidden">
            <div className="flex items-center justify-between rounded-lg  border-2 border-gray-600 w-full " >
              <div className="relative">
                <input
                  className="bg-transparent border-b border-gray-600   w-40 pl-1 rounded-md"
                  type="text"
                  placeholder="Search collections"
                  name="searchInput"
                />
                <SearchIcon className="text-gray-600 absolute left-36 top-1/2 transform -translate-y-1/2" />
              </div>

             

              <div className="flex text-blue-400 px-4  cursor-pointer" onClick={toggleModal}>
              <div className="vertical-line relative h-10  w-0.5  bg-slate-400 "></div>
                <span><TuneIcon className="text-2xl pr-1 my-2" /></span>
                <span className="my-2">Filter</span>
              </div>
              {isModalOpen && <CollectionModal closeModal={closeModal} />}
            </div>
          </div>
          <div className='sticky hidden top-2 md:block' >
          <FilterBar />
          </div>
        
          <Cards />
        </>
     
        
        
      
    </div>
  );
};

export default AllCollections;
