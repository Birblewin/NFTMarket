// IMPORTING NECESSARY COMPONENTS AND MODULES
import React from "react"

import LaunchesCarousel from "./LaunchesCarousel"
import LiveCollection from "./LiveCollection"
import PastCollection from "./PastCollection"

// IMPORTING CSS FILE
import './LaunchesPage.css'

// A LAUNCHESPAGE FUNCTION THAT IS EXPORTED
export default function LaunchesPage(){
    // A BOOLEAN TO KEEP TRACK OF WHETHER OR NOT TO VIEW THE PAST COLLECTIONS
    const [viewPastCollections, setViewPastCollections] = React.useState(false)

    // A FUNCTION TO GENERATE AN ARRAY OF LIVE COLLECTIONS
    function liveCollectionsGenerator() {
        const liveCollectionsArray = []

        for(let i = 0; i < 20; i++){
            liveCollectionsArray.push(<LiveCollection/>)
        }

        return liveCollectionsArray
    }

    // A FUNCTION TO GENERATE AN ARRAY OF PAST COLLECTIONS
    function pastCollectionsGenerator() {
        const pastCollectionsArray = []

        for(let i = 0; i < 20; i++){
            pastCollectionsArray.push(<PastCollection/>)
        }

        return pastCollectionsArray
    }

    return(
        <div className="launches_page_container">
            <LaunchesCarousel/>

            <div className="launches_page_container__viewPastCollectionsToggle">
                <p 
                    onClick={() => setViewPastCollections(false)}
                    
                    style={
                        viewPastCollections 
                            ? 
                        null 
                            : 
                        {
                            "backgroundColor": "#EE9E26",
                            "border": "2px solid black",
                            "borderRadius": "20px",
                            "padding": "10px"
                        }
                    }
                >Live and upcoming</p>

                <p 
                    onClick={() => setViewPastCollections(true)}
                    
                    style={
                        viewPastCollections 
                            ? 
                        {
                            "backgroundColor": "#EE9E26",
                            "border": "2px solid black",
                            "borderRadius": "20px",
                            "padding": "10px"
                        } 
                            : 
                        null
                    }
                >Past</p>
            </div>

            <div className="launches_page_container__collectionsHolder">
                {viewPastCollections ? pastCollectionsGenerator() : liveCollectionsGenerator()}
            </div>
        </div>
    )
}