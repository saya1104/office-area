import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
	min-height: 100%;
	position: relative;
}
body {
	background-color: #16223F;
	color: #FFF;
	font-size: 18px;
	font-family: 'Inter';
}`;

export default GlobalStyle;
