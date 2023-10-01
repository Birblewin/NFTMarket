import React from "react";
import Cards from "./Cards";
import './styles.css'

const AllCollections = () => {
  return (
    <div className="all-collections">
      <div>
        <h1>Explore</h1>
      </div>
      <div className="filter-bar">
        <div className="categories">
          <div>Categories</div>
          <div>All Time Volume</div>
        </div>
        <div className="search-area">
          <div>
            <input
              className="search-bar"
              type="text"
              placeholder="Search collections"
              name="searchInput"
            />
          </div>
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default AllCollections;
