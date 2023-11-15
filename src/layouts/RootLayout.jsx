// IMPORTING NECESSARY MODULES
import  { useState, useContext } from 'react';
import {Outlet} from 'react-router-dom'

// IMPORTING NECESSARY COMPONENTS
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WalletSidePanel from '../components/walletSidePanel/WalletSidePanel'
import LinkSidePanel from '../components/linkSidePanel/LinkSidePanel'
import SearchBar from "../components/searchBar/SearchBar"

import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from "@mui/icons-material/LightMode";

// IMPORTING NECESSARY CONTEXTS
import { ThemeContext } from "../contexts/ThemeProvider";

// // IMPORTING NECESSARY HOOKS
 import WalletSidePanelContextHook from "../hooks/WalletSidePanelContextHook";

// EXPORTING A ROOTLAYOUT FUNCTION
export default function RootLayout(){
    // A BOOLEAN TO KEEP TRACK OF SHOWING THE SEARCHBAR
    const [showSearchBar, setShowSearchBar] = useState(false)
    // A BOOLEAN TO KEEP TRACK OF SHOWING THE SEARCHBAR
    const [showLinkSidePanel, setShowLinkSidePanel] = useState(false)

    // A USESTATE FUNCTION TO TRACK CHANGES IN SEARCHBAR CONTENT
    const [formData, setFormData] = useState({
        search: ""
    })

    // OBTAINING VARIOUS CONTEXTS FROM HOOKS
    const { showWalletPanel, dispatch } = WalletSidePanelContextHook()

    // OBTAINING CONTEXTS OF THEMES
    const [mode, toggleTheme] = useContext(ThemeContext);

    // A FUNCTION TO UPDATE FORMDATA
    function updateFormData(e){
        const {name, value} = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
 
    return(
        <main className="min-h-[100vh] scroll-smooth relative w-[100%] overflow-x-hidden">
            {
                showLinkSidePanel && <LinkSidePanel 
                    hideLinkSidePanel = {() => setShowLinkSidePanel(false)}
                    toggleTheme = {() => toggleTheme()}
                    
                    themeIcon = {
                        mode === "dark" 
                            ? 
                        <LightModeIcon className="text-[#FFDB24] cursor-pointer" /> 
                            : 
                        <NightlightIcon className="text-[#9ca3af] cursor-pointer" />
                    }
                />
            }           

            {   
                showSearchBar && <SearchBar 
                    hideSearchBar = {() => setShowSearchBar(false)}
                    formData = {formData}
                    updateFormData = {(e) => updateFormData(e)}
                />
            }

            {
                showWalletPanel && <WalletSidePanel 
                    hideWalletSidePanel = {() => dispatch({ type: "HIDE_WALLET_PANEL" })}
                />
            }

            <Navbar 
                showWalletSidePanel = {() => dispatch({ type: "SHOW_WALLET_PANEL" })}
                showLinkSidePanel = {() => setShowLinkSidePanel(true)}
                showSearchBar = {() => setShowSearchBar(true)}
                // toggleLanguage={toggleLanguage}
                // currentLanguage={currentLanguage}
             />

            {/* <IntlProvider locale={currentLanguage} messages={locales[currentLanguage]}> */}
            <Outlet/>
            {/* </IntlProvider> */}
            <Footer/>
         </main>
     )
}