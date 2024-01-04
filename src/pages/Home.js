
import React from "react";
import "./Home.css";
import TrendingItems from "../components/trending/TrendingItems";
import FeaturedItems from '../components/featured/FeaturedItems';
import Fleek from '../components/Fleek/Fleek';
import Spring from '../components/spring/SpringItems';


const Home = () => {

  return (
    <div className="home">
      <div className="marquee-container">
        <p className="marquee">Save Up to 40%</p>
      </div>
      <div className="parallaxBg">
       <div className="content">
        <h1>Welcome to Clothing Store</h1>
        <p>Discover the latest trends in fashion.</p>
        <button className="button">Shop Today</button>
      </div> 
      </div>
      <div className="home-items-container">
        <TrendingItems />
      </div>

      <div className="home-items-container">
        <FeaturedItems />
      </div>

      <div className="home-items-container">
      <Fleek />
      </div>
      <div className="home-items-container">
      <Spring />
      </div>

    </div>
  );
};

export default Home;
