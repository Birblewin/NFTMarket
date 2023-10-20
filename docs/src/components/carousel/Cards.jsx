import { useState } from "react";
import "./carousel.css";
import Details from "./NFTDetails";

const Cards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard === Details.length - 1 ? 0 : prevCard + 1));
  };

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? Details.length - 1 : prevCard - 1));
  };

  const carouselCards = Details.map((image, index) => (
    <div
      key={index}
      className={`carousel-card-container ${index === currentCard ? "active carousel" : "hidden carousel"}`}
    >
      <div className="details-container">
        <h3 className="trending">TRENDING</h3>
        <div className="title">{Details[index].cardTitle}</div>
        
        <div className="nft-details">
          <div>{Details[index].cardInfo}</div>
          <div><button className="learn-more-button">Learn More</button></div>
            
            
        </div>
      </div>
      
      <div className="image-container">
        <img src={Details[index].cardImage} alt={`Image ${index}`} />
      </div>
    </div>
  ));

  return (
    <div className="carousel-container">
      <div className="carousel-slideshow">{carouselCards}</div>
      
      <div className="carousel-controls">
        <span className="carousel-control-prev" onClick={ handlePrevCard }>
          &lt;
        </span>
        
        <span className="carousel-control-next" onClick={ handleNextCard }>
          &gt;
        </span>
      </div>

      
    </div>
  );
};

export default Cards