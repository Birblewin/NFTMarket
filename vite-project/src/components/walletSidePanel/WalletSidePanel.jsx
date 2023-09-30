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
                    <p title='Click To Close'>&#128091;</p>
                    <h3>Connect Wallet</h3>
                    
                    <figcaption className='side_panel--title--description'>
                        <p>By connecting your wallet, you agree to the <a href='/' target='_blank'>Terms & Conditions</a> and <a href='/' target='_blank'>Privacy Policy</a></p>
                    </figcaption>
                </figure>

                <small className="side_panel_container__side_panel--heading">Select a wallet to install it</small>

                <div className="side_panel_container__side_panel--wallets_grid"></div>
            </div>
        </div>
    )
}