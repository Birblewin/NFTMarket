import TableContainer from "./TableContainer";
import { Icon } from "@iconify/react";


const Table = () => {
  return (
    <div className="table">
      <div className="top-coll-header">
          <h3 className="">Top Collections</h3>
        
        <div className="total-time">
          <div className="total-bar">
            
              <span className="tot-24-vol flex flex-row flex-nowrap">Total 24h Volume: </span> <span className="flex flex-row flex-nowrap"><span className="font-bold  mx-2">450.6k ₳</span>{" "}
              <span className="loss flex flex-row flex-nowrap">
                <Icon
                  icon="tdesign:arrow-left-down"
                  color="#f05252"
                  width="15"
                  height="15"
                  hFlip={true}
                />{" "}
                26.78%
              </span>
            </span>
           
          </div>
          <div className="time-frames">
            <div>1h</div>
            <div>24h</div>
            <div>7d</div>
            <div>30d</div>
            <div>All</div>


            <span className="bt none"  style={{cursor: "pointer"}} onClick={() => location.assign('/allcollections')}>View All</span>

          </div>
        </div>
        <div></div>
      </div>
      <div className="table-cont w-screen justify-center place-content-center">
        <TableContainer />
      </div>
      <button className="btn lg-hidden mt-4">View All</button>
    </div>
  );
};

export default Table;
