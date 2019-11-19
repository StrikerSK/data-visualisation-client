import React, {useEffect, useState} from "react";
import "../../stylesheet/PieChart.scss";
import PieChartElement from "./PieChartElement";
import {rechartsBarDataGetter} from "../../lib/DataFetcher";


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
		rechartsBarDataGetter([], processData);
	}, []);

	return (
		<div className="pieChartContainer">
			<h1>Celkový predaj lístkov PID za rok 2017</h1>
			<div className={"dataTable"}>
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
			</div>
			<PieChartElement myData={data} radius={250}/>
		</div>
	);
};

export default PieChartYearly;
