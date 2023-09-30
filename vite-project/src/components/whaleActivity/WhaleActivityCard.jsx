import Details from '../carousel/NFTDetails';
import './styles.css';

const WhaleActivityCard = () => {
  const carouselCards = Details.map((nft, index) => (
    <div
      className={`whale-carousel-card-container`}
      key={index}
    >
      <div className="whale-image-container">
        <img src={nft.cardImage} alt={`Image ${index}`} />
      </div>

      <div className="whale-details-container">
        <div className='purchase'>
        <p className='whale-purchase'>Purchase</p>
        
        </div>
          <p className='whale-title'>{Details[index].cardTitle}</p>
          <p className='whale-price'>{Details[index].price}</p>
          <p className='whale-released'>{Details[index].released}</p>
        </div>
    </div>
  ));

  return (
    <div className="whale-carousel-container">
      <div className="whale-carousel-slideshow">{carouselCards}</div>
    </div>
  );
};

export default WhaleActivityCard;