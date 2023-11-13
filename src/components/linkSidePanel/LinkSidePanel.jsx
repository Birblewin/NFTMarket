/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'

// CREATING A LINKSIDEPANEL FUNCTION THAT RETURNS THE SIDE PANEL
export default function LinkSidePanel(props){
    // AN OBJECT TO HOLD CSS PROPERTIES
    const drawerStyle = {
        backgroundColor: "rgb(0,0,0, 0.95)",
        zIndex: "10",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
        border: "1px solid black",
        borderBottomLeftRadius: "10px",
        borderTopLeftRadius: "10px",
        transition: "all 500ms ease-in-out normal",
        padding: "10px",
        fontFamily: "Lexend",
        paddingLeft: "0"
    }

    return(
        <Drawer
            placement='right'
            width={"380px"}
            height={"100%"}
            onClose={props.hideLinkSidePanel}
            open={true}
            closeIcon={false}

            styles={{
                mask: {
                    cursor: "pointer"
                }
            }}

            style={drawerStyle}
        >
            <nav className='flex justify-between w-[100%] p-[10px] mb-[15px] border-b-[2px] border-b-link-side-panel-container__side-panel--navbar pb-[20px] rounded-b-[2px]'>
                <div className='flex justify-center items-center gap-[10px] text-center'>
                    <p className='text-side-panel--navbar--side-buttons--p text-[16px] font-bold transition-all duration-500 ease-in-out'>EN</p>
                
                    <div className='text-side-panel--navbar--side-buttons--p text-[20px] font-[600] mb-[5px] cursor-pointer'>v</div>
                
                    <button onClick={props.toggleTheme}>
                        {props.themeIcon}
                    </button>
                </div>

                <img 
                    crossOrigin="anonymous" 
                    src="https:static.jpgstoreapis.com/icons/close-dark.svg" 
                    alt="close"
                    onClick={props.hideLinkSidePanel}
                    className='w-[24px] h-[24px] cursor-pointer transition-all duration-500 ease-in-out'
                />
            </nav>

            <Link 
                className='link-side-panel-container__side-panel--rewards-button flex justify-center items-center w-[270px] h-[20px] my-0 mx-auto bg-link-side-panel-container__side-panel--rewards-button text-link-side-panel-container__side-panel--rewards-button border-solid border-[2px] border-link-side-panel-container__side-panel--rewards-button rounded-[10px] py-[20px] px-0 transition-all duration-500 ease-in-out active:bg-link-side-panel-container__side-panel--rewards-button++active active:border-none active:text-link-side-panel-container__side-panel--rewards-button++active'
                to={'/rewards'}
            >Rewards</Link>

            <div className='link-side-panel-container__side-panel--link-section mt-[15px] border-t-[2px] w-[100%] pt-[20px] rounded-[2px] border-t-link-side-panel-container__side-panel--navbar'>
                <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>EXPLORE</h4>

                <figure className='flex items-center gap-[10px] mt-[10px]'>
                    <img 
                        src="https://static.jpgstoreapis.com/icons/squares-2x2-purple.svg" 
                        alt="nav-icon"
                        title="nav-icon"
                        loading='lazy'
                    />

                    <Link className='cursor-pointer transition-all duration-500 ease-in-out font-extrabold text-side-panel--navbar--side-buttons--p active:scale-[0.95]' to={'/explore/allCollections'}>All Collections</Link>
                </figure>

                <figure className='flex items-center gap-[10px] mt-[10px]'>
                    <img 
                        src="https://static.jpgstoreapis.com/icons/rectangle-stack-purple.svg"
                        alt="nav-icon"
                        title="nav-icon"
                        loading='lazy'
                    />

                    <Link className='cursor-pointer transition-all duration-500 ease-in-out font-extrabold text-side-panel--navbar--side-buttons--p active:scale-[0.95]' to={'/explore/allNFTs'}>All NFTs</Link>
                </figure>
            </div>

            <div className='link-side-panel-container__side-panel--link-section mt-[15px] border-t-[2px] w-[100%] pt-[20px] rounded-t-[2px] border-t-link-side-panel-container__side-panel--navbar'>
                <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>CREATORS</h4>

                <figure className='flex items-center gap-[10px] mt-[10px]'>
                    <img 
                        src="https://static.jpgstoreapis.com/icons/paint-brush-gold.svg" 
                        alt="nav-icon"
                        title="nav-icon"
                        loading='lazy'
                    />

                    <Link className='cursor-pointer transition-all duration-500 ease-in-out font-extrabold text-side-panel--navbar--side-buttons--p active:scale-[0.95]' to={'/creators/mining'}>Create your collection</Link>
                </figure>

                <figure className='flex items-center gap-[10px] mt-[10px]'>
                    <img 
                        src="https://static.jpgstoreapis.com/icons/verify-gold.svg" 
                        alt="nav-icon"
                        title="nav-icon"
                        loading='lazy'
                    />

                    <Link className='cursor-pointer transition-all duration-500 ease-in-out font-extrabold text-side-panel--navbar--side-buttons--p active:scale-[0.95]' to={'/creators/verification'}>Verify your collection</Link>
                </figure>
            </div>

            <div className='link-side-panel-container__side-panel--link-section mt-[15px] border-t-[2px] w-[100%] pt-[20px] rounded-t-[2px] border-t-link-side-panel-container__side-panel--navbar'>
                <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>ABOUT</h4>

                <figure className='flex items-center gap-[10px] mt-[10px]'>
                    <img 
                        src="https://static.jpgstoreapis.com/icons/users-green.svg" 
                        alt="nav-icon"
                        title="nav-icon"
                        loading='lazy'
                    />

                    <Link className='cursor-pointer transition-all duration-500 ease-in-out font-extrabold text-side-panel--navbar--side-buttons--p active:scale-[0.95]' to={'/about/team'}>Our Team</Link>
                </figure>

                <figure className='flex items-center gap-[10px] mt-[10px]'>
                    <img 
                        src="https://static.jpgstoreapis.com/icons/globe-americas-green.svg" 
                        alt="nav-icon"
                        title="nav-icon"
                        loading='lazy'
                    />

                    <Link className='cursor-pointer transition-all duration-500 ease-in-out font-extrabold text-side-panel--navbar--side-buttons--p active:scale-[0.95]' to={'/about/impact'}>Our Impact</Link>
                </figure>
            </div>
            
            <div className='link-side-panel-container__side-panel--launchpad-section mt-[15px] border-t-[2px] w-full border-link-side-panel-container__side-panel--navbar pt-[20px] rounded-[2px]'>
                <h4 className='text-side-panel--navbar--side-buttons--p font-bold text-[14px]'>LAUNCHPAD</h4>
                
                <div className='flex justify-evenly items-center mt-[10px]'>
                    <Link className='cursor-pointer transition-all duration-500 font-bold text-link-side-panel-container__side-panel--rewards-button tracking-[0.3px]' to={'/launchpad/launches'}>Launches</Link>
                    <Link className='cursor-pointer transition-all duration-500 font-bold text-link-side-panel-container__side-panel--rewards-button tracking-[0.3px]' to={'/launchpad/apply for launchpad'}>Apply for launchpad</Link>
                </div>
            </div>
        </Drawer>
    )
}