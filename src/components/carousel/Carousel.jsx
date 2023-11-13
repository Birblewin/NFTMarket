import Details from "./NFTDetails";
import { useState } from "react";
import HeaderCarousel from "./HeaderCarousel";

export default function Carousel(){
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
            index === currentCard ? "w-full p-[20px] h-[50vh] flex flex-col-reverse justify-around items-center gap-[40px] my-[50px] mx-0 sm:my-[100px] sm:mx-0 lg:flex-row lg:justify-around lg:items-center lg:w-[90%] lg:my-[50px] lg:mx-auto" : "hidden carousel"
        }`}
        >
            <div className="flex flex-col justify-center items-start gap-[10px]">
                <h3 className="text-[#ffdb24] mb-5 text-sm font-bold tracking-wider underline">
                TRENDING
                </h3>

                <div 
                className="mb-5 relative
                tracking-wide
                font-bold
                w-auto
                text-3xl
                text-left
                left-2
                md:text-5xl
                text-[Inter]

                "
                >
                    {image.cardTitle}
                </div>

                <div className=" font-[Inter] text-text-gray text-[20px] not-italic font-[400] leading-normal max-h-[6ch] overflow-y-scroll lg:max-h-[10ch] lg:overflow-y-hidden">{image.cardInfo}</div>
                
                <button className="h-[50px] w-[267px] p-[10px] rounded-[10px] bg-[#FFDB24] text-[#000] font-[Inter] text-[20px] not-italic font-[400] leading-normal cursor-pointer transition-all duration-500 ease-in-out hover:bg-description--buttons--link++hover hover:scale-[0.9] sm:w-full lg:w-[80%] mx-auto sm:mx-0">
                Learn More
                </button>
            </div>

            <img className="w-[85%] h-[90%] rounded-[10px] sm:w-full sm:h-[130%] lg:w-fit lg:h-full" src={image.cardImage} alt={`Image ${index}`} />
        </div>
    ));

    // AN ARRAY OF DOTSELECTORS
    function generatedDotSelectorsArray(){
        const dotSelectorsArray = []

        for(let i = 0; i < Details.length; i ++){
            dotSelectorsArray.push(
                <p 
                    className="font-bold text-6xl cursor-pointer  transition-all duration-500"
                    onClick={() => setCurrentCard(i)}
                    key={i}
                    
                    style={
                        i == currentCard 
                            ? 
                        { color:  "rgb(55 65 81)" } 
                            : 
                        null
                    }
                >.</p>
            )
        }

        return(
            <div className="w-[70%] flex justify-center items-center gap-[10px] mb-[30px] sm:mt-[20px]  mx-auto">
                {dotSelectorsArray}
            </div>
        )
    }

    return(
        <HeaderCarousel
            carouselItems = {carouselCards}
            currentCarouselItem = {currentCard}
            dotScrollerButtonsGrid = {generatedDotSelectorsArray()}
            checkPreviousItem = {() => handlePrevCard()}
            checkNextItem = {() => handleNextCard()}
        />
    )
}