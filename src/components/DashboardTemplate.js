import React from "react";
import styled from "styled-components";
import {HeaderComponent} from "./LayoutContainers";

const DashboardBox = styled.div`
	width: 99%;
	height: 125vh;
	
	display: grid;
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
	width: 100%;
	height: 100%;

	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	
	@media screen and (max-width: 770px) {
		grid-column: 1;
		grid-row: ${props => props.mrow};
	}
`;

const DashboardTemplate = ({children}) => {
	return (
		<DashboardBox>
			<DashboardItem row={1} mrow={1} column={"2/4"}>
				<HeaderComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={2} column={2}>
				{children[0]}
			</DashboardItem>
			<DashboardItem row={3} mrow={3} column={3}>
				{children[1]}
			</DashboardItem>
			<DashboardItem row={2} mrow={4} column={3}>
				{children[2]}
			</DashboardItem>
			<DashboardItem row={3} mrow={5} column={2}>
				{children[3]}
			</DashboardItem>
		</DashboardBox>
	);
};
export default DashboardTemplate;
