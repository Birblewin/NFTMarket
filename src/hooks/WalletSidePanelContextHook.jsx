// IMPORTING NECESSARY MODULES
    // IMPORTING NECESSARY MODULES
import React from "react";
    // IMPORTING NECESSARY CONTEXTS
import {WalletSidePanelContext} from '../contexts/WalletSidePanelContext'

// EXPORTING A WALLETSIDEPANELCONTEXTHOOK THAT VALIDATES THE CONTEXT BEFORE RETURNING IT FOR USE
export default function WalletSidePanelContextHook(){
    const context = React.useContext(WalletSidePanelContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by WalletSidePanelContext")
    }

    return context
}