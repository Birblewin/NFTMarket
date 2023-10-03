import VerifiedIcon from '@mui/icons-material/Verified'
import './NftCard.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Details from '../AllCollections/collections';

function NftCard() {
    const cards = Details.map((collection) =>(
        <div key={collection._id}>
      
        <div   className='card'>
          <img src={collection.cardImage}/>
        
            <div className='texts'>
                <p>{collection.cardTitle}</p>
                <VerifiedIcon className='verified-icon'/>
            </div>
            <span className='name'>{collection.name}</span>
            <div className='details'>
          <span className='price'>{collection.price}</span>
          <span className='banner'>For Sale</span>
          
        </div>
        <hr className='line'/>
        <div className='action'>
        <span><FavoriteBorderOutlinedIcon/> </span>
        <span>0</span>
        </div>
        
        </div>
       
      
      </div>
    ))
  
  return <div className='cards'>{cards}</div>;
}

export default NftCard