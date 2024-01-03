

import React from 'react';
import './TrendingItems.css';
import TrendingItem from './TrendingItem';

import trendingItem1 from '../images/trending-shoe.jpg';
import trendingItem2 from '../images/hoody.jpg';
import trendingItem3 from '../images/trouser.jpg';

const TrendingItems = () => {
  return (
    <div className="trending-segment">
      <h2>Trending</h2>
      <div className="trending-items">
        <TrendingItem name="Trendy Shoe" image={trendingItem1} alt="Trending Item 1" />
        <TrendingItem name="Fashionable Hoodie" image={trendingItem2} alt="Trending Item 2" />
        <TrendingItem name="Stylish Trousers" image={trendingItem3} alt="Trending Item 3" />
        <TrendingItem name="Trendy Shoe" image={trendingItem1} alt="Trending Item 1" />
        <TrendingItem name="Fashionable Hoodie" image={trendingItem2} alt="Trending Item 2" />
        <TrendingItem name="Stylish Trousers" image={trendingItem3} alt="Trending Item 3" />
      </div>
    </div>
  );
};

export default TrendingItems;
