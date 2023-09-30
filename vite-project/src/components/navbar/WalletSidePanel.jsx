// EXPORTING A FUNCTION THAT RETURNS A WALLETSIDEPANEL COMPONENT
export default function WalletSidePanel(){
    return(
        <div className="side_panel_container">
            <div className="side_panel_container__side_panel">
                <figure className="side_panel_container__side_panel--title"></figure>

                <small className="side_panel_container__side_panel--heading"></small>

                <div className="side_panel_container__side_panel--wallets_grid"></div>
            </div>
        </div>
    )
}