

// IMPORTING REACT
import React from 'react';

// IMPORTING VARIOUS COMPONENTS
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer';
import Table from './components/Table/table';
import WalletSidePanel from './components/walletSidePanel/WalletSidePanel';

import RewardsPage from './pages/RewardsPage'
import Home from './pages/Home';


// IMPORT CSS FILE
import './App.css'
import Launchpad from './pages/launchpad/launchpad';

function App() {
  // A BOOLEAN TO INDICATE IF TO SHOW SIDE PANEL
  const [showWalletSidePanel, setShowWalletSidePanel] = React.useState(false)
  // A USESTATE TO UPDATE SEARCHDATA FROM SEARCHBAR
  const [searchData, setSearchData] = React.useState({ searchInput: "" })

  // A FUNCTION TO UPDATE SEARCHDATA
  function updateSearchData(e){
    const {name, value} = e.target

    setSearchData(
      prevSearchData => ({
        ...prevSearchData,
        [name] : value
      })
    )
  }

 
  return (
    <>

     <BrowserRouter>
     <Navbar/>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/allcollections' element={<AllCollections />} />
         <Route path="/rewardspage" element={<RewardsPage />} />
         <Route path="/launchpad" element={<Launchpad />} />
        </Routes>
      
      </BrowserRouter>
      
        
        
        <Footer/>
    </>
  )
}

export default App
