/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
    import { Link } from 'react-router-dom'

    //  cursor: pointer;
    // transition: all 500ms ease-in-out normal;
    // text-decoration: none;
    // font-weight: bold;
    // color: rgb(231, 215, 150);
    // letter-spacing: 0.3px;

    // CREATING A LINKSIDEPANEL FUNCTION THAT RETURNS THE SIDE PANEL
    export default function LinkSidePanel(props){
        return(
            <div className='absolute w-[100%] h-[100%] z-[1] bg-link-side-panel-container transition-all duration-500 ease-in-out'>
                <div className='absolute right-0 h-[100%] flex flex-col gap-[10px] w-[380px] bg-link-side-panel-container__side-panel rounded-bl-[5px] rounded-tl-[5px] transition-all duration-500 ease-in-out shadow-link-side-panel-container__side-panel p-[10px]'>
                    <nav className='flex justify-between p-[10px] mb-[15px] border-b-[2px] pb-[20px] rounded-[2px] link-side-panel-container__side-panel--navbar'>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <p className='text-side-panel--navbar--side-buttons--p text-[16px] font-bold transition-all duration-500 ease-in-out'>EN</p>
                            
                            <div className='text-side-panel--navbar--side-buttons--p text-[20px] font-[600] mb-[5px] cursor-pointer'>v</div>
                            
                            <img 
                                crossOrigin="anonymous" 
                                src="https://static.jpgstoreapis.com/icons/theme-button-dark.svg"
                                alt="sun"
                                loading='lazy'
                                title='light-mode-button'
                                className='w-[24px] h-[24px] cursor-pointer transition-all duration-500 ease-in-out .side-panel--navbar--side-buttons--img'
                            />
                        </div>
    
                        <img 
                            crossOrigin="anonymous" 
                            src="https://static.jpgstoreapis.com/icons/close-dark.svg" 
                            className="dark-img" 
                            alt="close"
                            onClick={props.hideLinkSidePanel}
                        />
                    </nav>
    
                    <Link 
                        className='flex justify-center items-center w-[270px] h-[270px] my-0 mx-auto bg-link-side-panel-container__side-panel--rewards-button border-solid border-[2px] border-link-side-panel-container__side-panel--rewards-button rounded-[10px] py-[20px] px-0 transition-all duration-500 ease-in-out active:bg-link-side-panel-container__side-panel--rewards-button++active active:border-none active:text-link-side-panel-container__side-panel--rewards-button++active link-side-panel-container__side-panel--rewards-button'
                        
                        to={'/rewards'}
                    >Rewards</Link>
    
                    <div className='mt-[15px] border-t-[2px] pt-[20px] rounded-[2px] link-side-panel-container__side-panel--link-section'>
                        <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>EXPLORE</h4>
    
                        <figure className='flex items-center gap-[10px] mt-[10px]'>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/squares-2x2-purple.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link
                                className='cursor-pointer transition-all duration-500 ease-in-out text-side-panel--navbar--side-buttons--p active:scale-[0.95] link-side-panel-container__side-panel--link-section--figure--a'

                                to={'/allCollections'}
                            >All Collections</Link>
                        </figure>
    
                        <figure className='flex items-center gap-[10px] mt-[10px]'>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/rectangle-stack-purple.svg"
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link 
                                className='cursor-pointer transition-all duration-500 ease-in-out text-side-panel--navbar--side-buttons--p active:scale-[0.95] link-side-panel-container__side-panel--link-section--figure--a'

                                
                                to={'/allNFTs'}
                            >All NFTs</Link>
                        </figure>
                    </div>
    
                    <div className='mt-[15px] border-t-[2px] pt-[20px] rounded-[2px] link-side-panel-container__side-panel--link-section'>
                        <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>CREATORS</h4>
    
                        <figure className='flex items-center gap-[10px] mt-[10px]'>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/paint-brush-gold.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link
                                className='cursor-pointer transition-all duration-500 ease-in-out text-side-panel--navbar--side-buttons--p active:scale-[0.95] link-side-panel-container__side-panel--link-section--figure--a'
    
                                to={'/'}
                            >Create your collection</Link>
                        </figure>
    
                        <figure className='flex items-center gap-[10px] mt-[10px]'>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/verify-gold.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link
                                className='cursor-pointer transition-all duration-500 ease-in-out text-side-panel--navbar--side-buttons--p active:scale-[0.95] link-side-panel-container__side-panel--link-section--figure--a'

                                
                                to={'/'}
                            >Verify your collection</Link>
                        </figure>
                    </div>
    
                    <div className='mt-[15px] border-t-[2px] pt-[20px] rounded-[2px] link-side-panel-container__side-panel--link-section'>
                        <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>ABOUT</h4>
    
                        <figure className='flex items-center gap-[10px] mt-[10px]'>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/users-green.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link
                                className='cursor-pointer transition-all duration-500 ease-in-out text-side-panel--navbar--side-buttons--p active:scale-[0.95] link-side-panel-container__side-panel--link-section--figure--a'

                                to={'/'}
                            >Our Team</Link>
                        </figure>
    
                        <figure className='flex items-center gap-[10px] mt-[10px]'>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/globe-americas-green.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link
                                className='cursor-pointer transition-all duration-500 ease-in-out text-side-panel--navbar--side-buttons--p active:scale-[0.95] link-side-panel-container__side-panel--link-section--figure--a'

                                to={'/'}
                            >Our Impact</Link>
                        </figure>
                    </div>
    
                    <div className='mt-[15px] bt-[2px] pt-[20px] rounded-[2px] link-side-panel-container__side-panel--launchpad-section'>
                        <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>LAUNCHPAD</h4>
                        
                        <div className='flex justify-evenly items-center mt-[10px]'>
                            <Link
                                className='transition-all duration-500 ease-in-out cursor-pointer font-bold text-link-side-panel-container__side-panel--launchpad-section--div--a tracking-[0.3px] link-side-panel-container__side-panel--launchpad-section--div--a'

                                to={'/launchpad/launches'}>Launches</Link>

                            <Link 
                                className='transition-all duration-500 ease-in-out cursor-pointer font-bold text-link-side-panel-container__side-panel--launchpad-section--div--a tracking-[0.3px] link-side-panel-container__side-panel--launchpad-section--div--a'
                            
                                to={'#'}>Apply for launchpad</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }