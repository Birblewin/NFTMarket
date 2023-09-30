import Navbar from './components/navbar'
import Card from './components/CollectionCard'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Carousel from './components/carousel/Carousel'
import WhaleActivityContainer from './components/whaleActivity/WhaleActivityContainer'
import Footer from './components/footer/Footer';
import Table from './components/Table/table'
import './App.css'

function App() {
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
