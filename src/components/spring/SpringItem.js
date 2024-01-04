
import React from 'react';
import './SpringItems.css';

const SpringItem = ({ name, image, alt, price }) => {
  return (
    <div className="featured-item">
      <img src={image} alt={alt} />
      <p className="item-name">{name}</p>
      <p className="item-price">{price}</p>
    </div>
  );
};

export default SpringItem;
