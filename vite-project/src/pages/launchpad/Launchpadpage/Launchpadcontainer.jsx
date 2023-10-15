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
  const dateDistance = formatDistance(new Date(2023, 9, 15, 12, 0, 0), new Date(), {addSuffix: true})

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
            <div className='container__selling_stats--chosen_chain'>
              <svg width="22" height="22" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg" size="22">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.03053 5.075C1.0497 5.05192 1.07287 5.03339 1.09864 5.0205C1.12442 5.00762 1.15227 5.00064 1.18053 5H5.89344C5.9134 5.00031 5.93281 5.00702 5.9494 5.01931C5.966 5.03161 5.97905 5.04897 5.98698 5.0693C5.99491 5.08964 5.99738 5.11208 5.99407 5.13394C5.9908 5.15579 5.98192 5.17613 5.96847 5.1925L4.96947 6.425C4.9503 6.44807 4.92713 6.46661 4.90135 6.4795C4.87558 6.49239 4.84773 6.49936 4.81947 6.5H0.103541C0.0836005 6.49969 0.0641653 6.49298 0.0475735 6.48069C0.0309822 6.46839 0.0179408 6.45103 0.0100181 6.4307C0.00209544 6.41036 -0.000371092 6.38792 0.00291498 6.36606C0.00620106 6.34421 0.0151002 6.32387 0.0285421 6.3075L1.03053 5.075ZM5.97297 4.05333C5.98642 4.0697 5.9953 4.09004 5.99857 4.11189C6.00188 4.13375 5.99941 4.15619 5.99148 4.17653C5.98355 4.19687 5.9705 4.21423 5.9539 4.22652C5.93731 4.23881 5.9179 4.24552 5.89794 4.24583L1.18352 4.25C1.15527 4.24936 1.12742 4.24239 1.10164 4.2295C1.07587 4.21661 1.0527 4.19807 1.03353 4.175L0.0270419 2.94667C0.0136006 2.9303 0.00470146 2.90996 0.00141482 2.88811C-0.00187126 2.86625 0.000595274 2.84381 0.00851797 2.82347C0.0164407 2.80313 0.029482 2.78578 0.0460739 2.77348C0.0626651 2.76119 0.0821003 2.75448 0.102041 2.75417L4.81647 2.75C4.84473 2.75064 4.87258 2.75761 4.89835 2.7705C4.92413 2.78339 4.9473 2.80192 4.96647 2.825L5.97297 4.05333ZM1.03053 0.575C1.0497 0.551926 1.07287 0.53339 1.09864 0.520503C1.12442 0.507616 1.15227 0.500642 1.18053 0.5L5.89647 0.504167C5.91639 0.504479 5.93585 0.511185 5.95244 0.52348C5.96904 0.535775 5.98209 0.553134 5.98996 0.573469C5.99789 0.593804 6.00037 0.61625 5.9971 0.638106C5.99378 0.659962 5.9849 0.680297 5.97145 0.696667L4.96947 1.925C4.9503 1.94807 4.92713 1.96661 4.90135 1.9795C4.87558 1.99239 4.84773 1.99936 4.81947 2H0.103541C0.0836005 1.99969 0.0641653 1.99298 0.0475735 1.98069C0.0309822 1.96839 0.0179408 1.95103 0.0100181 1.9307C0.00209544 1.91036 -0.000371092 1.88792 0.00291498 1.86606C0.00620106 1.84421 0.0151002 1.82387 0.0285421 1.8075L1.03053 0.575Z" fill="url(#solana-slim-icon-linear)"></path>
              </svg>
            </div>

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
    </div>
  )
}