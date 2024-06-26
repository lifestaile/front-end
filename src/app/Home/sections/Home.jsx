import React from "react";
// Here we import all the sub sections of the homepage ie Navbar, Features and Hero etc

import Hero from "./Hero";
import Navbar from "./Navbar";
import FeaturedApps from "./FeaturedApps";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      {/* Navigation links like about, features and then logo, and authentication buttons ie sign up and login */}
      <Navbar />

      {/* Hero [CTA Buttons like Get Started, main h1, p tag etc] */}
      <Hero />

      {/* Featured apps basically showing newly added or popular applications */}
      <FeaturedApps />

      {/* Containing basic information like privacy policy social links etc */}
      <Footer />
    </div>
  );
};

// Note: The above is the overall implementation, structure of the homepage and many more stuffs can be added to it
export default HomePage;
