import React, { useState } from "react";

const HorizontalScroller = ({ children }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    setScrollLeft(scrollLeft - 100);
  };

  const handleScrollRight = () => {
    setScrollLeft(scrollLeft + 100);
  };

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <button onClick={handleScrollLeft}>&lt;</button>
      <div style={{ scrollLeft: scrollLeft }}>{children}</div>
      <button onClick={handleScrollRight}>&gt;</button>
    </div>
  );
};

export default HorizontalScroller;
