// IMPORING NECESSARY MODULES
import Details from "../../../components/carousel/NFTDetails"
import CarouselEntry from "./CarouselEntry"

// EXPORTING THE LAUNCHESCAROUSEL FUNCTIONS
export default function LaunchesCarousel(){
    // AN ARRAY OF CAROUSELENTRIES
    const generatedEntriesArray = Details.map(
        detail => (<CarouselEntry key={detail._id}/>)
    )

    return(
        <div>
            {generatedEntriesArray}
        </div>
    )
}