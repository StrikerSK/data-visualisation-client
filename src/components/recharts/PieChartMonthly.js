import React, {useState, useEffect} from "react";
import "../../stylesheet/PieChart.scss";
import PieChartElement from "./PieChartElement";
import {rechartsBarDataGetter} from "../../lib/DataFetcher";
import styled from "styled-components";

const PieChartsBox = styled.div`
	width: 100%;
	height: 200vh;
	display: grid;

	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);

	grid-column-gap: 10px;
	grid-row-gap: 20px;
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
