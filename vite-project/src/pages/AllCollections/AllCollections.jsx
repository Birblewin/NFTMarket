import Cards from "./Cards";
import FilterBar from "./FilterBar";

import { Icon } from "@iconify/react";
import "./styles.css";

const AllCollections = () => {
  return (
    <div className="all-collections">
      <div className="explore">
        <h1>Explore</h1>
        <span className="coll-drop">
          All Collections
          <Icon
            icon="ep:arrow-down-bold"
            color="#75a8f9"
            width="34"
            height="34"
          />
        </span>
      </div>
      <FilterBar />

      <Cards />
    </div>
  );
};

export default AllCollections;
