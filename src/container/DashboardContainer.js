import React from "react";
import styled from "styled-components";
import {HeaderComponent} from "../components/LayoutContainers";

import NivoPieComponent from "../components/nivo/NivoPieComponent";
import NivoBarComponent from "../components/nivo/NivoBarComponent";
import NivoLineComponent from "../components/nivo/NivoLineComponent";
import NivoBubbleComponent from "../components/nivo/NivoBubbleComponent";

const DashboardBox = styled.div`
	display: grid;
	height: 120vh;
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

const DashboardItem = styled.div`
	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	
	@media screen and (max-width: 770px) {
		grid-column: 1;
		grid-row: ${props => props.mrow};
	}
`;

const DashboardContainer = () => {
	return (
		<DashboardBox>
			<DashboardItem row={1} mrow={1} column={"2/4"}>
				<HeaderComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={2} column={2}>
				<NivoLineComponent/>
			</DashboardItem>
			<DashboardItem row={3} mrow={3} column={3}>
				<NivoBarComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={4} column={3}>
				<NivoPieComponent/>
			</DashboardItem>
			<DashboardItem row={3} mrow={5} column={2}>
				<NivoBubbleComponent/>
			</DashboardItem>
		</DashboardBox>
	);
};
export default DashboardContainer;
