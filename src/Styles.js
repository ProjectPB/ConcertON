import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.swiper-pagination {
  margin-bottom: 3.5%;
}

.swiper-button-prev {
  margin-left: 4%;
}

.swiper-button-next {
  margin-right: 4%;
}

html {
  height: 100%;
}

:root {
  --swiper-theme-color: #fff !important;
  background-color: black;
}

#root {
  height: 100%;
}

body {
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
  max-width: 1400px;
  background-color: black;
  height: 100%;
}
`;
