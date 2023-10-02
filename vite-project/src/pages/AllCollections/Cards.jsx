import React from 'react';
import Details from './collections';

import { Icon } from "@iconify/react";

const Cards = () => {
  const cards = Details.map((collection, index) => (
    <div key={index} className='collection-card'>
      <div className='collection-card-img-container'>
        <img src={collection.cardImage} alt={collection.cardTitle} />
      </div>
      <div className='collection-details-container'>
        <div className='collection-title'>{collection.cardTitle} <Icon icon="fluent:checkmark-starburst-16-filled" color="#75a8f9" width="16" height="16" /></div>
        <p className='volume'>{collection.volume} <span className='light-300'>  Volume</span></p>
      </div>
    </div>
  ));

  return <div className='cards-container'>{cards}</div>;
};

export default Cards;