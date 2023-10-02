import './collectionCard.css';
import VerifiedIcon from '@mui/icons-material/Verified';

function Card() {
  return (
    <>
      <div className='card'>
        <img src='../img/imgg1.jpeg'/>
      
          <div className='texts'>
              <p>BlackBones</p>
              <VerifiedIcon className='verified-icon'/>
          </div>
      </div>
    </>
   
  )
}

export default Card
