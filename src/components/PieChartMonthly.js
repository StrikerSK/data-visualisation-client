import React, {useState, useEffect} from 'react';
import '../css/PieChart.scss';
import PieChartElement from "./PieChartElement";

const PieChartMonthly = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:5000/monthly", {method: "GET"}).then(response => response.json()).then((result) => setData(result))
	};

	return(
		<div>
			<h1>Mesačný predaj lístkov PID za rok 2017</h1>
			<div className={"pieChartsContainer"}>
				{data.map(({monthData, month}) =>
					<PieChartElement myData={monthData} radius={100} name={month}/>
				)}
			</div>
		</div>
	);
};
export default PieChartMonthly;
