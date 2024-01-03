
import React from 'react';
import './FeaturedItems.css';

const FeaturedItem = ({ name, image, alt }) => {
  return (
    <div className="featured-item">
      <img src={image} alt={alt} />
      <p className="item-name">{name}</p>
    </div>
  );
};

export default FeaturedItem;
