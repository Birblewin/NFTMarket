import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CollectionModal({ closeModal }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSpanClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="modal-contentt fixed top-0 right-0 w-full h-full bg-black items-center bg-opacity-100 z-50 animate-modal">
      <span className="close-button absolute top-5 left-5 text-3xl cursor-pointer text-gray-200 hover:text-gray-600" onClick={closeModal}>
        &times;
      </span>
      <div className="header mb-24  ">
        <span className="filter text-xl font-bold absolute top-6  text-white left-1/2">Filter</span>
        <span className="reset absolute top-7 right-8  text-blue-500 text-sm">Reset</span>
      </div>

      <div className="content flex items-center m-5 my-2 justify-between border-b border-slate-400 p-6   ">
        <span className="collections  text-lg font-bold text-white ">Sort</span>
        <div>
        <span className="selected text-white text-sm">
          All Time Volume
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>
       
      <div className="content flex items-center m-5 my-2 justify-between border-b border-slate-400 p-6  ">
        <span className="collections  text-lg font-bold text-white ">Verification</span>
        <div>
        <span className="selected text-white text-sm">
        Verified Only
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>

        <div className="content flex items-center m-2 my-2 justify-between border-b border-slate-400 p-6  ">
        <span className="collections  text-lg font-bold text-white ">Categories</span>
        <div>
        <span className="selected text-white text-sm">
          All
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>
    
    </div>
  );
}

export default CollectionModal;