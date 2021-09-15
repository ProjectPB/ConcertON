import React from "react";
import Chat from "../../components/Chat";
import Header from "../../components/Header";
import Player from "../../components/Player";
import { StreampageContainer, MainContainer } from "./Styles";

const Streampage = () => {
  return (
    <StreampageContainer>
      <Header />
      <MainContainer>
        <Player />
        <Chat />
      </MainContainer>
    </StreampageContainer>
  );
};

export default Streampage;
