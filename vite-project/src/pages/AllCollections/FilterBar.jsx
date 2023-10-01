import React from "react";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="categories">
        <div>Categories</div>
        <div>All Time Volume</div>
      </div>
      <div className="search-area">
        <div>
          <input
            className="coll-search-bar"
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
  );
};

export default FilterBar;
