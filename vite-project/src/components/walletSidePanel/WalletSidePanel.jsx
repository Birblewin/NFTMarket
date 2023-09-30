// IMPORING NECESSARY DATABASE
// import walletSidePanelData from '../../database/walletSidePanelData.json'

// IMPORING CSS FILE
import './WalletSidePanel.css'

// EXPORTING A FUNCTION THAT RETURNS A WALLETSIDEPANEL COMPONENT
export default function WalletSidePanel(){
    return(
        <div className="side_panel_container">
            <div className="side_panel_container__side_panel">
                <figure className="side_panel_container__side_panel--title">
                    <p>&#128091;</p>
                    <h1>Connect Wallet</h1>
                    
                    <figcaption className='side_panel--title--description'>
                        <p>By connecting your wallet, you agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                    </figcaption>
                </figure>

                <small className="side_panel_container__side_panel--heading">Select a wallet to install it</small>

                <div className="side_panel_container__side_panel--wallets_grid"></div>
            </div>
        </div>
    )
}