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
        <div className="top flex flex-col flex-nowrap items-center  p-5 md:flex-row">
          <div className=" flex flex-row flex-nowrap gap-1 items-center text-left mr-20  ">

            <div className="flex flex-row flex-nowrap gap-2 items-center whitespace-nowrap text-2xl mr-auto w-full justify-self-start text-left ">Top collections

            <div className="flex flex-row flex-nowrap gap-1">
              <span className="h3 text-2xl font-bold flex flex-row flex-nowrap items-center">Generative</span>
              <Icon
                icon="mingcute:down-fill"
                color="#76a9fa"
                width="26"
                height="26"
              />
            </div></div>
            
          </div>

          <button
            className="generative-btn flex items-center justify-center px-8 py-4 h-10 cursor-pointer ml-auto "
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
