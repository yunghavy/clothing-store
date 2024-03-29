
import React from 'react';
import './FeaturedItems.css';
import FeaturedItem from './FeaturedItem';

import featuredItem1 from '../../images/featured1.jpg';
import featuredItem2 from '../../images/featured2.jpg';
import featuredItem3 from '../../images/featured3.jpg';

const FeaturedItems = () => {
  return (
    <div className="featured-segment">
      <h2>Featured</h2>
      <div className="featured-items">
        <FeaturedItem name="Nike shoes" image={featuredItem1} alt="Nike featured" />
        <FeaturedItem name="V-neck t-shirts" image={featuredItem2} alt="V-neck featured" />
        <FeaturedItem name="Leather Jackets" image={featuredItem3} alt="Leather jackets" />
      </div>
    </div>
  );
};

export default FeaturedItems;
