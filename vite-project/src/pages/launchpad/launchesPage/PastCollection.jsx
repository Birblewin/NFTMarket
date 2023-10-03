// IMPORT NECESSARY MODULES
import { NavLink } from "react-router-dom"

// IMPORT CSS FILE
import './PastCollection.css'

// EXPORTING A PASTCOLLECTION FUNCTION
export default function PastCollection(){
    return(
        <NavLink className="past_collection_container" to='/launchpad/launch details'>
            <figure className="past_collection_container__image">
                <img 
                    src="../../../../img/launchpad/past_photo.png" 
                    alt="past-collection-photo"
                    title="past-collection-photo"
                    loading="lazy"
                    width={100}
                    height={100}
                />

                <figcaption>Vuitton Eddition</figcaption>
            </figure>

            <div className="past_collection_container__data">
                <p className="past_collection_container__data--banner">Sold Out</p>
                <p className="past_collection_container__data--price">₳ 7.5k</p>
            </div>
        </NavLink>
    )
}