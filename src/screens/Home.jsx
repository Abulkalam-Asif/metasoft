import React from "react";
import LargeScreenNav from "../components/LargeScreenNav";
import SmallScreenNav from "../components/SmallScreenNav";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <SmallScreenNav />
      <LargeScreenNav />
      <Hero />
      <AboutSection />
      <WhyChooseUs/>
    </>
  );
};

export default Home;
