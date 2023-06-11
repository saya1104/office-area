import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
  position: relative;
}

body {
  background-color: #16223F;
  color: #FFF;
  font-size: 18px;
  font-family: 'Inter';
  width: 100%;
}

h1 {
  margin: 0;
}

h2 {
  font-family: 'YuGothic';
  font-size: 87px;
  margin: 0;
}

h3 {
  font-size: 34px;
}

p{
  text-align: justify;
  text-justify: inter-ideograph;
}

.swiper {
  width: 80%;
}

.swiper-pagination-bullet {
  background-color: #ff388a;
  height: 13px;
  width: 13px;
}

.swiper-wrapper {
  padding-bottom: 50px;
  max-width: 1200px;
  width: 80%;
}
`;

export default GlobalStyle;
