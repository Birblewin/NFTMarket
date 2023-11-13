/* eslint-disable react/prop-types */
// IMPORING NECESSARY DATABASE
import walletSidePanelData from '../../database/walletSidePanelData.json'
// IMPORTING NECESSARY MODULES
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'

// EXPORTING A FUNCTION THAT RETURNS A WALLETSIDEPANEL COMPONENT
export default function WalletSidePanel(props){
    const generatedWalletArray = walletSidePanelData.map(
        walletData => (
            <Link 
                key={walletData.index}
                className='text-left  bg-link-side-panel-container__side-panel--rewards-section p-[12px] border-solid border-[1px] w-full border-white rounded-[10px] transition-all duration-500 ease-in-out font-[700] active:bg-white active:text-black'
                to={`https://${walletData.site_address}`}
                target='_blank'
                rel='noreferrer'
            >
                {walletData.name}
            </Link>
        )
    )

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
            open={!props.WalletSidePanel}
            closeIcon={false}
            onClose={props.hideWalletSidePanel}
            width={"380px"}
            height={"100%"}
            placement='right'
            className='shadow-link-side-panel-container__side-panel'
            
            style={drawerStyle}
            
            styles={{
                mask: {
                    cursor: "pointer"
                }
            }}
            
            title={
                <figure className="font-[Lexend] text-left  flex flex-col gap-[10px] items-start bg-black">
                    <img 
                            crossOrigin="anonymous" 
                            src="https://static.jpgstoreapis.com/icons/close-dark.svg" 
                            alt="close"
                            onClick={props.hideWalletSidePanel}
                            className='w-[24px] h-[24px] cursor-pointer transition-all duration-500 ease-in-out'
                    />

                    <h3 className='text-[24px] font-[500] leading-[32px]'>Connect Wallet</h3>
                    
                    <figcaption className='side_panel--title--description'>
                        <p className='text-[14px] font-[400]'>By connecting your wallet, you agree to the <Link to='/' target='_blank' className='text-side_panel--title--description--p--a font-bold visited:text-[palevioletred]'>Terms & Conditions</Link> and <Link to='/' target='_blank' className='text-side_panel--title--description--p--a font-bold visited:text-[palevioletred]'>Privacy Policy</Link></p>
                    </figcaption>
                </figure>
            }
        >
            <small className="text-[14px] font-[300] mt-[20px]">Select a wallet to install it</small>

            <div className="side_panel_container__side_panel--wallets_grid flex flex-col justify-center w-full items-start gap-[10px] mt-[5px]">
                {generatedWalletArray}                   
            </div>
        </Drawer>
    )
}