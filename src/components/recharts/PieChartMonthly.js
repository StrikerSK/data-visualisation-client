import React, {useState, useEffect} from "react";
import PieChartElement from "./PieChartElement";
import {rechartsBarDataGetter} from "../../lib/DataFetcher";
import styled from "styled-components";

const PieChartsBox = styled.div`
	width: 100%;
	height: 150vh;
	display: grid;

	grid-template-columns: repeat(3, 33.33%);
	grid-template-rows: repeat(4, 25%);
	
	@media screen and (max-width: 770px) {
		margin-left: 5px;
		margin-right: 5px;

		height: 200vh;

		grid-template-columns: 100%;
		grid-template-rows: repeat(12, 400px);
	}
`;

const PieChartMonthly = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		rechartsBarDataGetter([], setData);
	}, []);

	return (
		<div>
			<h1>Mesačná predajnosť lístkov PID</h1>
			<PieChartsBox>
				{data.map((monthData) =>
					<PieChartElement myData={monthData} radius={100}/>
				)}
			</PieChartsBox>
		</div>
	);
};

export default PieChartMonthly;
