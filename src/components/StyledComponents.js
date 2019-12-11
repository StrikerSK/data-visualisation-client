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

export const DashboardBox = styled.div`
	display: grid;
	height: 125vh;
	width: 99%;

	grid-row-gap: 5px;
	
	grid-template-columns: 10px repeat(2, 50%) 10px;
	grid-template-rows: 100px repeat(2, 50%);
	
	@media screen and (max-width: 770px) {
		margin-left: 5px;
		margin-right: 5px;

		height: 180vh;

		grid-template-columns: 100%;
		grid-template-rows: 100px repeat(4, 25%);
	}
`;

export const DashboardItem = styled.div`
	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	
	@media screen and (max-width: 770px) {
		grid-column: 1;
		grid-row: ${props => props.mrow};
	}
`;