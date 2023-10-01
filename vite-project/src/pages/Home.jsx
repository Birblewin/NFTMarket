import React from 'react'
import Carousel from '../components/carousel/Carousel'
import WhaleActivityContainer from '../components/whaleActivity/WhaleActivityContainer'
import Table from '../components/Table/table'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

import Cards from './AllCollections/Cards'
import './Home.css'
function Home() {
  return (
    <div>
      <Carousel/>
        <WhaleActivityContainer />
        <Table/>
        
        
        

       
        
        <div className='top'>
          <div className='collection'>
            <h3 className='title'>Top collections      <span>Generative</span></h3> <KeyboardArrowDown className='arrow-down'/>
          </div>
          
          <button>View all</button>
        </div>
        
       
        <Cards/>

    </div>
  )
}

export default Home
