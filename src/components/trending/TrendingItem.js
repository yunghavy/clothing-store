
import React from 'react';
import './TrendingItems.css';

const TrendingItem = ({ name, image, alt }) => {
  return (
    <div className="trending-item">
      <img src={image} alt={alt} />
      <p className="item-name">{name}</p>
    </div>
  );
};

export default TrendingItem;
