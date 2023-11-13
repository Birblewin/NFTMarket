/* eslint-disable react/prop-types */
import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function NftModal({ closeModal }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSpanClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="modal-contentt fixed top-0 right-0 w-full h-full  items-center bg-opacity-100 z-50 animate-modal">
      <span className="close-button absolute top-5 left-5 text-3xl cursor-pointer text-gray-200 hover:text-gray-600" onClick={closeModal}>
        &times;
      </span>
      <div className="header mb-24  ">
        <span className="filter text-xl font-bold absolute top-6   left-1/2">Filter</span>
        <span className="reset absolute top-7 right-8  text-blue-500 text-sm">Reset</span>
      </div>

      <div className="content flex items-center m-5 my-2 justify-between border-b border-slate-400 p-6   ">
        <span className="collections  text-lg font-bold  ">Collections</span>
        <div>
        <span className="selected  text-sm">
          Selected
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>
       
      <div className="content flex items-center m-5 my-2 justify-between border-b border-slate-400 p-6  ">
        <span className="collections  text-lg font-bold  ">Sort</span>
        <div>
        <span className="selected  text-sm">
          Recently Listed
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>

        <div className="content flex items-center m-2 my-2 justify-between border-b border-slate-400 p-6  ">
        <span className="collections  text-lg font-bold  ">Verification</span>
        <div>
        <span className="selected  text-sm">
          Verified Only
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>
      <div className='m-6 border-b border-slate-400 pb-6'>
        <span className="sale-type  text-lg">Sale Type</span>
        <div className="btns mt-5">
          <span
            className={`bannerr ${
              selectedOption === 0 ? 'selectedd bg-blue-500' : ''
            } bg-gray-800  px-4 py-2 rounded font-bold ml-4`}
            onClick={() => handleSpanClick(0)}
          >
            All NFTs
          </span>
          <span
            className={`bannerr ${
              selectedOption === 1 ? 'selectedd bg-blue-500' : ''
            } bg-gray-800  px-4 py-2 rounded font-bold ml-4`}
            onClick={() => handleSpanClick(1)}
          >
            For Sale
          </span>
          <span
            className={`bannerr ${
              selectedOption === 2 ? 'selectedd bg-blue-500' : ''
            } bg-gray-800  px-4 py-2 rounded font-bold ml-4`}
            onClick={() => handleSpanClick(2)}
          >
            Bundles
          </span>
        </div>
      </div>
      
      <div className="content flex items-center m-5 my-2 justify-between border-b border-slate-400 p-6   ">
        <span className="collections  text-lg font-bold  ">Price</span>
        <div>
        <span className="selected  text-sm">
          All Prices
        </span>
        <span><NavigateNextIcon className="next-icon text-gray-600 text-lg" /></span>
      </div>
        </div>
    </div>
  );
}

export default NftModal;
