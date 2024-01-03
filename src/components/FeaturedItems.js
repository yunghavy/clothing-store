
import React from 'react';
import './FeaturedItems.css';

const FeaturedItems = ({ data }) => {
  return (
    <div className="featured-section">
      <h2>Featured</h2>
      <div className="featured-items">
        {data.map((item, index) => (
          <div className="featured-item" key={index}>
            <img src={require(`../images/${item.image}`).default} alt={item.name} />
            <p className="item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
