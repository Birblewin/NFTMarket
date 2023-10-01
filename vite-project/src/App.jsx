

import Navbar from './components/navbar'

// IMPORTING REACT
import React from 'react';

// IMPORTING VARIOUS COMPONENTS
import Navbar from './components/navbar/Navbar'

import Card from './components/CollectionCard'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Carousel from './components/carousel/Carousel'
import WhaleActivityContainer from './components/whaleActivity/WhaleActivityContainer'
import Footer from './components/footer/Footer';
import Table from './components/Table/table'
import Launchpad from './pages/launchpad/launchpad'
import Table from './components/Table/table';
import WalletSidePanel from './components/walletSidePanel/WalletSidePanel';

// IMPORT CSS FILE
import './App.css'

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
        <Navbar/>
        <Carousel/>
        <WhaleActivityContainer />      
        <Table/>
        <div className='top'>
          <div className='collection'>
            <h3 className='title'>Top collections  <span>Generative</span></h3> <KeyboardArrowDownIcon className='arrow-down'/>
          </div>
          
          <button>View all</button>
        </div>
        
        <section className='cards'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section> 

        <Footer/>
    </>
  )
}

export default App
