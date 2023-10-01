// IMPORING NECESSARY MODULES AND COMPONENTS AND DATA
import React from "react"
import Details from "../../../components/carousel/NFTDetails"
import CarouselEntry from "./CarouselEntry"

// IMPORTING CSS FILE
import './LaunchesCarousel.css'

// EXPORTING THE LAUNCHESCAROUSEL FUNCTIONS
export default function LaunchesCarousel(){
    // A STATE TO HOLD THE CURRENT INDEX OF CARD DISPLAYED
    const [currentCard, setCurrentCard] = React.useState(0)

    // A FUNCTION TO MOVE TO THE NEXT CARD
    function checkNextCard(){
        setCurrentCard(prevCard => prevCard < Details.length - 1 ? prevCard + 1 : 0)
    }

    // A FUNCTION TO MOVE TO THE PREVIOUS CARD
    function checkPreviousCard(){
        setCurrentCard(prevCard => prevCard > 0 ? prevCard - 1 : Details.length - 1)
    }

    // AN ARRAY OF CAROUSELENTRIES
    const generatedEntriesArray = Details.map(
        detail => (<CarouselEntry 
            key={detail._id}
            image={detail.cardImage}
            heading={detail.cardTitle}
            description={detail.cardInfo}
        />)
    )

    return(
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
    )
}