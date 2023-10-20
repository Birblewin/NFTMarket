import Carousel from "../components/carousel/Carousel";
import WhaleActivityContainer from "../components/whaleActivity/WhaleActivityContainer";
import Table from "../components/Table/table";
import { Icon } from "@iconify/react";
import Cards from "./AllCollections/Cards";
import "./Home.css";
function Home() {
  return (
    <div>
      <Carousel />
      <WhaleActivityContainer />
      <Table />

      <div className="main-content">
        <div className="top">
          <div className="collection">
            <h3 className="title">Top collections</h3>
            <div className="generative">
              <span className="h3">Generative</span>
              <Icon
                icon="mingcute:down-fill"
                color="#76a9fa"
                width="26"
                height="26"
              />
            </div>
          </div>

          <button
            className="generative-btn"
            style={{ cursor: "pointer" }}
            onClick={() => location.assign("/allcollections")}
          >
            View all
          </button>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
