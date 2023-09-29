import { useState } from 'react'
import Navbar from './components/navbar'
import Carousel from './components/carousel/Carousel'
import WhaleActivityContainer from './components/whaleActivity/WhaleActivityContainer'
import './App.css'

function App() {
  

  return (
    <>
        <Carousel/>
        <WhaleActivityContainer />
    </>
  )
}

export default App
