/* eslint-disable react/prop-types */
// IMPORING NECESSARY DATABASE
import walletSidePanelData from '../../database/walletSidePanelData.json'
import { Link } from 'react-router-dom'

// EXPORTING A FUNCTION THAT RETURNS A WALLETSIDEPANEL COMPONENT
export default function WalletSidePanel(props){
    const generatedWalletArray = walletSidePanelData.map(
        walletData => (
            <Link 
                key={walletData.index}
                className='text-left text-white bg-link-side-panel-container__side-panel--rewards-section p-[12px] border-solid border-[1px] w-full border-white rounded-[10px] transition-all duration-500 ease-in-out font-[700] active:bg-side_panel_container__side_panel--wallets_grid--a++hover'
                to={`https://${walletData.site_address}`}
                target='_blank'
                rel='noreferrer'
            >
                {walletData.name}
            </Link>
        )
    ) 

    return(
        <div className="absolute w-full h-full bg-link-side-panel-container transition-all duration-500 ease-in-out z-10">
            <div className="bg-link-side-panel-container__side-panel h-full flex flex-col gap-[10px] w-[380px] items-start absolute right-0 p-[10px] border-solid border-[1px] border-black rounded-bl-[10px] rounded-tl-[10px] transition-all duration-500 ease-in-out shadow-link-side-panel-container__side-panel">
                <figure className="font-[Lexend] text-left text-white flex flex-col gap-[10px] items-start">
                    <p 
                        title='Click To Close'
                        onClick={props.hideWalletSidePanel}
                        className='text-[25px] mt-[10px] cursor-pointer transition-all duration-500 ease-in-out'
                    >&#128091;</p>
                    
                    <h3 className='text-[24px] font-[500] leading-[32px]'>Connect Wallet</h3>
                    
                    <figcaption className='side_panel--title--description'>
                        <p className='text-[14px] font-[400]'>By connecting your wallet, you agree to the <Link to='/' target='_blank' className='text-side_panel--title--description--p--a font-bold visited:text-[palevioletred]'>Terms & Conditions</Link> and <Link to='/' target='_blank' className='text-side_panel--title--description--p--a font-bold visited:text-[palevioletred]'>Privacy Policy</Link></p>
                    </figcaption>
                </figure>

                <small className="text-[14px] font-[300] text-white mt-[20px]">Select a wallet to install it</small>

                <div className="side_panel_container__side_panel--wallets_grid flex flex-col justify-center w-full items-start gap-[10px] mt-[5px]">
                    {generatedWalletArray}                   
                </div>
            </div>
        </div>
    )
}