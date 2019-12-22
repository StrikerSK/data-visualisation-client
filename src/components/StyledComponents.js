import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700");
  
  * {
    font-family: 'Montserrat', sans-serif !important;
  }
  
  h1 {
  	text-align: center;
  }
  
  body {
	 -webkit-font-smoothing: antialiased;
	 text-rendering: optimizeLegibility;
	 color: #444;
	 background: #eee;
  }
`;