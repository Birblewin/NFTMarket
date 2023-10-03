// IMPORTING NECESSARY MODULES
import React from "react";

import {Outlet} from 'react-router-dom'

// IMPORTING NECESSARY COMPONENTS
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import WalletSidePanel from '../components/walletSidePanel/WalletSidePanel'

// IMPORT THE CSS FILE
import './RootLayout.css'

// EXPORTING A ROOTLAYOUT FUNCTION
export default function RootLayout(){
    // A BOOLEAN TO KEEP TRACK OF SHOWING THE WALLETSIDEPANNEL
    const [showWalletSidePanel, setShowWalletSidePanel] = React.useState(false)

    return(
        <main>
            {
                showWalletSidePanel && <WalletSidePanel hideWalletSidePanel = {() => setShowWalletSidePanel(false)}/>
            }

            <Navbar showWalletSidePanel = {() => setShowWalletSidePanel(true)}/>
            <Outlet/>
            <Footer/>
        </main>
    )
}