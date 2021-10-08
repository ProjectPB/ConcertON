import React from "react";
import Header from "./../../components/Header";
import Slideshow from "./../../components/Slideshow";
import Streams from "./../../components/Streams";
import Sponsors from "./../../components/Sponsors";
import Footer from "../../components/Footer";
import { HomepageContainer } from "./Styles";

const Homepage = ({ loading }) => {
  return (
    <HomepageContainer
      style={
        loading
          ? {
              visibility: "hidden",
              height: "0px",
              overflow: "hidden",
            }
          : {}
      }
    >
      <Header options />
      <Slideshow />
      <Streams />
      <Sponsors />
      <Footer />
    </HomepageContainer>
  );
};

export default Homepage;
