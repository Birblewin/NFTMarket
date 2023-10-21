/* eslint-disable react/prop-types */
// IMPORT NECESSARY MODULES
import {NavLink} from "react-router-dom"

// EXPORTING A PASTCOLLECTION FUNCTION
export default function PastCollection(props){
    return(
        <NavLink 
            className="past_collection_container w-[170px] h-[300px] rounded-[20px] border-[0.5px] border-solid border-[#968E8E] bg-[#1E1E1E] transition-all duration-500 ease-in-out my-0 mx-auto active:scale-[1.2] active:shadow-search-container__search-bar sm:w-[300px] sm:h-[450px] md:w-[230px] md:h-[320px] lg:w-[300px] lg:h-[450px]" 
            to={`/launchpad/launch details/?pastCollectionID=${props.id}`}
        >
            <figure>
                <img 
                    src={`${props.image}`} 
                    alt="past-collection-photo"
                    title="past-collection-photo"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="w-full h-[80%]"
                />

                <figcaption className="text-[#FFF] font-[Inter] text-[15px] not-italic font-[600] leading-[130%] text-center">{props.title}</figcaption>
            </figure>

            <div className="flex justify-around mt-[10px]">
                <p className="text-[#298F27] font-[Inter] text-[15px] not-italic font-[500] leading-[130%] text-center">{props.banner}</p>
                <p className="text-[#968E8E] font-[Inter] text-[14px] not-italic font-[500] leading-[130%]">{props.price}</p>
            </div>
        </NavLink>
    )
}