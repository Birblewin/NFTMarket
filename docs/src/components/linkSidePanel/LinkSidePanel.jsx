/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
    import { Link } from 'react-router-dom'

    // IMPORTING CSS FILE
    import './LinkSidePanel.css'
    
    // CREATING A LINKSIDEPANEL FUNCTION THAT RETURNS THE SIDE PANEL
    export default function LinkSidePanel(props){
        return(
            <div className='absolute w-[100%] h-[100%] z-[1] bg-link-side-panel-container transition-all duration-500 ease-in-out'>
                {/* position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 380px;
    background-color: rgb(24, 25, 27);
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    transition: all 500ms ease-in-out normal;
    box-shadow: 0px 10px 20px black;
    padding: 10px; */}
                <div className='absolute right-0 flex flex-col gap-[10px] w-[380px] bg-link-side-panel-container__side-panel rounded-bl-[5px] rounded-tr-[5px] transition-all duration-500 p-[10px] h-[100%] rounded-tl-[5px] shadow-link-side-panel-container__side-panel items-start'>
                    <nav className='link-side-panel-container__side-panel--navbar'>
                        <div className='side-panel--navbar--side-buttons'>
                            <p>EN</p>
                            <div>v</div>
                            
                            <img 
                                crossOrigin="anonymous" 
                                src="https://static.jpgstoreapis.com/icons/theme-button-dark.svg"
                                alt="sun"
                                loading='lazy'
                                title='light-mode-button'
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
                        className='link-side-panel-container__side-panel--rewards-button'
                        to={'/rewards'}
                    >Rewards</Link>
    
                    <div className='link-side-panel-container__side-panel--link-section'>
                        <h4>EXPLORE</h4>
    
                        <figure>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/squares-2x2-purple.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link to={'/allCollections'}>All Collections</Link>
                        </figure>
    
                        <figure>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/rectangle-stack-purple.svg"
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link to={'/allNFTs'}>All NFTs</Link>
                        </figure>
                    </div>
    
                    <div className='link-side-panel-container__side-panel--link-section'>
                        <h4>CREATORS</h4>
    
                        <figure>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/paint-brush-gold.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link to={'/'}>Create your collection</Link>
                        </figure>
    
                        <figure>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/verify-gold.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link to={'/'}>Verify your collection</Link>
                        </figure>
                    </div>
    
                    <div className='link-side-panel-container__side-panel--link-section'>
                        <h4>ABOUT</h4>
    
                        <figure>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/users-green.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link to={'/'}>Our Team</Link>
                        </figure>
    
                        <figure>
                            <img 
                                src="https://static.jpgstoreapis.com/icons/globe-americas-green.svg" 
                                alt="nav-icon"
                                title="nav-icon"
                                loading='lazy'
                            />
    
                            <Link to={'/'}>Our Impact</Link>
                        </figure>
                    </div>
    
                    <div className='link-side-panel-container__side-panel--launchpad-section'>
                        <h4>LAUNCHPAD</h4>
                        
                        <div>
                            <Link to={'/launchpad/launches'}>Launches</Link>
                            <Link to={'#'}>Apply for launchpad</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }