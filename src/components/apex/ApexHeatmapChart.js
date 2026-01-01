import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {monthArray} from "../controlls/checkboxes/CheckboxMonths";
import {accessAll} from "../../lib/ReduceAccessor";

const colors = ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78',
	'#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
];

const ApexHeatmapChart = ({months, person, validity, sellType}) => {
	const [series, setSeries] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setSeries(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType]);

	const options = {
		dataLabels: {
			enabled: false
		},
		colors: colors,
		xaxis: {
			type: 'category',
			categories: monthArray
		}
	};

	const chart = <ReactApexChart options={options} series={series} type="heatmap" width="100%" height="100%" className={"apex-chart"}/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(ApexHeatmapChart);
