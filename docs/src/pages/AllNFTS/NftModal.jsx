import {React, useState} from 'react'
import './NftModal.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function NftModal({closeModal}) {
    const [selectedOption, setSelectedOption] = useState(null);

  const handleSpanClick = (index) => {
    setSelectedOption(index);
  };
  return (

       <div className="modal-contentt">

        <div className='header'>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <span className='filter'>Filter</span>
        <span className='reset'>Reset</span>
        </div>

        <div className='content'>
            <span className='collections'>Collections</span>
            <span className='selected'>Selected</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
        <div className='content'>
            <span className='collections'>Sort</span>
            <span className='selected'>Recently Listed</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
        <div className='content'>
            <span className='collectionss'>Verification</span>
            <span className='selected'>Verified Only</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
     
        <div>
            <span className='sale-type'>Sale Type</span>
            <div className='btns'>
            <span className={`bannerr ${selectedOption === 0 ? 'selectedd' : ''}`} onClick={() => handleSpanClick(0)}>
            <span>All NFTs</span>
            </span>

            <span className={`bannerr ${selectedOption === 1 ? 'selectedd' : ''}`} onClick={() => handleSpanClick(1)}>
            <span>For Sale</span>
        </span>

        <span className={`bannerr ${selectedOption === 2 ? 'selectedd' : ''}`} onClick={() => handleSpanClick(2)}>
        <span>Bundles</span>
        </span>

            </div>
        </div>
        <hr className='linee'/>
        <div className='content'>
            <span className='collectionis'>Price</span>
            <span className='selected'>All Prices</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
        </div>
        
        
       
    
  )
}

export default NftModal
