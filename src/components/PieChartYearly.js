import React, {useState, useEffect} from 'react';
import '../css/PieChart.scss';
import PieChartElement from "./Recharts/PieChartElement";

const PieChartYearly = () => {
	const [data, setData] = useState([]);
	const [sum, setSum] = useState(0);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:5000/yearly", {
			method: "GET"
		}).then(response => response.json())
			.then((result) => processData(result))
	};

	const processData = (result) => {
		getSum(result);
		setData(result);
	};

	const getSum = (myArray) => {
		let functionSum = 0;
		myArray.forEach(({value}) => {
			functionSum += value;
		});
		setSum(functionSum);
	};

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
