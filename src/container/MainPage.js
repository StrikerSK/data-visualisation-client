import React from "react";
import {apexItems, nivoItems, rechartsItems} from "../components/LinkMenuBox";
import styled from 'styled-components'
import BreadcrumbLink from "../components/BreadcrumLink";
import MainContent from "../components/MainContent";

const MainContainer = styled.div`
	height: 100vh;
	width: 100vw;
	
	display: grid;
	
	grid-template-columns: 10px 1fr 10px;
	grid-template-rows: 0.6fr 0.4fr;
`;

const BreadcrumbBox = styled.div`
	width: 100%;
	height: max-content;
	
	grid-row: 2;
	grid-column: 2;
	
	justify-self: center;
	align-self: start;
	
	display: grid;
	grid-template-rows: repeat(3, max-content);
	
	@media screen and (max-width: 770px) {
		margin-left: 5px;
		margin-right: 5px;
		
		grid-row-gap: 20px;

		grid-template-columns: 100%;
	}
`;

const MainPage = () => {

	return (
		<MainContainer>
			<MainContent/>
			<BreadcrumbBox>
				<BreadcrumbLink name={"Nivo:"} itemList={nivoItems}/>
				<BreadcrumbLink name={"Recharts:"} itemList={rechartsItems}/>
				<BreadcrumbLink name={"Apex:"} itemList={apexItems}/>
			</BreadcrumbBox>
		</MainContainer>
	)
};
export default MainPage;