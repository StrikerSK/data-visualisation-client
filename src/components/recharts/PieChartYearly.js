import React, {useEffect, useState} from "react";
// import "../../stylesheet/PieChart.scss";
import PieChartElement from "./PieChartElement";
import {pieDataGetter} from "../../lib/DataFetcher";
import styled from "styled-components";

const DataTableLayout = styled.div`
	grid-column: 1;
	grid-row: 2;
	place-self: center;
`;

const PieChartContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 150px 1fr;
`;

const PieChartYearly = () => {
	const [data, setData] = useState([]);
	const [sum, setSum] = useState(0);

	const getSum = (myArray) => {
		let functionSum = 0;
		myArray.forEach(({value}) => {
			functionSum += value;
		});
		setSum(functionSum);
	};

	const processData = (result) => {
		getSum(result);
		setData(result);
	};

	useEffect(() => {
		pieDataGetter([], processData);
	}, []);

	return (
		<PieChartContainer>
			<h1>Celkový predaj lístkov PID za rok 2017</h1>
			<DataTableLayout>
				<table className={"rwd-table"}>
					<tr>
						<th>Kategorie</th>
						<th>Počet</th>
					</tr>
					{data.map(({nazov, value}) =>
						<tr>
							<td>{nazov}</td>
							<td>{value}</td>
						</tr>
					)}
					<tr>
						<td>Spolu</td>
						<td>{sum}</td>
					</tr>
				</table>
			</DataTableLayout>
			<PieChartElement myData={pieDataGetter([], processData)} radius={250}/>
		</PieChartContainer>
	);
};

export default PieChartYearly;
