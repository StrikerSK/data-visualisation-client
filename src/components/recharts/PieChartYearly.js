import React, {useEffect, useState} from "react";
import "../../stylesheet/PieChart.scss";
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

const TableLayout = styled.table`
	margin: 1em 0;
	min-width: 300px;
	background: #34495E;
	color: #fff;
	border-radius: .4em;
	overflow: hidden;

	tr {
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		border-color: #46637f;
	}

	th {
		display: none;
	}

	td {
		display: block;
	}

	td:first-child {
		padding-top: .5em;
	}

	td:last-child {
		padding-bottom: .5em;
	}

	td:before {
		content: attr(data-th) ": ";
		font-weight: bold;
		width: 6.5em;
		display: inline-block;
	}

	th td {
		text-align: left;
		margin: .5em 1em;
	}

	th, td:before {
		color: #dd5;
	}

	@media (min-width: 480px) {
		td:before {
			display: none;
		}

		th, td {
			display: table-cell;
			padding: .25em .5em;
			padding: 1em !important;
		}

		th:first-child, td:first-child {
			padding-left: 0;
		}

		th:last-child, td:last-child {
			padding-right: 0;
		}
	}

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
		console.log(result);
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
				<TableLayout>
					<tr>
						<th>Kategorie</th>
						<th>Počet</th>
					</tr>
					{data.map(({name, value}) =>
						<tr>
							<td>{name}</td>
							<td>{value}</td>
						</tr>
					)}
					<tr>
						<td>Spolu</td>
						<td>{sum}</td>
					</tr>
				</TableLayout>
			</DataTableLayout>
			<PieChartElement myData={data} radius={250}/>
		</PieChartContainer>
	);
};

export default PieChartYearly;
