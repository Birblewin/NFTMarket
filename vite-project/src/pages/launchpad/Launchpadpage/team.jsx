// IMPORT NECESSARY MODULES
import { NavLink } from "react-router-dom"

// IMPORT CSS FILE
import './team.css'

// EXPORTING A LIVECOLLECTION FUNCTION
export default function Team(){
    return(
        <NavLink className="Team-container">
            <figure className="live_collection_container__image">
                <img 
                    src="../../../../img/launchpad/live_photo.png" 
                    alt="live-collection-photo"
                    title="live-collection-photo"
                    loading="lazy"
                    width={100}
                    height={100}
                />

                <figcaption>Railey Freemans </figcaption>
            </figure>


        </NavLink>
    )
}