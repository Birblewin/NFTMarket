// IMPORTING NECESSARY FILES
import image1 from '../components/carousel/images/image1.png'
import image2 from '../components/carousel/images/image2.jpeg'
import image3 from '../components/carousel/images/image3.png'
import image4 from '../components/carousel/images/image4.jpeg'
import image5 from '../components/carousel/images/image5.jpeg'

import livePhoto from '../../public/img/launchpad/live_photo.png'
import pastPhoto from '../../public/img/launchpad/past_photo.png'


// CREATING A LAUNCHPADCOLLECTIONSDATA WHICH IS TO BE EXPORTED AS A VARIABLE
export const launchpadCollectionsData = {
    "carouselCollections": [
        {
            "_id": 1,
            "cardImage": image1,
            "cardTitle": "Apprentices",
            "price": "₳ 560",
            "volume": "5m",
            "released": "23m ago",
            "cardInfo": "Enter the dazzling world of APPRENTICES: an anime PFP collection that's not just about avatars—it's an epic narrative-driven universe. Uniting cool aesthetics with community passion, it's where your chosen character becomes a hero in a captivating saga. "
        },

        {
            "_id": 2,
            "cardImage": image2,
            "cardTitle": "EarthNodes",
            "price": "1650",
            "volume": "15m",
            "released": "3m ago",
            "cardInfo": "EarthNodes are the brain powering the Sharing Economy of World Mobile, the first mobile network owned by the people and built on blockchain. Connecting the unconnected narrative-driven universe. "
        },

        {
            "_id": 3,
            "cardImage": image3,
            "cardTitle": "The Ape Society",
            "released": "30m ago",
            "price": "₳ 440",
            "volume": "₳ 17m",
            "cardInfo": "The Ape Society is a collection of 7,000 NFTs generated on the Cardano blockchain. Every holder is a member of one of 35 families, and gets access to the DAO. "
        },
        
        {
            "_id": 4,
            "cardImage": image4,
            "cardTitle": "Apprentices",
            "released": "9m ago",
            "price": "₳ 360",
            "volume": "₳ 30m",
            "cardInfo": "Enter the dazzling world of APPRENTICES: an anime PFP collection that's not just about avatars—it's an epic narrative-driven universe.  "
        },
        
        {
            "_id": 5,
            "cardImage": image5,
            "cardTitle": "EarthNodes",
            "price": "₳ 780",
            "volume": "₳ 18m",
            "released": "13m ago",
            "cardInfo": "EarthNodes are the brain powering the Sharing Economy of World Mobile, the first mobile network owned by the people and built on blockchain. Connecting the unconnected narrative-driven universe. "
        }
    ],

    "liveCollections": {
        "cardImage": livePhoto,
        "cardTitle": "Railey Freemans Editon",
        "cardBanner": "LIVE",
        "price": "₳ 7.5k" 
    },

    "pastCollections": {
        "cardImage": pastPhoto,
        "cardTitle": "Vuitton Eddition",
        "cardBanner": "Sold Out",
        "price": "₳ 7.5k" 
    }
}
