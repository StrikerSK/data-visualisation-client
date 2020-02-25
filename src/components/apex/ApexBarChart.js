import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {monthArray} from "../checkboxes/CheckboxMonths";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";
import {isDesktop} from "../../lib/Functions";

const ApexBarChart = ({months, person, validity, sellType, barLayout, barGrouping}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		chart: {
			type: 'bar',
			stacked: barGrouping === "stacked"
		},
		dataLabels: {
			enabled: isDesktop() && barGrouping === "stacked"
		},
		plotOptions: {
			bar: {
				horizontal: barLayout === "horizontal",
			},
		},
		stroke: {
			width: 1,
			colors: ['#fff']
		},
		xaxis: {
			categories: monthArray,
		},
		fill: {
			opacity: 1

		},
		legend: {
			position: 'top',
			horizontalAlign: 'center',
			offsetX: 30
		}
	};

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, barLayout, barGrouping, validity, sellType]);

	const chart = <ReactApexChart options={options} series={data} type="bar" height={"100%"} width={"100%"}/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(ApexBarChart);
