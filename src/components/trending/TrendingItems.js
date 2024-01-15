

import React from 'react';
import './TrendingItems.css';
import TrendingItem from './TrendingItem';

import trendingItem1 from '../../images/trending-shoe.jpg';
import trendingItem2 from '../../images/hoody.jpg';
import trendingItem3 from '../../images/trouser.jpg';
import trendingItem4 from '../../images/adiddasshoe.jpg';
import trendingItem5 from '../../images/sweater.jpg';
import trendingItem6 from '../../images/sweatshirt.jpg';

const TrendingItems = () => {
  return (
    <div className="trending-segment">
      <h2>Trending</h2>
      <div className="trending-items">
        <TrendingItem name="Trendy Shoe" image={trendingItem1} alt="Trending Item 1" />
        <TrendingItem name="Fashionable Hoodie" image={trendingItem2} alt="Trending Item 2" />
        <TrendingItem name="Stylish Trousers" image={trendingItem3} alt="Trending Item 3" />
        <TrendingItem name="Trendy Shoe" image={trendingItem4} alt="Trending Item 4" />
        <TrendingItem name="Fashionable Sweater" image={trendingItem5} alt="Trending Item 5" />
        <TrendingItem name="Stylish Sweat Shirt" image={trendingItem6} alt="Trending Item 6" />
      </div>
    </div>
  );
};

export default TrendingItems;
