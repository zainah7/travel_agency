import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NeedsTodo from "./components/NeedsTodo";
import DealsDiscounts from "./components/ DealsDiscounts";
import Vacation from "./components/Vacation";
import AboutUs from "./components/AboutUs";
import LatestBlog from "./components/LatestBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <NeedsTodo />
      <DealsDiscounts />
      <Vacation />
      <AboutUs />
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default App;
