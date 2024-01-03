// Home.js

import React from "react";
import "./Home.css";
import TrendingItems from "../components/trending/TrendingItems";
import FeaturedItems from '../components/featured/FeaturedItems';
import Fleek from '../components/Fleek/Fleek';

const Home = () => {
  return (
    <div className="home">
      <div className="parallaxBg"></div>
      {/* <div className="content">/
        <h1>Welcome to Clothing Store</h1>
        <p>Discover the latest trends in fashion.</p>
      </div> */}
     
      <div className="home-items-container">
        <TrendingItems />
      </div>

      <div className="home-items-container">
        <FeaturedItems />
      </div>

      <div className="home-items-container">
      <Fleek />
      </div>
      
    </div>
  );
};

export default Home;
