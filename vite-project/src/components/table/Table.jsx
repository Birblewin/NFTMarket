import React from "react";
import TableContainer from "./TableContainer";
import { Icon } from "@iconify/react";

const Table = () => {
  return (
    <div className="table">
      <div className="top-coll-header">
          <h3>Top Collections</h3>
        
        <div className="total-time">
          <div className="total-bar">
            
              <span className="tot-24-vol">Total 24h Volume: </span> <span><span className="bold">450.6k ₳</span>{" "}
              <span className="loss">
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
            <span className="bt none">View All</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="table-cont">
        <TableContainer />
      </div>
      <button className="btn lg-hidden">View All</button>
    </div>
  );
};

export default Table;
