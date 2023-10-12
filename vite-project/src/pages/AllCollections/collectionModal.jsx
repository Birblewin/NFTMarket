import {React, useState} from 'react'
import '../AllNFTS/NftModal.css'
import './CollectionModal.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CollectionModal({closeModal}) {
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
            <span className='collecti'>Sort</span>
            <span className='selected'>All Time Volume</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
        <div className='content'>
            <span className='collect'>Verification</span>
            <span className='selected'>Verified Only</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
        <div className='content'>
            <span className='collects'>Categories</span>
            <span className='selected'>All</span>
            <span><NavigateNextIcon className='next-icon'/></span>
        </div>
        </div>
        
        
       
    
  )
}

export default CollectionModal
