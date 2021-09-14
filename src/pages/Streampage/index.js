import React from "react";
import Chat from "../../components/Chat";
import Player from "../../components/Player";
import Logo from "../../components/Logo";
import { StreampageContainer, MainContainer } from "./Styles";

const Streampage = () => {
  return (
    <StreampageContainer>
      <Logo />
      <MainContainer>
        <Player />
        <Chat />
      </MainContainer>
    </StreampageContainer>
  );
};

export default Streampage;
