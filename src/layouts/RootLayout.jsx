// IMPORTING NECESSARY MODULES
import  { useState } from 'react';
import {Outlet} from 'react-router-dom'

// IMPORTING NECESSARY COMPONENTS
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WalletSidePanel from '../components/walletSidePanel/WalletSidePanel'
import LinkSidePanel from '../components/linkSidePanel/LinkSidePanel'
import SearchBar from "../components/searchBar/SearchBar"
import ConnectWallet  from './cardano';
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
    const {showWalletPanel, dispatch} = WalletSidePanelContextHook()

    // A FUNCTION TO UPDATE FORMDATA
    function updateFormData(e){
        const {name, value} = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const [isCardanoModalOpen, setIsCardanoModalOpen] = useState(false); // State to manage the Cardano modal

    // Function to open or close the Cardano modal
    const toggleCardanoModal = () => {
      setIsCardanoModalOpen(!isCardanoModalOpen);
    };
 
    return(
        <main className="min-h-[100vh] scroll-smooth relative w-[100%] overflow-x-hidden">
            {
                showLinkSidePanel && <LinkSidePanel 
                    hideLinkSidePanel = {() => setShowLinkSidePanel(false)}
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
               
                toggleCardanoModal={toggleCardanoModal}
             />

          {/* <IntlProvider locale={currentLanguage} messages={locales[currentLanguage]}> */}
          {isCardanoModalOpen && <ConnectWallet closeModal={toggleCardanoModal} />}
              <Outlet/>
                {/* </IntlProvider> */}
             <Footer/>
         </main>
     )
}