// IMPORTING NECESSARY MODULES
import React from "react";

import {Outlet} from 'react-router-dom'

// IMPORTING NECESSARY COMPONENTS
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import WalletSidePanel from '../components/walletSidePanel/WalletSidePanel'
import SearchBar from "../components/searchBar/SearchBar";

// IMPORT THE CSS FILE
import './RootLayout.css'

// EXPORTING A ROOTLAYOUT FUNCTION
export default function RootLayout(){
    // A USESTATE FUNCTION TO TRACK CHANGES IN SEARCHBAR CONTENT
    const [formData, setFormData] = React.useState({
        search: ""
    })

    // A FUNCTION TO UPDATE FORMDATA
    function updateFormData(e){
        const {name, value} = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A BOOLEAN TO KEEP TRACK OF SHOWING THE WALLETSIDEPANNEL
    const [showWalletSidePanel, setShowWalletSidePanel] = React.useState(false)
    // A BOOLEAN TO KEEP TRACK OF SHOWING THE SEARCHBAR
    const [showSearchBar, setShowSearchBar] = React.useState(false)

    return(
        <main>
            {
                showWalletSidePanel && <WalletSidePanel hideWalletSidePanel = {() => setShowWalletSidePanel(false)}/>
            }

            <Navbar 
                showWalletSidePanel = {() => setShowWalletSidePanel(true)}
                showSearchBar = {() => setShowSearchBar(true)}
            />

            {
                showSearchBar && <SearchBar 
                    hideSearchBar = {() => setShowSearchBar(false)}
                    formData = {formData}
                    updateFormData = {(e) => updateFormData(e)}
                />
            }

            <Outlet/>
            <Footer/>
        </main>
    )
}