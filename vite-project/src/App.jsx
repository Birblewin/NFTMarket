import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './App.css'

function App() {
  

  return (
    <>
        <Navbar/>
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
       
    </>
  )
}

export default App
