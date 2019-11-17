import React, {useState, useEffect} from 'react';
import '../../css/PieChart.scss';
import PieChartElement from "./PieChartElement";
import {rechartsBarDataGetter} from "../../lib/DataFetcher";

const PieChartMonthly = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		rechartsBarDataGetter([], setData);
	}, []);

	return (
		<div>
			<h1>Mesačná predajnosť lístkov PID</h1>
			<div className={"pieChartsContainer"}>
				{data.map((monthData) =>
					<PieChartElement myData={monthData} radius={100}/>
				)}
			</div>
		</div>
	);
};
export default PieChartMonthly;
