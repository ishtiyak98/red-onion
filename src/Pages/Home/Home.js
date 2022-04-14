import React from "react";
import DishSection from "../DishSection/DishSection";
import Header from "../Header/Header";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeBanner></HomeBanner>
      <DishSection></DishSection>
    </div>
  );
};

export default Home;
