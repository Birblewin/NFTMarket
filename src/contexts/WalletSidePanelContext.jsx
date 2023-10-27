/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import React from "react";

// CREATING A WALLETSIDEPANELCONTEXT FROM REACT
export const WalletSidePanelContext = React.createContext()

// CREATING A WALLETSIDEPANELCONTEXTREDUCER TO MANAGE DIFFERENT STATES OF THE CONTEXT
export function WalletSidePanelContextReducer(state, action){
    switch(action.type){
        case "SHOW_WALLET_PANEL":
            return { showWalletPanel: true }
        
        case "HIDE_WALLET_PANEL":
            return { showWalletPanel: false }

        default:
            return state
    }
}

// EXPORTING A WALLETSIDEPANELCONTEXTPROVIDER THAT MAKES THE CONTEXT AVAILABLE THROUGHOUT THE APP
export default function WalletSidePanelContextProvider({children}){
    const [state, dispatch] = React.useReducer(WalletSidePanelContextReducer, { showWalletPanel: false })
    
    return(
        <WalletSidePanelContext.Provider value={{...state, dispatch}}>
            {children}
        </WalletSidePanelContext.Provider>
    )
}