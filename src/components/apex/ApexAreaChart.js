import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts'

import {apexDataFetcher} from "../../lib/DataFetcher";
import {GraphContainer} from "../LayoutContainers";
import SpinnerComponent from "../SpinnerComponent";
import {monthArray} from "../checkboxes/CheckboxMonths";

const ApexAreaChart = () => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options =  {
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			categories: monthArray,
		},
		yaxis: {
			min: 0,
			max: 200000
		}
	};

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		apexDataFetcher([], finaliseTransaction);
	}, []);

	const chart = <Chart options={options} series={data} type="area" />;

	return (
		<GraphContainer>
			<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
		</GraphContainer>
	);
};
export default ApexAreaChart;
