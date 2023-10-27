import { useState } from "react";
import "./carousel.css";
import Details from "./NFTDetails";

const Cards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === Details.length - 1 ? 0 : prevCard + 1
    );
  };

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? Details.length - 1 : prevCard - 1
    );
  };

  const carouselCards = Details.map((image, index) => (
    <div
      key={index}
      className={`carousel-card-container ${
        index === currentCard ? "active carousel flex items-center w-full h-fit duration-700 easee-in-out translate-x-0 delay-500" : "hidden carousel"
      }`}
    >
      <div className="details-container p-5 w-3/5 h-full flex-1 relative">
        <h3 className="trending mb-5 text-sm font-bold tracking-wider underline">
          TRENDING
        </h3>

        <div
          className="nft-details max-w-full
        mb-12
        "
        >
          <div
            className="title mb-5 relative
        tracking-widest
        font-bold
        w-auto
        text-3xl
        text-left
        left-2
        md:text-5xl
        "
          >
            {Details[index].cardTitle}
          </div>
          <div>{Details[index].cardInfo}</div>
          <div>
            <button className="learn-more-button text-sm font-semi-bold mt-4 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="image-container flex-1 p-2.5 relative">
        <img className="max-w-sm h-auto m-5" src={Details[index].cardImage} alt={`Image ${index}`} />
      </div>
    </div>
  ));

  return (
    <div
      className="carousel-container relative
     w-11/12
     h-max
    "
    >
      <div className="relative flex text-left overflow-hidden duration-500 ease-in-out">
        {carouselCards}
      </div>

      <div
        className=" flex justify-between items-center
      absolute top-1/2 left-0 right-0
      translate-y-1/2
      "
      >
        <span
          className="carousel-control-prev absolute text-5xl cursor-pointer"
          onClick={handlePrevCard}
        >
          &lt;
        </span>

        <span
          className="carousel-control-next absolute text-5xl cursor-pointer"
          onClick={handleNextCard}
        >
          &gt;
        </span>
      </div>
    </div>
  );
};

export default Cards;
