import React, { useState } from "react";
import "./carousel.css";
import Details from "./NFTDetails";

import Button from "../Button";

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
            {Details[index].cardInfo}
        </div>
        <Button task={'View Collection'} />
      </div>
      <div className="image-container">
        <img src={Details[index].cardImage} alt={`Image ${index}`} />
      </div>
    </div>
  ));

  console.log(Details[0]);

  return (
    <div className="carousel-container">
      <div className="carousel-slideshow">{carouselCards}</div>
      <div className="carousel-controls">
        <span className="carousel-control-prev" onClick={handlePrevCard}>
          &lt;
        </span>
        <span className="carousel-control-next" onClick={handleNextCard}>
          &gt;
        </span>
      </div>
    </div>
  );
};

export default Cards;
/* import React from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.png";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import "./carousel.css";

const Cards = () => {
  const images = [image1, image2, image3, image4, image5];
  const card = images.map((image) => {
    return (
      <div className="carousel-card-container">
        <div className="details-container">
          <h3>TRENDING</h3>
          <div className="nft-details">
            Enter the dazzling world of APPRENTICES: an anime PFP collection
            that's not just about avatars—it's an epic narrative-driven
            universe. Uniting cool aesthetics with community passion, it's where
            your chosen character becomes a hero in a captivating saga. Dive
            into this thrilling adventure where creativity and beauty collide.
            Join now and let your anime avatar's story shine!
          </div>
        </div>
        <div className="image-container">
          <img src={image} />
        </div>
      </div>
    );
  });
  const carouselCards = card.map((card) => {
    return <div className="carousel-slideshow">{card}</div>;
  });
  return carouselCards;
};

export default Cards;
 */