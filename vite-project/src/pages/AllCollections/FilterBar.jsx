import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Icon } from "@iconify/react";

const FilterBar = () => {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        <div className="categories">
          <div className="filter-icon">
            {" "}
            <FilterAltOutlinedIcon />
            Categories
            
          </div>
          <div className="filter-icon">
            <Icon
              icon="tabler:caret-up-down"
              color="white"
              width="17"
              height="30"
            />
            All Time Volume
          </div>
        </div>
        <div className="search-area">
          <div className="search-area-bar">
            <input
              className="coll-search-bar"
              type="text"
              placeholder="Search collections"
              name="searchInput"
            />
            <SearchIcon className="coll-search-icon" />
          </div>
          <div>
            <span className="verified">Verified Only
            <Icon icon="fluent:checkmark-starburst-16-filled" color="#75a8f9" width="16" height="16" /> <span className="drop"><Icon icon="mingcute:down-line" color="#ccd1de" width="15" height="15" hFlip={true} /></span></span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
