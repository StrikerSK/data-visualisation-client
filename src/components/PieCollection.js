import React, {useState, useEffect} from 'react';
import '../App.css';
import PieChartElement from "./PieChartElement";

const PieCollection = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:5000/monthly", {method: "GET"}).then(response => response.json()).then((result) => setData(result))
	};

	return(
		<div>
			<h1>Monthly pie charts for year 2017</h1>
			<div className={"pieChartsContainer"}>
				{data.map(({monthData}) =>
					<PieChartElement myData={monthData} radius={100}/>
				)}
			</div>
		</div>
	);
};
export default PieCollection;
