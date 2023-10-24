import Details from './Collection';

import { Icon } from "@iconify/react";

const Cards = () => {
  const cards = Details.map((collection, index) => (
    <div key={index} className='collection-card rounded-lg  border border-solid border-gray-600 w-full hover:transform hover:scale-105 transition-transform duration-400'>
      <div className='collection-card-img-container'>
        <img src={collection.cardImage} alt={collection.cardTitle} className='w-full rounded-t-lg' />
      </div>
      <div className='collection-details-container px-3 py-5 text-gray-400 text-base'>
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

  return <div className='cards gap-3 py-10 px-5 grid md:grid-cols-3  sm:grid-cols-3 lg:grid-cols-5 lg:px-20'>{cards}</div>;
};

export default Cards;
