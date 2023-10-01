import React from 'react';
import Details from './collections';

const Cards = () => {
  const cards = Details.map((collection, index) => (
    <div key={index} className='collection-card'>
      <div className='collection-card-img-container'>
        <img src={collection.cardImage} alt={collection.cardTitle} />
      </div>
      <div className='collection-details-container'>
        <div className='collecton-title'>{collection.cardTitle}</div>
        <p>{collection.volume}</p>
      </div>
    </div>
  ));

  return <div className='cards-container'>{cards}</div>;
};

export default Cards;