/* eslint-disable react/prop-types */
// IMPORT NECESSARY MODULES
import {NavLink} from "react-router-dom"

// IMPORT CSS FILE
import './PastCollection.css'

// EXPORTING A PASTCOLLECTION FUNCTION
export default function PastCollection(props){
    return(
        <NavLink 
            className="past_collection_container" 
            to={`/launchpad/launch details/?pastCollectionID=${props.id}`}
        >
            <figure className="past_collection_container__image">
                <img 
                    src={`${props.image}`} 
                    alt="past-collection-photo"
                    title="past-collection-photo"
                    loading="lazy"
                    width={100}
                    height={100}
                />

                <figcaption>{props.title}</figcaption>
            </figure>

            <div className="past_collection_container__data">
                <p className="past_collection_container__data--banner">{props.banner}</p>
                <p className="past_collection_container__data--price">{props.price}</p>
            </div>
        </NavLink>
    )
}