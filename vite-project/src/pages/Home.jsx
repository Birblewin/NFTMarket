import Carousel from '../components/carousel/Carousel'
import WhaleActivityContainer from '../components/whaleActivity/WhaleActivityContainer'
import Table from '../components/Table/table'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Card from '../components/CollectionCard'
import './Home.css'
function Home() {
  return (
    <div>
      <Carousel/>
        <WhaleActivityContainer />
        <Table/>
        
        
        

       
        
        <div className='top'>
          <div className='collection'>
            <h3 className='title'>Top collections  <span>Generative</span></h3> <KeyboardArrowDown className='arrow-down'/>
          </div>
          
          <button style={{cursor: "pointer"}} onClick={() => location.assign('/allcollections')}>View all</button>
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

    </div>
  )
}

export default Home
