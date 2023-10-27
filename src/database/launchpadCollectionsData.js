// IMPORTING NECESSARY FILES
import livePhoto from '/img/launchpad/live_photo.png'
import pastPhoto from '/img/launchpad/past_photo.png'


// CREATING A LAUNCHPADCOLLECTIONSDATA WHICH IS TO BE EXPORTED AS A VARIABLE
export const launchpadCollectionsData = {
    "carouselCollections": [
        {
            "_id": 1,
            "cardImage": '/img/image1-a0c2a8f3.png',
            "cardTitle": "Apprentices",
            "price": "₳ 560",
            "volume": "5m",
            "released": "23m ago",
            "cardInfo": "Enter the dazzling world of APPRENTICES: an anime PFP collection that's not just about avatars—it's an epic narrative-driven universe. Uniting cool aesthetics with community passion, it's where your chosen character becomes a hero in a captivating saga. "
        },

        {
            "_id": 2,
            "cardImage": '/img/image2-ec2cf9c8.jpeg',
            "cardTitle": "EarthNodes",
            "price": "1650",
            "volume": "15m",
            "released": "3m ago",
            "cardInfo": "EarthNodes are the brain powering the Sharing Economy of World Mobile, the first mobile network owned by the people and built on blockchain. Connecting the unconnected narrative-driven universe. "
        },

        {
            "_id": 3,
            "cardImage": '/img/image3-e1462d4e.png',
            "cardTitle": "The Ape Society",
            "released": "30m ago",
            "price": "₳ 440",
            "volume": "₳ 17m",
            "cardInfo": "The Ape Society is a collection of 7,000 NFTs generated on the Cardano blockchain. Every holder is a member of one of 35 families, and gets access to the DAO. "
        },
        
        {
            "_id": 4,
            "cardImage": '/img/image4-fd191eda.jpeg',
            "cardTitle": "Apprentices",
            "released": "9m ago",
            "price": "₳ 360",
            "volume": "₳ 30m",
            "cardInfo": "Enter the dazzling world of APPRENTICES: an anime PFP collection that's not just about avatars—it's an epic narrative-driven universe.  "
        },
        
        {
            "_id": 5,
            "cardImage": '/img/image5-cb18f9be.jpeg',
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
        "price": "₳ 7.5k",
        "cardInfo": "D3fenders offers a new groundbreaking security protocol for your digital collectibles, making them safeguarded with lock / unlock functionality that you are in complete control of. It establishes an impenetrable shield against theft, offering owners unparalleled peace of mind. This tech acts as a self-governed fortress that will make theft and wallet drains across the space a thing of the past." 
    },

    "pastCollections": {
        "cardImage": pastPhoto,
        "cardTitle": "Vuitton Eddition",
        "cardBanner": "Sold Out",
        "price": "₳ 7.5k",
        "cardInfo": "D3fenders offers a new groundbreaking security protocol for your digital collectibles, making them safeguarded with lock / unlock functionality that you are in complete control of. It establishes an impenetrable shield against theft, offering owners unparalleled peace of mind. This tech acts as a self-governed fortress that will make theft and wallet drains across the space a thing of the past."
    }
}
