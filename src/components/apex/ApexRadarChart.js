import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {monthArray} from "../checkboxes/CheckboxMonths";
import {accessAll} from "../../lib/ReduceAccessor";

const ApexRadarChart = ({months, person, validity, sellType}) => {
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
		legend: {
			position: 'top',
			horizontalAlign: 'center'
		},
		chart: {
			height: 350,
			type: 'radar',
			dropShadow: {
				enabled: true,
				blur: 1,
				left: 1,
				top: 1
			}
		},
		fill: {
			opacity: 0.4
		},
		labels: monthArray
	};

	const chart = <ReactApexChart options={options} series={series} type="radar" width={"100%"} height={"100%"}/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(ApexRadarChart);
