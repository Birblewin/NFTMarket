import React from 'react';
import Details from './Collection';

import { Icon } from "@iconify/react";

const Cards = () => {
  const cards = Details.map((collection, index) => (
    <div key={index} className='collection-card border border-gray-600 bg-gray-900 rounded p-10 w-full hover:transform hover:scale-105 transition-transform duration-400'>
      <div className='collection-card-img-container'>
        <img src={collection.cardImage} alt={collection.cardTitle} className='w-full rounded-t-2xl' />
      </div>
      <div className='collection-details-container p-10 text-gray-400 text-base'>
        <div className='collection-title flex items-center font-bold text-blue-400'>
          {collection.cardTitle}
          <Icon icon="fluent:checkmark-starburst-16-filled" color="#75a8f9" width="16" height="16" className="ml-2" />
        </div>
        <p className='volume font-bold'>
          {collection.volume}
          <span className='light-300'>  Volume</span>
        </p>
      </div>
    </div>
  ));

  return <div className='grid grid-cols-5 gap-20 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2'>{cards}</div>;
};

export default Cards;
