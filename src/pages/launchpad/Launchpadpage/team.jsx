// IMPORT NECESSARY MODULES
import { Icon } from "@iconify/react"

// EXPORTING A LIVECOLLECTION FUNCTION
export default function Team(){
    return(
        <div className="w-[170px] h-[300px] rounded-[20px] border-solid border-[0.5px] border-[#968E8E] transition-all duration-500 ease-in-out my-0 mx-auto active:scale-[1.2] active:shadow-search-container__search-bar sm:w-[300px] sm:h-[450px] md:w-[230px] md:h-[320px] lg:w-[300px] lg:h-[450px]">
            <figure>
                <img 
                    src="/img/launchpad/live_photo.png" 
                    alt="live-collection-photo"
                    title="live-collection-photo"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="w-full h-[80%]"
                />

                <figcaption className="text-[#FFF] font-[Inter] text-[15px] not-italic font-[600] leading-[130%] text-center">Railey Freemans </figcaption>

                <Icon icon="ri:instagram-fill" width={30} height={35} style={{marginLeft:'43%'}}/>
            </figure>


        </div>
    )
}