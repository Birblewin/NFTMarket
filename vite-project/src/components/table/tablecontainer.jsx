import React, { Component } from "react";
import "./table.css"; // Import the CSS file
import { Icon } from "@iconify/react";

const TableContainer = () => {
  let data = [
    {
      id: 1,
      Collections: "Reezy",
      Volume: [757, "1.20%"],
      Floors: [444, "6.05%"],
      Owners: [34, "2.05%"],
    },
    {
      id: 2,
      Collections: "Earthnodes",
      Volume: [787, "3.90%"],
      Floors: [446, "7.90%"],
      Owners: [34, "2.05%"],
    },
    {
      id: 3,
      Collections: "Solitary",
      Volume: [770, "1.86%"],
      Floors: [678, "4.07%"],
      Owners: [34, "2.05%"],
    },
    {
      id: 4,
      Collections: "Justuse",
      Volume: [857, "3.89%"],
      Floors: [784, "3.09%"],
      Owners: [34, "2.05%"],
    },
    {
      id: 5,
      Collections: "CrazyPie",
      Volume: [977, "3.35%"],
      Floors: [408, "5.57%"],
      Owners: [34, "2.05%"],
    },
    {
      id: 6,
      Collections: "Enegri",
      Volume: [457, "4.46%"],
      Floors: [874, "3.46%"],
      Owners: [34, "2.05%"],
    },
    // Add more objects as needed
  ];

  const tableRow = data.map((coll, index) => {
    return (
      <div key={index} className="top-table div">
        <div className="coll-no">{coll.id}</div>
        <div className="collection-name">
          <span>
            <Icon
              icon="pajamas:profile"
              color="#ccd1de"
              width="38"
              height="38"
              hFlip={true}
            />
          </span>{" "}
          <span>{coll.Collections}</span>
        </div>
        <div className="table-cell coll-volume">
          <span>{coll.Volume[0]}</span>
          <span className="gain">
            <Icon
              icon="tdesign:arrow-left-down"
              color="#1ecd4f"
              width="15"
              height="15"
              hFlip={true}
              vFlip={true}
            />
            {coll.Volume[1]}
          </span>
        </div>
        <div className="table-cell coll-floor">
          <span>{coll.Floors[0]}</span>
          <span className="loss">
            <Icon
              icon="tdesign:arrow-left-down"
              color="#f05252"
              width="15"
              height="15"
              hFlip={true}
            />
            {coll.Floors[1]}
          </span>
        </div>
        <div className="table-cell coll-owners">
          <span>{coll.Owners[0]}</span>

          <span className="gain">
            <Icon
              icon="tdesign:arrow-left-down"
              color="#1ecd4f"
              width="15"
              height="15"
              hFlip={true}
              vFlip={true}
            />
            {coll.Owners[1]}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="TableContainer">
      <div className="table-section">
        <div className="top-table cont">
          <div className="coll-no"></div>
          <div className="collection-name"> COLLECTION</div>
          <div className="coll-volume">VOLUME</div>
          <div className="coll-floor">FLOOR</div>
          <div className="coll-owners">OWNER</div>
        </div>
        <div className="table-1">{tableRow}</div>
      </div>
      <div className="table-section">
        <div className="top-table cont">
          <div className="coll-no"></div>
          <div className="collection-name"> COLLECTION</div>
          <div className="coll-volume">VOLUME</div>
          <div className="coll-floor">FLOOR</div>
          <div className="coll-owners">OWNER</div>
        </div>
        <div className="table-1">{tableRow}</div>
      </div>
    </div>
  );
};

export default TableContainer;
