import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import StockTickerToLeft from "../components/StockTickerToLeft";
import Features from "../components/Features";
import Softwares from "../components/Softwares";
import { ContactForm } from "../components/ContactForm";
import CookieBanner from "../components/Cookie";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <div className="my-28">
        <StockTickerToLeft />
      </div>
      <Features />
      <Softwares />
      <CookieBanner />
      <ContactForm />
    </>
  );
};

export default Home;
