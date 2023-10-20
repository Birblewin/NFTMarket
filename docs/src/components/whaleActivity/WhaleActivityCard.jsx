import Details from "../carousel/NFTDetails";
import "./styles.css";

const WhaleActivityCard = () => {


  const carouselCards = Details.map((nft, index) => (
    <div className={`whale-carousel-card-container`} key={index}>
      <div className="whale-image-container">
        <img src={nft.cardImage} alt={`Image ${index}`} />
      </div>

      <div className="whale-details-container">
        <div className="purchase">
        <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/shopping-cart--v1.png" alt="shopping-cart--v1"/>
          <p className="whale-purchase">Purchase</p>
        </div>
        <p className="whale-title">{Details[index].cardTitle}</p>
        <p className="whale-price">{Details[index].price}</p>
        <p className="whale-released">{Details[index].released}</p>
      </div>
    </div>
  ));

  return (
    <div className="whale-carousel-container">
      <div className="whale-carousel-slideshow">{carouselCards}</div>
      <div className="carousel-controls">
        <span className="carousel-control-prev left">&lt;</span>

        <span className="carousel-control-next right">&gt;</span>
      </div>
    </div>
  );
};

export default WhaleActivityCard;
