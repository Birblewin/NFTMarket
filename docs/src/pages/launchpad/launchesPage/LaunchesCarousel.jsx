// IMPORING NECESSARY MODULES AND COMPONENTS AND DATA
import React from "react"
import {launchpadCollectionsData} from '../../../database/launchpadCollectionsData'
import CarouselEntry from "./CarouselEntry"

// EXPORTING THE LAUNCHESCAROUSEL FUNCTIONS
export default function LaunchesCarousel(){
    // A STATE TO HOLD THE CURRENT INDEX OF CARD DISPLAYED
    const [currentCard, setCurrentCard] = React.useState(0)

    // OBTAINING THE DATA CONCERNING THE CAROUSEL
    const {carouselCollections} = launchpadCollectionsData

    // A FUNCTION TO MOVE TO THE NEXT CARD
    function checkNextCard(){
        setCurrentCard(prevCard => prevCard < carouselCollections.length - 1 ? prevCard + 1 : 0)
    }

    // A FUNCTION TO MOVE TO THE PREVIOUS CARD
    function checkPreviousCard(){
        setCurrentCard(prevCard => prevCard > 0 ? prevCard - 1 : carouselCollections.length - 1)
    }

    // AN ARRAY OF CAROUSELENTRIES
    const generatedEntriesArray = carouselCollections.map(
        detail => (<CarouselEntry 
            key={detail._id}
            image={detail.cardImage}
            heading={detail.cardTitle}
            description={detail.cardInfo}
            id={detail._id}
        />)
    )

    return(
        <div>
            <div className="small-screen-container-entry block sm:hidden">
                <div className="w-full flex items-center justify-around gap-[20px] my-0 mx-auto flex-col sm:flex-row">
                    <div className="carousel-container__current-slide">{generatedEntriesArray[currentCard]}</div>

                    <div className="w-full flex justify-around items-center mt-[20px]">
                        <button 
                            className="carousel-container__button border-none w-[49px] h-[10px] bg-transparent text-[gray] text-[50px] transition-all duration-500 ease-in-out mt-[20px] hover:scale-[1.114] hover:text-white hover:bg-carousel-container__button++hover sm:h-[104px] sm:my-0 sm:mx-[20px]"
                            onClick={() => checkPreviousCard()}
                        >&lt;</button>

                        <button 
                            className="carousel-container__button border-none w-[49px] h-[10px] bg-transparent text-[gray] text-[50px] transition-all duration-500 ease-in-out mt-[20px] hover:scale-[1.114] hover:text-white hover:bg-carousel-container__button++hover sm:h-[104px] sm:my-0 sm:mx-[20px]"
                            onClick={() => checkNextCard()}
                        >&gt;</button>
                    </div>
                </div>
            </div>

            <div className="medium-screen-container-entry hidden sm:block">
                <div className="carousel-container w-full flex items-center justify-around gap-[20px] my-0 mx-auto flex-col sm:flex-row">
                    <button 
                        className="carousel-container__button border-none w-[49px] h-[10px] bg-transparent text-[gray] text-[50px] transition-all duration-500 ease-in-out mt-[20px] hover:scale-[1.114] hover:text-white hover:bg-carousel-container__button++hover sm:h-[104px] sm:my-0 sm:mx-[20px]"
                        onClick={() => checkPreviousCard()}
                    >&lt;</button>

                    <div className="carousel-container__current-slide">{generatedEntriesArray[currentCard]}</div>

                    <button 
                        className="carousel-container__button border-none w-[49px] h-[10px] bg-transparent text-[gray] text-[50px] transition-all duration-500 ease-in-out mt-[20px] hover:scale-[1.114] hover:text-white hover:bg-carousel-container__button++hover sm:h-[104px] sm:my-0 sm:mx-[20px]"
                        onClick={() => checkNextCard()}
                    >&gt;</button>
                </div>
            </div>
        </div>
    )
}