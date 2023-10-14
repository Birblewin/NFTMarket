// IMPORING NECESSARY MODULES AND COMPONENTS AND DATA
import React from "react"
import {launchpadCollectionsData} from '../../../database/launchpadCollectionsData'
import CarouselEntry from "./CarouselEntry"

// IMPORTING CSS FILE
import './LaunchesCarousel.css'

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
        />)
    )

    return(
        <div>
            <div className="small-screen-container-entry">
                <div className="carousel-container">
                    <div className="carousel-container__current-slide">{generatedEntriesArray[currentCard]}</div>

                    <div className="carousel-container__button-holder">
                        <button 
                            className="carousel-container__button"
                            onClick={() => checkPreviousCard()}
                        >&lt;</button>

                        <button 
                            className="carousel-container__button"
                            onClick={() => checkNextCard()}
                        >&gt;</button>
                    </div>
                </div>
            </div>

            <div className="medium-screen-container-entry">
                <div className="carousel-container">
                    <button 
                        className="carousel-container__button"
                        onClick={() => checkPreviousCard()}
                    >&lt;</button>

                    <div className="carousel-container__current-slide">{generatedEntriesArray[currentCard]}</div>

                    <button 
                        className="carousel-container__button"
                        onClick={() => checkNextCard()}
                    >&gt;</button>
                </div>
            </div>
        </div>
    )
}