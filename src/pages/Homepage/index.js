import React from "react";
import Header from "./../../components/Header";
import Slideshow from "./../../components/Slideshow";
import Streams from "./../../components/Streams";
import Sponsors from "./../../components/Sponsors";
import { HomepageContainer } from "./Styles";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Header />
      <Slideshow />
      <Streams />
      <Sponsors />
    </HomepageContainer>
  );
};

export default Homepage;
