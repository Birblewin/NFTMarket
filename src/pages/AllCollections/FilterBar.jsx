import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Icon } from "@iconify/react";

const FilterBar = () => {
  return (
    <div className="px-6">
        <div className="filter-bar-container   rounded-lg  border-2 h-20 p-5 pt-7 border-gray-600 w-full ">
      
      <div className="filter-bar flex justify-between">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-2 ">
            <FilterAltOutlinedIcon className="text-gray-200 " />
            Categories
          </div>
          <div className="flex items-center gap-2 ">
            <Icon
              icon="tabler:caret-up-down"
              color="white"
              width="17"
              height="30"
            />
            All Time Volume
          </div>
        </div>
     
       <div>
       <div className="search-area flex">
          <div className="search-area-bar flex items-center border-b border-gray-500">
            <input
              className="coll-search-bar flex-shrink-0 bg-transparent  rounded-md"
              type="text"
              placeholder="Search collections"
              name="searchInput"
            />
            <SearchIcon className="coll-search-icon text-slate-500" />
          </div>
          <div className="verified flex items-center font-bold text-gray-200 text-base ml-5">
            Verified Only
            <Icon
              icon="fluent:checkmark-starburst-16-filled"
              color="#75a8f9"
              width="16"
              height="16"
              className="ml-2"
            />
            <Icon
              icon="mingcute:down-line"
              color="#ccd1de"
              width="15"
              height="15"
              hFlip={true}
              className="ml-1"
            />
          </div>
        </div>
      </div>
       </div>
    </div>
    </div>
  );
};

export default FilterBar;
