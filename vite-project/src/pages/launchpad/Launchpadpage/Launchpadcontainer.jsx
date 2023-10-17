// IMPORTING NECESSARY FILES
  // IMPORTING NECESSARY HOOKS
import WalletSidePanelContextHook from '../../../hooks/WalletSidePanelContextHook'
  // IMPORT NECESSARY MODULES
import { useSearchParams } from 'react-router-dom'
import {formatDistance} from 'date-fns'
  // IMPORTING NECESSARY DATABASE
import { launchpadCollectionsData } from '../../../database/launchpadCollectionsData'

// IMPORTING CSS FILE
import './launchpad.css'

// A FUNCTION THAT RETURNS AN EXPORTED LAUNCHPAD COMPONENT
export default function Launchpadcontainer(){
  // GETTING GLOBAL CONTEXTS FROM HOOKS
  const {dispatch} = WalletSidePanelContextHook()
  // GETTING THE QUERY PARAMETERS FROM THE USESEARCHPARAMS FUNCTION
  const [searchParams] = useSearchParams()
  // GETTING THE DISTANCE BETWEEN THE DATE OF PRODUCTION AND NOW
  const dateDistance = formatDistance(new Date(2023, 9, 15, 12, 0, 0), new Date())

  // A FUNCTION TO VALIDATE THE QUERY ID VALUE AND ITS RESPECTIVE DATA
  function validateQueryParams(){
    // GETTING POSSIBLE QUERIES AND A REGEX EXPRESSIONS
    const carouselCollectionID = searchParams.get('carouselCollectionID')
    const pastCollectionID = searchParams.get('pastCollectionID')
    const liveCollectionID = searchParams.get('liveCollectionID')
    const regex = /[0-9]/g

    // IF WE HAVE A CAROUSELCOLLECTION QUERY ONLY,VALIDATE IT AND RETURN RESPECTIVE DATA
    if(carouselCollectionID && !pastCollectionID && !liveCollectionID){
      if(!regex.test(carouselCollectionID)){
        throw new Error("Invalid value for query parameter")
      }

      const {carouselCollections} = launchpadCollectionsData
      const relativeData = carouselCollections.find(dataEntry => dataEntry._id === parseInt(carouselCollectionID))
      return relativeData
    // IF WE HAVE A PASTCOLLECTION QUERY ONLY,VALIDATE IT AND RETURN RESPECTIVE DATA
    }else if(!carouselCollectionID && pastCollectionID && !liveCollectionID){
      if(!regex.test(pastCollectionID)){
        throw new Error("Invalid value for query parameter")
      }

      return launchpadCollectionsData.pastCollections
    // IF WE HAVE A LIVECOLLECTION QUERY ONLY,VALIDATE IT AND RETURN RESPECTIVE DATA
    }else if(!carouselCollectionID && !pastCollectionID && liveCollectionID){
      if(!regex.test(liveCollectionID)){
        throw new Error("Invalid value for query parameter")
      }

      return launchpadCollectionsData.liveCollections
    // IF NO QUERY IS PASSED, THROW AN ERROR
    }else{
      throw new Error("Invalid query parameter")
    }
  }

  // OBTAINING THE CORRECT DATA ENTRY AFTER VALIDATION
  const correctData = validateQueryParams()

  return (
    <div>
      <div className="small_screen_launchpad-container_entry">
        <div className="container">
          {/* TITLE OF THE COLLECTION */}
          <h1>{correctData.cardTitle}</h1>

          {/* WHERE SELLING STATS ARE */}
          <div className="container__selling_stats">
            <div className='container__selling_stats--chosen_chain'></div>
            <div className='container__selling_stats--total_sold'>Total items: {correctData.volume || 6969}</div>
            <div className='container__selling_stats--timing'>{dateDistance}</div>
          </div>

          {/* WHERE THE IMAGES ARE */}
          <div className="container__image-container">
            <img 
              src={`${correctData.cardImage}`} 
              alt="card-image"
              loading='lazy'
              width={100}
              height={100}
              title='card-image' 
            />

            <div className="container__image-container--bottom_images">
              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image' 
              />

              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image' 
              />

              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image' 
              />

              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image' 
              />
            </div>
          </div>

          {/* WHERE THE CONTENT IS */}
          <div className="container__content-container">
            <p>{correctData.cardInfo}</p>

            <div className="container__content-container--paying_stats">
              <h2>Price</h2>

              <figure className="content-container--paying-stats--image">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#e42575">
                  <path d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  
                  <path d="M7 7.5H7.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>

                <figcaption>
                  <span>--</span>
                  <b>◎</b>
                </figcaption>
              </figure>

              <button onClick={() => dispatch({ type: "SHOW_WALLET_PANEL" })}>Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>

      <div className="extra_large_screen_launchpad-container_entry">
        <div className="container">
          {/* LEFT SIDE OF CONTAINER */}
          <div className="container__left-container">
            {/* TITLE OF THE COLLECTION */}
            <h1>{correctData.cardTitle}</h1>
           
            {/* WHERE 2 OF THE SELLING STATS ARE */}
            <div className="container__selling_stats">
              <div className='container__selling_stats--chosen_chain'></div>
              <div className='container__selling_stats--total_sold'>Total items: {correctData.volume || 6969}</div>
            </div>

            {/* WHERE THE IMAGES ARE */}
            <div className="container__image-container">
              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image' 
              />

              <div className="container__image-container--bottom_images">
                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image' 
                />

                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image' 
                />

                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image' 
                />

                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image' 
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE OF CONTAINER */}
          <div className="container__right-container">
            {/* THE REMAINING SELLING STAT */}
            <div className='container__selling_stats--timing'>{dateDistance}</div>

            {/* WHERE THE CONTENT IS */}
            <div className="container__content-container">
              <p>{correctData.cardInfo}</p>

              <div className="container__content-container--paying_stats">
                <h2>Price</h2>

                <figure className="content-container--paying-stats--image">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#e42575">
                    <path d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    
                    <path d="M7 7.5H7.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>

                  <figcaption>
                    <span>--</span>
                    <b>◎</b>
                  </figcaption>
                </figure>

                <button onClick={() => dispatch({ type: "SHOW_WALLET_PANEL" })}>Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}