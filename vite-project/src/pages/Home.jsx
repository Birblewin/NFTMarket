
import Carousel from '../components/carousel/Carousel'
import WhaleActivityContainer from '../components/whaleActivity/WhaleActivityContainer'
import Table from '../components/Table/table'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Card from '../components/CollectionCard'
import Cards from './AllCollections/Cards'
import './Home.css'
function Home() {
  return (
    <div>
      <Carousel/>
        <WhaleActivityContainer />
        <Table/>
      <div className="top-div">
        <div className="collection">
          <h3 className="title">Top collections </h3>
          <div className="drop-down">
            <h3>Generative</h3>
            <KeyboardArrowDown className="arrow-down" />
          </div>
     <button style={{cursor: "pointer"}} onClick={() => location.assign('/allcollections')}>View all</button>
        </div>
        
      
          <section className="main-content">
        <Cards />
      </section>

    </div>
  );
}

export default Home;
