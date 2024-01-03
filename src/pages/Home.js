// Home.js

import React from "react";
import "./Home.css";
import TrendingItems from "../components/TrendingItems";
import FeaturedItems from '../components/FeaturedItems';
import featuredData from '../data/featuredData.json';

const Home = () => {
  return (
    <div className="home">
      <div className="parallaxBg"></div>
      {/* <div className="content">
        <h1>Welcome to Clothing Store</h1>
        <p>Discover the latest trends in fashion.</p>
      </div> */}
     
      <div className="trending-items-container">
        <TrendingItems />
      </div>

      <div className="featured-items-container">
        <FeaturedItems data={featuredData} />
      </div>
    </div>
  );
};

export default Home;
