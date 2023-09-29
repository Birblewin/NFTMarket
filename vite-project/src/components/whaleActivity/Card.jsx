import React, { useState } from 'react';
import Details from '../carousel/NFTDetails';
import './styles.css';

const Card = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleClickNext = () => {
    setCurrentCard((prevCard) =>
      prevCard === Details.length - 1 ? 0 : prevCard + 1
    );
  };

  const handleClickPrev = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? Details.length - 1 : prevCard - 1
    );
  };

  const carouselCards = Details.map((nft, index) => (
    <div
      className={`whale-carousel-card-container ${index === currentCard ? 'active' : ''}`}
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
      <div className="whale-carousel-controls">
        <button className="whale-carousel-control" onClick={handleClickPrev}>
          &lt;
        </button>
        <button className="whale-carousel-control" onClick={handleClickNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Card;