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
	width: 100%;
}
h1 {
	margin: 0;
}
h2 {
	font-family: 'YuGothic';
	font-size: 87px;
	margin: 0;
}`;

export default GlobalStyle;
