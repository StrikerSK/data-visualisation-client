import React from "react";
import {nivoItems, rechartsItems} from "../components/LinkMenuBox";
import styled from 'styled-components'
import BreadcrumbLink from "../components/BreadcrumLink";
import MainContent from "../components/MainContent";

const MainContainer = styled.div`
	height: 100vh;
	width: 100vw;
	
	display: grid;
	
	grid-template-columns: 10px 1fr 10px;
	grid-template-rows: 60% 40%;
`;

const BreadcrumbBox = styled.div`
	width: 100%;
	height: max-content;
	
	grid-row: 2;
	grid-column: 2;
	
	justify-self: center;
	align-self: start;
	
	display: grid;
	grid-template-rows: repeat(2, max-content);
`;

const MainPage = () => {

	return (
		<MainContainer>
			<MainContent/>
			<BreadcrumbBox>
				<BreadcrumbLink name={"Nivo:"} itemList={nivoItems}/>
				<BreadcrumbLink name={"Recharts:"} itemList={rechartsItems}/>
			</BreadcrumbBox>
		</MainContainer>
	)
};
export default MainPage;