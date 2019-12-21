import styled, {createGlobalStyle} from "styled-components";

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

export const ApexRoundShapes = styled.div`
  	grid-column: 1;
  	justify-self: center;
  	
  	width: 75%;
  	height: 75%;
  	
  	margin: 0 auto;
  	
  	@media screen and (max-width: 770px) {
		width: 100%;
		height: 100%;
		
		align-self: center;
	}
`;