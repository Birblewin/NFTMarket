import React from "react";
import Cards from "./Cards";
import FilterBar from "./FilterBar";
import './styles.css'

const AllCollections = () => {
  return (
    <div className="all-collections">
      <div className="explore">
        <h1>Explore</h1>
        <span>All Collections</span>
      </div>
      <FilterBar />
     
      <Cards />
    </div>
  );
};

export default AllCollections;
