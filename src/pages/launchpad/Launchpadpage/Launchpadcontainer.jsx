// IMPORTING NECESSARY FILES
  // IMPORTING NECESSARY HOOKS
import WalletSidePanelContextHook from '../../../hooks/WalletSidePanelContextHook'
// connect wallet functionality by mkrs
import { useWeb3Modal } from '@web3modal/wagmi/react' // Import the useWeb3Modal hook
  // IMPORT NECESSARY MODULES
import { useSearchParams } from 'react-router-dom'
import {formatDistance} from 'date-fns'
  // IMPORTING NECESSARY DATABASE
import { launchpadCollectionsData } from '../../../database/launchpadCollectionsData'

// A FUNCTION THAT RETURNS AN EXPORTED LAUNCHPAD COMPONENT
export default function Launchpadcontainer(){
  // GETTING GLOBAL CONTEXTS FROM HOOKS
  const {dispatch} = WalletSidePanelContextHook()
  // Use the useWeb3Modal hook to access the open and close functions
  const { open } = useWeb3Modal();
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

  // Function to connect the wallet
  const connectWallet = async () => {
    try {
      // Open the wallet modal using the open function from useWeb3Modal
      await open();
    }catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  }

  // OBTAINING THE CORRECT DATA ENTRY AFTER VALIDATION
  const correctData = validateQueryParams()

  return (
    <div>
      <div className="small_screen_launchpad-container_entry lg:hidden">
        <div className="flex justify-center items-start flex-col w-[90%] my-0 mx-auto mt-[0px] transition-all duration-500 ease-in-out lg:flex-row lg:gap-[50px]">
          {/* TITLE OF THE COLLECTION */}
          <h1 className='text-container--h1 text-[30px] font-[700] w-full text-left'>{correctData.cardTitle}</h1>

          {/* WHERE SELLING STATS ARE */}
          <div className="w-full flex justify-between items-center text-[14px] text-container__selling_stats my-[10px] mx-0 font-[600] sm:w-[60%] lg:justify-start lg:gap-[20px] lg:mb-0">
            <div className='bg-container__selling_stats--chosen_chain w-[46px] h-[36px] rounded-[10px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.2] hover:bg-[blueviolet]'></div>
            <div className='py-[8px] px-[12px] w-[146px] h-[36px] bg-container__selling_stats--chosen_chain rounded-[10px] transition-all duration-500 ease-in-out cursor-pointer hover:scale-[1.2] hover:bg-[blueviolet]'>Total items: {correctData.volume || 6969}</div>
            <div className='py-[8px] px-[10px] w-[125px] h-[36px] bg-container__selling_stats--chosen_chain transition-all duration-500 ease-in-out cursor-pointer rounded-[10px] hover:scale-[1.2] hover:bg-[blueviolet] lg:text-container__selling_stats lg:text-[14px] lg:font-[600]'>{dateDistance}</div>
          </div>

          {/* WHERE THE IMAGES ARE */}
          <div className="w-full flex justify-center items-center flex-col my-[20px] mx-0 sm:my-[20px] sm:mx-auto sm:w-[90%] lg:w-full">
            <img 
              src={`${correctData.cardImage}`} 
              alt="card-image"
              loading='lazy'
              width={100}
              height={100}
              title='card-image'
              className='h-[345px] w-auto rounded-[12px] sm:w-[500px] sm:h-auto lg:w-[450px] lg:h-auto lg:ml-0' 
            />
            <div className="flex justify-between items-center w-full sm:w-[500px] sm:my-0 sm:mx-auto lg:w-[450px] lg:my-0 lg:mx-auto lg:ml-0 lg:gap-[10px]">
              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image'
                className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto' 
              />

              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image'
                className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto'
              />

              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image'
                className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto'
              />

              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image'
                className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto'
              />
            </div>
          </div>

          {/* WHERE THE CONTENT IS */}
          <div className="flex justify-center items-start flex-col bg-container__content-container rounded-[12px] p-[16px] gap-[10px] border-[2px] border-solid border-container__content-container">
            <p className='text-[14px] font-[500] leading-[21px] text-container__selling_stats w-full max-h-[20ch] overflow-y-scroll border-b-[1px] border-b-container__content-container pb-[20px] lg:max-h-none lg:overflow-y-visible'>{correctData.cardInfo}</p>

            <div className="flex w-full justify-center items-start flex-col bg-container__content-container--paying_stats my-[20px] mx-0 p-[10px] gap-[10px] rounded-[5px]">
              <h2 className='text-container__selling_stats text-[16px] font-[600]'>Price</h2>

              <figure className="content-container--paying-stats--image flex justify-between items-center gap-[10px]">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#e42575">
                  <path d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  
                  <path d="M7 7.5H7.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>

                <figcaption className='text-[24px] text-container__selling_stats'>
                  <span>--</span>
                  <b>◎</b>
                </figcaption>
              </figure>

              <button
                className='my-[10px] mx-auto w-[95%] h-[44px] text-center p-[10px] bg-container__content-container--paying_stats--button text-container__selling_stats font-medium cursor-pointer transition-all duration-500 ease-in-out rounded-[20px] active:scale-[1.11] active:bg-[aqua] active:text-black' 
                onClick={() => dispatch({ type: "SHOW_WALLET_PANEL" })}
              >Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>

      <div className="extra_large_screen_launchpad-container_entry hidden lg:block">
        <div className="flex justify-center items-start flex-col w-[90%] my-0 mx-auto mt-[0px] transition-all duration-500 ease-in-out lg:flex-row lg:gap-[50px]">
          {/* LEFT SIDE OF CONTAINER */}
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
            {/* TITLE OF THE COLLECTION */}
            <h1 className='text-container--h1 text-[30px] font-[700] w-full text-left'>{correctData.cardTitle}</h1>
           
            {/* WHERE 2 OF THE SELLING STATS ARE */}
            <div className="w-full flex justify-between items-center text-[14px] text-container__selling_stats my-[10px] mx-0 font-[600] sm:w-[60%] lg:justify-start lg:gap-[20px] lg:mb-0">
              <div className='bg-container__selling_stats--chosen_chain w-[46px] h-[36px] rounded-[10px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.2] hover:bg-[blueviolet]'></div>
              <div className='py-[8px] px-[12px] w-[146px] h-[36px] bg-container__selling_stats--chosen_chain rounded-[10px] transition-all duration-500 ease-in-out cursor-pointer hover:scale-[1.2] hover:bg-[blueviolet]'>Total items: {correctData.volume || 6969}</div>
            </div>

            {/* WHERE THE IMAGES ARE */}
            <div className="w-full flex justify-center items-center flex-col my-[20px] mx-0 sm:my-[20px] sm:mx-auto sm:w-[90%] lg:w-full">
              <img 
                src={`${correctData.cardImage}`} 
                alt="card-image"
                loading='lazy'
                width={100}
                height={100}
                title='card-image'
                className='h-[345px] w-auto rounded-[12px] sm:w-[500px] sm:h-auto lg:w-[450px] lg:h-auto lg:ml-0'
              />

              <div className="flex justify-between items-center w-full sm:w-[500px] sm:my-0 sm:mx-auto lg:w-[450px] lg:my-0 lg:mx-auto lg:ml-0 lg:gap-[10px]">
                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image'
                  className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto'
                />

                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image'
                  className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto' 
                />

                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image'
                  className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto'
                />

                <img 
                  src={`${correctData.cardImage}`} 
                  alt="card-image"
                  loading='lazy'
                  width={100}
                  height={100}
                  title='card-image'
                  className='w-[75px] h-auto my-[10px] mx-0 rounded-[10px] sm:w-[115px] sm:h-auto sm:my-[20px] sm:mx-0 sm:mb-0 lg:w-[100px] lg:h-auto'
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE OF CONTAINER */}
          <div className="lg:mt-[55px] lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-[20px] lg:max-w-[500px]">
            {/* THE REMAINING SELLING STAT */}
            <div className='py-[8px] px-[10px] w-[125px] h-[36px] bg-container__selling_stats--chosen_chain transition-all duration-500 ease-in-out cursor-pointer rounded-[10px] hover:scale-[1.2] hover:bg-[blueviolet] lg:text-container__selling_stats lg:text-[14px] lg:font-[600]'>{dateDistance}</div>

            {/* WHERE THE CONTENT IS */}
            <div className="flex justify-center items-start flex-col bg-container__content-container rounded-[12px] p-[16px] gap-[10px] border-[2px] border-solid border-container__content-container">
              <p className='text-[14px] font-[500] leading-[21px] text-container__selling_stats w-full max-h-[20ch] overflow-y-scroll border-b-[1px] border-b-container__content-container pb-[20px] lg:max-h-none lg:overflow-y-visible'>{correctData.cardInfo}</p>

              <div className="flex w-full justify-center items-start flex-col bg-container__content-container--paying_stats my-[20px] mx-0 p-[10px] gap-[10px] rounded-[5px]">
                <h2 className='text-container__selling_stats text-[16px] font-[600]'>Price</h2>

                <figure className="content-container--paying-stats--image flex justify-between items-center gap-[10px]">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#e42575">
                    <path d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    
                    <path d="M7 7.5H7.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>

                  <figcaption className='text-[24px] text-container__selling_stats'>
                    <span>--</span>
                    <b>◎</b>
                  </figcaption>
                </figure>

                <button
                  className='my-[10px] mx-auto w-[95%] h-[44px] text-center p-[10px] bg-container__content-container--paying_stats--button text-container__selling_stats font-medium cursor-pointer transition-all duration-500 ease-in-out rounded-[20px] active:scale-[1.11] active:bg-[aqua] active:text-black' 
                  onClick={() => connectWallet()}
                >Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}