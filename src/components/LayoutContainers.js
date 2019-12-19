import React from "react";
import styled from 'styled-components'
import {LinkMenuBox} from "./LinkMenuBox";

const Header = styled.h1`
	text-align: center;
	font-weight: normal;
	letter-spacing: -1px;
	color: #34495E;
	
	grid-column: 1 / 3;
	grid-row: 1;
	place-self: center;

	@media screen and (max-width: 770px) {
		grid-row: 1;
	}
`;

const OptionsComponent = styled.div`
  	grid-column: 2;
	grid-row: 2;
	justify-self: center;

	@media screen and (max-width: 770px) {
		grid-column: 1;
		grid-row: 3;
		width: 90%;
		margin: 0 auto;
	}
`;

const GraphBox = styled.div`
	display: grid;
	height: 95vh;
	width: 99vw;

	grid-column-gap: 5px;
	grid-row-gap: 5px;
	grid-template-columns: 70% 30%;
	grid-template-rows: 100px 90%;

	@media screen and (max-width: 770px) {
		margin-left: 10px;
		margin-right: 10px;

		width: 95vw;
		height: 125vh;

		grid-row-gap: 20px;
		grid-template-columns: 100%;
		grid-template-rows: 100px 45% 45%;
	}
`;

export const HeaderComponent = () => {
	return <Header>Predajnosť lístkov PID</Header>
};

export const OptionComponent = ({children}) => {
	return (
		<OptionsComponent>{children}</OptionsComponent>
	);
};

export const GraphContainer = ({children}) => {
	return (
		<GraphBox>
			<LinkMenuBox/>
			<HeaderComponent/>
			{children}
		</GraphBox>
	);
};
